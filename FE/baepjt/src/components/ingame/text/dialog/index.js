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
        // height: "80%",
        flex: 3,
    },
    text: {
        width: "90%",
        height: "100%",
        fontSize: 18,
    }
})

export default IngameTextDialog;