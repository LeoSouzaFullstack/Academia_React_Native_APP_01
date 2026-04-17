import React, { useState } from 'react';
import {

View,
Text,
TextInput,
TouchableOpacity,
StyleSheet,
Alert,
} from 'react-native';

export default function LoginScreen({ navigation }) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
    if (!name || !email || !password) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
    }

    if (!email.includes('@')) {
        Alert.alert('Erro', 'Email inválido');
        return;
    }

    if (password.length < 6) {
        Alert.alert('Erro', 'Senha deve ter no mínimo 6 caracteres');
        return;
    }

    navigation.replace('Home');
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
        />

        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />

        <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
},
title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
},
input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
},
button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
});