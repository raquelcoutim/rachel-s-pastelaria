import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Space = () => <View style={styles.space} />

export default function Login() {

    const [fontsLoaded, fontError] = useFonts({
        'MadimiOne': require('../fonts/MadimiOne-Regular.ttf')
    })

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>

                <Text style={styles.title}>Email</Text>
                <TextInput placeholder="Digite seu email" style={styles.input} autoCapitalize="none"/>
                <Space />
                <Text style={styles.title}>Senha</Text>
                <TextInput placeholder="Digite sua senha" style={styles.input} secureTextEntry={true} autoCapitalize="none" />
                <Space />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <Space />
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Cadastro')
                }}>
                    <Text style={styles.buttonText}>Não possui uma conta? Cadastre-se!</Text>
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