import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

function IngameBarLoading() {
    return (
        <View style={styles.box}>
            <Progress.Bar
            style={styles.bar}
            indeterminate={true}
            width={100}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar:{
        color: 'rgba(182,182,255,100)',
    },
})

export default IngameBarLoading;