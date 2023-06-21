import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import React from 'react';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.containerStyle, props.containerRestyle]}>
      <Text style={[styles.font, props.fontStyle]}>{props.text}</Text>
      {props.icon ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SimpleLineIcons
            name={props.iconName}
            size={scale(20)}
            style={{alignSelf: 'center', bottom: scale(10)}}
            color={Colors.Main}
          />
        </View>
      ) : null}

      {props.iconleft ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <SimpleLineIcons
            name={'arrow-left'}
            size={scale(20)}
            style={{alignSelf: 'center', bottom: scale(10)}}
            color={Colors.Main}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    alignSelf: 'center',
    backgroundColor: Colors.Black,
    height: verticalScale(52),
    // flexDirection: 'row',
  },

  font: {
    color: Colors.ThemeBlue,
    fontSize: scale(16),
    // textTransform: 'capitalize',
    fontFamily: Font.Campton700,
    color: Colors.White,
  },
});
