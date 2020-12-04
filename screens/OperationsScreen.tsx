import React, {FunctionComponent} from 'react';
import {Container, Content, Header} from "native-base";
import GroupedList from "../components/GroupedList";

interface OwnProps {
    navigation: any
}

type Props = OwnProps;

const OperationsScreen: FunctionComponent<Props> = (props) => {

    const operations = {
        "11/12/2020": [
            {name: "Mario Rossi"},
            {name: "Franco Ricci"}
        ],
        "12/12/2020": [
            {name: "Mario Rossi"}
        ],
        "13/12/2020": [
            {name: "Mario Rossi"}
        ],
    }

    const onOperationSelection = (groupListItem:Record<any, any>) => {
        console.log(`selected ${groupListItem.name}`)
    }

    return (
        <Container>
            <Content>
                <GroupedList
                    data={operations}
                    visualizedDataIndex={"name"}
                    onListItemSelection={onOperationSelection}
                />
            </Content>
        </Container>


        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //     <Text>Operations</Text>
        // </View>
    );
};

export default OperationsScreen;
