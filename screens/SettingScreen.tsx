import React, {FunctionComponent} from 'react';
import {Text, View} from "native-base";
import RootLayout from "../components/RootLayout";

interface OwnProps {
    navigation:any
}

type Props = OwnProps;

const SettingScreen: FunctionComponent<Props> = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings</Text>
        </View>
    );
};

export default SettingScreen;
