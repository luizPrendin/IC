import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TeamMember({ name, photo, description, code, githubLink, linkedinLink }) {
  const openLink = async (link) => {
    try {
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        await Linking.openURL(link);
      } else {
        console.error("Não é possível abrir este link:", link);
      }
    } catch (error) {
      console.error("Erro ao abrir o link:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.code}>Código: {code}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => openLink(githubLink)}>
          <FontAwesome5 name="github" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(linkedinLink)}>
          <FontAwesome5 name="linkedin" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    marginBottom: 5,
  },
  code: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 10,
    color: 'gray', 
  },
});
