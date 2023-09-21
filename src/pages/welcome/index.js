import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
   } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

import Logo from './assets/logo.png'


export default function Welcome(){
  const navigation = useNavigation()
  return(
    <View style={styles.container} >
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={ Logo }/>
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Entrar como:</Text>

        <TouchableOpacity 
          style={ styles.btnLogAlu}
          onPress={ () => navigation.navigate('alunoLogin')}
        >
          
          <Text style={styles.buttonText}>Aluno</Text>

        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.btnLogAdm}
          onPress={ () => navigation.navigate('admLogin')}
        >
          
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 300
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  btnLogAlu: {
    position: 'absolute',
    backgroundColor: '#1C1C1C',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLogAdm: {
    position: 'absolute',
    backgroundColor: '#1C1C1C',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})