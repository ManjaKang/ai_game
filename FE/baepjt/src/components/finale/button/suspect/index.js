import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

function FinaleButtonSuspect(props) {
    const Count = props.count;
    const calcButtonWidth = (C) => {
        return `${100/(C+1)}%`
    }
    function activeFunc(bool) {
        console.log("클릭확인",props.index);
        console.log(props.dialogIndex[bool]);
        props.goFunc(props.dialogIndex[bool]);
    }
    return (
        props.suspectList.value == false ?
        (<TouchableOpacity style={Fstyles(calcButtonWidth(Count)).closeButton} onPress={()=>activeFunc(0)}>
        <Image style={styles.imgClose} source={props.img} />
        </TouchableOpacity>)
        : (props.trsus==props.sc ?
            (<TouchableOpacity style={Fstyles(calcButtonWidth(Count)).button} onPress={()=>activeFunc(props.trueendcode)}>
            <Image style={styles.img} source={props.img} />
            </TouchableOpacity>)
            : (<TouchableOpacity style={Fstyles(calcButtonWidth(Count)).button} onPress={()=>activeFunc(1)}>
            <Image style={styles.img} source={props.img} />
            </TouchableOpacity>))
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
    },
    closeButton: {
        width: width,
        aspectRatio: 1,
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        borderRadius: 1000,
        backgroundColor: 'rgba(64,64,64,1)',
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
    },
    imgClose: {
        width: '75%',
        height: '75%',
    }
})

export default FinaleButtonSuspect;