import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from 'react-native';
import { scale, verticalScale, moderateScale, } from 'react-native-size-matters';
import React, {useEffect} from 'react';
import CustomButton from '../../components/buttons/CustomButton';
import { Colors } from '../../utils/colors';
import Swiper from 'react-native-swiper';
import { Font } from '../../utils/fonts';

const SplashOne = ({navigation}) => {
    
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
             {/* <StatusBar
      backgroundColor={'transparent'}
      translucent
      /> */}
            <ImageBackground
                // imageStyle=
                // {{ opacity: 0.6, backgroundColor: 'black' }}
                source={require('../../assets/images/splashone.png')}
                resizeMode="cover"
                style={{ flex: 1 , height: Dimensions.get('screen').height}}>
                <View style={{ flex: 1, }}>
                    <View
                        style={{ flex: 2.4, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: verticalScale(150), width: scale(290) }}>
                            <Image
                                source={require('../../assets/images/travelicon.png')}
                                resizeMode="contain"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </View>
                    </View>

                    <View style={{ flex: 2.8}}>
                        <Swiper style={styles.wrapper} showsButtons={false}
                            activeDotColor={Colors.Main}
                            dotColor='lightgrey'
                            
                        // dotStyle={{...styles.dotStyle,marginTop:10}}

                        >
                            <View style={styles.slide1}>

                                <Text style={styles.textone}>Travel Roam SIM</Text>
                                <Text style={styles.textone}>Data Bundles</Text>

                                <View style={{ width: '75%', marginTop: verticalScale(20) }}>
                                    <Text style={styles.texttwo}>
                                        Travel Roam easy with reliable, low data and the possible
                                        mobile in over 70 Countries worldwide Travel Roam easy with
                                        reliable, low data and the possible mobile in over 70
                                        countries worldwide.
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.slide1}>

                                <Text style={styles.textone}>Travel Roam SIM</Text>
                                <Text style={styles.textone}>Data Bundles</Text>

                                <View style={{ width: '75%', marginTop: verticalScale(20) }}>
                                    <Text style={styles.texttwo}>
                                        Travel Roam easy with reliable, low data and the possible
                                        mobile in over 70 Countries worldwide Travel Roam easy with
                                        reliable, low data and the possible mobile in over 70
                                        countries worldwide.
                                    </Text>
                                </View>

                            </View>
                            <View style={styles.slide1}>

                                <Text style={styles.textone}>Travel Roam SIM</Text>
                                <Text style={styles.textone}>Data Bundles</Text>

                                <View style={{ width: '75%', marginTop: verticalScale(20) }}>
                                    <Text style={styles.texttwo}>
                                        Travel Roam easy with reliable, low data and the possible
                                        mobile in over 70 Countries worldwide Travel Roam easy with
                                        reliable, low data and the possible mobile in over 70
                                        countries worldwide.
                                    </Text>
                                </View>

                            </View>
                        </Swiper>
                    </View>

                    <View style={{ flex: 1.3,paddingTop:verticalScale(10), alignItems: 'center' }}>
                      
                        <CustomButton
                            containerRestyle={{ backgroundColor: Colors.Main, width: '75%' }}
                            text={'Get Your Bundle'}
                            onPress={()=>navigation.navigate('splashtwo')}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: verticalScale(15),
                                justifyContent: 'center',
                                

                            }}>
                            <Text style={{ color: Colors.White, fontFamily:Font.Campton300,fontSize: scale(14) }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                   onPress={() => navigation.navigate('createaccount')}
                            >
                                <Text
                                    style={{
                                        color: Colors.White,
                                        fontFamily:Font.Campton700,
                                        fontSize: scale(14),
                                    }}>
                                    {' '}
                                    Login here
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SplashOne;

const styles = StyleSheet.create({

    slide1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#9DD6EB',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9',
    },
    textone: {
        color: Colors.Main,
        fontSize: scale(30),
        fontFamily:Font.Campton500
    },
    texttwo: {
        color: '#fff',
        fontSize: scale(16),
        fontFamily:Font.CamptonBook,
        textAlign:'center'
    },
    // hexagon: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'blue',
    //     transform: [
    //         { rotate: '30deg' },
    //         { skewX: '0deg' },
    //     ],
    // },

});
