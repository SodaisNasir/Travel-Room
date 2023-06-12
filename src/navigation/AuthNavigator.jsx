import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateAccount from '../screens/auth/CreateAccount';
import SplashOne from '../screens/Splash/SplashOne';
import Shop from '../screens/HomeScreens/Shop';
import SplashTwo from '../screens/Splash/SplashTwo';
import SplashThree from '../screens/Splash/SplashThree';


const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="splashone">

<Stack.Screen name="createaccount" component={CreateAccount} />
<Stack.Screen name="splashone" component={SplashOne} />
<Stack.Screen name="splashtwo" component={SplashTwo} />
<Stack.Screen name="splashthree" component={SplashThree} />
<Stack.Screen name="shop" component={Shop} />


          

        </Stack.Navigator>
        </NavigationContainer>
      );
    };
    
    export default AuthNavigator;