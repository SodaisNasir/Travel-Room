import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustSwitch from '../../components/Switch/CustSwitch';

const NotificationSettings = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.White, flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: moderateScale(25)}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(5),
          }}>
          <View>
            <Text
              style={{
                color: Colors.Black,
                fontFamily: Font.Campton500,
                fontSize: scale(32),
              }}>
              Notification Settings
            </Text>
          </View>

          <View
            style={{
              alignItems: 'flex-end',
              marginTop: verticalScale(3),
              left: scale(2),
            }}>
            <View
              style={{
                height: verticalScale(35),
                width: scale(50),
              }}>
              <Image
                style={{height: '100%', width: '100%',}}
                source={require('../../assets/images/cancel_black.png')}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        <View style={{flex: 3.7}}>
          <View style={{}}>
            <View>
              <Text style={styles.BoldText}>E-mail</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: verticalScale(15),
              }}>
              <Text style={styles.LightText}>Promotions</Text>

              <View>
                <CustSwitch
                  trackColor={{false: Colors.Main, true: Colors.Main}}
                  thumbColor={Colors.White}
                />
              </View>
            </View>
          </View>

          <View style={{marginTop: verticalScale(25)}}>
            <View>
              <Text style={styles.BoldText}>App</Text>
            </View>

            <View
              style={{
                marginTop: verticalScale(15),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.LightText}>Promotions</Text>

              <View>
                <CustSwitch
                  trackColor={{false: Colors.Main, true: Colors.Main}}
                  thumbColor={Colors.White}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: verticalScale(15),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.LightText}>Service</Text>

              <View>
                <CustSwitch
                  trackColor={{false: Colors.Main, true: Colors.Main}}
                  thumbColor={Colors.White}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: verticalScale(15),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.LightText}>Payment</Text>

              <View>
                <CustSwitch
                  trackColor={{false: Colors.Main, true: Colors.Main}}
                  thumbColor={Colors.White}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  BoldText: {
    fontSize: scale(20),
    fontFamily: Font.Campton700,
    color: Colors.Black,
  },
  LightText: {
    fontSize: scale(20),
    fontFamily: Font.CamptonBook,
    color: Colors.Black,
  },
});
