import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <LinearGradient
        colors={['#6030A0', '#FFAFFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Image
          source={{ uri: "../assets/FotoHome.png" }} // Replace with the actual image URL
          style={styles.profileImage}
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Bom dia</Text>
          <Text style={styles.name}>Marília</Text>
        </View>
        <View style={styles.headerItem}>
          <Image
          source={{ uri: "../Key Visual/yaso1.png" }} // Replace with the actual image URL
          style={styles.logo}
        />
        <Image
          source={{ uri: "../Key Visual/config.png" }} // Replace with the actual image URL
          style={styles.settingsIcon}
        />
        </View>
        
        
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex:1,
    backgroundColor: '#f0e7ff',
    
    paddingBottom:25
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerItem:{
    flexDirection:"row",
    paddingLeft:20,
    marginStart:1170,
    justifyContent:"space-between",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 90,
    height: 50,
  },
  settingsIcon: {
    width: 30,
    height: 30,
    marginLeft:35,
    marginTop:20,
    paddingTop:30,
  },
});
