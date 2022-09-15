import React from "react";
import { View, Text, StyleSheet } from "react-native";

function IngameTextDialog(props) {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.dialog}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
    },
    text: {
        width: "80%",
        height: "100%",
    }
})

export default IngameTextDialog;