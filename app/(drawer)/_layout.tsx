import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';

export default function Drawer_Layout() {

  return (
    <Drawer>
      <Drawer.Screen
        name='(tabs)' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Pedidos', // This just make sense ! we cannot remove it so we might just use it.
          title: 'PEDIDOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
          drawerLabelStyle: {
            // color: 'pink', // style it to make it standout from the rest items.
          },
        }}
      />

      <Drawer.Screen
        name='index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Sincronización',
          title: 'SINCRONIZACIÓN',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name='DrawerTwo' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Productos',
          title: 'PRODUCTOS',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name='Configuracion'
        options={{
          drawerLabel: 'Configuración',
          title: 'CONFIGURACIÓN',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign name="pptfile1" size={24} color="black" />
          ),
        }}
      />
    </Drawer>
  );
}
