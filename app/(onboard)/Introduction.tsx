import { Pressable, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";

import * as React from "react"
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router, Redirect } from "expo-router";
import { useSession } from "@/context/authentication/authentication.context";
import { useRef, useState } from "react";

import { useForm, Controller, SubmitHandler } from 'react-hook-form';

export default function Introduction() {
  const values = useSession();
  const { signIn } = useSession();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  type Inputs = {
    email: string,
    password: string
  }

  const { control, register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data)
      signIn(
        data.email,
        data.password
      );
  }

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={{width: 185, height: 80}} />
      <Text style={styles.title}>Hola, Bienvenido</Text>
      <Text style={styles.subTitle}>BARES Y RESTAURANTES</Text>
      <View style={{ marginTop: 5, marginBottom: 20 }}>
          <Text style={{ fontWeight: "500" }} >
            Ingresa a tu cuenta
          </Text>
      </View>
      <View>
          <Text style={styles.label}>Usuario</Text>
          <Controller
            defaultValue=""
            control={control}
            render={({field: {onChange, value}, }) => (
              <TextInput
              {...register("email")}
              placeholder="usuario.empresa"
              placeholderTextColor="lightgray"
              autoCapitalize="none"
              nativeID="email"
              onChangeText={(value) => {
                onChange(value);
                emailRef.current = value;
              }}
              style={styles.textInput}
              />
            )}
            name="email"
            rules={{ required: true }}
          />

        </View>
        {errors.email && <Text style={{color:'red', marginTop: -10}}>Usuario Requerido</Text>}
        <View>
          <Text style={styles.label}>Contraseña</Text>
          <Controller
            defaultValue=""
            control={control}
            render={({field: {onChange, value}, }) => (
          <TextInput
            placeholder="contraseña"
            placeholderTextColor="lightgray"
            secureTextEntry={true}
            nativeID="password"
            onChangeText={(value) => {
              onChange(value);
              passwordRef.current = value;
            }}
            style={styles.textInput}
          />
          )}
          name="password"
          rules={{ required: true }}
        />
        </View>
        {errors.password && <Text style={{color:'red', marginTop: -10}}>Clave Requerida</Text>}
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      <View style={{ marginTop: 32 }}>
          <Text
            style={{ fontWeight: "500" }}
            onPress={() => router.push("/sign-up")}
          >
            ¿No tienes una cuenta? Registrate
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  label: {
    marginBottom: 4,
    color: "#1973e7",
  },
  textInput: {
    width: 250,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#1973e7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1973e7",
    padding: 10,
    width: 250,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  contact: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});