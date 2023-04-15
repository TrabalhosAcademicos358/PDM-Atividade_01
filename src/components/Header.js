import { Text, View } from 'react-native';
import { styles } from '../styles.js';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Nome do Evento</Text>
            <Text style={styles.date}>Sexta, 4 de Novembro de 2022.</Text>
        </View>
    )
}