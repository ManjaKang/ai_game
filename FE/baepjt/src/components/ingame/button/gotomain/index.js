import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function IngameButtonGotomain() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>타이틀로</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(192,0,192,0.4)",
        // width: "80%",
        height: "18%",
        marginTop: "15%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default IngameButtonGotomain;