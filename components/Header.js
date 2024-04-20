import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>CP02HardMode</Text>
          <Text style={styles.subText}>Professor Fernando Pinéo</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#ff006c',
    height: '10%',
    marginTop: 50,
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 14,
    color: '#fff',
  },
});
