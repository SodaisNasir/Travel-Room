import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const NotificationHeader = (props) => {
  return (
    <View style={[props.RestyleHeader,{ height: verticalScale(95) }]}>
      <View style={{ flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:moderateScale(20) }}>
        <View style={{  }}>
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
              style={{ height: '100%', width: '100%' }}
              source={require('../../assets/images/travelicon.png')}
              resizeMode="contain"
            />
          </View>
        </View>

        <View
          style={{
            // justifyContent: 'center',
            paddingTop:verticalScale(20),
            // alignItems: 'flex-end',
            // flex: 1,
            // paddingBottom: moderateScale(10),
            
          }}>
          <View
            style={{
              height: verticalScale(25),
              width: scale(50),

              alignItems: 'flex-end',
            }}>
            <Image
              style={{ height: '100%', width: '100%' }}
              source={require('../../assets/images/notification.png')}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      

    </View>
  )
}

export default NotificationHeader

const styles = StyleSheet.create({})