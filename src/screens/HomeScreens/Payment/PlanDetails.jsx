import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/colors';
import PlanHeader from '../../../components/headers/PlanHeader';
import PlanDetailsContent from '../../../components/content/PlanDetailsContent';
import ViewAllContent from '../../../components/content/ViewAllContent';
import UpperBox from '../../../components/box/UpperBox';

const PlanDetails = () => {
  const [menu, setMenu] = useState('country');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <PlanHeader
        handleCountry={() => setMenu('country')}
        handleRegion={() => setMenu('region')}
        handleWorld={() => setMenu('world')}
      
      
        worldColor={Colors.Main}
      />
      <UpperBox restyleUpperBox={{backgroundColor: Colors.Black}} />

      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.Container}>
        {menu == 'country' ? (
          <PlanDetailsContent  />
        ) : null}
        {menu == 'region' ? <PlanDetailsContent /> : null}
        {menu == 'world' ? (
          <PlanDetailsContent  />
        ) : null}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanDetails;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: moderateScale(25),
  },
});
