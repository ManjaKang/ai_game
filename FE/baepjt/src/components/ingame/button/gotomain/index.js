import { useLinkProps } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ModalGotomain from "../../../modal/gotomain/page";
import Icon from "react-native-vector-icons/Ionicons";

function IngameButtonGotomain(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setter(true)}
        >
            <Icon style={styles.icon}
                name="log-out"
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    page: {
        width: "100%",
        height: "100%",
    },
    button: {
        // backgroundColor: "rgba(192,0,192,0.4)",
        borderColor: "rgba(192,192,192,1)",
        borderWidth: 1,
        // width: "80%",
        height: "18%",
        marginTop: "10%",
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: "rgba(255,255,255,1)",
        fontSize: 64,
    }
})

export default IngameButtonGotomain;