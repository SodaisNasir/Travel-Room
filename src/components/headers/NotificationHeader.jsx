import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { verticalScale } from 'react-native-size-matters'

const NotificationHeader = () => {
  return (
    <View style={{height:verticalScale(80)}}>
      <Text>NotificationHeader</Text>
    </View>
  )
}

export default NotificationHeader

const styles = StyleSheet.create({})