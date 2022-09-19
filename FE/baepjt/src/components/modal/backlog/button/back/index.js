import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function ModalBacklogButtonBack(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setter(false)}>
            <Text>뒤로가기</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        width: 100,
        height: 30,
        top: "5%",
        right: "1%",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default ModalBacklogButtonBack;