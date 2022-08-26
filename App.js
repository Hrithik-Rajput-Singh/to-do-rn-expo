import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { Goalitem } from "./component/Goalitem";
import { Goalinput } from "./component/Goalinput";


export default function App() {

  const [adding, setAdding] = useState([])
  const [modalVisible, setModalVisible] = useState(false);

  const addHandler = (enteringGol) => {
    setAdding((alladd) => {
      return(
        [...alladd, {id: Math.random().toString(), value: enteringGol}] //we are making here key by making it save as key and there value like key: object
      )
    })
    setModalVisible(false)    //to make modal false when we add 
  }

  const handleDelete = (goalId) => {
    setAdding(alladd => {
      return alladd.filter((goal) => goal.id !== goalId)
    });
  }

  const canceling = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
        <Button title="Add your goal" onPress = {() => setModalVisible(true)}/>
        <Goalinput addHandler={addHandler} visible={modalVisible} cancel={canceling}/>
        <FlatList 
        keyExtractor = {(item , index) => item.id}
        data={adding} 
        renderItem={itemData => ( 
        <Goalitem goals={itemData.item.value}  id={itemData.item.id} onDelete={handleDelete}/>
        )}/> 
    </View>
    // flat list take 2 paemeter when is data where we have to put what data we want to map second is render ,itemdata.item came here because it has 3 property index item seprater 
    // and we are adding vallue here because now our item has key, value so we have to specify value
    //keyextractor take 2 arugment item and index
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    // alignItems: 'center',
    // justifyContent: "center",
  },
}); 
