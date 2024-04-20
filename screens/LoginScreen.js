import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);

  useEffect(() => {

    getData();
  }, []);

  const getData = async () => {
    try {

      const savedUsername = await AsyncStorage.getItem('username');
      const savedPassword = await AsyncStorage.getItem('password');
      const savedRemember = await AsyncStorage.getItem('remember');


      if (savedRemember === 'true' && savedUsername && savedPassword) {
        setUsername(savedUsername);
        setPassword(savedPassword);
        setRemember(true);
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados do AsyncStorage:', error);
    }
  };

  const handleLogin = async () => {
    try {

      if (remember) {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('remember', remember.toString());
      } else {

        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('password');
        await AsyncStorage.removeItem('remember');
      }
      
      // Aqui você pode adicionar a lógica para fazer o login
      if (username === 'Fernando' && password === 'CP02Mobile') {
        navigation.navigate('Home');
      } else {
        setError('Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao salvar os dados no AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/LOGOMOBILE2.png')} style={styles.logo} />
        <Text style={[styles.title, { color: '#808080' }]}>Login</Text> 
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TextInput
          style={[styles.input, { borderRadius: 50, marginTop: 50, fontStyle: 'italic' }]}
          placeholder="   Nome de Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, { borderRadius: 50, fontStyle: 'italic' }]}
          placeholder="   Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRemember(!remember)}>
            <View style={[styles.checkbox, remember ? styles.checked : null, { marginLeft: 10 }]}/> 
          </TouchableOpacity>
          <Text style={[styles.rememberText, { color: '#808080', marginLeft: 5 }]}>Lembrar senha</Text> 
        </View>
        <TouchableOpacity style={[styles.enterButton, { width: '100%', marginTop: 50 }]} onPress={handleLogin}> 
          <Text style={styles.enterButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={[styles.forgotPasswordText, { color: '#808080' }]}>Esqueceu a senha? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.forgotPasswordText, styles.link, { color: 'blue' }]}>Recuperar senha</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  contentContainer: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 80,
    width: '100%',
    height: undefined,
    aspectRatio: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#B2BEBF',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B2BEBF',
  },
  checked: {
    backgroundColor: '#ff006c',
  },
  rememberText: {
    fontSize: 16,
  },
  enterButton: {
    backgroundColor: '#ff006c',
    paddingVertical: 10,
    borderRadius: 50,
  },
  enterButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
forgotPasswordContainer: {
  flexDirection: 'row',
  position: 'absolute',
  bottom: 0,
  alignSelf: 'center',
  marginBottom: 20,
},
  forgotPasswordText: {
    fontSize: 16,
  },
  link: {
    color: 'blue',
  },
});
