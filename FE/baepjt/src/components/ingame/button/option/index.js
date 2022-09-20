import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function IngameButtonOption(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>props.setstate(true)}>
            <Icon
                name="volume-low"
                color="rgba(255,255,255,1)"
                size={30}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0,0,0,0.4)",
        borderRadius: 1000,
        // width: "fit"
        // height: width,
        height: "100%",
        aspectRatio: 1,
        position: "absolute",
        top: 2,
        left: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default IngameButtonOption;