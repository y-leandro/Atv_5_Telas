import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { FontAwesome } from '@expo/vector-icons'

export default function Treino({data, deleteItem}){
    return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.button} onPress={deleteItem}>
                <FontAwesome 
                    name="trash" size={20} color="#1c1c1c"
                />
            </TouchableOpacity>
            <Text>{data.item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 107, 183, 0.2)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row'
    },
    button: {
        marginRight: 8
    }
})