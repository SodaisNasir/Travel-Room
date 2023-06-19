import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import StyledBox from '../box/StyledBox';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
// import ProgressBar from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
import AutoRenewal from '../box/AutoRenewal';
import CustomButton from '../buttons/CustomButton';
const BundleSummaryContent = () => {
  return (
    <View style={{}}>
      <StyledBox
        RestyleMainBox={{
        //   height: verticalScale(430),
        paddingBottom : verticalScale(25),
          paddingHorizontal: moderateScale(20),
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'center'}}>
            <View style={{height: verticalScale(40), width: scale(35)}}>
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('../../assets/images/uk_big.png')}
              />
            </View>
          </View>

          <View style={{left: scale(35)}}>
            <StyledBox
              Main={{width: '100%', alignItems: 'center'}}
              CurveSize={{height: verticalScale(15), width: '60%'}}
              UpperInnerBox={{
                width: '87%',
                backgroundColor: Colors.IntroductoryBox,
              }}
              RestyleMainBox={{
                height: verticalScale(27),
                width: '60%',
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
                  Change
                </Text>
              </View>
            </StyledBox>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(20),
          }}>
          <View style={{}}>
            <Text
              style={{
                fontFamily: Font.Campton700,
                fontSize: scale(18),
                color: Colors.Black,
              }}>
              United Kingdom
            </Text>
            
          </View>

          <View style={{}}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: Font.Campton700,
                  fontSize: scale(18),
                  color: Colors.Black,
                  textAlign:'right'
                }}>
                -£25.00
              </Text>
            </View>
            <View style={{marginTop: verticalScale(5),alignItems:'center'}}>
              <Text
                style={{
                  fontFamily: Font.CamptonBook,
                  fontSize: scale(16),
                  color: Colors.Black,
                }}>
                5 GB . 7 Days
              </Text>
            </View>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: verticalScale(2),
          }}>
          <Text style={styles.Expire}>4G Data</Text>
          <Text style={styles.ExpireDays}>750 MB of 5 GB Left</Text>
        </View> */}

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: verticalScale(30)}}>
            <Text
              style={{
                fontFamily: Font.CamptonBook,
                color: Colors.Black,
                fontSize: scale(14),
              }}>
              Where can I use this bundle?
            </Text>
          </View>

          <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
        </View>

        <View style={{marginTop: verticalScale(18)}}>
          <Text style={styles.BigText}>Activation</Text>
          <View style={{marginTop: verticalScale(10),paddingRight:moderateScale(15)}}>
            <Text style={[styles.Expire,{textAlign:'left'}]}>
              This Bundle must be activated within 30 days. Your bundle will
              activate automatically once you connecct to a network in your
              chosen destination
            </Text>
          </View>
        </View>

        <View style={{marginTop: verticalScale(18)}}>
          <Text style={styles.BigText}>How long is my bundle valid?</Text>
          <View style={{marginTop: verticalScale(10)}}>
            <Text style={styles.Expire}>7 days from activation</Text>
          </View>
        </View>
      </StyledBox>
      <View>
        <AutoRenewal
          details={
            'By selecting auto-renewal your bundle will automatically renew once you save used your bundle must be activated within 30 days. Your bundle will activate automatically once you connect to a network in your chosen destination'
          }
        />
      </View>
    </View>
  );
};

export default BundleSummaryContent;

const styles = StyleSheet.create({
  Expire: {
    fontFamily: Font.CamptonBook,
    color: Colors.Black,
    fontSize: scale(14),
  },
  ExpireDays: {
    fontFamily: Font.CamptonBook,
    color: Colors.Black,
    fontSize: scale(12),
  },
  BigText: {
    fontFamily: Font.Campton700,
    color: Colors.Black,
    fontSize: scale(18),
  },
  RedBox: {
    height: verticalScale(120),
    backgroundColor: Colors.Main,
    borderBottomLeftRadius: scale(10),
    borderBottomRightRadius: scale(10),
    flex: 1,
  },
});
