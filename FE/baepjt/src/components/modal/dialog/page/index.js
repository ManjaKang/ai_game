import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import IngameTextDialog from "../../../ingame/text/dialog";
import IngameTextName from "../../../ingame/text/name";

function ModalDialog(props) {
    return (
        props.visible && (
        <View style={styles.modal}>
            <IngameTextName name={"이름공간"} />
            <IngameTextDialog dialog={"props.data가 들어갈 예정"} />
        </View>
        )
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: "rgba(192,192,192,1)",
        width: "100%",
        height: "30%",
        position: "absolute",
        bottom: 0,
        left: 0,
    }
})

export default ModalDialog;