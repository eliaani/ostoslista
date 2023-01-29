import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput, FlatList} from 'react-native';
import { Button } from 'react-native';

const App = () => {
  const [tuote, setTuote] = React.useState();
  const [lista, setLista] = React.useState([]);

  const buttonPressed = () => {
    const temp = {id: tuote, title: tuote}
    setLista([...lista, temp])
  }
  const buttonPressed2 = () => {
    setLista([])
  }
  console.log(lista)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTuote}
        value={tuote}
        placeholder="Tuote"
      />
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
          <Button onPress={buttonPressed} title="ADD"/>
        </View>
        <View style={styles.button}>
          <Button onPress={buttonPressed2} title="CLEAR" />
        </View>
      </View>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList 
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
        />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttoncontainer: {
    padding: 16,
    gap: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button:{
    marginHorizontal: 10,
  },
  title:{
    color:"blue",
    fontWeight:"bold"
  }
});

export default App;