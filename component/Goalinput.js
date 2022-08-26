import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';


export const Goalinput =({addHandler, visible, cancel})  => {
    const[enterGoals, setEnterGoal] = useState("")

    const addGoals = () =>{
        addHandler(enterGoals)
        setEnterGoal("")
    }

    return(
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="kick start your day" value={enterGoals} onChangeText={(savingText) => setEnterGoal(savingText)}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel"  onPress={() => cancel()} color = "red"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoals}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        padding: 30,
        borderColor: 'black',
        width: '80%',
        borderWidth: 1,
        marginBottom: 10,
      },
      buttonContainer: {
          width: '60%',
          flexDirection: 'row',
          justifyContent: "space-around",
      },
      button: {
          width: '30%'
      },
})