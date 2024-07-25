import { Text, View } from "react-native"
import { ActivityIndicator, Button } from "react-native-paper"
import { getPokemons } from "../../../actions/pokemons";
import { useQuery } from "@tanstack/react-query";

export const HomeScreen = () => {

    const { isLoading, data } = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => getPokemons(),
        staleTime: 1000 * 60 * 65, // TODO guarda la data en cache despues de 65 min
    })

    return (
        <View>
            <Text>HomeScreen</Text>

            {
                isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <Button
                        mode="contained"
                        onPress={() => console.log("pressed")}
                    >
                        Press me
                    </Button>
                )
            }

        </View>
    )
}