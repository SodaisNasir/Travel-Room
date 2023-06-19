import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import NotificationHeader from '../../../components/headers/NotificationHeader';
import UpperBox from '../../../components/box/UpperBox';
import Header from '../../../components/headers/Header';
import ViewAllContent from '../../../components/content/ViewAllContent';
import CustomButton from '../../../components/buttons/CustomButton';
import {Font} from '../../../utils/fonts';
import ActiveBundleContent from '../../../components/content/ActiveBundleContent';
import BundleSummaryContent from '../../../components/content/BundleSummaryContent';

const BundleSummary = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.White, flex: 1}}>
      <Header
        title={'Bundle Summary'}
        description={'You can pay by card or via Apple pay'}
        RestyleHeader={{
          backgroundColor: Colors.Black,
          height: verticalScale(182),
        }}

        FontView={{paddingVertical: moderateScale(15)}}
      />
      <UpperBox
        restyleUpperBox={{backgroundColor: Colors.Black}}
        restyleTriange={{backgroundColor: Colors.Black}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: moderateScale(25)}}>
            <View style = {{marginTop: verticalScale(20)}}>

          <BundleSummaryContent />
            </View>

          <View style={{marginTop: verticalScale(15),paddingHorizontal:moderateScale(15)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    color: Colors.Black,
                    fontSize: scale(16),
                    fontFamily: Font.CamptonBook,
                  }}>
                  United Kingdom:
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: Colors.Black,
                    fontSize: scale(16),
                    fontFamily: Font.CamptonBook,
                  }}>
                  £10.00
                </Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between',marginTop :verticalScale(3)}}>
              <View>
                <Text style={styles.TotalText}>Total</Text>
              </View>
              <View>
                <Text style={styles.TotalText}>£10.00</Text>
              </View>
            </View>

            <View style={{marginVertical: verticalScale(10)}}>
              <Text style={styles.TotalText}>Payment Method</Text>
            </View>

            <CustomButton
              containerRestyle={{backgroundColor: Colors.Main,marginBottom: verticalScale(15)}}
              onPress = {()=> navigation.navigate('paymentcarddetails')} //should navigate to modal then modal to paymentdetails
              text={'Proceed'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BundleSummary;

const styles = StyleSheet.create({
  TotalText: {
    color: Colors.Black,
    fontSize: scale(18),
    fontFamily: Font.Campton700,
  },
});
