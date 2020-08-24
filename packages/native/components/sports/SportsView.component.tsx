import { Text, View } from "react-native";
import React from "react";
import { SportsContainer, Sport } from "@taller-ninja/common";
import { SportView } from "./SportView.component";

interface Props {
  sports: Sport[];
  isLoading?: boolean;
}

export function Sports(): JSX.Element {
  return <SportsContainer SportsView={SportsView} />;
}

function SportsView({ isLoading, sports }: Props): JSX.Element {
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View>
      {sports.map(sport => (
        <SportView sport={sport} key={sport.idSport} />
      ))}
    </View>
  );
}
