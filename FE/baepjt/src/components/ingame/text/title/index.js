import React from "react";
import { View, Text, StyleSheet } from "react-native";

function IngameTextTitle() {
    return(
        <View style={styles.title}>
            <Text style={styles.text}>챕터 이름이 여기 들어갑니다.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 27,
        margin: 8,
    }
})

export default IngameTextTitle;