import { View, Text } from "react-native";

import Button from "./Button.js"

import { styles } from "../styles.js";

export default function Participants({ name }) {
    return (
        <View style={styles.cardView}>
            <Text style={styles.input}>{ name }</Text>
            <Button name="remove-outline" color="#E23C44" />
        </View>
    )
}