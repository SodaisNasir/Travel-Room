import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import CustSwitch from '../Switch/CustSwitch';

const AutoRenewal = props => {
  return (
    <View style={styles.RedBox}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom:verticalScale(5),
        }}>
        <Text style={styles.Heading}>Enable auto-renewal</Text>
        <CustSwitch />
      </View>
      <View style={{marginBottom:verticalScale(10)}}>
        <Text style={styles.Details}>{props.details}</Text>
      </View>
    </View>
  );
};

export default AutoRenewal;

const styles = StyleSheet.create({
  RedBox: {
    height: verticalScale(140),
    backgroundColor: Colors.Main,
    marginBottom: verticalScale(15),
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(20),
    borderBottomLeftRadius:scale(6),
    borderBottomRightRadius: scale(6)
  
    // justifyContent:'center'
  },
  Heading: {
    fontFamily: Font.Campton700,
    color: Colors.White,
    fontSize: scale(12),
  },
  Details: {
    fontFamily: Font.CamptonBook,
    color: Colors.White,
    fontSize: scale(12),
  },
});
