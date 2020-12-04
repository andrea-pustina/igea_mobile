import React, {FunctionComponent} from 'react';
import {Container, Content, Header} from "native-base";
import CustomList from "../components/CustomList";

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
    ]

    const onOperationSelection = (groupListItem:Record<any, any>) => {
        console.log(`selected ${groupListItem.name}`)
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
