import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperationsScreen from "./screens/OperationsScreen";
import PatientsScreen from "./screens/PatientsScreen";
import SettingScreen from "./screens/SettingScreen";
import {Body, Container, Content, Header, Icon, Left, Right, StyleProvider, Title} from "native-base";
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import MyTabBar from "./components/MyTabBar";


const Tab = createBottomTabNavigator();

export default function App() {

    const [isReady, setIsReady] = useState<boolean>(false);

    useEffect(() => {
        const loadData = async () => {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                //...Ionicons.font,
                Ionicons: require("native-base/Fonts/Ionicons.ttf")
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
                        <Container >
                            <Header>
                                <Left>
                                </Left>
                                <Body>
                                    <Title>IgeaCloud</Title>
                                </Body>
                                <Right>
                                </Right>
                            </Header>

                            <Tab.Navigator
                                tabBar={props => <MyTabBar {...props} />}
                            >
                                <Tab.Screen name="Operations"
                                            component={OperationsScreen}
                                            options={{
                                                tabBarLabel: "Interventi",
                                                tabBarIcon: ({focused, color, size}) => {
                                                    return <Icon name={"car"}/>
                                                }
                                            }}
                                />
                                <Tab.Screen name="Patients"
                                            component={PatientsScreen}
                                            options={{
                                                tabBarLabel: "Pazienti",
                                                tabBarIcon: ({focused, color, size}) => {
                                                    return <Icon name={"man"}/>
                                                }
                                            }}
                                />
                                <Tab.Screen name="Settings"
                                            component={SettingScreen}
                                            options={{
                                                tabBarLabel: "Impostazioni",
                                                tabBarIcon: ({focused, color, size}) => {
                                                    return <Icon name={"settings"}/>
                                                }
                                            }}
                                />
                            </Tab.Navigator>

                        </Container>
                    </NavigationContainer>
                )
            }
        </>

    );
}
