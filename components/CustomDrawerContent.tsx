import { Text, Pressable, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { View } from '@/components/Themed';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSession } from "@/context/authentication/authentication.context";
import { Feather, EvilIcons, SimpleLineIcons, AntDesign  } from '@expo/vector-icons';

export default function CustomDrawerContent(props:any) {
  const { signOut } = useSession();

  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ backgroundColor: '#1873e7', height: 120 }}>
        <Text style={{ marginTop: 50, paddingHorizontal: 20, color: 'white', fontSize: 20, fontWeight: 'bold' }}>BARES Y RESTAURANTES</Text>
        <Text style={{ marginTop: 0, paddingHorizontal: 20, color: 'white', fontSize: 20 }}>TERCERO AUXILIAR</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <Text style={{ paddingHorizontal: 20, color: 'gray' }}>Menú principal</Text>
        <DrawerItemList {...props}/>
        <Pressable style={{ padding: 20 }} onPress={
          async () => {
            if (confirm("¿Seguro desea salir?") == true) {
              await signOut();
            }
          }
          }>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <AntDesign name="logout" size={24} color="black" />
            <Text style={{ fontSize: 15, color: 'gray', paddingLeft: 28 }}>Cerrar Sesión</Text>
          </View>
        </Pressable>
      </DrawerContentScrollView>
      <Pressable style={{ padding: 20 }}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <Text style={{ fontSize: 12, color: 'gray' }}>Copyright @ Logis ERP 2024</Text>
         <Text style={{ fontSize: 12, color: 'gray' }}>Todos los derechos reservados</Text>
        {/* <View style={{ padding: 20 }}>
          <Image style={styles.stretch} source={require('../assets/images/logo.png')}/>
        </View> */}
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 100,
    height: 50,
    resizeMode: 'stretch',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
});