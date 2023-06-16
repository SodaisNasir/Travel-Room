import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import NotificationHeader from '../../components/headers/NotificationHeader';
import {Font} from '../../utils/fonts';
import StyledBox from '../../components/box/StyledBox';

DATA = [
  {
    id: 1,
    question: 'What is an eSIM?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
  {
    id: 2,
    question: 'Does my device support eSIM?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
  {
    id: 3,
    question: 'How do I activate my BreatheSIM data bundle?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
  {
    id: 4,
    question: 'Where can I use my data bundle?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
  {
    id: 5,
    question:
      'What if I plan to visit muiltiple countries in multiple continents?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
  {
    id: 6,
    question: 'How long do I have to use my BreatheSIM data bundle?',
    answer:
      'Lorem ipsum is the most well known filler text and comes from various passages of a book from Cicero, written in 45 BC.',
  },
];

const Faq = ({navigation}) => {
  const [expanded1, setExpanded1] = useState();
  const [close, setClose] = useState()

  //     navigation.getParent()?.setOptions({
  //       tabBarStyle: {
  //         display: 'none',
  //       },
  //     });
  //   }, []);

  const handlePress1 = (id) => {
if (expanded1 == id) {
    setExpanded1()
} else {
    setExpanded1(id)
}
    
  };

  const Item = ({data}) => (
    <View style={{marginVertical: verticalScale(10)}}>
      <TouchableOpacity onPress={()=> handlePress1(data.id)}>
        <StyledBox
          CurveSize={{height: verticalScale(15)}}
          UpperInnerBox={{
            backgroundColor: Colors.InputColor,
            width: '96%',
          }}
          RestyleMainBox={{
            height: verticalScale(45),
            //   paddingHorizontal: moderateScale(20),
            paddingBottom: moderateScale(5),

            borderBottomLeftRadius: scale(4),
            borderBottomRightRadius: scale(4),
            backgroundColor: Colors.InputColor,
            width: '100%',
          }}
          Triangle={{borderTopColor: Colors.InputColor}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            
              
            }}>
            <View style={{alignSelf:'center'}}>
              <Text
                style={{
                  fontFamily: Font.CamptonBook,
                  fontSize: scale(14),
                  color: Colors.Black,
                }}>
                {data.question}
              </Text>
            </View>

            <View style={{backgroundColor:'green',width:20}}>

            </View>
          </View>
        </StyledBox>
      </TouchableOpacity>
      {expanded1 == data.id && (
        <View
          style={{
            backgroundColor: Colors.White,
            borderRadius: scale(16),
            paddingHorizontal: 5,
            marginTop: verticalScale(10),
          }}>
          <Text
            style={{
              fontFamily: Font.CamptonBook,
              fontSize: scale(16),
              color: Colors.Black,
            }}>
            {data.answer}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.White}} />
      <View style={{flex: 1, backgroundColor: Colors.White}}>
        <NotificationHeader RestyleHeader={{backgroundColor: Colors.Black}} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.MainBox]}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => <Item data={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainBox: {
    paddingHorizontal: moderateScale(25),
  },
});

export default Faq;
