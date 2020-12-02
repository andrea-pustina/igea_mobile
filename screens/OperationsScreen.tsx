import React, {FunctionComponent} from 'react';
import {View, Text} from "native-base";
import RootLayout from "../components/RootLayout";

interface OwnProps {
    navigation:any
}

type Props = OwnProps;

const OperationsScreen: FunctionComponent<Props> = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Operations</Text>
        </View>
    );
};

export default OperationsScreen;
