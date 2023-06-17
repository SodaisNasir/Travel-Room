import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const StyledBox = props => {
  return (
    <View style={[props.Main]}>
      <View
        style={[
          {
            flexDirection: 'row',
            overflow: 'hidden',
            height: verticalScale(20),
            // width: '100%',
          },
          props.CurveSize,
        ]}>
        <View
          style={[
            {
              overflow: 'hidden',
              height: verticalScale(25),
              width: '96%',
              backgroundColor: Colors.InputColor,
              borderTopLeftRadius: scale(6),
            },
            props.UpperInnerBox,
          ]}></View>
        <View style={[styles.triangle, props.Triangle]}></View>
      </View>

      <View
        style={[
          {
            // height: verticalScale(190),
            width: '100%',
            backgroundColor: Colors.InputColor,
            paddingHorizontal: moderateScale(10),
            borderBottomLeftRadius: scale(6),
            borderBottomRightRadius: scale(6)
          },
          props.RestyleMainBox,
        ]}>
        {props.children}
      </View>
    </View>
  );
};

export default StyledBox;

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderRightColor: 'transparent',
    borderTopColor: Colors.InputColor,
    transform: [{rotate: '270deg'}],
  },

  // title: {
  //   fontFamily: Font.Campton700,
  //   fontSize: scale(18),
  //   color: Colors.Main,
  // },
  // date: {
  //   fontFamily: Font.CamptonBook,
  //   fontSize: scale(16),
  //   color: Colors.Black,
  // },
  // amount: {
  //   fontFamily: Font.CamptonBook,
  //   fontSize: scale(16),
  //   color: Colors.Black,
  // },
});
