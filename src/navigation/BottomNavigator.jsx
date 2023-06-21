import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../utils/fonts';
import {Image} from 'react-native';
import {Colors} from '../utils/colors';
import Shop from '../screens/HomeScreens/Shop/Shop';
import Bundle from '../screens/HomeScreens/Bundle/Bundle';
import PaymentMain from '../screens/HomeScreens/Payment/PaymentMain';
import Faq from '../screens/More/Faq';
import HomeOne from '../screens/HomeScreens/Home/HomeOne';
import HomeNoContent from '../screens/HomeScreens/Home/HomeNoContent';
import ViewAllCountries from '../screens/HomeScreens/Shop/ViewAllCountries';
import PlanDetails from '../screens/HomeScreens/Payment/PlanDetails';
import Payment from '../screens/HomeScreens/Payment/Payment';
import ViewAllContent from '../components/content/ViewAllContent';
import BundleSummary from '../screens/HomeScreens/Payment/BundleSummary';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="homeone"
      screenOptions={{
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontSize: 15,
          fontFamily: Font.Campton300,
        },
        tabBarStyle: {
          height: verticalScale(50),
          width: '90%',
        },
        tabBarActiveTintColor: Colors.Main,
        tabBarInactiveTintColor: '#6B6666',
      }}>
      <Tab.Screen
        name="homescreen"
        component={AllHome}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(40),
                  width: scale(40),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ) : (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(50),
                  width: scale(50),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ),
        }}
      />

      <Tab.Screen
        name="bundlescreen"
        component={AllBundle}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/bundle_active.png')}
                style={{
                  height: verticalScale(40),
                  width: scale(40),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ) : (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(50),
                  width: scale(50),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="shopscreen"
        component={AllShop}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/shop_active.png')}
                style={{
                  height: verticalScale(40),
                  width: scale(40),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ) : (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(50),
                  width: scale(50),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="paymentscreen"
        component={AllPayment}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/payment_active.png')}
                style={{
                  height: verticalScale(40),
                  width: scale(40),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ) : (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(50),
                  width: scale(50),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ),
        }}
      />

      <Tab.Screen
        name="morescreen"
        component={AllMore}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/images/more_active.png')}
                style={{
                  height: verticalScale(40),
                  width: scale(40),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ) : (
              <Image
                source={require('../assets/images/home_active.png')}
                style={{
                  height: verticalScale(50),
                  width: scale(50),
                }}

                // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
              />
            ),
        }}
      />

      {/* <Tab.Screen
                name="bunldle"
                component={AllDashboard}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <HomeActive
                                style={{
    
                                }}
    
                            // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
                            />
                        ) : (
                            <HomeDeActive
    
                                style={{}}
    
                            />
                        ),
    
                }}
            /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}
     initialRouteName="homenocontent">
      <Stack.Screen name="homeone" component={HomeOne} />
      <Stack.Screen name="homenocontent" component={HomeNoContent} />
    </Stack.Navigator>
  );
}

function AllBundle() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}
     initialRouteName="bundle">
      <Stack.Screen name="bundle" component={Bundle} />
    </Stack.Navigator>
  );
}

function AllShop() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} 
    initialRouteName="shop">
      <Stack.Screen name="shop" component={Shop} />
      <Stack.Screen name="viewallcountries" component={ViewAllCountries} />
    </Stack.Navigator>
  );
}

function AllPayment() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} 
    initialRouteName="payment">
      <Stack.Screen name="payment" component={PaymentMain} />
      <Stack.Screen name="plandetails" component={PlanDetails} />
      <Stack.Screen name="paymentoptions" component={Payment} />
      <Stack.Screen name="bundlesummary" component={BundleSummary} />
    </Stack.Navigator>
  );
}

function AllMore() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} 
    initialRouteName="more">
      <Stack.Screen name="more" component={Faq} />
    </Stack.Navigator>
  );
}
