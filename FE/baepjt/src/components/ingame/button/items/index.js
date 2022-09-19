import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function IngameButtonItems(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setter(true)}>
            <Text>인벤토리</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(192,192,192,0.4)",
        // width: "80%",
        height: "18%",
        marginTop: "15%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default IngameButtonItems;