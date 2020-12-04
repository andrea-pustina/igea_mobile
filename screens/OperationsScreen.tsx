import React, {FunctionComponent, useState} from 'react';
import {Container, Content, Header} from "native-base";
import CustomList from "../components/CustomList";
import {RefreshControl} from "react-native";

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

const OperationsScreen: FunctionComponent<Props> = (props) => {

    const operations = [
        {
            name: "Mario Rossi",
            data: "11/12/2020"
        },
        {
            name: "Federico Belli",
            data: "15/12/2020"
        },
        {
            name: "Riccardo Valli",
            data: "13/12/2020"
        },
        {
            name: "Valerio Franchi",
            data: "15/12/2020"
        },
        {
            name: "Franco Ricci",
            data: "11/12/2020"
        },
        {
            name: "Giovanni Neri",
            data: "11/12/2020"
        },
        {
            name: "Valerio Addi",
            data: "11/12/2020"
        },
        {
            name: "Riccardo Quercia",
            data: "09/12/2020"
        },
        {
            name: "Marco Testi",
            data: "11/12/2020"
        },
        {
            name: "Francesco Carta",
            data: "11/12/2020"
        },

    ]

    const onOperationSelection = (groupListItem:Record<any, any>) => {
        console.log(`selected ${groupListItem.name}`)
    }

    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh= () =>{

    }

    return (
        <Container>
            <Content>
                <CustomList
                    data={operations}
                    groupIndex={"data"}
                    labelIndex={"name"}
                    onListItemSelection={onOperationSelection}
                />
            </Content>
        </Container>
    );
};

export default OperationsScreen;
