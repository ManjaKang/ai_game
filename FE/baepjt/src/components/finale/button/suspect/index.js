import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

function FinaleButtonSuspect(props) {
    const Count = props.count;
    const calcButtonWidth = (C) => {
        return `${100/(C+1)}%`
    }
    const activeFunc = () => {
        console.log("클릭확인",props.index);
        console.log(props.dialogIndex);
        props.goFunc(props.dialogIndex);
    }
    return (
        <TouchableOpacity style={Fstyles(calcButtonWidth(Count)).button} onPress={activeFunc}>
            <Image style={styles.img} source={props.img} />
        </TouchableOpacity>
    )
}

const Fstyles = (width) => StyleSheet.create({
    button: {
        width: width,
        aspectRatio: 1,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        borderRadius: 1000,
        backgroundColor: 'rgba(192,192,192,1)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const styles = StyleSheet.create({
    text: {
        color: 'gray',
    },
    img: {
        width: '75%',
        height: '75%',
    }
})

export default FinaleButtonSuspect;