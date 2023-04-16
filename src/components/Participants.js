import { View, Text } from "react-native";

import Button from "./Button.js"

import { styles } from "../styles.js";

export default function Participants({ name, index, handleDelete }) {
    return (
        <View style={styles.cardView}>
            <View style={styles.box}>
                <Text style={{ fontSize: 16, color: "#fff" }}>{ name }</Text>
            </View>
            <Button name="remove-outline" color="#E23C44" callback={() => handleDelete(index)} />
        </View>
    )
}