import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import NotificationHeader from '../../../components/headers/NotificationHeader'
import { Colors } from '../../../utils/colors'
import UpperBox from '../../../components/box/UpperBox'


const Bundle = () => {
  return (
    <SafeAreaView style={{backgroundColor:Colors.White,flex:1}}>
      <NotificationHeader RestyleHeader={{backgroundColor : Colors.Black}}/>
      <UpperBox restyleUpperBox={{backgroundColor: Colors.Black}} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  )
}

export default Bundle

const styles = StyleSheet.create({})