import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ModalGotomain from "../../../modal/gotomain/page";

function IngameButtonGotomain(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setter(true)}
        >
            <Text>타이틀로</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    page: {
        width: "100%",
        height: "100%",
    },
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