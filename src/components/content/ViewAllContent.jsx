import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import StyledBox from '../box/StyledBox';
import {Colors} from '../../utils/colors';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {Font} from '../../utils/fonts';
import CustomButton from '../buttons/CustomButton';

const ViewAllContent = props => {

  DATA = [
    {
      id: 1,
      country: 'United Kingdom',
      country_img: require('../../assets/images/france_big.png'),
      date_details: '2023-04-14',
      amount: '-£1.50',
      details: '1 GB . 7 Days',
    },
    {
      id: 2,
      country: 'United Kingdom',
      date_details: '2023-04-14',
      country_img: require('../../assets/images/uk_big.png'),
      amount: '-£2.50',
      details: '1 GB . 7 Days',
    },
  ];
  const [more, setMore] = useState();

  const handlePress = id => {
    if (more == id) {
      setMore()
      
    } else {
      
      setMore(id)
    }
  }
  //change paddding
  const Item = ({data}) => (
    <>
      <View
        style={{
          flex: 1,
          marginVertical: verticalScale(15),
        }}>
        <StyledBox
          RestyleMainBox={{
            // height: verticalScale(205),
            paddingHorizontal: moderateScale(20),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'center'}}>
              <View style={{height: verticalScale(30), width: scale(30)}}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={data.country_img}
                />
              </View>
            </View>

            <View style={{left: scale(35)}}>
              <StyledBox
                Main={{width: '100%', alignItems: 'center'}}
                CurveSize={{height: verticalScale(15), width: '60%'}}
                UpperInnerBox={{
                  width: '87%',
                  backgroundColor: Colors.IntroductoryBox,
                }}
                RestyleMainBox={{
                  height: verticalScale(27),
                  width: '60%',
                  backgroundColor: Colors.IntroductoryBox,
                }}
                Triangle={{
                  borderTopColor: Colors.IntroductoryBox,
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.White,
                      fontFamily: Font.CamptonBook,
                      fontSize: scale(12),
                    }}>
                    Introductory
                  </Text>
                </View>
              </StyledBox>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: verticalScale(18),
            }}>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: Font.Campton700,
                  fontSize: scale(18),
                  color: Colors.Black,
                }}>
                {data.country}
              </Text>
            </View>

            <View style={{}}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: Font.Campton700,
                    fontSize: scale(18),
                    color: Colors.Black,
                  }}>
                  {data.amount}
                </Text>
              </View>
              <View style={{marginTop: verticalScale(5)}}>
                <Text
                  style={{
                    fontFamily: Font.CamptonBook,
                    fontSize: scale(12),
                    color: Colors.Black,
                  }}>
                  {data.details}
                </Text>
              </View>

              {/* <StyledBox

                                restyleUpperBox={{ backgroundColor: Colors.Main }}
                                RestyleMainBox={{ width: scale(100), backgroundColor: Colors.Main, height: verticalScale(40) }}>

                            </StyledBox> */}
            </View>
          </View>

          { more == data.id && (
            <View style={{marginVertical : verticalScale(10)}}>
              <View
                style={{flexDirection: 'row'}}>
                <View>
                  <Text style ={styles.ParaText}>Where can I use this bundle?</Text>
                </View>

                <View style={{backgroundColor: 'yellow',flex:1}}></View>
              </View>

              <View style={{marginVertical : verticalScale(15)}}>
                <View>
                  <Text style ={styles.BigText}>Activation</Text>
                </View>

                <View style={{marginTop : verticalScale(10),paddingRight:moderateScale(20)}}> 
                  <Text style ={styles.ParaText}>
                    This bundle must be activated within 30 days. Your bundle
                    will activate automatically once you connect to a network in
                    a country covered by the bundle.
                  </Text>
                </View>
              </View>

              <View style={{}}>
                <View >
                  <Text style ={styles.BigText}>How long is my bundle valid?</Text>
                </View>

                <View style={{marginTop : verticalScale(10),paddingRight : moderateScale(20)}}> 
                  <Text style ={styles.ParaText}>
                    7 days from activation
                  </Text>
                </View>
              </View>
            </View>
          )}

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
              // marginTop: verticalScale(5),
              marginVertical: verticalScale(25),
            }}>
            <CustomButton
              text={'Select'}
              containerRestyle={{
                borderRadius: scale(4),
                width: '45%',
                backgroundColor: Colors.Main,
              }}
            />

            <CustomButton
              text={'Select'}
              onPress={() => handlePress(data.id)}
              containerRestyle={{
                borderRadius: scale(4),
                width: '22%',
                backgroundColor: 'transparent',
                borderColor: Colors.Main,
                borderWidth: 1,
                marginLeft: moderateScale(12),
              }}
            />
          </View>

        
        </StyledBox>
      </View>
    </>
  );

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
      />

      <View style={{marginTop: verticalScale(20), marginLeft: moderateScale(30)}}></View>
    </View>
  );
};

export default ViewAllContent;

const styles = StyleSheet.create({
  BigText : {
    color: Colors.Black,
    fontFamily : Font.Campton700,
    fontSize : scale(18)
    
  },
  ParaText : {
    color: Colors.Black,
    fontFamily : Font.CamptonBook,
    fontSize : scale(14),
  }
});
