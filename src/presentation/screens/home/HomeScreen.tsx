import { StyleSheet, Text, View } from "react-native"
import { ActivityIndicator, Button } from "react-native-paper"
import { getPokemons } from "../../../actions/pokemons";
import { useQuery } from "@tanstack/react-query";
import { PokeballBg } from "../../components/ui/PokeballBg";

export const HomeScreen = () => {

    const { isLoading, data = [] } = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => getPokemons(0),
        staleTime: 1000 * 60 * 65, // TODO guarda la data en cache despues de 65 min
    })

    return (
        <View>
            <PokeballBg style={styles.imgPosition} />

        </View>
    )
}

const styles = StyleSheet.create({
    imgPosition: {
        position: "absolute",
        top: -100,
        right: -100
    }
})