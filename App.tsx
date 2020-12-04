import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperationsScreen from "./screens/OperationsScreen";
import PatientsScreen from "./screens/PatientsScreen";
import SettingScreen from "./screens/SettingScreen";
import {Header, Body, Title, Icon, Left, Right} from "native-base";
import {useEffect, useState} from "react";
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {AppLoading} from "expo";

const Tab = createBottomTabNavigator();

export default function App() {

    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            setIsReady(true);
        }
        loadData();
    });

    return (
        <>
            {
                !isReady ? (
                    <AppLoading/>
                ) : (
                    <NavigationContainer>
                        {/*<Header>*/}
                        {/*    <Left>*/}
                        {/*        <Icon name={'eyedrop'}/>*/}
                        {/*    </Left>*/}
                        {/*    <Body>*/}
                        {/*        <Title>Header</Title>*/}
                        {/*    </Body>*/}
                        {/*    <Right></Right>*/}
                        {/*</Header>*/}
                        <Tab.Navigator>
                            <Tab.Screen name="Operations"
                                        component={OperationsScreen}
                                        options={{
                                            tabBarLabel: "Interventi",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"car"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                            />
                            <Tab.Screen name="Patients"
                                        component={PatientsScreen}
                                        options={{
                                            tabBarLabel: "Pazienti",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"man"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                            />
                            <Tab.Screen name="Settings"
                                        component={SettingScreen}
                                        options={{
                                            tabBarLabel: "Impostazioni",
                                            tabBarIcon: ({focused, color, size}) => {
                                                return <Icon name={"settings"} fontSize={size} style={{color: color}}/>
                                            }
                                        }}
                            />
                        </Tab.Navigator>
                    </NavigationContainer>
                )
            }
        </>

    );
}
