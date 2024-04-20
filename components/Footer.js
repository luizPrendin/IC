import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <FontAwesome5 name="user" size={24} color="#808080" style={styles.icon} />
          <Text style={styles.label}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <FontAwesome5 name="home" size={24} color="#808080" style={styles.icon} />
          <Text style={styles.label}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('About')}
        >
          <FontAwesome5 name="book-open" size={24} color="#808080" style={styles.icon} />
          <Text style={styles.label}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Whiteboard')}
        >
          <FontAwesome5 name="chalkboard" size={24} color="#808080" style={styles.icon} />
          <Text style={styles.label}>Whiteboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Team')}
        >
          <FontAwesome5 name="users" size={24} color="#808080" style={styles.icon} />
          <Text style={styles.label}>Equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    marginHorizontal: '5%',
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#808080',
    marginTop: 5, // Margem superior para o texto
  },
  icon: {
    marginTop: 5, // Margem superior para o ícone
  },
});
