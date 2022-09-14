import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Modal } from "react-native";
import ModalAccountButtonBack from "../button/back";
import ModalAccountButtonInventory from "../button/inventory";
import ModalAccountButtonLogout from "../button/logout";

function ModalAccount(props) {
    return(
        <Modal style={styles.modal}
        // isVisible={props.isVisible}
        visible={props.visible}
        animationType={"fade"}
        hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
        transparent={true}
        >
            <SafeAreaView style={styles.view}>
                <ModalAccountButtonBack
                setter={props.setter}
                />
                <ModalAccountButtonInventory />
                <ModalAccountButtonLogout />
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

export default ModalAccount;