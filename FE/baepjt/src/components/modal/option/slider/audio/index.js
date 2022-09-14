import React from "react";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

function ModalSliderAudio (props) {
    return (
        <Slider style={styles.slider}
        />
    )
}

const styles = StyleSheet.create({
    slider: {
        minHeight:30,
        height:"15%",
        minWidth:400,
        width:"80%"
    }
})

export default ModalSliderAudio;