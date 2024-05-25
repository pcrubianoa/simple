import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { List, Text, Icon, MD3Colors, DataTable, SegmentedButtons } from 'react-native-paper';

export default function Sincronizacion() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50, paddingHorizontal:30 }}>
      <Text style={{ textAlign: 'justify' }}>Sincronizar la información de tu aplicación con los datos almacenados en la nube. Esta sincronización te permite mantener la información actualizada según tus necesidades. Selecciona la opción deseada para comenzar.</Text>
      </View>
      <SegmentedButtons
        style={{ marginTop: 50, paddingHorizontal:30 }}
        value={value}
        onValueChange={setValue}
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