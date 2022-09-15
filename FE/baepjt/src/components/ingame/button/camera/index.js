import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function IngameButtonCamera() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>카메라</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0,192,192,0.4)",
        // width: "80%",
        height: "18%",
        marginTop: "15%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default IngameButtonCamera;