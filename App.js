import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/styles.js';

import Header from './src/components/Header.js';
import ViewCreate from './src/components/ViewCreate.js';
import ViewParticipant from "./src/components/ViewParticipant.js"

export default function App() {
  const listParticipant = ["fabio abrantes", "Marco"]
  // const listParticipant = []

  return (
    <View style={styles.container}>
      <Header />
      <ViewCreate />
      <ViewParticipant list={listParticipant} />
      <StatusBar style="auto" />
    </View>
  );
}