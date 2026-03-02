import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  //function getPokemons2 () {}
  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    //parametro
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
      const response = await fetch(URL, { method: "GET" });

      if (response.ok) {
        console.log("respuesta bien");
      } else {
        console.log("bard request");
      }
    } catch (error) {
      console.log("ocurrio un error");
    }
  };

  return (
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
