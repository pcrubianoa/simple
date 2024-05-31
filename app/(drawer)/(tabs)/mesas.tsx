import * as React from 'react';
import { StyleSheet } from 'react-native';

import { router, useNavigation } from 'expo-router';
import { Text, View, FlatList, Pressable } from 'react-native';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';
import { useSQLiteContext } from "expo-sqlite/next";

import { Link } from 'expo-router';

import { Button } from 'react-native-paper';
import { Avatar, Card } from 'react-native-paper';

export default function TabMesasScreen() {
  const navigation = useNavigation();
  const db = useSQLiteContext();
  const [mesas, setMesas] = React.useState<any[]>([]);

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await selectMesas();
    });
  }, [db]);

  async function selectMesas() {
    const result = await db.getAllAsync<any>(
      `SELECT * FROM Mesas;`
    );
    setMesas(result);
    console.log('result: ', result);
  }

  type ItemProps = {
    title: string,
    id: number,
    libre: string,
    total: string
  };

  const handlePress = (i) => {
    console.log(i.value);
  };

  const Item = ({title, id, libre, total}: ItemProps) => (
    <Link
      style={{ margin:5 }}
      href={{
        pathname: "/nested/[param]",
        params: { param: id }
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text>$ {total}</Text>
        <Text>{libre ? 'OCUPADA' : 'LIBRE'}</Text>
      </View>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTA DE MESAS</Text>
      <FlatList
        data={mesas}
        numColumns={3}
        renderItem={({item}) => <Item title={item.nombre} id={item.id} libre={item.libre} total={item.total}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      {/* <Button title='Open Modal' color='white' onPress={() => router.push('/modal')} />
      <Button title='Toggle Drawer' color='white' onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
    //justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    width: 140,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: '#ddd',
    // shadowOpacity: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
