import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../../components/headers/Header';
import UpperBox from '../../../components/box/UpperBox';
import {Colors} from '../../../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../../utils/fonts';
import ViewAllContent from '../../../components/content/ViewAllContent';
import StyledBox from '../../../components/box/StyledBox';

const ViewAllCountries = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <Header
        title={'France Plans'}
        description={'Choose a data bundle to use in France'}
      />
      <UpperBox restyleUpperBox={{backgroundColor: Colors.Main}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: verticalScale(20),

            }}>
            <View style={{justifyContent:'center'}}>
              <Text
                style={{
                  fontFamily: Font.CamptonBook,
                  fontSize: scale(18),
                  color: Colors.Black,
                }}>
                Change Currency
              </Text>
            </View>
            <View style={{left:scale(30)}}>
              <StyledBox
               Main = {{width:'100%',alignItems:'center'}}
                CurveSize={{height: verticalScale(12),width:'50%'}}
                UpperInnerBox={{
                  width: '84.2%',
                  backgroundColor: Colors.IntroductoryBox,
                }}
                RestyleMainBox={{
                  height: verticalScale(28),
                  width: '50%',
                  backgroundColor: Colors.IntroductoryBox,
                }}
                Triangle={{
                  borderTopColor: Colors.IntroductoryBox,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.White,
                      fontFamily: Font.CamptonBook,
                      fontSize: scale(12),
                    }}>
                    GBP
                  </Text>
                </View>
              </StyledBox>
            </View>
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <ViewAllContent />
          </View>

          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewAllCountries;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: moderateScale(25),
  },
});
