import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

export default function Home() {
    return(
        <View style={styles.container}>
            <Text>Finge que tem uma tela de home aqui.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})