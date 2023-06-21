import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {moderateScale, verticalScale,scale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import StyledBox from '../box/StyledBox';
import { Font } from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';
// import ReactNativeAnimatedSearchbox from 'react-native-animated-searchbox';

const PlanHeader = (props) => {
  const navigation =  useNavigation();

//   openSearchBox = () => refSearchBox.open();

//   //Call for the close
//   closeSearchBox = () => refSearchBox.close();
  return (
    <View style={styles.MainBox}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginTop:verticalScale(5)}}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
          style={{
            height: verticalScale(50),
            width: scale(75),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/images/cancel.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View>
          {/* <ReactNativeAnimatedSearchbox
            // ref={ref => (refSearchBox = ref)}
            placeholder={'Search...'}
          /> */}
        </View>
      </View>

      <View style={{width:'100%',alignItems:'flex-end',flex:1,flexDirection:'row',justifyContent:'space-around',paddingLeft:moderateScale(20)}}>
           

            <TouchableOpacity onPress={props.handleCountry} style={{paddingHorizontal:moderateScale(25)}}>
                <StyledBox
                CurveSize={{height: verticalScale(15)}}
                UpperInnerBox={{
                  backgroundColor: Colors.White,
                  width: '44.1%',
                // width:scale(49)
                
                }}
                RestyleMainBox={{
                  height: verticalScale(25),
                paddingHorizontal: moderateScale(0),
                  paddingBottom: moderateScale(5),
                  borderBottomLeftRadius: scale(0),
                  borderBottomRightRadius: scale(0),
                  backgroundColor: Colors.White,
                //   width:scale(63)
                  width: '55%',
                }}
                Triangle={{borderTopColor: Colors.White}}
                >
                    <View style={{alignItems:'center'}}>
                        <Text style={[styles.HeaderText,{color:Colors.Main}]}>
                            Country
                        </Text>
                    </View>

                </StyledBox>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={props.handleRegion} style={{paddingHorizontal:moderateScale(35)}}>
                <StyledBox
                CurveSize={{height: verticalScale(15)}}
                UpperInnerBox={{
                  backgroundColor: Colors.Main,
                  width: '43.4%',
               
                // width:scale(49)
                }}
                RestyleMainBox={{
                  height: verticalScale(25),
                  //   paddingHorizontal: moderateScale(20),
                  paddingBottom: moderateScale(5),
                  borderBottomLeftRadius: scale(0),
                  borderBottomRightRadius: scale(0),
                  backgroundColor: Colors.Main,
                //   width:scale(63)
                  width: '55%',
                }}
                Triangle={{borderTopColor: Colors.Main}}
                
                >
                   <View style={{alignItems:'center'}}>
                        <Text style={styles.HeaderText}>
                            Region
                        </Text>
                    </View>


                </StyledBox>
            </TouchableOpacity>

            
            <TouchableOpacity  onPress={props.handleWorld} style={{paddingHorizontal:moderateScale(30)}}>
                <StyledBox
                CurveSize={{height: verticalScale(15)}}
                UpperInnerBox={{
                  backgroundColor: props.worldColor,
                  width: '43.5%',
                // width:scale(49)
                }}
                RestyleMainBox={{
                  height: verticalScale(25),
                    // paddingHorizontal: moderateScale(20),
                  paddingBottom: moderateScale(5),
                  borderBottomLeftRadius: scale(0),
                  borderBottomRightRadius: scale(0),
                  backgroundColor: props.worldColor,
                //   width:scale(63)
                  width: '55%',
                }}
                Triangle={{borderTopColor: props.worldColor}}
                
                >
                   <View style={{alignItems:'center'}}>
                        <Text style={styles.HeaderText}>
                            World
                        </Text>
                    </View>


                </StyledBox>
            </TouchableOpacity>
           
          
          

      </View>
    </View>
  );
};

export default PlanHeader;

const styles = StyleSheet.create({
  MainBox: {
    paddingHorizontal: moderateScale(25),
    height: verticalScale(120),
    backgroundColor: Colors.Black,
  },

  HeaderText : {
    color: Colors.White,
    fontFamily: Font.CamptonBook,
    fontSize : scale(11)
  }
});
