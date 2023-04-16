import { Text, View } from 'react-native';

import { styles } from "../styles.js"

import Participants from "./Participants.js"

export default function ViewParticipant({ list }) {
    const element = list.length === 0? (
            <Text style={styles.paragraph}>
                Ninguém chegou no evento ainda? 
                Adicione participantes a sua lista de presença.
            </Text>
        ) : (
            <View style={{gap: 10}}>
                {list.map(name => <Participants name={name} />)}
            </View>
        );
    return (
        <View style={{ gap: 16 }}>
            <Text style={styles.titleSecondary}>Participants</Text>
            <View> 
                { element } 
            </View>
        </View>
    );
}