import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function AdmLogin() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={1}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </Animatable.View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>ID de ADM</Text>
        <TextInput placeholder="Digite sua ID" style={styles.input} />
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('admInicio')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ECF7E'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '8%',
    paddingStart: '5%'   
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 20,
    marginTop: 28
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  button:{
    backgroundColor: '#7ECF7E',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister: {
    marginTop: 14,
    alignItems: 'center'
  },
  registerText: {
  color: '#a1a1a1'
  }
})