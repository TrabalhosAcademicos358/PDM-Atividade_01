import { useState } from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { styles, stylesModal } from '../styles';

export default function ModalCustom() {
    const [modalVisible, setModalVisible] = useState(false);
    const name = "Fabio Abrantes";

    const colorBG = "#131016CC";
    const [colorPage, setColorPage] = useState(colorBG);

    function changeColor() {
        const newColor = colorPage === colorBG ? "transparent" : colorBG;
        setColorPage(newColor);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
                changeColor()
            }}>
            <View style={[styles.containerCenter, { backgroundColor: colorPage }]}>
                <View style={stylesModal.modalView}>
                    <View style={stylesModal.textView}>
                        <Text style={[stylesModal.text, stylesModal.textTitle]}>Remover</Text>
                        <Text style={stylesModal.text}>Remover o {name}?</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Pressable
                            style={[styles.button, stylesModal.button, stylesModal.buttonPrimary]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                changeColor()
                            }}
                        >
                            <Text style={stylesModal.textButton}>Não</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, stylesModal.button, stylesModal.buttonSecondary]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                changeColor()
                            }}
                        >
                            <Text style={stylesModal.textButton}>Sim</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}