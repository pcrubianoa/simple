import { Button, StyleSheet } from 'react-native';

import { router, useNavigation } from 'expo-router';
import { Text, View, FlatList, Pressable } from 'react-native';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';

import { Link } from 'expo-router';

export default function TabMesasScreen() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      title: 'MESA 01',
    },
    {
      id: 2,
      title: 'MESA 02',
    },
    {
      id: 3,
      title: 'MESA 03',
    },
    {
      id: 4,
      title: 'MESA 04',
    },
    {
      id: 5,
      title: 'MESA 05',
    },
    {
      id: 6,
      title: 'MESA 06',
    },
    {
      id: 7,
      title: 'MESA 07',
    },
    {
      id: 8,
      title: 'MESA 08',
    },
    {
      id: 9,
      title: 'MESA 09',
    },
    {
      id: 10,
      title: 'MESA 10',
    },
    {
      id: 11,
      title: 'MESA 11',
    },
    {
      id: 12,
      title: 'MESA 12',
    },
    {
      id: 13,
      title: 'MESA 13',
    },
    {
      id: 14,
      title: 'MESA 14',
    },
    {
      id: 15,
      title: 'MESA 15',
    },
    {
      id: 16,
      title: 'MESA 16',
    },
    {
      id: 17,
      title: 'MESA 17',
    },
    {
      id: 18,
      title: 'MESA 18',
    },
    {
      id: 19,
      title: 'MESA 19',
    },
  ];

  type ItemProps = {
    title: string,
    id: number
  };

  const handlePress = (i) => {
    console.log(i.value);
  };

  const Item = ({title, id}: ItemProps) => (
      <Pressable onPress={handlePress}>
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          {/* <AntDesign name="home" size={24} color="black"/> */}
          <Text>$ 24.000</Text>
          <Text>LIBRE</Text>
        </View>
        <Link
          href={{
            pathname: "/nested/[param]",
            params: { param: id }
          }}>
          View user
        </Link>
      </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Mesas</Text>
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({item}) => <Item title={item.title} id={item.id} />}
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
