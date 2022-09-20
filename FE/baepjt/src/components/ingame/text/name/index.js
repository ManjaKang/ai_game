import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function IngameTextName(props) {
  //   const [nameOrder, setNameOrder] = useState(0);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.dialog}</Text>
      {/* <Text style={styles.text}>{props.data.name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    width: '80%',
    height: '100%',
    fontSize: 22,
  },
});

export default IngameTextName;
