import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

function IngameButtonOption(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setstate(true)}>
            <Image></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(255,255,255,1)",
        // width: "fit"
        // height: width,
        height: "100%",
        aspectRatio: 1,
        position: "absolute",
        top: 0,
        left: 0,
    },
})

export default IngameButtonOption;