import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const UpperBox = props => {
  return (
    <View style={[styles.UpperBox,props.restyleUpperBox]}>
      <View
        style={{
          overflow: 'hidden',
          height: verticalScale(25),
          width: '96%',
          backgroundColor: Colors.White,
          borderTopLeftRadius: scale(8)
        }}></View>
      <View style={[styles.triangle,props.restyleTriangle]}></View>
    </View>
  );
};

export default UpperBox;

const styles = StyleSheet.create({
  UpperBox: {
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: Colors.Black,
    height: verticalScale(20),
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderRightColor: 'transparent',
    borderTopColor: Colors.White,
    transform: [{rotate: '270deg'}],
  },
});
