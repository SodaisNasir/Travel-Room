import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../utils/colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import StyledBox from '../../../components/box/StyledBox';
import CustomButton from '../../../components/buttons/CustomButton';
import {Font} from '../../../utils/fonts';

const HomeNoContent = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <View style={{flex: 1,paddingHorizontal:moderateScale(25)}}>
        <View
          style={{flex: 1.1, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: verticalScale(140),
              width: scale(230),
              marginTop: verticalScale(20),
            }}>
            <Image
              source={require('../../../assets/images/traveliconred.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>

        <View style={{flex: 1.5, justifyContent:'flex-end',paddingBottom:verticalScale(8)}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.BigText}>There's nothing here</Text>
          </View>

          <View style={{marginTop: verticalScale(25),alignItems:'center'}}>
            <Text style={styles.BlackText}>It looks like you do not currently have any active bundles.</Text>
          </View>
          <View style ={{justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.BlackText}>Click below to select a new bundle.</Text>
          </View>
        </View>

        <View style={{flex: 3,marginTop: scale(50)}}>
          <View style={{ 
            height: verticalScale(95),
            width:scale(250),
            position: 'absolute',
            zIndex:1,
            right:'-5%',
            top: '-13%'
            }}>
            <Image
              source={require('../../../assets/images/aerohalf.png')}
              resizeMode="contain"
              style={{height: '100%', width: '100%'}}
            />
          </View>
            
          <StyledBox
            CurveSize={{height: verticalScale(15)}}
            UpperInnerBox={{
              backgroundColor: Colors.Main,
            //   width: '95%',
            }}
            RestyleMainBox={{
            //   height: verticalScale(150),
              //   paddingHorizontal: moderateScale(20),
              paddingBottom: moderateScale(5),

              borderBottomLeftRadius: scale(4),
              borderBottomRightRadius: scale(4),
              backgroundColor: Colors.Main,
            //   width: '100%',
            }}
            Triangle={{borderTopColor: Colors.Main}}>
            <View style={{paddingHorizontal: moderateScale(15)}}>
              <View>
                <Text style={styles.BoxText}>Breathe</Text>
              </View>
              <View>
                <Text style={styles.BoxText}>(even) easier!</Text>
              </View>
              <View>
                <Text style={styles.BoxText}>Add an extra bunlde now</Text>
              </View>

              <View style={{marginVertical:verticalScale(15)}}>
                <CustomButton
                  containerRestyle={{width: '100%'}}
                  text={'Get a Data bundle!'}
                />
              </View>
            </View>
          </StyledBox>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeNoContent;

const styles = StyleSheet.create({
  BoxText: {
    fontFamily: Font.CamptonBook,
    color: Colors.White,
    fontSize: scale(24),
  },

  BigText:{
    fontFamily: Font.CamptonBook,
    color: Colors.Main,
    fontSize: scale(26),
  },
  BlackText:{
    fontFamily: Font.CamptonBook,
    color: Colors.Black,
    fontSize: scale(17),
    textAlign:'center'
  }
});
