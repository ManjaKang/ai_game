import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ModalBacklogButtonBack from '../button/back';
import ModalBacklogCard from '../card';

function ModalBacklog(props) {
  return (
    props.visible && (
      <View style={styles.FullView}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}>
          {props.data &&
            props.data.map((D, index) => (
              <ModalBacklogCard key={index} data={D} />
            ))}
        </ScrollView>
        <ModalBacklogButtonBack setter={props.setter} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  FullView: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'rgba(190,190,190,1)',
  },
});

export default ModalBacklog;
