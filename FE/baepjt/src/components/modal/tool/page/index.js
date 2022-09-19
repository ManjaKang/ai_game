import React from "react";
import { StyleSheet, View } from "react-native";
import IngameButtonBacklog from "../../../ingame/button/backlog";
import IngameButtonCamera from "../../../ingame/button/camera";
import IngameButtonGotomain from "../../../ingame/button/gotomain";
import IngameButtonItems from "../../../ingame/button/items";

function ModalTool (props) {
    return (
            props.state && (
                <View style={styles.view}>
                    <IngameButtonGotomain setter={props.titlestate}/>
                    <IngameButtonCamera/>
                    <IngameButtonBacklog setter={props.backlogstate}/>
                    <IngameButtonItems/>
                </View>
            )
    )
}

const styles = StyleSheet.create({
    view: {
        // width: "15%",
        height: "100%",
        paddingHorizontal: "2%",
        backgroundColor: "rgba(255,255,255,1)",
        justifyContent: "flex-start",
        alignItems: "center"
    },
})

export default ModalTool;