import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateAccount from '../screens/auth/CreateAccount';
import SplashOne from '../screens/Splash/SplashOne';
import Shop from '../screens/HomeScreens/Shop/Shop';
import SplashTwo from '../screens/Splash/SplashTwo';
import SplashThree from '../screens/Splash/SplashThree';
import BottomNavigator from './BottomNavigator';
import ZoneContent from '../components/content/ZoneContent';
import CountryContent from '../components/content/CountryContent';
import Payment from '../screens/HomeScreens/Payment/Payment';
import CardsContent from '../components/content/CardsContent';
import ViewAllContent from '../components/content/ViewAllContent';
import ViewAllCountries from '../screens/HomeScreens/Shop/ViewAllCountries';
import Bundle from '../screens/HomeScreens/Bundle/Bundle';
import PaymentMain from '../screens/HomeScreens/Payment/PaymentMain';
import Faq from '../screens/More/Faq';
import PlanDetails from '../screens/HomeScreens/Payment/PlanDetails';
import HomeNoContent from '../screens/HomeScreens/Home/HomeNoContent';
import HomeCurrentBundle from '../components/content/HomeCurrentBundle';
import HomeOne from '../screens/HomeScreens/Home/HomeOne';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeOne">
        <Stack.Screen name="createaccount" component={CreateAccount} />
        <Stack.Screen name="splashone" component={SplashOne} />
        <Stack.Screen name="splashtwo" component={SplashTwo} />
        <Stack.Screen name="splashthree" component={SplashThree} />
        <Stack.Screen name="shop" component={Shop} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="CardsContent" component={CardsContent} />
        <Stack.Screen name="zonecontent" component={ZoneContent} />
        <Stack.Screen name="countrycontent" component={CountryContent} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="ViewAllContent" component={ViewAllContent} />
        <Stack.Screen name="viewallcountries" component={ViewAllCountries} />
        <Stack.Screen name="bundle" component={Bundle} />
        <Stack.Screen name="paymentmain" component={PaymentMain} />
        <Stack.Screen name="faq" component={Faq} />
        <Stack.Screen name="plandetails" component={PlanDetails} />
        <Stack.Screen name="homenocontent" component={HomeNoContent} />
        <Stack.Screen name="HomeCurrentBundle" component={HomeCurrentBundle} />
        <Stack.Screen name="HomeOne" component={HomeOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
