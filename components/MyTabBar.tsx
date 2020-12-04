import React, {FunctionComponent} from 'react';
import {TabNavigationState, NavigationHelpers} from '@react-navigation/native';
import {
    BottomTabDescriptorMap,
    BottomTabNavigationEventMap
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {Footer, FooterTab, Button, Icon, Text} from "native-base";

interface OwnProps {
    state: TabNavigationState<Record<string, object | undefined>>,
    descriptors: BottomTabDescriptorMap,
    navigation: NavigationHelpers<Record<string, object | undefined>, BottomTabNavigationEventMap>
}

type Props = OwnProps;


const MyTabBar: FunctionComponent<Props> = (props) => {
    const footerButtons = props.state.routes.map(
        (route, index) => {
            const routeOptions = props.descriptors[route.key].options;
            const isFocused = props.state.index === index;

            const label = routeOptions.tabBarLabel !== undefined ?
                routeOptions.tabBarLabel :
                (routeOptions.title !== undefined ?
                    routeOptions.title :
                    route.name)

            const buttonIcon = routeOptions.tabBarIcon ? routeOptions.tabBarIcon(
                {
                    focused: isFocused,
                    color: "white",
                    size: 27
                }
            ) : null

            const onPress = () => {
                const event = props.navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    props.navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
                props.navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };

            return (
                <Button key={index}
                        vertical
                        active={isFocused}
                        onPress={onPress}
                        onLongPress={onLongPress}
                >
                    {buttonIcon}
                    <Text>{label}</Text>
                </Button>

                // <TouchableOpacity
                //     accessibilityRole="button"
                //     accessibilityState={isFocused ? { selected: true } : {}}
                //     accessibilityLabel={options.tabBarAccessibilityLabel}
                //     testID={options.tabBarTestID}
                //     onPress={onPress}
                //     onLongPress={onLongPress}
                //     style={{ flex: 1 }}
                // >
                //     <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                //         {label}
                //     </Text>
                // </TouchableOpacity>
            );
        }
    )

    return (
        <Footer>
            <FooterTab>
                {footerButtons}
            </FooterTab>
        </Footer>
    );
};

export default MyTabBar;
