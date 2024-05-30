import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { List, Text, Icon, MD3Colors, DataTable, SegmentedButtons } from 'react-native-paper';
import { useStorageState } from "@/utils/storage-utils";

import { useSQLiteContext } from "expo-sqlite/next";
import { getDataAPI } from '@/services/fetch.service';

export default function Sincronizacion() {
  const [visible, setVisible] = React.useState(false);
  const [[isLoading, session], setSession] = useStorageState("session");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [options, setOptions] = React.useState('');
  const [dbLoaded, setDbLoaded] = React.useState<boolean>(false);
  const [transactions, setTransactions] = React.useState<any[]>([]);

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData() {
    const result = await db.getAllAsync<any>(
      `SELECT * FROM Mesas;`
    );
    setTransactions(result);
    console.log('Mesas: ', transactions);
  }

  async function insertTransaction(data: any) {
    if (!Array.isArray(data)) {
      console.error("Error: data is not an array");
      return;
    }

    try {
      await db.withTransactionAsync(async () => {
        await db.runAsync(`DELETE FROM Mesas`);

        for (const mesa of data) {
          await db.runAsync(
            `
            INSERT INTO Mesas (cambio, created_at, estado, id_forma_pago, id_tercero, libre, nombre, recibido, subtotal, total) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `,
            [
              mesa.cambio,
              mesa.created_at,
              mesa.estado,
              mesa.id_forma_pago,
              mesa.id_tercero,
              mesa.libre,
              mesa.nombre,
              mesa.recibido,
              mesa.subtotal,
              mesa.total
            ]
          );
        }
        await getData();
      });
    } catch (error) {
      console.error("Error inserting transactions:", error);
    }
  }

  const handleOptionsChange = (newValue) => {
    setOptions(newValue);
    executeFunctionBasedOnOption(newValue);
  };

  const executeFunctionBasedOnOption = (value) => {
    switch (value) {
      case 'general':
        console.log('Valor seleccionado: General');
        break;
      case 'productos':
        console.log('Valor seleccionado: Productos');
        break;
      case 'mesas':
        console.log('Valor seleccionado: Mesas');
        console.log('session: ', session);
        getDataAPI('mesas?selectAll', 'bares', {'apiKey': session})
        .then(data => {
          console.log('data: ', data);
          insertTransaction(data.data);
        });
        break;
      default:
        console.log('Opción no reconocida');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, paddingHorizontal:30 }}>
      <Text style={{ textAlign: 'justify' }}>Sincronizar la información de tu aplicación con los datos almacenados en la nube. Esta sincronización te permite mantener la información actualizada según tus necesidades. Selecciona la opción deseada para comenzar.</Text>
      </View>
      <SegmentedButtons
        style={{ marginTop: 50, paddingHorizontal:30 }}
        value={options}
        onValueChange={handleOptionsChange}
        buttons={[
          {
            value: 'general',
            label: '1. General',
          },
          {
            value: 'productos',
            label: '2. Productos',
          },
          { value: 'mesas',
            label: '3. Mesas' },
        ]}
      />
      <DataTable style={{ marginTop: 50 }}>
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 1, justifyContent: 'center', width:10 }}>
          <Icon
            source="camera"
            color={MD3Colors.primary0}
            size={20}
          />
          </DataTable.Cell>
          <DataTable.Cell style={{ flex: 2 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={{ textAlign: 'left' }}>Familias</Text>
              <Text style={{ color: 'gray', textAlign: 'left', marginTop: 0 }}>16/05/2024 9:58:11 a.m.</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 1}}>
              <Text>20</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <ScrollView>
      {transactions.map((transaction, index) => (
        <View key={index} style={{ paddingHorizontal:30 }}>
          <Text>Nombre: {transaction.nombre}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});