import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>O seu usuário é: </Text>
        <Text>Fernando{'\n'}</Text>
        <Text style={styles.bold}>A sua senha é: </Text>
        <Text>CP02Mobile</Text>
      </Text>
      <Image source={require('../assets/pato.png')} style={styles.image} />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff006c' }]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});
