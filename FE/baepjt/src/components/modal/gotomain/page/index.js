import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

function ModalGotomain(props) {
    const navigation = useNavigation();
    return (
        <Modal style={styles.modal}
        visible={props.visible}
        animationType={"fade"}
        hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
        transparent={true}
        >
            <View style={styles.view}>
                <View style={styles.box}>
                    <Text style={styles.check}>정말로 나가시겠습니까?</Text>
                    <Text style={styles.sub}>저장되지 않습니다!</Text>
                    <View style={styles.boxset}>
                        <TouchableOpacity style={styles.ok}
                        onPress={()=>navigation.navigate('Main')}>
                            <Text>예!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.no}
                        onPress={()=>props.setter(false)}>
                            <Text>아니오!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
    },
    view: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "60%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    check: {
        fontSize: 18,
    },
    sub: {
        fontSize: 16,
    },
    boxset: {
        marginTop: 15,
        width: "100%",
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    ok: {
        backgroundColor: "rgba(200,0,0,1)",
        minWidth: 30,
        alignItems: "center",
    },
    no: {
        backgroundColor:"rgba(0,0,200,1)",
        minWidth: 30,
       alignItems: "center",
    }
})

export default ModalGotomain