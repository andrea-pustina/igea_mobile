import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OperationsScreen from "./screens/OperationsScreen";
import PatientsScreen from "./screens/PatientsScreen";
import SettingScreen from "./screens/SettingScreen";
import {Icon} from "native-base";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                // tabBar={props => <MyTabBar {...props} />}
                screenOptions={({route}) => (
                    {
                        tabBarIcon: ({focused, color, size}) => {

                            let iconName:string;
                            switch (route.name){
                                case "Operations": {
                                    iconName = "car"
                                    break;
                                }
                                case "Patients": {
                                    iconName = "man"
                                    break;
                                }
                                case "Settings": {
                                    iconName = "settings"
                                    break;
                                }
                                default: {
                                    iconName = "question"
                                    break;
                                }
                            }

                            return <Icon name={iconName} fontSize={size} style={{color:color}} />;
                        }
                    }
                )}
            >
                <Tab.Screen name="Operations" component={OperationsScreen}/>
                <Tab.Screen name="Patients" component={PatientsScreen}/>
                <Tab.Screen name="Settings" component={SettingScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
