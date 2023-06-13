import {StyleSheet, Text, View, FlatList,Image} from 'react-native';
import React from 'react';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import { Font } from '../../utils/fonts';

const ZoneContent = () => {
  DATA = [
    {
      id: 1,
      title: 'London',
      desc: 'Viewall Countries',
    },
    {
      id: 2,
      title: 'London',
      desc: 'Viewall Countries',
    },
    {
      id: 3,
      title: 'London',
      desc: 'Viewall Countries',
    },
    {
      id: 4,
      title: 'London',
      desc: 'Viewall Countries',
    },
  ];

  const Item = ({data}) => (
    <View style={styles.container}>
      <View style={{justifyContent:'center',marginLeft:moderateScale(15)}}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>

      <View style={{alignSelf:'center', width:scale(25),height:verticalScale(25)}}>
        <Image
            source = {require('../../assets/images/arrow.png')}
            resizeMode='contain'
            style={{height:'100%', width:'100%'}}
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

export default ZoneContent;

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
    flexDirection:'row',
    marginVertical:verticalScale(10),
    alignSelf:'center'

  },

  title:{
    fontFamily: Font.Campton700,
    fontSize:scale(16),
    color: Colors.Black
  },
  desc:{
    fontFamily: Font.CamptonBook,
    fontSize:scale(16),
    color: Colors.Black
  }


});
