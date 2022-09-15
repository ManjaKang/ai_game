import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function IngameButtonToolbar(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>{props.setstate(!props.state)}}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: "rgba(255,255,255,1)",
        height: "12%",
        aspectRatio: 0.5,
        top: "3%",
        right: 0,
    }
})

export default IngameButtonToolbar;