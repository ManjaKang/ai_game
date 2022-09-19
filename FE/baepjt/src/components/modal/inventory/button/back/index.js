import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function ModalInventoryButtonBack (props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setter(false)}
        >
            <Text>뒤로가기</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        width: 100,
        height: "10%",
        top: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default ModalInventoryButtonBack;