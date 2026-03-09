import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

interface pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [results, setResults] = useState<pokemon[]>([]);

  useEffect(() => {
    console.log("entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    //parametro api
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, { method: "GET" });

      if (response.ok) {
        //console.log(response);
        const data = await response.json();
        setResults(data.results);
        //console.log(data);
      } else {
        console.log("bard request");
      }
    } catch (error) {
      console.log("ocurrio un error");
    }
  };

  return (
    <ScrollView>
      {results.map((item) => {
        return (
          <PokemonCard
            key={item.name}
            name={item.name}
            url={item.url}
          ></PokemonCard>
        );
      })}
    </ScrollView>
  );
}
