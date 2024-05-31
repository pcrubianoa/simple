import * as React from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
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
  const [mesas, setMesas] = React.useState<any[]>([]);
  const [productos, setProductos] = React.useState<any[]>([]);

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await selectMesas();
      await selectProductos();
    });
  }, [db]);

  async function selectMesas() {
    const result = await db.getAllAsync<any>(
      `SELECT * FROM Mesas;`
    );
    setMesas(result);
  }

  async function selectProductos() {
    const result = await db.getAllAsync<any>(
      `SELECT * FROM Productos;`
    );
    setProductos(result);
  }

  async function insertMesas(data: any) {
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
        await selectMesas();
      });
    } catch (error) {
      console.error("Error inserting transactions:", error);
    }
  }

  async function insertProductos(data: any) {
    if (!Array.isArray(data)) {
      console.error("Error: data is not an array");
      return;
    }

    try {
      await db.withTransactionAsync(async () => {
        await db.runAsync(`DELETE FROM Productos`);

        for (const producto of data) {
          await db.runAsync(
            `
            INSERT INTO Productos (actual, categoria, cod, compuesto_variable, estado, familia, garantia, id_categoria, id_familia, id_marca, imagen, index, marca, nombre, precio_venta, variable_id, ver) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
            `,
            [
              producto.actual,
              producto.categoria,
              producto.cod,
              producto.compuesto_variable,
              producto.estado,
              producto.familia,
              producto.garantia,
              producto.id_categoria,
              producto.id_familia,
              producto.id_marca,
              producto.imagen,
              producto.marca,
              producto.nombre,
              producto.precio_venta,
              producto.variable_id,
              producto.ver,
            ]
          );
        }
        await selectProductos();
      });
    } catch (error) {
      console.error("Error inserting transactions:", error);
    }
  }

  const handleOptionsChange = (value:any) => {
    let message = "";
    switch (value) {
      case 'general':
        message = "¿Seguro desea borrar todas las tablas y actualizar la información?";
        break;
      case 'productos':
        message = "¿Seguro desea borrar todos los productos y actualizar la información?";
        break;
      case 'mesas':
        message = "¿Seguro desea borrar todas las mesas y actualizar la información?";
        break;
    }
    Alert.alert(
      "Confirmación",
      message,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          setOptions(value);
          executeFunctionBasedOnOption(value);
        } }
      ]
    );
  };

  const executeFunctionBasedOnOption = (value:any) => {
    switch (value) {
      case 'general':

        break;
      case 'productos':
        getDataAPI('productos?selectAll',
        'bares',
        { 'apiKey': session,
          'fields': "precio_venta, familia, marca, imagen, categoria, actual",
          'filters': "estado:1",
          'group': "id"
        })
        .then(data => {
          console.log('data: ', data);
          insertProductos(data.data);
        });
        break;
      case 'mesas':
        getDataAPI('mesas?selectAll', 'bares', {'apiKey': session})
        .then(data => {
          insertMesas(data.data);
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
      {productos.map((mesa, index) => (
        <View key={index} style={{ paddingHorizontal:30, marginTop:10 }}>
          <Text>Nombre: {mesa.nombre}</Text>
          <Text>Total: {mesa.total}</Text>
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