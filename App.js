import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './src/styles.js';

import Header from './src/components/Header.js';
import ViewCreate from './src/components/ViewCreate.js';
import ViewParticipant from "./src/components/ViewParticipant.js"
import ModalCustom from './src/components/ModalCustom.js';

export default function App() {
  const [listParticipant, setListParticipant] = useState([
    "fabio abrantes", 
    "fabio abrantes", 
    "lorram queiroga", 
    "lorram queiroga", 
    "David gonçalves", 
    "David gonçalves", 
    "David gonçalves", 
    "Neymar cai cai",
    "Neymar cai cai",
    "Neymar cai cai",
  ]);

  function deleteFromList(indexDel) {
    const newList = listParticipant.filter((item, index) => index !== indexDel);
    setListParticipant(newList);
  }

  return (
    <View style={styles.container}>
      <Header />
      <ViewCreate />
      <ViewParticipant list={listParticipant} handleDelete={deleteFromList} />
      <ModalCustom handleDelete={deleteFromList} />
      <StatusBar style="auto" />
    </View>
  );
}