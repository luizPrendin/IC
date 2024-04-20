import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
      <Header title="Sobre" navigation={navigation} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Exemplo de uso dos recursos solicitados no CP02 de Mobile</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.title}>Utilização dos hooks useContext, useEffect e useState</Text>
          <Text style={styles.description}>Os hooks useState e useEffect são essenciais para o funcionamento desta tela. O useState é usado para gerenciar o 
          estado dos campos de título e descrição das anotações, bem como para controlar a visibilidade do modal de criação de novas anotações. 
          Já o useEffect é utilizado para carregar os dados das anotações previamente salvas ao iniciar a tela.</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/effect400px.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.title}>Utilização do AsyncStorage para armazenamento local</Text>
          <Text style={styles.description}>O AsyncStorage é uma ferramenta poderosa para armazenar dados localmente em um aplicativo React Native. Neste componente, ele é 
          utilizado para salvar e recuperar os dados das anotações, garantindo que elas sejam preservadas mesmo quando o aplicativo é fechado ou reiniciado. 
          Isso é feito nas funções getData, handleSaveCard e handleDeleteCard, onde os dados são lidos, salvos e atualizados, respectivamente, no AsyncStorage.</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/async400px.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.section}>
          <Text style={styles.title}>Utilização do React Navigation</Text>
          <Text style={styles.description}>Embora não esteja diretamente visível neste componente, podemos inferir que o React Navigation está sendo utilizado, 
          pois a função recebe uma propriedade 'navigation', que é comumente usada para navegar entre telas em um aplicativo React Native. 
          Isso indica que esta tela está integrada à navegação do aplicativo, permitindo que os usuários acessem e naveguem entre diferentes partes 
          do aplicativo de forma suave e intuitiva. Podemos observar o React Navigation na tela App.js</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/navigation400px.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.divider}></View>
      </ScrollView>

      <View style={styles.spacing}></View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: undefined,
    height: 150,
    borderRadius: 100,
    marginBottom: 50,
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
    alignSelf: 'center',
  },
  spacing: {
    height: 60,
  },
});
