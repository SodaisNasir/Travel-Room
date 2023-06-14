import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import React from 'react';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { Font } from '../../utils/fonts';
import { Colors } from '../../utils/colors';
import StyledBox from '../box/StyledBox';

const PaymentContent = () => {
  DATA = [
    {
      id: 1,
      country: 'United Kingdom',
      date: 'April 2023',
      date_details: '2023-04-14',
      amount: '-£1.00',
      payment_through: 'Apple pay',
      payment_through_img: require('../../assets/images/apple.png'),
    },
    {
      id: 2,
      country: 'United Kingdom',
      date_details: '2023-04-14',
      date: 'April 2023',
      amount: '-£1.00',
      payment_through: 'Apple pay',
      payment_through_img: require('../../assets/images/apple.png'),
    },
    {
      id: 3,
      country: 'United Kingdom',
      date_details: '2023-04-14',
      date: 'April 2023',
      amount: '-£1.00',
      payment_through: 'Apple pay',
      payment_through_img: require('../../assets/images/apple.png'),
    },
    {
      id: 4,
      country: 'United Kingdom',
      date_details: '2023-04-14',
      date: 'April 2023',
      amount: '-£1.00',
      payment_through: 'Apple pay',
      payment_through_img: require('../../assets/images/apple.png'),
    },
  ];

  const Item = ({ data }) => (
    <>
      <View style={{ marginVertical: verticalScale(10) }}>
        <Text
          style={{
            fontFamily: Font.CamptonBook,
            fontSize: scale(18),
            color: Colors.Black,
          }}>
          {data.date}
        </Text>
      </View>
      <StyledBox>
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginTop: verticalScale(10),
              flexDirection: 'row',
              marginLeft: moderateScale(5),
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>{data.country}</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.amount}>{data.amount}</Text>
            </View>
          </View>
          <View
            style={{ marginTop: verticalScale(5), marginLeft: moderateScale(5) }}>
            <Text style={styles.date}>{data.date_details}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: verticalScale(10) }}>
          <View
            style={{
              height: verticalScale(20),
              justifyContent: 'center',
              width: scale(15),
              marginLeft: moderateScale(5),
              alignItems: 'center',
            }}>
            <Image source={data.payment_through_img} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text
              style={{
                fontFamily: Font.CamptonBook,
                color: Colors.Black,
                fontSize: scale(11),
              }}>
              {' '}
              {data.payment_through}
            </Text>
          </View>
        </View>
      </StyledBox>
    </>
  );

  return (
    <View>
   
      
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PaymentContent;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(110),
    width: '100%',
    backgroundColor: Colors.InputColor,
    borderRadius: scale(4),
    borderColor: Colors.BoxBorder,
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: moderateScale(10),
    // flexDirection: 'row',
    marginVertical: verticalScale(10),
    alignSelf: 'center',
  },

  title: {
    fontFamily: Font.Campton700,
    fontSize: scale(18),
    color: Colors.Main,
  },
  date: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(16),
    color: Colors.Black,
  },
  amount: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(16),
    color: Colors.Black,
  },
});
