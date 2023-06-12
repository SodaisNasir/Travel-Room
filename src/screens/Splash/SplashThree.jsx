import { Image, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils/colors';


const SplashThree = () => {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:Colors.Main }}>
            <View style={{ paddingHorizontal: moderateScale(20), flex: 1 }}>
                <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>


                    <View style={{ height: verticalScale(140), width: scale(230), marginTop: verticalScale(20) }}>
                        <Image
                            source={require('../../assets/images/travelicon.png')}
                            resizeMode="contain"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>


                </View>

                <View style={{ flex: 4.5,  alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: verticalScale(300), width: scale(300), marginTop: verticalScale(20) }}>
                        <Image
                            source={require('../../assets/images/gbimage.png')}
                            resizeMode="contain"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </View>

                <View style={{ flex: 2.2, justifyContent: 'flex-end' }}>
                    <View style={{ height: verticalScale(150), width: scale(300), marginTop: verticalScale(20) }}>
                        <Image
                            source={require('../../assets/images/aeroplane.png')}
                            resizeMode="contain"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default SplashThree;

const styles = StyleSheet.create({});