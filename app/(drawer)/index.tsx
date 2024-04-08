import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
import { List, MD3Colors } from 'react-native-paper';

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
      <View>
      <List.Section>
        <List.Item
          title="First Item"
          right={() => <Text>12</Text>}
          left={() => <List.Icon icon="folder" />}
        />
        <List.Item
          title="Second Item"
          left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
        />
  </List.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
