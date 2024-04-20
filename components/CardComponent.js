import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CardComponent({ title, datetime, onDelete }) {
  return (
    <View style={styles.card}>
      <FontAwesome5 name="book" size={24} color="black" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome5 name="trash-alt" size={20} color="red" style={styles.icon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.datetime}>{datetime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  datetime: {
    fontSize: 12,
    color: 'gray',
  },
});
