import React, {FunctionComponent} from 'react';
import {Text} from "native-base";

interface OwnProps {
    navigation:any
}

type Props = OwnProps;

const PatientsScreen: FunctionComponent<Props> = (props) => {

  return (

          <Text>Patients</Text>

  );
};

export default PatientsScreen;
