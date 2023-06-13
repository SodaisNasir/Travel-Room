import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../utils/fonts';
import { Image } from 'react-native';
import { Colors } from '../utils/colors';
import Shop from '../screens/HomeScreens/Shop/Shop';

const BottomNavigator = () => {

    const Tab = createBottomTabNavigator();


    return (

        <Tab.Navigator

            initialRouteName="home"
            screenOptions={{
                tabBarHideOnKeyboard: false,
                tabBarShowLabel: true,
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontFamily: Font.Campton300,

                },
                tabBarStyle: {
                    height: verticalScale(100),
                    width: '90%'

                },
                tabBarActiveTintColor: Colors.Main,
                tabBarInactiveTintColor: '#6B6666',
            }}

        >

            <Tab.Screen
                name="home"
                component={AllHome}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Image
                                source={require('../assets/images/home_active.png')}
                                style={{
                                    height: verticalScale(40),
                                    width: scale(70)
                                }}

                            // style={{marginTop: Platform.OS === 'ios' ? verticalScale(10) : null}}
                            />
                        ) : (
                            <Image
                            source={require('../assets/images/home_active.png')}
                                style={{
                                    height: verticalScale(50),
                                    width: scale(50)
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
    )

};








export default BottomNavigator;

const Stack = createNativeStackNavigator();

function AllHome() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="shop" component={Shop} />

        </Stack.Navigator>
    );
}