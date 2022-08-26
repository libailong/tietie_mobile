import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { ColorSchemeName, Pressable, TabBarIOSItem, Text } from 'react-native';
import HomeScreen from "../screens/homepage/HomepageScreen";
import CoursesScreen from "../screens/courses_page/CoursesScreen";
import ReferralScreen from "../screens/referral_page/ReferralScreen";
import LifeStyleScreen from "../screens/lifestyle_page/LifestyleScreen";
import PersonalScreen from "../screens/personal_page/PersonalScreen";
import CoursesDetail from '../screens/courses_page/courses_detail';

export type RootStackParams = {
    HomeStack: undefined;
    CoursesStack: CoursesStackParams;
    ReferralStack: undefined;
    LifestyleStack: undefined;
    PersonalStack: undefined;
}
const Tab = createBottomTabNavigator<RootStackParams>();

export default function Navigation() {
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name == 'HomeStack') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline'
                            return <IonIcons name={ iconName } size={ size } color={color} />
                        } else if (route.name == 'CoursesStack') {
                            iconName = focused ? 'file-tray-stacked-sharp': 'file-tray-stacked-outline'
                            return <IonIcons name={ iconName } size={ size } color={color} />
                        } else if (route.name == 'ReferralStack') {
                            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline'
                            return <IonIcons name={ iconName } size={ size } color={color} />
                        } else if (route.name == 'LifestyleStack') {
                            iconName = focused ? 'message-settings': 'message-settings-outline';
                            return <MaterialCommunityIcons name={iconName} size={ size } color={color} />
                        } else if (route.name == 'PersonalStack') {
                            iconName = focused ? 'smart-card': 'smart-card-outline';
                            return <MaterialCommunityIcons name={iconName} size={ size } color={color} />
                        }
                    },
                    headerShown: false
                })
            }>
                <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{tabBarLabel: "主页", headerTransparent: true}}/>
                <Tab.Screen name="CoursesStack" component={CoursesStackScreen} options={{tabBarLabel: "学习生活", headerTransparent: true}}/>
                <Tab.Screen name="ReferralStack" component={ReferralStackScreen} options={{tabBarLabel: "求职内推", headerTransparent: true}}/>
                <Tab.Screen name="LifestyleStack" component={LifestyleStackScreen} options={{tabBarLabel: "生活", headerTransparent: true}}/>
                <Tab.Screen name="PersonalStack" component={PersonalStackScreen} options={{tabBarLabel: "个人信息", headerTransparent: true}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
        </HomeStack.Navigator>
    )
}

const CoursesStack = createNativeStackNavigator();
export type CoursesStackParams = {
    Courses: undefined;
    Details: undefined;
}

function CoursesStackScreen() {
    return (
        <CoursesStack.Navigator screenOptions={{ headerTransparent: false }}>
            <CoursesStack.Screen name="Courses" component={CoursesScreen} />
            <CoursesStack.Screen name="Details" component={CoursesDetail} />
        </CoursesStack.Navigator>
    )
}

const ReferralStack = createNativeStackNavigator();

function ReferralStackScreen() {
    return (
        <ReferralStack.Navigator>
            <ReferralStack.Screen name="Referral" component={ReferralScreen}/>
        </ReferralStack.Navigator>
    )
}

const LifestyleStack = createNativeStackNavigator();

function LifestyleStackScreen() {
    return (
        <LifestyleStack.Navigator>
            <LifestyleStack.Screen name="Lifestyle" component={LifeStyleScreen}/>
        </LifestyleStack.Navigator>
    )
}

const PersonalStack = createNativeStackNavigator();

function PersonalStackScreen() {
    return (
        <PersonalStack.Navigator>
            <PersonalStack.Screen name="Personal" component={PersonalScreen}/>
        </PersonalStack.Navigator>
    )
}

