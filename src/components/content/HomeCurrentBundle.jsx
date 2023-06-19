import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import StyledBox from '../box/StyledBox';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import * as Progress from 'react-native-progress';

const HomeCurrentBundle = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <StyledBox

        CurveSize = {{height:verticalScale(15)}}
          RestyleMainBox={{
            height: verticalScale(205),
            paddingHorizontal: moderateScale(20),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            width: scale(150)
          }}
          UpperInnerBox={
            {
              width : scale(136.5)
            }
          }>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center'}}>
              <View style={{height: verticalScale(30), width: scale(30)}}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={require('../../assets/images/uk_big.png')}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: Colors.NotActiveBox,
                borderRadius: scale(6),
                marginLeft: moderateScale(10),
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal:moderateScale(10),
                height:verticalScale(22),
                alignSelf:'center'
              }}>
              <Text style={{fontFamily: Font.CamptonBook,color:Colors.Black, fontSize: scale(10)}}>
                Not active
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: verticalScale(10),
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: Font.Campton700,
                  fontSize: scale(18),
                  color: Colors.Main,
                }}>
                United Kingdom
              </Text>
            </View>

            <View style={{marginTop: verticalScale(10)}}>
              <Progress.Bar
                borderRadius={scale(5)}
                style={{marginTop: verticalScale(5)}}
                progress={0.7}
                animated={true}
                width={null}
                color={Colors.Main}
                // borderColor={Colors.Grey}
                // borderColor={'transparent'}
                // borderWidth={2}
                unfilledColor={Colors.White}
                height={verticalScale(6)}
              />
              <View style={{marginTop: verticalScale(2)}}>
                <Text
                  style={{
                    fontFamily: Font.CamptonBook,
                    fontSize: scale(11),
                    color: Colors.Black,
                  }}>
                  3G/4G Data{' '}
                  <Text
                    style={{
                      fontFamily: Font.Campton600,
                      fontSize: scale(11),
                      color: Colors.Black,
                    }}>
                    3.0 GB
                  </Text>
                </Text>

                <Text
                  style={{
                    fontFamily: Font.CamptonBook,
                    fontSize: scale(11),
                    color: Colors.Black,
                  }}>
                  Expires in
                  <Text
                    style={{
                      fontFamily: Font.Campton600,
                      fontSize: scale(11),
                      color: Colors.Black,
                    }}>
                    {' '}
                    30 days
                  </Text>
                </Text>
              </View>
            </View>

            <View style={{marginTop:verticalScale(10)}}>
              <View>
                <Text
                  style={{
                    fontFamily: Font.CamptonBook,
                    fontSize: scale(11),
                    color: Colors.Black,
                    textAlign:'left'
                  }}>
                  {' '}
                  Where can I use this
                </Text>
                <Text
                  style={{
                    fontFamily: Font.CamptonBook,
                    fontSize: scale(11),
                    color: Colors.Black,
                  }}>
                  {' '}
                  bundle?
                </Text>
              </View>
            </View>
          </View>
        </StyledBox>
      </View>
    </View>
  );
};

export default HomeCurrentBundle;

const styles = StyleSheet.create({});
