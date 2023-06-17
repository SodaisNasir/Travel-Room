import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/fonts';
import {Colors} from '../../utils/colors';
import CustomButton from '../buttons/CustomButton';

const PlanDetailsContent = () => {
  return (
    <View style={{paddingHorizontal: moderateScale(15)}}>
      <View
        style={{
          height: verticalScale(60),
          width: scale(105),
        }}>
        <Image
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
          source={require('../../assets/images/threeballoons.png')}
        />
      </View>
      <View style={styles.Container}>
        <View style={{justifyContent: 'center', marginTop: verticalScale(15)}}>
          <Text
            style={{
              fontFamily: Font.CamptonBook,
              fontSize: scale(32),
              color: Colors.Black,
            }}>
            Holland
          </Text>
        </View>

        <View style={{marginVertical: verticalScale(25)}}>
          <View>
            <Text style={styles.LightText}>Validity eSIM:</Text>
          </View>
          <View>
            <Text style={styles.RedText}>Unlimited for 30 days</Text>
          </View>
        </View>

        <View style={{marginTop: verticalScale(5)}}>
          <View>
            <Text style={styles.LightText}>Plan Price From:</Text>
          </View>

          <View>
            <Text style={styles.RedText}>$10</Text>
          </View>
        </View>

        <View>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.Paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Text>
          </View>

          <View style={{marginVertical: verticalScale(15)}}>
            <Text style={styles.Paragraph}>
              It was popularised in the with the release of Letraset sheets
              containing Lorem ipsum passages, and more recently with desktop
              publishing software like Adlus PageMaker including versions of
              Lorem ipsum.
            </Text>
          </View>
        </View>

        <View style={{marginVertical: verticalScale(10)}}>
          <CustomButton
            containerRestyle={{width: '100%'}}
            text={'Plan Details'}
          />
        </View>
      </View>
    </View>
  );
};

export default PlanDetailsContent;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: moderateScale(10),
  },

  RedText: {
    fontFamily: Font.Campton600,
    color: Colors.Main,
    fontSize: scale(20),
  },
  LightText: {
    color: Colors.Black,
    fontFamily: Font.CamptonBook,
    fontSize: scale(14),
  },

  Paragraph: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(14),
    color: Colors.Black,
  },
});
