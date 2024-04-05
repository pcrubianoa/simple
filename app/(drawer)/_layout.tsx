import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/CustomDrawerContent';

export default function Drawer_Layout() {

  return (
    <Drawer drawerContent={ CustomDrawerContent }>
      <Drawer.Screen
        name='(tabs)'
        options={{
          drawerLabel: 'Pedidos',
          title: 'TOMA DE PEDIDOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerStyle: {
            backgroundColor: '#1973e7',
          },
          headerTitleStyle: {
            color: 'white'
          },
          drawerLabelStyle: {
            //color: 'white',
          },
        }}
      />
      <Drawer.Screen
        name='index'
        options={{
          drawerLabel: 'Sincronización',
          title: 'SINCRONIZACIÓN',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="retweet" size={24} color="black" />
          ),
          headerStyle: {
            backgroundColor: '#1973e7',
          },
          headerTitleStyle: {
            color: 'white'
          },
        }}
      />
      <Drawer.Screen
        name='DrawerTwo'
        options={{
          drawerLabel: 'Productos',
          title: 'PRODUCTOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="tago" size={24} color="black" />
          ),
          headerStyle: {
            backgroundColor: '#1973e7',
          },
          headerTitleStyle: {
            color: 'white'
          },
        }}
      />
      <Drawer.Screen
        name='Configuracion'
        options={{
          drawerLabel: 'Configuración',
          title: 'CONFIGURACIÓN',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="setting" size={24} color="black" />
          ),
          headerStyle: {
            backgroundColor: '#1973e7',
          },
          headerTitleStyle: {
            color: 'white'
          },
        }}
      />
    </Drawer>
  );
}
