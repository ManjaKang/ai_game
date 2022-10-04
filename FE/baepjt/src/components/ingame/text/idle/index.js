import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

function IngameTextIdle() {
  const fadeanim = useRef(new Animated.Value(1)).current;

  const loopanim = Animated.timing(fadeanim, {
    toValue: 0,
    duration: 1800,
    useNativeDriver: true,
  }).start(() => {
    Animated.timing(fadeanim, {
      toValue: 1,
      duration: 1800,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeanim, {
        toValue: 0,
        duration: 1800,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(fadeanim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }).start(() => {
          Animated.timing(fadeanim, {
            toValue: 0,
            duration: 1800,
            useNativeDriver: true,
          }).start();
        });
      });
    });
  });

  useEffect(() => {
    loopanim;
  }, []);

  return (
    <View style={styles.view}>
      <Animated.View
        style={[
          styles.animatedview,
          {
            opacity: fadeanim,
          },
        ]}>
        <Text style={styles.text}>조사 진행중..</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '23%',
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  height: {
    width: '12%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
  },
});

export default IngameTextIdle;
