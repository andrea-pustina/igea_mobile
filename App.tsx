import React, {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import RootPage from "./components/RootPage";
import {AppLoading} from "expo";


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
                isReady?(
                    <RootPage/>
                ) :(
                    <AppLoading/>
                )
            }
        </>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
