import React, { useState } from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "react-navigation-hooks";

import { Screen, Header, Button } from "../../../index";
import { color, spacing } from "../../../../theme";
import Picker from "../../../atoms/picker/picker";
import { registerActions } from "../../../../actions/register.actions";
import { RegisterScreenProps } from "./step-one";
import { Text } from "../../../atoms/text/text";

const FULL: ViewStyle = { flex: 1, backgroundColor: "white" };
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: "Montserrat",
};

const BOLD: TextStyle = { fontWeight: "bold" };

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
};

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
};
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  textAlign: "left",
};

export interface RegisterStepThreeScreenProps extends RegisterScreenProps {
  setUserData: (data: IData) => void;
}

interface IData {
  workDivision: string;
}

const RegisterStepThree = (props: RegisterStepThreeScreenProps) => {
  const { navigation, userData, setUserData } = props;
  const [workPlaces] = useState([
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
  ]);
  const [workDivision, setWorkDivision] = useState(
    userData.workDivision || "0"
  );

  const navigateToNextStep = () => {
    navigation.navigate("registerStepFour");
  };

  const handleNavigate = () => {
    setUserData({ workDivision });
    navigateToNextStep();
  };
  const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
  return (
    <View style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}
      >
        <Header
          headerText="L’Oréal vous souhaite la bienvenue sur l’app MADU"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Text>
          Renseignez le département dans lequel vous travaillez, pour découvrir
          et réaliser des défis écoresponsables avec vos collègues.
        </Text>
        <Picker
          placeholder="Département un département"
          label="Lieu de travail"
          selectedValue={workDivision}
          onValueChange={(itemValue: string) => setWorkDivision(itemValue)}
          items={workPlaces}
        />
        <Button text="suivant" onPress={handleNavigate} />
      </Screen>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  userData: state.register,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUserData: (data: IData) => dispatch(registerActions.setUserData(data)),
});

export const RegisterStepThreeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterStepThree);
