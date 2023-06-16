import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import React, {useState} from 'react';
import {Colors} from '../../../utils/colors';
import {Font} from '../../../utils/fonts';
import StyledBox from '../../../components/box/StyledBox';
import CustomButton from '../../../components/buttons/CustomButton';

const PaymentMain = () => {
  const [backgroundColor, setbackgroundColor] = useState(Colors.InputColor);
  const [textColor, settextColor] = useState(Colors.Black);
//   const [select, setSelect] = useState(true);
  onTap = () => {
    setbackgroundColor(Colors.Main);
    settextColor(Colors.White);
    // setSelect(true);
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.White, flex: 1}}>
      <View style={styles.Container}>
        <View
          style={{
            height: verticalScale(180),
          }}>
          <Image
            source={require('../../../assets/images/meter.png')}
            resizeMode="contain"
            style={{height: '100%', width: '100%'}}
          />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: '15%',
              left: '37%',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: Font.Campton700,
                  fontSize: scale(34),
                  color: Colors.Black,
                }}>
                {' '}
                1GB
              </Text>

              <Text
                style={{
                  fontFamily: Font.Campton300,
                  fontSize: scale(12),
                  color: Colors.Black,
                }}>
                {' '}
                of 4GB used
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: verticalScale(10),

            paddingHorizontal: moderateScale(15),
          }}>
          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.VailidityText}>Validity</Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.ValidityInner}>24 Days</Text>
            </View>
          </View>

          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.VailidityText}>Speed</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.ValidityInner}>4G</Text>
            </View>
          </View>

          <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.VailidityText}>Service</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.ValidityInner}>Data</Text>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: moderateScale(25)}}>
          <View style={{marginVertical: verticalScale(10)}}>
            <Text
              style={{
                fontSize: scale(12),
                fontFamily: Font.Campton500,
                color: Colors.Black,
              }}>
              Latest Additions:
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <StyledBox
                CurveSize={{height: verticalScale(15)}}
                UpperInnerBox={{
                  backgroundColor: Colors.Main,
                  width: scale(61.2),
                }}
                RestyleMainBox={{
                  height: verticalScale(65),
                  //   paddingHorizontal: moderateScale(20),
                  paddingBottom: moderateScale(5),

                  borderBottomLeftRadius: scale(4),
                  borderBottomRightRadius: scale(4),
                  backgroundColor: Colors.Main,
                  width: scale(75),
                }}
                Triangle={{borderTopColor: Colors.Main}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={styles.BoxText}>DEC 5</Text>

                  <Text style={styles.BoxTextTwo}>£50</Text>
                </View>
              </StyledBox>

              <TouchableOpacity
                onPress={() => onTap}
                style={{justifyContent: 'flex-end'}}>
                <StyledBox
                  CurveSize={{height: verticalScale(15)}}
                  UpperInnerBox={{
                    backgroundColor: backgroundColor,
                    width: scale(61),
                  }}
                  RestyleMainBox={{
                    height: verticalScale(35),
                    paddingBottom: moderateScale(2),
                    borderBottomLeftRadius: scale(4),
                    borderBottomRightRadius: scale(4),
                    backgroundColor: backgroundColor,
                    width: scale(75),
                  }}
                  Triangle={{borderTopColor: backgroundColor}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View style={{top: scale(1)}}>
                      <Text style={styles.BoxText}>DEC 5</Text>
                    </View>

                    <Text style={styles.BoxTextTwo}>£50</Text>
                  </View>
                </StyledBox>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => onTap}
                style={{justifyContent: 'flex-end'}}>
                <StyledBox
                  CurveSize={{height: verticalScale(15)}}
                  UpperInnerBox={{
                    backgroundColor: backgroundColor,
                    width: scale(61),
                  }}
                  RestyleMainBox={{
                    height: verticalScale(45),
                    paddingBottom: moderateScale(2),
                    borderBottomLeftRadius: scale(4),
                    borderBottomRightRadius: scale(4),
                    backgroundColor: backgroundColor,
                    width: scale(75),
                  }}
                  Triangle={{borderTopColor: backgroundColor}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View style={{top: scale(1)}}>
                      <Text style={styles.BoxText}>DEC 5</Text>
                    </View>

                    <Text style={styles.BoxTextTwo}>£50</Text>
                  </View>
                </StyledBox>
              </TouchableOpacity>

              <View style={{justifyContent: 'flex-end'}}>
                <StyledBox
                  CurveSize={{height: verticalScale(15)}}
                  UpperInnerBox={{
                    backgroundColor: Colors.InputColor,
                    width: scale(61),
                  }}
                  RestyleMainBox={{
                    height: verticalScale(55),
                    paddingBottom: moderateScale(2),
                    borderBottomLeftRadius: scale(4),
                    borderBottomRightRadius: scale(4),
                    backgroundColor: Colors.InputColor,
                    width: scale(75),
                  }}
                  Triangle={{borderTopColor: Colors.InputColor}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View style={{top: scale(1)}}>
                      <Text style={styles.BoxText}>DEC 5</Text>
                    </View>

                    <Text style={styles.BoxTextTwo}>£50</Text>
                  </View>
                </StyledBox>
              </View>

              <View style={{justifyContent: 'flex-end'}}>
                <StyledBox
                  CurveSize={{height: verticalScale(15)}}
                  UpperInnerBox={{
                    backgroundColor: Colors.InputColor,
                    width: scale(61.2),
                  }}
                  RestyleMainBox={{
                    height: verticalScale(25),
                    paddingTop: moderateScale(1),
                    borderBottomLeftRadius: scale(4),
                    borderBottomRightRadius: scale(4),
                    backgroundColor: Colors.InputColor,
                    width: scale(75),
                  }}
                  Triangle={{borderTopColor: Colors.InputColor}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <View style={{top: scale(1)}}>
                      <Text style={styles.BoxText}>DEC 5</Text>
                    </View>

                    <Text style={styles.BoxTextTwo}>£50</Text>
                  </View>
                </StyledBox>
              </View>
            </ScrollView>
          </View>

          <View style={{marginVertical: verticalScale(20)}}>
            <CustomButton
              containerRestyle={{width: '100%', height: verticalScale(60)}}
              text={'Top up your Balance'}
            />
          </View>

          <View style={{marginTop: verticalScale(10)}}>
            <View>
              <Text
                style={{
                  fontFamily: Font.Campton600,
                  color: Colors.Black,
                  fontSize: scale(13),
                }}>
                Services
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: verticalScale(15),
                // backgroundColor:'red',
                width: '90%',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: verticalScale(50),
                    width: scale(42),
              
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/person.png')}
                    resizeMode="contain"
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: moderateScale(8),
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.CamptonBook,
                      color: Colors.Black,
                      fontSize: scale(12),
                    }}>
                    Name
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font.Campton700,
                      color: Colors.Main,
                      fontSize: scale(14),
                    }}>
                    2.48 GB
                  </Text>
                </View>
              </View>

              <View style={{flexDirection: 'row',alignItems:'center'}}>
                <View
                  style={{
                    backgroundColor: Colors.InputColor,
                    borderRadius: scale(50),
                    width: scale(37),
                    height: verticalScale(38),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      backgroundColor: 'green',
                      borderWidth: 2,
                      borderColor: 'transparent',
                      height: verticalScale(9),
                      width: scale(9),
                      borderRadius: scale(50),
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: moderateScale(8),
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.Campton500,
                      color: '#b3b5b7',
                      fontSize: scale(12),
                    }}>
                    Name
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font.Campton700,
                      color: Colors.Main,
                      fontSize: scale(14),
                    }}>
                    1.08 GB
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentMain;

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: moderateScale(25),
  },

  VailidityText: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(12),
    color: Colors.Black,
  },

  ValidityInner: {
    fontFamily: Font.Campton700,
    fontSize: scale(16),
    color: Colors.Main,
  },

  BoxText: {
    fontFamily: Font.CamptonBook,
    fontSize: scale(12),
    color: Colors.Black,
  },
  BoxTextTwo: {
    fontFamily: Font.Campton700,
    fontSize: scale(18),
    color: Colors.Black,
  },
});
