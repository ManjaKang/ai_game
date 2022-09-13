import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Category extends Component {
  render() {
    return (
      <View
        Style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#dddddd',
        }}>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{
              borderWidth: 3,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 100,
              height: 100,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}>
            <Text style={{color: 'black', fontSize: 20}}>
              {this.props.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Category;
