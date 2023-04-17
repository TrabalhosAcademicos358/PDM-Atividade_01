import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './src/styles.js';

import Header from './src/components/Header.js';
import ViewCreate from './src/components/ViewCreate.js';
import ViewParticipant from "./src/components/ViewParticipant.js"
import ModalCustom from './src/components/ModalCustom.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [objUser, setObjUser] = useState({
    name: "",
    id: ""
  })
  // const [name, setName] = useState("");
  const [listParticipant, setListParticipant] = useState([
    "fabio abrantes", 
    "lorram queiroga", 
    "David gonçalves", 
    "Neymar cai cai",
  ]);

  function createFromList(name) {
    setListParticipant([ ...listParticipant, name ]);
  }

  function deleteFromList(indexDel) {
    const newList = listParticipant.filter((item, index) => index !== indexDel);
    setListParticipant(newList);
  }

  function changeModal(name, id) {
    setModalVisible(!modalVisible)
    setObjUser({ name, id })
  }

  return (
    <View style={styles.container}>
      <Header />
      <ViewCreate handleCreate={createFromList} />
      <ViewParticipant list={listParticipant} handleModal={changeModal} /> 
      <ModalCustom handleDelete={deleteFromList} visible={modalVisible} user={objUser} changeModal={changeModal} />
    </View>
  );
}