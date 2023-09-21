import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native"
import Treino from './scr/addTreino'
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'


export default function AlunoInicio() {

  const [treino, setTreino] = useState('')

  const [list, setList] = useState([])

  function handleAdd(){
    if(treino === ''){
      return
    }

    const dados = {
      key: Date.now(),
      item: treino,
    }

    setList(oldArray => [dados, ...oldArray])
    setTreino('')
    
  }

  function handleDelete(item){
    let filtroItem = list.filter((treino)=>{
      return (treino.item !== item)
    })
    setList(filtroItem)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Lista de treinos</Text>
      </View>

    <Animatable.View animation="fadeInUp" delay={0.1} style={styles.containerForm}>
      <View style = {styles.containerInput}>
        <TextInput
          placeholder="Digite seu treino..."
          style = {styles.input}
          value = {treino}
          onChangeText = { (text) => setTreino(text) }
        />
        <TouchableOpacity style = {styles.buttonAdd} onPress = {handleAdd}>
          <FontAwesome name='plus' size={28} color='#1c1c1c'/>
        </TouchableOpacity>
      </View>

        <FlatList
          data={list}
          keyExtractor={(item)=> item.key}
          renderItem={({item})=><Treino data={item} 
                      deleteItem={ () =>handleDelete(item.item) } />}
          style={styles.list}
        />
    </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006BB7'
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
    paddingTop: '3%',
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
    fontSize: 16,
    width: '85%'
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    marginBottom: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    backgroundColor: '#006BB7',
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