import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import StyledBox from '../box/StyledBox';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';
import * as Progress from 'react-native-progress';
import CustomButton from '../buttons/CustomButton';

const GetBundle = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <StyledBox
          RestyleMainBox={{
            height: verticalScale(200),
            paddingHorizontal: moderateScale(0),
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            width: scale(150),
            backgroundColor: Colors.Main,
          }}
          UpperInnerBox={{
            width: scale(130),
            backgroundColor: Colors.Main,
          }}
          Triangle={{
            borderTopColor: Colors.Main,
          }}>
          <View style={{paddingHorizontal: moderateScale(10)}}>
            <View>
              <Text style={styles.BigText}>TravelRoom</Text>
              <Text style={styles.BigText}>(even) easier!</Text>
            </View>

            <View style={{marginVertical: verticalScale(10)}}>
              <Text style={styles.SmallText}>Add an extra</Text>
              <Text style={styles.SmallText}>bundle now.</Text>
            </View>
          </View>

          <View style={{
            height:verticalScale(100),
            width:scale(75),
            alignSelf:'flex-end'
          }}>
            <Image
                source={require('../../assets/images/logogrey.png')}
                style={{height: '100%',width:'100%'}}
                resizeMode='contain'
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: moderateScale(5),
              // alignItems: 'center',
              // alignSelf: 'center',
              width: '100%',
              paddingHorizontal: moderateScale(5),
              left: scale(0),
            }}>
            <CustomButton
              containerRestyle={{
                height: verticalScale(40),
                borderRadius: scale(4),
                width: '100%',
                backgroundColor: Colors.White,
                paddingHorizontal: moderateScale(2),
              }}
              text={'Get a data bundle'}
              fontStyle={{
                fontFamily: Font.Campton700,
                color: Colors.Main,
                fontSize: scale(14),
              }}
            />
          </View>
        </StyledBox>
      </View>
    </View>
  );
};

export default GetBundle;

const styles = StyleSheet.create({
  BigText: {
    fontFamily: Font.Campton700,
    color: Colors.White,
    fontSize: scale(16),
  },
  SmallText: {
    fontFamily: Font.Campton600,
    color: Colors.White,
    fontSize: scale(12),
  },
});
