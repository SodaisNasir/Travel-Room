import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { Font } from '../../utils/fonts';

const CustomInput = props => {
  return (
    <View style={[styles.InputBox,props.RestyleBox]}>
      <TextInput
        // onFocus={props.onFocus}
        textContentType={props.textContentType}
        // value={field.value}
        // ref={ref}
        // onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.Grey}
        style={[styles.InputStyles, props.Gapp, props.RestyleText]}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        textAlignVertical={props.textAlignVertical}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={[styles.placeholderText,props.placeholderStyle]}
        // fontSize={scale(12)}
        maxLength={props.maxLength}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  InputStyles: {
    width: '100%',
    height: '100%',
    color: Colors.Black,
    // paddingHorizontal: moderateScale(5),
    fontFamily: Font.CamptonBook,
  },
  placeholderText:{
    // fontFamily
    fontFamily:Font.Campton700
  },
  InputBox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: verticalScale(20),
    width: '100%',
    paddingHorizontal: moderateScale(15),
    height: verticalScale(50),
    backgroundColor: Colors.InputColor,
    borderRadius: scale(4),
  },
});
