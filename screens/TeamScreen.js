import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import TeamMember from '../components/TeamMember';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TeamScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Nossa Equipe" navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Nossa Equipe</Text>
        <Text style={styles.paragraph}>
          Explore o mundo do desenvolvimento móvel com nosso curso em Análise e Desenvolvimento de Sistemas, com foco em React Native e Kotlin! 
          Aprenda a criar interfaces intuitivas e responsivas, dominando tecnologias como React Native e Kotlin para desenvolver aplicativos multiplataforma. 
          Você estará pronto para uma carreira emocionante no desenvolvimento de aplicativos móveis. Inscreva-se hoje e dê o próximo passo na sua jornada profissional! Você também poderá odiar 
          Kotlin e implorar para naõ ter que estudar Kotlin.
        </Text>
        <View style={styles.teamContainer}>
          <View style={styles.member}>
            <TeamMember
              name="Livia Freitas"
              photo={require('../assets/livia.png')}
              description="Habilidades em QA, Java, API RestFul, C#"
              code="RM099892"
              githubLink="https://github.com/freitaslivia"
              linkedinLink="https://www.linkedin.com/in/l%C3%ADvia-freitas-ferreira/"
            />
          </View>
          <View style={styles.member}>
            <TeamMember
              name="Renato Romeu"
              photo={require('../assets/renato.png')}
              description="Habilidades em DevOps, Figma, Front e documentação."
              code="RM551325"
              githubLink="https://github.com/RenatoRussano"
              linkedinLink="https://www.linkedin.com/in/renato-russano-706423a3/"
            />
          </View>
        </View>
        <View style={{ height: 150 }} />
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  member: {
    flex: 1,
    marginRight: 10,
  },
});
