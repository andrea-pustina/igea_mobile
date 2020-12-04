import React, {FunctionComponent, ReactFragment} from 'react';
import {Content, Icon, Left, List, ListItem, Right, Text} from "native-base";
import {groupBy} from "../utils/ArrayUtils";


interface OwnProps {
    data: Record<any, any>[],
    labelIndex: string,
    groupIndex?: string,
    onListItemSelection(groupListItem: Record<any, any>): void,
}

type Props = OwnProps;


const CustomList: FunctionComponent<Props> = (props) => {
    const listItems: ReactFragment[] = []

    // group data items in a dictionary by value of dataItem[props.groupIndex]
    let groupedData: Record<any, Record<any, any>[]>;
    if (props.groupIndex != null) {
        // @ts-ignore
        groupedData = groupBy(props.data, (dataItem) => dataItem[props.groupIndex])
    } else {
        // if groupIndex is undefined create a dummy group with all data inside
        groupedData = {"allinonegroup": props.data}
    }

    const sortedGroupNames = Object.keys(groupedData).sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })

    sortedGroupNames.forEach((groupName, indexGroup) => {
        if (groupName != "allinonegroup") {
            listItems.push(
                <ListItem itemDivider={true} key={indexGroup}>
                    <Text>{groupName}</Text>
                </ListItem>
            )
        }

        const groupItems = groupedData[groupName].sort(
            (a, b) => {
                if (a[props.labelIndex] > b[props.labelIndex]) {
                    return 1
                } else {
                    return -1
                }
            }
        );

        groupItems.forEach((groupListItem, indexItem) => {
            if (props.labelIndex in groupListItem) {
                listItems.push(
                    <ListItem
                        key={`${indexGroup}.${indexItem}`}
                        onPress={e => props.onListItemSelection(groupListItem)}
                    >
                        <Left>
                            <Text>{groupListItem[props.labelIndex]}</Text>
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


        <Content>
            <List>
                {
                    listItems
                }
            </List>
        </Content>
    );
};

export default CustomList;
