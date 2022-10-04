import React from "react";
import { View, StyleSheet } from "react-native";
import FinaleButtonSuspect from "../../button/suspect";

function FinaleModalSuspect (props) {
    return (
        (
            props.visible && (
                <View style={styles.bgview}>
                    <View style={styles.view}>
                        {
                            props.suspectcount && (
                                props.suspectcount.map((sc,index) => (
                                    <FinaleButtonSuspect
                                        count={props.count}
                                        index={sc}
                                        img={props.suspectImg[index]}
                                        dialogIndex={props.dialog[index]}
                                        goFunc={props.goFunc}
                                        close={props.close}
                                    />
                                ))
                            )
                        }
                    </View>
                </View> )
        )
    )
}

const styles = StyleSheet.create({
    bgview: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

export default FinaleModalSuspect;