import {StyleSheet, Text, View, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import Header from '../../components/Header';

const Shop = () => {
  const [showCountry, setShowCountry] = useState(false);
  const [showZone, setShowZone] = useState(false);
  const toggleCountry = () => {
    setShowCountry(!showCountry);
    setShowZone(false)

  };

  const toggleZone = () => {
    setShowZone(!showZone);
    setShowCountry(false)
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header
          title={'Choose Destination'}
          description={
            'Select the country or zone where you want to use your Travel Roam bundle.'
          }
        />
        <View style={{paddingHorizontal: moderateScale(25)}}>
          <View style={[styles.container,{
                borderWidth:1,
                borderBottomColor:'red',
                flexDirection:'row',
                height:verticalScale(45)

          }]}>
            <TouchableOpacity onPress={toggleCountry} style={{backgroundColor:'red',flex:1}}>
              <Text style={styles.heading}>Country</Text>
            </TouchableOpacity>
            {showCountry && (
              <Text style={styles.content}>Content for Country</Text>
            )}

            <TouchableOpacity style={{backgroundColor:'red',flex:1}} onPress={toggleZone}>
              <Text style={styles.heading}>Zone</Text>
            </TouchableOpacity>
            {showZone && <Text style={styles.content}>Content for Zone</Text>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      content: {
        fontSize: 18,
        marginBottom: 20,
      },
});
