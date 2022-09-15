import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Modal } from "react-native";
import ModalOptionButtonBack from "../button/back";
import ModalSliderAudio from "../slider/audio";
import ModalOptionTextAudio from "../text/audio";
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
                <ModalOptionButtonBack 
                setter={props.setter}
                />
                <ModalOptionTextAudio text="배경음" />
                <ModalSliderAudio />
                <ModalOptionTextAudio text="효과음" />
                <ModalSliderAudio />
                <ModalOptionTextAudio text="음성" />
                <ModalSliderAudio />
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