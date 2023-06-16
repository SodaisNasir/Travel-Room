import { StyleSheet, Text, View,SafeAreaView,ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import NotificationHeader from '../../../components/headers/NotificationHeader'
import { Colors } from '../../../utils/colors'
import UpperBox from '../../../components/box/UpperBox'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ActiveBundleContent from '../../../components/content/ActiveBundleContent'


const Bundle = () => {
    const [menu, setMenu] = useState('active');

  return (
    <SafeAreaView style={{backgroundColor:Colors.White,flex:1}}>
      <NotificationHeader RestyleHeader={{backgroundColor : Colors.Black}}/>
      <UpperBox restyleUpperBox={{backgroundColor: Colors.Black}} />
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.Container}>
      <View
            style={[
              styles.boxContainer,
            ]}>
            <TouchableOpacity
              onPress={() => setMenu('active')}
              style={[
                {
                  justifyContent: 'center',
                  height: verticalScale(40),
                  alignItems: 'center',
                  width: '50%',
                },
                {backgroundColor: menu == 'active' ? Colors.Main : null},
              ]}>
              <Text
                style={[
                  styles.heading,
                  {color: menu == 'active' ? Colors.White : Colors.Main},
                ]}>
                Active
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
                {backgroundColor: menu == 'inactive' ? Colors.Main : null},
              ]}
              onPress={() => setMenu('inactive')}>
              <Text
                style={[
                  styles.heading,
                  {color: menu == 'inactive' ? Colors.White : Colors.Main},
                ]}>
                Inactive
              </Text>
            </TouchableOpacity>
            {/* {showZone && <Text style={styles.content}>Content for Zone</Text>} */}
          </View>
          {menu == 'active' ? (
            <>
              <View style={{marginVertical: verticalScale(15)}}>
                <Text style={styles.PopDes}>Popular Destinations</Text>
              </View>

              <ActiveBundleContent />
            </>
          ) : (
            <>
              <View style={{marginTop: verticalScale(15)}} />
              <ZoneContent />
            </>
          )}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bundle

const styles = StyleSheet.create({
    Container : {
        paddingHorizontal:moderateScale(25)
    },
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
})