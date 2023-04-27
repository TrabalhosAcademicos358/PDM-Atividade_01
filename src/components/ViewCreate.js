import { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles, colors } from '../styles.js';

import Button from "./Button.js"

export default function ViewCreate({ handleCreate }) {
    const [name, setName] = useState();
    return (
        <View style={styles.cardView}>
            <TextInput 
                style={styles.box} 
                placeholder="Nome do participante" 
                placeholderTextColor={colors.secondary}
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