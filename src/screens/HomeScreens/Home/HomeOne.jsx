import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React , { useCallback }from 'react'
import { Colors } from '../../../utils/colors'
import NotificationHeader from '../../../components/headers/NotificationHeader'
import UpperBox from '../../../components/box/UpperBox'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import HomeCurrentBundle from '../../../components/content/HomeCurrentBundle'
import GetBundle from '../../../components/content/GetBundle'
import BottomTab from '../../../navigation/BottomTab'
import { useFocusEffect } from '@react-navigation/native';

const HomeOne = ({navigation}) => {
  useFocusEffect(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {display : 'none'}
      })
    }),
  )
  return (
    <SafeAreaView style={{flex:1,backgroundColor: Colors.White}}>
        <NotificationHeader RestyleHeader = {{backgroundColor: Colors.Black}}/>
        <UpperBox restyleUpperBox ={{backgroundColor:Colors.Black}} /> 

        <View style={{marginTop:verticalScale(10),paddingHorizontal:moderateScale(25),flexDirection:'row'}}>
                <HomeCurrentBundle/>
                <View style={{marginLeft:moderateScale(5)}}>

                <GetBundle/>

                
                </View>
                
        </View>

     
       
      <BottomTab home = {true}/>
    </SafeAreaView>
  )
}

export default HomeOne

const styles = StyleSheet.create({})