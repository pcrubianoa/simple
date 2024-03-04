import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Introduction() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>Bienvenido</Text>
      <Text style={styles.paragraph}>Test Expo Router V3 - Drawer + Tabs</Text>
      <Button title='Ingresar' color='purple' onPress={()=> router.replace('/Welcome')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  display: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 38,
  },
  paragraph: {
    color: 'purple',
    fontSize: 14,
    marginBottom: 10
  },
});
