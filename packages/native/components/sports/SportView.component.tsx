import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import { Sport } from "@taller-ninja/common";

interface Props {
  sport: Sport;
}

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58
  },
  sport: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10
  }
});

export function SportView({ sport }: Props): JSX.Element {
  return (
    <View style={styles.sport}>
      <Image style={styles.logo} source={{ uri: sport.strSportThumb }} />
      <Text>{sport.idSport} Texto fijo</Text>
    </View>
  );
}
