import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tela Inicial" navigation={navigation} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
          <Text style={styles.text}>
            <FontAwesome name="check" size={8} color="gray" style={styles.icon} /> <Text style={{ textAlign: 'left' }}>Aqui vão algumas issues encontradas e que não conseguimos corrigir:</Text>
          </Text>
          <Text style={styles.text}>
            <FontAwesome name="check" size={8} color="gray" style={styles.icon} /> <Text style={{ textAlign: 'left' }}>Na tela Login: O placeholder não está margeando 5px a esquerda.</Text>
          </Text>
          <Text style={styles.text}>
            <FontAwesome name="check" size={8} color="gray" style={styles.icon} /> <Text style={{ textAlign: 'left' }}>As imagens da pagina SobreScreen carregam no Emulador, 
            mas não aparecem no telefone.</Text>
          </Text>
          <Text style={styles.text}>
            <FontAwesome name="check" size={8} color="gray" style={styles.icon} /> <Text style={{ textAlign: 'left' }}>O readme bonitão no Github vou ficar devendo dessa vez.</Text>
          </Text>
          <Text style={styles.text}>
            <FontAwesome name="check" size={8} color="gray" style={styles.icon} /> <Text style={{ textAlign: 'left' }}>O safeareaview por algum motivo dessa vez não foi capaz de ficar na mesma cor do header, acredito que seja devido ao uso do Navigation.</Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Team')}>
            <Text style={styles.link}>Saiba mais sobre nós</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://i.ibb.co/0V1sxL8/pato.png' }}
            style={styles.image}
          />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    flexDirection: 'row', 
    alignItems: 'center',
  },
  link: {
    color: 'blue',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  icon: {
    marginRight: 10,
  },
});
