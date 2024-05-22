import { router, Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, Platform, View, Image, Pressable, StyleSheet, TextInput, Button } from 'react-native';
import { useSession } from './ctx';
import { ScrollViewStyleReset } from 'expo-router/html';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const logo = require("../assets/images/icon.png")

export default function SignIn() {
    const { signIn } = useSession();
    const [useClick, setClick] = useState(false);
    const { name, setName } = useState("");
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>
                Welcome to Foo-Yoh!
            </Text>
            <View style={styles.inputs}>
            <TextInput style={styles.input} placeholder='Full Name' value={name} onChangeText={setName} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='Email' value={username} onChangeText={setUsername} autoCorrect={false}
                    autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                    autoCapitalize='none' />
            </View>
            <Text
                onPress={() => {
                    signIn();
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace('/');
                }}
                style = {styles.button}>
                Register
            </Text>
            <Link style = {styles.link}  href = "/sign-in">Already have an account? Sign in instead.</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    image: {
        width: 64,
        height: 64,
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        marginTop: 12,
    },
    inputs: {
        gap: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        width: 240,
    },
    input: {
        fontSize: 18,
    },
    button: {
        marginTop: 24,
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 12,
        paddingHorizontal: 36,
        color: 'white',
        backgroundColor: 'orange',
        borderRadius: 12,
    },
    link: {
        marginTop: 10,
        color: "#56C1FF",
        textDecorationLine: 'underline',
    }
});
