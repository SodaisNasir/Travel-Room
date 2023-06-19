import {View,Switch} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import { Colors } from '../../utils/colors';


const CustSwitch = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={props.restyleSwitch}>
         <Switch
        trackColor={props.trackColor}
        thumbColor= {props.thumbColor}
        // ios_backgroundColor={ Colors.White}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustSwitch;
