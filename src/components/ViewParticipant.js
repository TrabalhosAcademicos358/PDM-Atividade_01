import { Text, View } from 'react-native';

import { styles } from "../styles.js"

import Participants from "./Participants.js"

export default function ViewParticipant({ list }) {
    let element;
    if (list.length === 0) {
        element = (
            <Text style={styles.paragraph}>
                Ninguém chegou no evento ainda? 
                Adicione participantes a sua lista de presença.
            </Text>
        )
    }
    else {
        element = (
            <View style={{gap: 10}}>
                {list.map(name => <Participants name={name} />)}
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.titleSecondary}>Participants</Text>
            <View>
                {element}
            </View>
        </View>
    );
}