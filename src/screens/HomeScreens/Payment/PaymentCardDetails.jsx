import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/colors';
import {Font} from '../../../utils/fonts';
import CustomInput from '../../../components/inputs/CustomInput';
import CustomButton from '../../../components/buttons/CustomButton';

const PaymentCardDetails = ({navigation}) => {
  const [select, setSelect] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: Colors.White, flex: 1}}>
      <View style={{paddingHorizontal: moderateScale(25), flex: 1}}>
        <View style={{marginTop: verticalScale(15), flex: 1}}>
          <View>
            <Text style={styles.BigText}>Your Payment card details</Text>
          </View>

          <View style={{marginTop: verticalScale(5)}}>
            <Text style={styles.SmallText}>
              Enter your payment card details
            </Text>
          </View>
        </View>

        <View style={{flex: 2.6}}>
          <CustomInput placeholder="Cardholder name" />
          <CustomInput placeholder="12-16 digit card number" />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomInput
              placeholder="Expiry date"
              RestyleBox={{width: '45%'}}
            />

            <CustomInput placeholder="CVV" RestyleBox={{width: '45%'}} />
          </View>

          <View style={{marginTop: verticalScale(25), flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setSelect(!select)}
              style={{height: verticalScale(25), width: scale(27)}}>
              {select == true ? (
                <Image
                  source={require('../../../assets/images/selectbox.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require('../../../assets/images/trans_shape.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>

            <View style={{paddingHorizontal: moderateScale(15),marginTop: verticalScale(5)}}>
              <Text
                style={{
            
                  textAlign: 'left',
                  color: Colors.GreyText,
                  fontFamily: Font.CamptonBook,
                  fontSize: scale(14),
                }}>
                
                Save your payment card details securely for future payments
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{flex: 0.6,  flexDirection: 'row'}}>
          <CustomButton
            iconleft = {true}
            onPress={() => navigation.goBack()}
            containerRestyle={{
              borderRadius: scale(6),
              width: '18%',
              backgroundColor: 'transparent',
              borderColor: Colors.Main,
              borderWidth: 1,
            //   marginLeft: moderateScale(12),
            }}
          />

          <CustomButton
            text={'Next'}
            containerRestyle={{
              borderRadius: scale(6),
              width: '77%',
              marginLeft: moderateScale(15),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentCardDetails;

const styles = StyleSheet.create({
  BigText: {
    color: Colors.Black,
    fontFamily: Font.Campton500,
    fontSize: scale(32),
  },

  SmallText: {
    color: Colors.Black,
    fontFamily: Font.CamptonBook,
    fontSize: scale(20),
  },
});
