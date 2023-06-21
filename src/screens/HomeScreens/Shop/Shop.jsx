import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState,useCallback} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Header from '../../../components/headers/Header';
import ZoneContent from '../../../components/content/ZoneContent';
import CountryContent from '../../../components/content/CountryContent';
import {Font} from '../../../utils/fonts';
import {Colors} from '../../../utils/colors';
import BottomTab from '../../../navigation/BottomTab';
import { useFocusEffect } from '@react-navigation/native';
import UpperBox from '../../../components/box/UpperBox';

const Shop = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display : 'none'}
      })
    }),
  )
  
  const [menu, setMenu] = useState('country');

  
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:Colors.White}}>
      <ScrollView>
        <Header
          title={'Choose Destination'}
          description={
            'Select the country or zone where you want to use your Travel Roam bundle.'
          }
        />
        <UpperBox restyleUpperBox={{backgroundColor:Colors.Main}} />
        <View style={{paddingHorizontal: moderateScale(25)}}>
          <View
            style={[
              styles.boxContainer,
            ]}>
            <TouchableOpacity
              onPress={() => setMenu('country')}
              style={[
                {
                  justifyContent: 'center',
                  height: verticalScale(40),
                  alignItems: 'center',
                  width: '50%',
                },
                {backgroundColor: menu == 'country' ? Colors.Main : null},
              ]}>
              <Text
                style={[
                  styles.heading,
                  {color: menu == 'country' ? Colors.White : Colors.Main},
                ]}>
                Country
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                {
                  justifyContent: 'center',
                  height: verticalScale(40),
                  alignItems: 'center',
                  width: '50%',
                },
                {backgroundColor: menu == 'zone' ? Colors.Main : null},
              ]}
              onPress={() => setMenu('zone')}>
              <Text
                style={[
                  styles.heading,
                  {color: menu == 'zone' ? Colors.White : Colors.Main},
                ]}>
                Zone
              </Text>
            </TouchableOpacity>
            {/* {showZone && <Text style={styles.content}>Content for Zone</Text>} */}
          </View>

          {menu == 'country' ? (
            <>
              <View style={{marginVertical: verticalScale(15)}}>
                <Text style={styles.PopDes}>Popular Destinations</Text>
              </View>

              <CountryContent />
            </>
          ) : (
            <>
              <View style={{marginTop: verticalScale(15)}} />
              <ZoneContent />
            </>
          )}

          {/* <View style={styles.child}>
            <Text style={{color: 'black', fontSize: scale(26)}}> Hi baby</Text>
          </View>

          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'orange',
              borderRadius: 10
              
              // {transform: [{rotate: '60deg'}]},
            }}
          /> */}
        </View>

        <View  style= {{height:verticalScale(70)}}/>
      </ScrollView>
      <BottomTab shop = {true}/>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
    borderWidth: 1,
    borderColor: Colors.Main,
    flexDirection: 'row',
    height: verticalScale(40),
    borderRadius: scale(4),
  },
  heading: {
    fontSize: scale(16),
    fontFamily: Font.Campton500,
    // marginVertical: 10,
    // color: Colors.Main,
  },

  PopDes: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(16),
    color: Colors.Main,
  },
  content: {
    fontSize: 18,
    marginBottom: 20,
  },
  check: {
    backgroundColor: 'green',
    flex: 1,
    height: verticalScale(100),
  },
  child: {
    flex: 1,
    height: verticalScale(100),
    backgroundColor: 'blue',
    transform: [
      // {perspective: 850},
      {translateX: -Dimensions.get('window').width * 0.24},
      {rotateY: '60deg'},
    ],
  },
});
