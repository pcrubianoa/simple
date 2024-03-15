import { Tabs } from 'expo-router';
import { Feather, EvilIcons, SimpleLineIcons, MaterialIcons, AntDesign  } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          // borderWidth: 1,
          // borderRadius: 50,
          // borderTopEndRadius: 10,
          // borderTopStartRadius: 10,
          //backgroundColor: '#1973e7',
          },
      }}
    >
      <Tabs.Screen
        name='mesas'
        options={{
          title: 'Mesas',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="team" size={26} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Productos',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="tago" size={26} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={26} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='configuracion'
        options={{
          title: 'Configuración',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={26} color="black" />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'black',
            fontWeight: 'bold'
          },
        }}
      />
      {/* === Excluded Screebs from bottom tabs === href: null */}
      <Tabs.Screen
        name='nested'
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
