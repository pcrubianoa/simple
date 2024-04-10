import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { List, Text, Icon, MD3Colors } from 'react-native-paper';

export default function DrawerOne() {
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
      <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
        <Icon
          source="tag-outline"
          color={MD3Colors.error50}
          size={20}
        />
        </View>
        <View>
          <Text>Confiuración</Text>
          <Text style={{ fontSize: 12 }}>Tablas comunes</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text>12</Text>
        </View>
      </View>
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