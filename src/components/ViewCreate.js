import { View, TextInput } from 'react-native';
import { styles } from '../styles.js';

import Button from "./Button.js"

export default function Search() {
    return (
        <View style={styles.cardView}>
            <TextInput 
                style={styles.box} 
                placeholder="Nome do participante" 
                placeholderTextColor="#6B6B6B"
            />
            <Button name="add-outline" />
        </View>
    )
}