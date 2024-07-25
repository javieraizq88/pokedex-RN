import { Text, View } from "react-native"
import { Button } from "react-native-paper"
import { getPokemons } from "../../../actions/pokemons";

export const HomeScreen = () => {

    getPokemons(); 
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                mode="contained"
                onPress={() => console.log("pressed")}
            >
                Press me
            </Button>
        </View>
    )
}