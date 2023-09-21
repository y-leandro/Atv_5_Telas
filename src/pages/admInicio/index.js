import React, {useState} from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native"
import Aluno from './scr/addAluno'
import { FontAwesome } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'


export default function AdmInicio() {

  const [aluno, setAluno] = useState('')

  const [list, setList] = useState([])

  function handleAdd(){
    if(aluno === ''){
      return
    }

    const dados = {
      key: Date.now(),
      item: aluno,
    }

    setList(oldArray => [dados, ...oldArray])
    setAluno('')
    
  }

  function handleDelete(item){
    let filtroItem = list.filter((aluno)=>{
      return (aluno.item !== item)
    })
    setList(filtroItem)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Adicionar alunos</Text>
        <View style = {styles.containerInput}>
        <TextInput
          placeholder="Digite o nome de um aluno.."
          style = {styles.input}
          value = {aluno}
          onChangeText = { (text) => setAluno(text) }
        />
        <TouchableOpacity style = {styles.buttonAdd} onPress = {handleAdd}>
          <FontAwesome name='plus' size={28} color='#1c1c1c'/>
        </TouchableOpacity>
      </View>
      </View>

      <Animatable.View animation="fadeInUp" delay={0.1} style={styles.containerForm}>
        <Text style={styles.title}>Lista de alunos:</Text>
        <FlatList
          data={list}
          keyExtractor={(item)=> item.key}
          renderItem={({item})=><Aluno data={item} 
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
    backgroundColor: '#7ECF7E'
  },
  containerHeader: {
    marginTop: '15%',
    marginBottom: '5%',
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
    marginTop: 25,
    marginBottom: 10
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    width: '90%'
  },
  containerInput: {
    flexDirection: 'row',
    height: 50,
    marginBottom: '0',
    marginTop: 8
  }
})