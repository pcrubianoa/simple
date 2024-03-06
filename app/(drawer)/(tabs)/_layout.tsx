import { Tabs } from 'expo-router';
import { Feather, EvilIcons, SimpleLineIcons, MaterialIcons, AntDesign  } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='mesas'
        options={{
          title: 'Mesas',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="team" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Productos',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="tago" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={24} color="black" />
          )
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
