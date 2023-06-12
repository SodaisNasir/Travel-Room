import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Colors } from '../../utils/colors';
import CustomInput from '../../components/inputs/CustomInput';
import CustomButton from '../../components/buttons/CustomButton';
import { Font } from '../../utils/fonts';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ paddingHorizontal: moderateScale(25) }}>
        <View style={{  alignItems: 'center' }}>
          <View
            style={{
              height: verticalScale(30),
              width: 30,
              borderRadius: 10,
              borderColor: Colors.Main,
            }}></View>
        </View>

        <View>
          <Text style={{ fontSize: scale(30), fontFamily:Font.Campton500, color: Colors.Black }}>
            Create Account
          </Text>
          <View
            style={{

              marginBottom: verticalScale(10),
            }}>
            <Text style={{ fontSize: scale(17), fontFamily:Font.Campton500,color: Colors.Black,  }}>
              Fill the details below
            </Text>
          </View>



        </View>

        <View>
          <CustomInput placeholder="First Name" />
          <CustomInput placeholder="Last Name" />
          <CustomInput placeholder="Email address" />
          <CustomInput placeholder="Password" />
        </View>

        <View>
          <View style={{ flexDirection: 'row', marginVertical: verticalScale(10) }}>

            <Text style={{ color: Colors.Black, fontSize: scale(17), fontFamily:Font.Campton500 }}>
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: Colors.Main,
                  fontFamily:Font.CamptonBook ,
                  fontSize: scale(17),
                 
                }}>
                {' '}
                Login here
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center',right:scale(2) }}>
            <Text style={{ color: Colors.Black, fontSize: scale(13), fontFamily:Font.CamptonBook ,textAlign:'left' }}>
              Before creating your account we need you to check and agree to our
              Privacy Policy and the Terms Conditions
            </Text>
            {/* <View style={styles.base}>
                <View style={styles.baseTop} />
                <View style={styles.baseBottom} />
              </View> */}
          </View>


        </View>


        <View style={{ marginTop: verticalScale(10), borderRadius:10,height:verticalScale(100),borderColor: '#f3f4f4', borderWidth: 2, }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.2, height: verticalScale(50), justifyContent: 'center', alignItems: 'center',borderBottomWidth:2,borderColor: '#f3f4f4' }}>

              <View
                style={{ height: verticalScale(25), width: scale(25) , }}
              >
                <Image
                  source={require('../../assets/images/trans_shape.png')}
                  style={{ height: '100%', width: '100%' }}

                />
              </View>
            

            </View>
            <View style={{ flex: 0.8, height: verticalScale(50), justifyContent: 'center',borderColor: '#f3f4f4',borderBottomWidth:2}}>
              <Text style={{ color: Colors.Grey, fontSize: scale(14) }}>Privacy Policy</Text>
            </View>


          </View>


          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.2, height: verticalScale(50), width: '100%', alignItems: 'center', justifyContent: 'center',  }}>
              <View
                style={{ height: verticalScale(25), width: scale(25) }}
              >
                <Image
                  source={require('../../assets/images/trans_shape.png')}
                  style={{ height: '100%', width: '100%' }}

                />
              </View>

            </View>
            <View style={{ flex: 0.8,  height: verticalScale(50), width: '100%', justifyContent: 'center', }}>
              <Text style={{ color: Colors.Grey, fontSize: scale(14) }}>Terms & Conditions</Text>
            </View>


          </View>



        </View>


        <View style={{ marginTop: verticalScale(25) }}>
          <CustomButton onPress = {()=>navigation.navigate('splashthree')} text={'Login'} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  base: {
      
  },
  baseTop: {
    borderBottomWidth: 35,
    borderBottomColor: 'red',
    borderLeftWidth: 50,
    borderLeftColor: 'red',
    // borderRightWidth: 50,
    // borderRightColor: 'transparent',
    height:0,
    width: 0,
    left: 0,
    top: -35,
    position: 'absolute',

  },
  baseBottom: {
    backgroundColor: 'transparent',
    height: 55,
    width: 100,
    borderColor:'red',
    borderWidth:1

  }
});
