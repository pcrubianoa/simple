import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

export default function MesaDetails() {
  const { param } = useLocalSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesa {param}</Text>
      {/* <Text style={styles.title}>{param}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
