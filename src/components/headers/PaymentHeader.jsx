import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Font} from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const PaymentHeader = props => {

  const navigation = useNavigation()
  return (
    <View
      style={[
        {height: verticalScale(240), backgroundColor: Colors.Black},
        props.RestyleHeader,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(20),
        }}>
        <View style={{marginVertical:verticalScale(15)}}>
          <TouchableOpacity

          onPress = {()=> navigation.goBack()}
            style={{
              height: verticalScale(50),
              width: scale(75),
              alignItems: 'center',
              justifyContent: 'center',
         
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../assets/images/cancel.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={{marginTop:verticalScale(15)}}>
            <View>
              <Text
                style={{
                  fontFamily: Font.Campton600,
                  fontSize: scale(18),
                  color: Colors.White,
                }}>
                Holland
              </Text>
            </View>

            <View
              style={{flexDirection: 'row', marginVertical: verticalScale(10)}}>
              <View style={{height: verticalScale(25), width: scale(30)}}>
                <Image
                  source={require('../../assets/images/balloonsmall.png')}
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                />
              </View>

              <View
                style={{
                  marginLeft: moderateScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Campton600,
                    color: Colors.White,
                    fontSize: scale(12),
                  }}>
                  Vodafone
                </Text>
              </View>
            </View>

            <View style={{marginVertical:verticalScale(10)}}>
              <View>
                <Text
                  style={{
                    fontFamily: Font.Campton600,
                    fontSize: scale(18),
                    color: Colors.White,
                  }}>
                  Available:
                </Text>
              </View>

              <View style={{marginBottom:verticalScale(10)}}>
                <Text style={styles.Amount}>£104,15</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            // justifyContent: 'center',
            marginVertical:verticalScale(15)
            // alignItems: 'flex-end',
            // flex: 1,
            // paddingBottom: moderateScale(10),
            
          }}>
          <View
            style={{
              height: verticalScale(200),
              width: scale(160),
              alignItems:'flex-start',
              justifyContent:'center',
        
            //   flex:1

            //   alignItems: 'flex-end',
            }}>
            <Image
              style={{ height: '100%', width: '100%' }}
              source={require('../../assets/images/balloonbig.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentHeader;

const styles = StyleSheet.create({
    Amount:{
        fontFamily:Font.Campton700,
        fontSize:scale(24),
        color : Colors.White
    }
});
