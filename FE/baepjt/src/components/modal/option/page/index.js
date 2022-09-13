import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Modal } from "react-native";
import ModalOptionButtonBack from "../button/back";
function ModalOption(props) {
    return (
        <Modal style={styles.modal}
        // isVisible={props.isVisible}
        visible={props.visible}
        animationType={"fade"}
        hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
        transparent={true}
        >
            <SafeAreaView style={styles.view}>
                <Text>모달창</Text>
                <ModalOptionButtonBack />
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#999",
        margin: 40,
        opacity: 1,
    }
})

export default ModalOption;