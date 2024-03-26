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
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'MESA 02',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'MESA 03',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145271e29d72',
      title: 'MESA 04',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145371e29d72',
      title: 'MESA 05',
    },
    {
      id: '58694a0f-3da1-471f-b96-145271e29d72',
      title: 'MESA 06',
    },
    {
      id: '5894a0f-3da1-471f-bd96-145371e29d72',
      title: 'MESA 07',
    },
    {
      id: '58694a0f-3da1-471f-b6-145271e29d72',
      title: 'MESA 08',
    },
    {
      id: '5894a0f-3d1-471f-bd96-145371e29d72',
      title: 'MESA 09',
    },
    {
      id: '58694a0f-3da1-471f-b6-14271e29d72',
      title: 'MESA 10',
    },
    {
      id: '5894a0f-31-471f-bd96-145371e29d72',
      title: 'MESA 11',
    },
    {
      id: '58694a0f-3da1-471f-b6-4271e29d72',
      title: 'MESA 12',
    },
    {
      id: '5894a0f-31-71f-bd96-145371e29d72',
      title: 'MESA 13',
    },
    {
      id: '5869a0f-3da1-471f-b6-4271e29d72',
      title: 'MESA 14',
    },
    {
      id: '5894a0-31-71f-bd96-145371e29d72',
      title: 'MESA 15',
    },
    {
      id: '58694a0f-3da1-471f-b6-4271e29d72',
      title: 'MESA 16',
    },
    {
      id: '5894a0f-31-71f-bd96-145371e29d72',
      title: 'MESA 17',
    },
    {
      id: '5869a0f-3da1-471f-b6-4271e29d72',
      title: 'MESA 18',
    },
    {
      id: '5894a0-31-71f-bd96-145371e29d72',
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
        renderItem={({item}) => <Item title={item.title} />}
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
