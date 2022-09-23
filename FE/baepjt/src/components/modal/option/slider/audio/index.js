import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import {useSelector, useDispatch} from "react-redux"
import { setValue } from "../../../../../redux/audio";

function ModalSliderAudio (props) {
    const sound = useSelector((state) => state.sound.value)
    const [value, setvalue] = useState(100)
    const dispatch = useDispatch()
    
    return (
        (
            props.sound == 'bgm' ? (
                <Slider style={styles.slider}
                onValueChange={value => setvalue(value)}
                onSlidingComplete={()=>dispatch(setValue({bgm:value, sfx:sound.sfx, voice:sound.voice}))}
                value={props.volume}
                // value={100}
                minimumValue={0}
                maximumValue={100}
                step={1}
                />
            )
            : (
                props.sound == 'sfx' ? (
                    <Slider style={styles.slider}
                    onValueChange={value => setvalue(value)}
                    onSlidingComplete={()=>dispatch(setValue({bgm:sound.bgm, sfx:value, voice:sound.voice}))}
                    value={props.volume}
                    // value={100}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    />
                ) : (
                    <Slider style={styles.slider}
                    onValueChange={value => setvalue(value)}
                    onSlidingComplete={()=>dispatch(setValue({bgm:sound.bgm, sfx:sound.sfx, voice:value}))}
                    value={props.volume}
                    // value={100}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    />
                )
            )
        )
    )
}

const styles = StyleSheet.create({
    slider: {
        minHeight:30,
        height:"15%",
        minWidth:400,
        width:"80%"
    }
})

export default ModalSliderAudio;