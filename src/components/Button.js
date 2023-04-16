import { TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';

import { Ionicons } from "@expo/vector-icons";

export default function Button({ name, color = "#31CF67", callback, id }) {
    const styleButtom = {
        ...styles.button, 
        backgroundColor: color
    }
    return (
        <TouchableOpacity style={styleButtom} onPress={() => callback(id)}>
            <Ionicons name={name} size={24} color="#FFFFFF" />
        </TouchableOpacity>
    )
}