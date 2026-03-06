import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const param = useLocalSearchParams();

  return (
    <View>
      <Text>{param.name}</Text>
    </View>
  );
}
