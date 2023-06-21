import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/colors';
import CustomButton from '../../components/buttons/CustomButton';
import { Font } from '../../utils/fonts';


const SplashTwo = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:Colors.Main }}>
            <View style={{ paddingHorizontal: moderateScale(20), flex: 1 }}>
                <View
                    style={{
                        flex: 2.3,
                        
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    
                        <View style={{ height: verticalScale(140), width: scale(220) }}>
                            <Image
                                source={require('../../assets/images/travelicon.png')}
                                resizeMode="contain"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>

                        <View style={{ height: verticalScale(90), width: scale(230)}}>
                            <Image
                                source={require('../../assets/images/splashtwo.png')}
                                resizeMode="contain"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                 
                </View>
                <View style={{ flex: 2}}>

                    <View style={{ marginTop: verticalScale(20), paddingHorizontal: moderateScale(35), alignSelf: 'center' }}>
                        <Text style={{ fontSize: scale(28), fontFamily:Font.CamptonBook,color: Colors.White, textAlign: 'center' }}>
                            Oh dear! It looks like your device doesn't support TravelRoam.
                        </Text>
                        <View style={{ marginTop: verticalScale(12) }}>
                            <Text style={{ fontSize: scale(16),fontFamily:Font.CamptonBook, color: Colors.White, textAlign: 'center' }}>

                                Unfortunately, you will be unable to purchase a bundle
                            </Text>
                            <Text style={{ fontFamily:Font.CamptonBook,fontSize: scale(16), color: Colors.White, textAlign: 'center' }}>


                                - but feel free to browse our bunldes for future
                            </Text>
                        </View>

                    </View>

                </View>

                <View style={{ flex: 0.8, paddingTop: verticalScale(10),justifyContent:'center'}}>
                <CustomButton
                            containerRestyle={{ backgroundColor: Colors.Black, width: '75%' }}
                            text={'View Bundle'}
                            onPress = {()=>{navigation.navigate('createaccount')}}
                        />

                </View>
            </View>
        </SafeAreaView>
    );
};

export default SplashTwo;

const styles = StyleSheet.create({});