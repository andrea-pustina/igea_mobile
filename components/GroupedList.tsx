import React, {FunctionComponent, ReactFragment} from 'react';
import {Content, Icon, Left, List, ListItem, Right, Text} from "native-base";
import {View} from "react-native";


interface OwnProps {
    data: { [groupName: string]: Record<any, any>[] },
    visualizedDataIndex: any,
    onListItemSelection(groupListItem:Record<any, any>): void
}

type Props = OwnProps;

const GroupedList: FunctionComponent<Props> = (props) => {
    const listItems: ReactFragment[] = []

    const groupNames = Object.keys(props.data).sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })

    groupNames.forEach((groupName, indexGroup) => {
        // list items are grouped by groupName of data
        listItems.push(
            <ListItem itemDivider={true} key={indexGroup}>
                <Text>{groupName}</Text>
            </ListItem>
        )

        const groupListItems = props.data[groupName].sort((a, b) => {
            if (a[props.visualizedDataIndex] > b[props.visualizedDataIndex]) {
                return 1
            } else {
                return -1
            }
        });

        groupListItems.forEach((groupListItem, indexItem) => {
            if (props.visualizedDataIndex in groupListItem) {
                listItems.push(
                    <ListItem
                        key={`${indexGroup}.${indexItem}`}
                        onPress={e => props.onListItemSelection(groupListItem)}
                    >
                        <Left>
                            <Text>{groupListItem[props.visualizedDataIndex]}</Text>
                        </Left>
                        <Right>
                            <Icon
                                name="arrow-forward"
                            />
                        </Right>
                    </ListItem>
                )
            } else {
                console.log("One element in data not contains visualizedDataIndex")
            }
        })

    })

    return (


        <View>
            <List>
                {
                    listItems
                }
                {/*<ListItem itemDivider={true}>*/}
                {/*    <Text>AAA</Text>*/}
                {/*</ListItem>*/}
                {/*<ListItem>*/}
                {/*    <Text>Andrea</Text>*/}
                {/*</ListItem>*/}
            </List>
        </View>
    );
};

export default GroupedList;
