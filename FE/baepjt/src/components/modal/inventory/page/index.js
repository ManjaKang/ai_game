import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Modal, StyleSheet, View, Text } from "react-native";
import ModalInventoryButtonBack from "../button/back";
import ModalInventoryCard from "../card";

function ModalInventory(props) {
    
    console.log(props)
    const [selectedItem,setSelectedItem] = useState(0);
    return (
        // <Modal style={styles.modal}
        // visible={props.visible}
        // animationType={"fade"}
        // hideModalContentWhileAnimating={props.hideModalContentWhileAnimating}
        // transparent={true}
        // >
        //     <View style={styles.full}>
        //         <View style={styles.view}>
        //             <View style={styles.left}>
        //                 <Text>레프트!</Text>
        //             </View>
        //             <View style={styles.right}>
        //                 <Text>라이트!</Text>
        //             </View>
        //             {/* <ModalInventoryButtonBack setter={props.setter}/> */}
        //         </View>
        //     </View>
        // </Modal>
        props.visible && (
            <View style={styles.full}>
                <View style={styles.view}>
                    <View style={styles.left}>
                        <View style={styles.buttontab}>
                            <TouchableOpacity style={styles.tab}><Text>정보</Text></TouchableOpacity>
                            {/* <TouchableOpacity style={styles.tab}><Text>사진</Text></TouchableOpacity> */}
                        </View>
                        <View style={styles.document}>
                            <Text>내용!</Text>
                            {
                                props.item && (
                                    <Text>{props.item[selectedItem]}</Text>
                                )
                            }
                        </View>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.itembox}>
                            <View style={styles.cssbox}>
                                {/* 테스트용 부분입니다. 이미지를 넣으면 아래부분은 제거할것 */}
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                                <View style={styles.grid} />
                            </View>
                            {props.items && (
                                props.items.map((I) => (
                                    <ModalInventoryCard item={I}/>
                                ))
                            )}
                        </View>
                    </View>
                    <ModalInventoryButtonBack setter={props.setter}/>
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    modal: {
    },
    full: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: "80%",
        height: "80%",
        backgroundColor: 'rgba(192,192,192,1)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    left: {
        backgroundColor: 'rgba(255,0,0,1)',
        flex: 1,
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        backgroundColor: 'rgba(0,255,0,1)',
        flex: 1,
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    document: {
        width: "80%",
        height: "70%",
        backgroundColor: "rgba(255,255,255,1)",
    },
    buttontab: {
        flexDirection: "row",
        width: "80%",
    },
    tab: {
        backgroundColor: "rgba(255,255,255,1)",
        marginHorizontal: 3,
    },
    itembox: {
        width: "80%",
        // height: "80%",
        aspectRatio: 1,
        // borderWidth: 3,
        // borderColor: 'red',
        flexDirection: 'row',
    },
    cssbox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // borderWidth:1,
        // borderColor: "black",
        flexWrap: "wrap",
    },
    grid: {
        width: "20%",
        // width: 20,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: 'black',
    },
})

export default ModalInventory;