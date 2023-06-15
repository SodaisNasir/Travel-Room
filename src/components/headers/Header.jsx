import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import { Font } from '../../utils/fonts';

const Header = props => {
  return (
    <View style={{height: verticalScale(210), backgroundColor: Colors.Main}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2}}>
          <View
            style={{
              height: verticalScale(90),
              width: scale(180),
              alignItems: 'center',
              justifyContent: 'center',
              //   backgroundColor: 'yellow',
              alignSelf: 'center',
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../assets/images/travelicon.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-end',
            flex: 1,
            paddingBottom: moderateScale(10),
          }}>
          <View
            style={{
              height: verticalScale(35),
              width: scale(75),

              alignItems: 'flex-end',
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../assets/images/cross_icon.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={{paddingHorizontal:moderateScale(25)}}>
        <View>
          <Text style={{fontFamily:Font.Campton700,fontSize:scale(20),color:Colors.White}}>{props.title}</Text>
        </View>

        <View style={{paddingVertical:verticalScale(25)}}>
        <Text style={{fontFamily:Font.Campton500,fontSize:scale(14),color:Colors.White}}>{props.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
