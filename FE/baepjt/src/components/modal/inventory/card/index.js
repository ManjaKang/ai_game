import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

function ModalInventoryCard(props) {
    console.log("itemnum:",props)
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>console.log(props)}>
            <Image></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        aspectRatio: 1,
        borderColor: 'white',
        borderWidth:1,
    }
})

export default ModalInventoryCard;