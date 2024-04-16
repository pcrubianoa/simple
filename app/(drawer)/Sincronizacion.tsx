import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { List, Text, Icon, MD3Colors, DataTable } from 'react-native-paper';

export default function Sincronizacion() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);


  return (
    <View style={styles.container}>
      <View
        style={{
          paddingTop: 50,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button mode="contained" onPress={openMenu}>SINCRONIZAR</Button>}>
          <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Menu.Item onPress={() => {}} title="TODO" />
            <Menu.Item onPress={() => {}} title="PRODUCTOS" />
            <Divider />
            <Menu.Item onPress={() => {}} title="MESAS" />
          </View>
        </Menu>
      </View>
      <DataTable>
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 1, justifyContent: 'center' }}>
          <Icon
            source="camera"
            color={MD3Colors.error50}
            size={20}
          />
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ textAlign: 'left' }}>Familias</Text>
              <Text style={{ textAlign: 'left', marginTop: 5 }}>Segunda línea</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
              <Text style={{ textAlign: 'right' }}>20</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 1, justifyContent: 'center' }}>
          <Icon
            source="camera"
            color={MD3Colors.error50}
            size={20}
          />
          </DataTable.Cell>
          <DataTable.Cell>Productos</DataTable.Cell>
          <DataTable.Cell>200</DataTable.Cell>
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