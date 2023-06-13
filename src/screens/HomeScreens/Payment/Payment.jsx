import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import NotificationHeader from '../../../components/headers/NotificationHeader';
import CardsContent from '../../../components/content/CardsContent';
import PaymentContent from '../../../components/content/PaymentsContent';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../../utils/colors';
import { Font } from '../../../utils/fonts';

const Payment = () => {
  const [menu, setMenu] = useState('cards');
  return (
    <SafeAreaView>
      <NotificationHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.boxContainer,
              {
                borderWidth: 1,
                borderColor: Colors.Main,
                flexDirection: 'row',
                height: verticalScale(40),
                borderRadius: scale(4),
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <TouchableOpacity
              onPress={() => setMenu('cards')}
              style={[
                {
                  justifyContent: 'center',
                  height: verticalScale(40),
                  alignItems: 'center',
                  width: '50%',
                },
                { backgroundColor: menu == 'cards' ? Colors.Main : null },
              ]}>
              <Text
                style={[
                  styles.heading,
                  { color: menu == 'cards' ? Colors.White : Colors.Main },
                ]}>
                Cards
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
                { backgroundColor: menu == 'payments' ? Colors.Main : null },
              ]}
              onPress={() => setMenu('payments')}>
              <Text
                style={[
                  styles.heading,
                  { color: menu == 'payments' ? Colors.White : Colors.Main },
                ]}>
                Payments
              </Text>
            </TouchableOpacity>

          </View>
          {menu == 'payments' ? (
            <>
              <View style={{ marginVertical: verticalScale(15) }}>
                {/* <Text style={styles.PopDes}>Popular Destinations</Text> */}
              </View>

              <PaymentContent />
            </>
          ) : (
            <>
              <View style={{ marginTop:verticalScale(50)}} />

              <View style={{}}>
                <CardsContent />

              </View>



            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({

  mainContainer: {
    paddingHorizontal: moderateScale(25),
    borderTopWidth: 1,
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(10),
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,

  },
  heading: {
    fontSize: scale(16),
    fontFamily: Font.Campton500,
    // marginVertical: 10,
    // color: Colors.Main,
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
});
