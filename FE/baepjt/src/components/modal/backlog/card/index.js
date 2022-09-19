import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ModalBacklogCard(props) {
    console.log("ModalBackLogCard!",props)
    return (
        <View style={styles.full}>
            {
                props.data.type == 0
                ? (
                    <View style={styles.left}>
                        <Text style={styles.nameplate}>{props.data.name}</Text>
                        <Text style={styles.textplate}>{props.data.text}</Text>
                        <View style={styles.leftImg}>
                            <Image
                            style={styles.img}
                            source={require('../../../../images/logo.png')}
                            />
                        </View>
                    </View>
                )
                : (
                    props.data.type == 1
                    ? (
                        <View style={styles.right}>
                            <Text style={styles.nameplate}>{props.data.name}</Text>
                            <Text style={styles.textplate}>{props.data.text}</Text>
                            <View style={styles.rightImg}>
                                <Image
                                style={styles.img}
                                source={require('../../../../images/logo.png')}
                                />
                            </View>
                        </View>
                    )
                    : (
                        props.data.type == 2
                        && (
                            <View style={styles.None}>
                                <Text style={styles.textplate}>{props.data.text}</Text>
                            </View>
                        )
                    )
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    full : {
        width: "100%",
        // height: 100,
        borderWidth: 1,
        borderColor: 'rgba(0,255,0,1)',
        marginVertical: 12,
    },
    nameplate : {
        width: "15%",
        minWidth: 50,
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 1,
        padding: 3,
        marginTop: 6,
        marginHorizontal: 25,
    },
    textplate : {
        width: "85%",
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 1,
        padding: 3,
        paddingTop: 15,
        height: 80,
    },
    img: {
        height: 50,
        width: 50,
        borderColor: 'rgba(255,255,0,1)',
        borderWidth: 1,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    left : {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: '8%',
    },
    right : {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: '8%',
    },
    leftImg : {
        position: 'absolute',
        top: 0,
        left: '4%',
    },
    rightImg : {
        position: 'absolute',
        top: 0,
        right: '4%',
    },
    None: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: '4%',

    },
    name1 : {
        color: 'red'
    },
    name2 : {
        color: 'blue'
    },
    text1 : {
        color: 'red',
    },
    text2 : {
        color: 'blue'
    }
})

export default ModalBacklogCard;