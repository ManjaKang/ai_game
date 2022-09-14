import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ModalAccountButtonBack(props) {
    return (
        <View style={styles.button}>
            <Button
            title="close"
            color={"rgba(180,90,90,0.7)"}
            onPress={()=>props.setter(false)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        top: 10,
        right: 10,
        position: "absolute",
    }
})

export default ModalAccountButtonBack;