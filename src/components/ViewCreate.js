import { View, TextInput, Alert } from 'react-native';
import { styles } from '../styles.js';

import Button from "./Button.js"
import { useState } from 'react';

export default function ViewCreate({ handleCreate }) {
    const [name, setName] = useState();
    return (
        <View style={styles.cardView}>
            <TextInput 
                style={styles.box} 
                placeholder="Nome do participante" 
                placeholderTextColor="#6B6B6B"
                onChangeText={key => setName(key)}
                value={name}
            />
            <Button name="add-outline" callback={() => {
                handleCreate(name);
                setName("");
            }} />
        </View>
    )
}