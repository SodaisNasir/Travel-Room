import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';
import { Font } from '../../utils/fonts';
import { Colors } from '../../utils/colors';
import CustomButton from '../buttons/CustomButton';


const CardsContent = () => {
  // DATA = [
  //   {
  //     id: 1,
  //     title: 'London',
  //     desc: 'Viewall Countries',
  //   },
  //   {
  //     id: 2,
  //     title: 'London',
  //     desc: 'Viewall Countries',
  //   },
  //   {
  //     id: 3,
  //     title: 'London',
  //     desc: 'Viewall Countries',
  //   },
  //   {
  //     id: 4,
  //     title: 'London',
  //     desc: 'Viewall Countries',
  //   },
  // ];

  // const Item = ({data}) => (
  //   <View style={styles.container}>
  //     <View style={{justifyContent:'center',marginLeft:moderateScale(15)}}>
  //       <Text style={styles.title}>{data.title}</Text>
  //       <Text style={styles.desc}>{data.desc}</Text>
  //     </View>

  //     <View style={{alignSelf:'center', width:scale(25),height:verticalScale(25)}}>
  //       <Image
  //           source = {require('../../assets/images/arrow.png')}
  //           resizeMode='contain'
  //           style={{height:'100%', width:'100%'}}
  //       />

  //     </View>
  //   </View>
  // );

  return (
    <View style={{ flex:1}}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <View
          style={{ height: verticalScale(180), width: scale(180),marginRight:moderateScale(20),paddingTop:moderateScale(12) }}>
          <Image
            source={require('../../assets/images/emptywallet.png')}
            resizeMode='contain'

          />
        </View>
        <View>
          <Text style={styles.NoPayText}>No Payment</Text>
          <Text style={styles.NoPayText}>Card Added</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems:'center', paddingTop:moderateScale(10) }}>
        <Text style={styles.NoPayTextTwo}>You don't have any</Text>
        <Text style={styles.NoPayTextTwo}>payment card added.</Text>
        <Text style={styles.NoPayTextTwo}>Tap below to add a new</Text>
        <CustomButton
          text = {'ADD NEW'}
          containerRestyle={{
            backgroundColor: Colors.Main,
            width:'35%',
            marginTop: verticalScale(20),
            // height: verticalScale(60)
          }}
        />

      </View>



      {/* <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default CardsContent;

const styles = StyleSheet.create({
  // container: {
  //   height: verticalScale(75),
  //   width: '100%',
  //   backgroundColor: Colors.InputColor,
  //   borderRadius: scale(4),
  //   borderColor: Colors.BoxBorder,
  //   borderWidth: 1,
  //   justifyContent: 'space-between',
  //   flex: 1,
  //   paddingHorizontal: moderateScale(15),
  //   flexDirection: 'row',
  //   marginVertical: verticalScale(10),
  //   alignSelf: 'center'

  // },

  title: {
    fontFamily: Font.Campton700,
    fontSize: scale(16),
    color: Colors.Black
  },
  desc: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(16),
    color: Colors.Black
  },
  NoPayText: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(20),
    color: Colors.Main

  }
  , NoPayTextTwo: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(20),
    color: Colors.Black

  }

});
