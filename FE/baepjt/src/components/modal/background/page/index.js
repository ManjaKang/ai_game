import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ModalBackground(props) {
    return (
        props.visible[props.data].value && (
        <View style={styles.view}>
            <View style={styles.screen}>
                <Text>{props.data}</Text>
            </View>
        </View>
        )
    )
}

const styles = StyleSheet.create({
    view: {  // width, height, justify, align 이외 값만 변경할것!
        width: "100%",
        height: "100%",
        borderColor: "red",
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {  // 실제적으로 보이는 범위! css 수정할것!
        width: "80%",
        height: "80%",
        backgroundColor: "gray",
    }
})

export default ModalBackground;