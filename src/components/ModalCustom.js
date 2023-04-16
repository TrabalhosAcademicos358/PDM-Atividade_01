import { useState } from 'react';
import { Modal, Alert, View, Text, Pressable } from 'react-native';
import { styles, stylesModal } from '../styles';

export default function ModalCustom() {
    const [modalVisible, setModalVisible] = useState(true);
    const name = "Fabio Abrantes";

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.containerCenter}>
                <View style={stylesModal.modalView}>
                    <View style={stylesModal.textView}>
                        <Text style={[stylesModal.text, stylesModal.textTitle]}>Remover</Text>
                        <Text style={stylesModal.text}>Remover o {name}?</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Pressable
                            style={[styles.button, stylesModal.button, stylesModal.buttonPrimary]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={stylesModal.textButton}>Não</Text>
                        </Pressable>

                        <Pressable
                            style={[styles.button, stylesModal.button, stylesModal.buttonSecondary]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={stylesModal.textButton}>Sim</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}