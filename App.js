import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/styles.js';

import Header from './src/components/Header.js';
import ViewCreate from './src/components/ViewCreate.js';
import ViewParticipant from "./src/components/ViewParticipant.js"
import ModalCustom from './src/components/ModalCustom.js';

export default function App() {
  const listParticipant = [
    "fabio abrantes", 
    "lorram queiroga", 
    "David gonçalves", 
    "Neymar cai cai"
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ViewCreate />
      <ViewParticipant list={listParticipant} />
      <ModalCustom />
      <StatusBar style="auto" />
    </View>
  );
}