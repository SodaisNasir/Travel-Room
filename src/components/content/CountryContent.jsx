import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import {Font} from '../../utils/fonts';

const CountryContent = () => {
  DATA = [
    {
      id: 1,
      title: 'United Kingdom',
      img: require('../../assets/images/uk.png'),
    },
    {
      id: 2,
      title: 'United States',
      img: require('../../assets/images/usa.png'),
    },
    {
      id: 3,
      title: 'Germany',
      img: require('../../assets/images/germany.png'),
    },
    {
      id: 4,
      title: 'Canada',
      img: require('../../assets/images/canada.png'),
    },
  ];

  const Item = ({data}) => (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <View style={{height: verticalScale(20), width: scale(25)}}>
          <Image
            resizeMode="contain"
            style={{
              height: '100%',
              width: '100%',
            }}
            source={data.img}
          />
        </View>
        <View style={{marginLeft:moderateScale(8)}}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </View>

      <View
        style={{
          alignSelf: 'center',
          width: scale(25),
          height: verticalScale(25),
        }}>
        <Image
          source={require('../../assets/images/arrow.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      </View>
    </View>
  );

  return (
    <View>
  
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CountryContent;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(75),
    width: '100%',
    backgroundColor: Colors.InputColor,
    borderRadius: scale(4),
    borderColor: Colors.BoxBorder,
    borderWidth: 1,
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: moderateScale(15),
    flexDirection: 'row',
    marginBottom: verticalScale(10),
    alignSelf: 'center',
  },

  title: {
    fontFamily: Font.Campton500,
    fontSize: scale(16),
    color: Colors.GreyText,
  },
  desc: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(16),
    color: Colors.Black,
  },
});
