import {StyleSheet, View, Image, Pressable, Text} from 'react-native';
import React, {useState, useCallback} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../utils/colors';

const BottomTab = props => {
  const navigation = useNavigation();

  return (
    <View style={[styles.Row, props.BottomTabRestyle]}>
      <Pressable
        onPress={() => navigation.navigate('homescreen')}
        style={styles.Boxes}>
        {props.home ? (
          <Image
            style={styles.ActiveImg}
            source={require('../assets/images/home_active.png')}
            resizeMode='contain'

          />
        ) : (
          <Image
            style={styles.Img}
            source={require('../assets/images/home.png')}
            resizeMode='contain'
          />
        )}

        
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('bundlescreen')}
        style={styles.Boxes}>
        {props.bundle ? (
          <Image
            style={styles.ActiveImg}
            source={require('../assets/images/bundle_active.png')}
            resizeMode='contain'
          />
        ) : (
          <Image
            style={styles.Img}
            source={require('../assets/images/bundle.png')}
            resizeMode='contain'
          />
        )}

       
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('shopscreen')}
        style={styles.Boxes}>
          {props.shop ? (
          <Image
            style={styles.ActiveImg}
            source={require('../assets/images/shop_active.png')}
            resizeMode='contain'
          />
        ) : (
          <Image
            style={styles.Img}
            source={require('../assets/images/shop.png')}
            resizeMode='contain'
          />
        )}

       
      </Pressable>

    
      <Pressable
        onPress={() => navigation.navigate('paymentscreen')}
        style={styles.Boxes}>
         {props.payment ? (
          <Image
            style={styles.ActiveImg}
            source={require('../assets/images/payment_active.png')}
            resizeMode='contain'
          />
        ) : (
          <Image
            style={styles.Img}
            source={require('../assets/images/payment.png')}
            resizeMode='contain'
          />
        )}

      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('morescreen')}
        style={styles.Boxes}>
         {props.more ? (
          <Image
            style={styles.ActiveImg}
            source={require('../assets/images/more_active.png')}
            resizeMode='contain'
          />
        ) : (
          <Image
            style={styles.Img}
            source={require('../assets/images/more.png')}
            resizeMode='contain'
          />
        )}

       
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: verticalScale(60),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor:Colors.White,
    paddingHorizontal:moderateScale(25)
  
  },
  
  Img: {
    width: scale(23),
    height: scale(23),
  },

  ActiveImg: {
    width: scale(65),
    height: scale(35),
  },
  Boxes: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  menuBox: {
    // backgroundColor: '#f3f3f3',
    // borderRadius: 100,
    // height: scale(80),
    // width: scale(80),
    // justifyContent: 'center',
    // alignItems: 'center',
    // bottom: verticalScale(7),
  },

});
export default BottomTab;
