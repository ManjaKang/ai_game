import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function IngameButtonToolbar(props) {
    return (
        <TouchableOpacity style={styles.button}
        onPress={()=>{props.setstate(!props.state)}}>
            <Icon
                name="bookmark"
                color="rgba(255,255,255,1)"
                size={30}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        // backgroundColor: "rgba(245,245,220,1)",
        backgroundColor: "rgba(0,0,0,0.4)",
        // borderColor: 'rgba(255,123,0,1)',
        // borderTopWidth: 1,
        // borderLeftWidth: 1,
        // borderBottomWidth: 1,
        height: "12%",
        aspectRatio: 0.6,
        top: "3%",
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default IngameButtonToolbar;