import React from 'react';
import { Drawer } from 'expo-router/drawer';

export default function Drawer_Layout() {

  return (
    <Drawer>
      <Drawer.Screen
        name='(tabs)' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Pedidos', // This just make sense ! we cannot remove it so we might just use it.
          title: 'Pedidos',
          drawerLabelStyle: {
            // color: 'pink', // style it to make it standout from the rest items.
          },
        }}
      />

      <Drawer.Screen
        name='index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Sincronización',
          title: 'Sincronización',
        }}
      />
      <Drawer.Screen
        name='DrawerTwo' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Productos',
          title: 'Productos',
        }}
      />
    </Drawer>
  );
}
