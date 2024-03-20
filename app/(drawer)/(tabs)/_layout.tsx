import { useState } from 'react';
import { Tabs, useSegments } from 'expo-router';
import { Feather, EvilIcons, SimpleLineIcons, MaterialIcons, AntDesign  } from '@expo/vector-icons';

export default function TabLayout() {
  
  const segment = useSegments();
  // console.log(segment[2]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1973e7",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          height: 55,
          // borderWidth: 1,
          // borderRadius: 50,
          // borderTopEndRadius: 15,
          // borderTopStartRadius: 15,
          // backgroundColor: '#1973e7',
          },
      }}
    >
      <Tabs.Screen
        name='mesas'
        options={{
          title: 'Mesas',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name={segment[2] === "mesas" ? "appstore1" : "appstore-o"} size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          title: 'Productos',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name={segment[2] === undefined ? "tags" : "tagso"} size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={26} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold'
          },
        }}
      />
      <Tabs.Screen
        name='configuracion'
        options={{
          title: 'Configuración',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={26} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
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
