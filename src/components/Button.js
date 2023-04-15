import { TouchableOpacity } from 'react-native';
import { styles } from '../styles.js';

import { Ionicons } from "@expo/vector-icons";

export default function Search({ name, color = "#31CF67" }) {
    const styleButtom = {
        ...styles.button, 
        backgroundColor: color
    }
    return (
        <TouchableOpacity style={styleButtom}>
            <Ionicons name={name} size={24} color="#FFFFFF" />
        </TouchableOpacity>
    )
}