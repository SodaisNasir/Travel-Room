import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import {moderateScale, verticalScale,scale} from 'react-native-size-matters';
import {Colors} from '../../utils/colors';
import StyledBox from '../box/StyledBox';
import { Font } from '../../utils/fonts';
// import ReactNativeAnimatedSearchbox from 'react-native-animated-searchbox';

const PlanHeader = (props) => {

//   openSearchBox = () => refSearchBox.open();

//   //Call for the close
//   closeSearchBox = () => refSearchBox.close();
  return (
    <View style={styles.MainBox}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
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
        </View>

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
                  backgroundColor: props.countryColor,
                  width: '44.1%',
                // width:scale(49)
                
                }}
                RestyleMainBox={{
                  height: verticalScale(25),
                paddingHorizontal: moderateScale(0),
                  paddingBottom: moderateScale(5),
                  borderBottomLeftRadius: scale(4),
                  borderBottomRightRadius: scale(4),
                  backgroundColor: props.countryColor,
                //   width:scale(63)
                  width: '55%',
                }}
                Triangle={{borderTopColor: props.countryColor}}
                >
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.HeaderText}>
                            Country
                        </Text>
                    </View>

                </StyledBox>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={props.handleRegion} style={{paddingHorizontal:moderateScale(35)}}>
                <StyledBox
                CurveSize={{height: verticalScale(15)}}
                UpperInnerBox={{
                  backgroundColor: props.regionColor,
                  width: '43.4%',
                // width:scale(49)
                }}
                RestyleMainBox={{
                  height: verticalScale(25),
                  //   paddingHorizontal: moderateScale(20),
                  paddingBottom: moderateScale(5),
                  borderBottomLeftRadius: scale(4),
                  borderBottomRightRadius: scale(4),
                  backgroundColor: props.regionColor,
                //   width:scale(63)
                  width: '55%',
                }}
                Triangle={{borderTopColor: props.regionColor}}
                
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
                  borderBottomLeftRadius: scale(4),
                  borderBottomRightRadius: scale(4),
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
