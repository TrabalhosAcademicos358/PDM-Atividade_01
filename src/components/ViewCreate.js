import { View, TextInput } from 'react-native';
import { styles } from '../styles.js';

import Button from "./Button.js"

export default function Search() {
    return (
        <View style={styles.cardView}>
            <TextInput style={styles.input} placeholder="Nome de usuário" />
            <Button name="add-outline" />
        </View>
    )
}