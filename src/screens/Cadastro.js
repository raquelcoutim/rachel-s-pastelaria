import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Space = () => <View style={styles.space} />

export default function Cadastro() {

    const [fontsLoaded, fontError] = useFonts({
        'MadimiOne': require('../fonts/MadimiOne-Regular.ttf')
    })
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>

                <Text style={styles.title}>Nome de usuário</Text>
                <TextInput placeholder="Digite seu nome de usuário" style={styles.input} />
                <Space />
                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email" style={styles.input} />
                <Space />
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha" style={styles.input} />
                <Space />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        height: 50,
        width: 270,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f04c24',
        color: '#fff',
        borderRadius: 5,
    },
    space: {
        marginVertical: 20
    },
    title: {
        fontFamily: 'MadimiOne',
        fontSize: 20,

    },
    buttonText: {
        fontFamily: 'MadimiOne',
        color: "#fff"
    },
    input: {
        borderWidth: 1,
        height: 40,
        padding: 10
    }
})