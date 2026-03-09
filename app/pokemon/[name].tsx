import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const param = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonData();
  });

  const getPokemonData = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${param.name}.png`,
      );
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.log("ocurrio un error");
    }
  };

  return (
    <View>
      <Text>{param.name}</Text>
      {pokemonData && <Text>{JSON.stringify(pokemonData)}</Text>}
    </View>
  );
}
