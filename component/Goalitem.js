import React from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export const Goalitem = ({goals , onDelete , id}) => {
    return(
        <TouchableOpacity onPress={() => onDelete(id)}>
          <View style={styles.listItem} ><Text >{goals}</Text></View>
        </TouchableOpacity>
    )
}

//{/* {adding.map((goals) => <View style={styles.listItem} key = {goals} ><Text >{goals}</Text></View>)} */}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
      }
})