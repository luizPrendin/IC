import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Card({ title, description, datetime, url, onDelete, onFavorite }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardPress = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2} style={styles.description}>{description}</Text>
      {isPopupOpen && (
        <View style={styles.popup}>
          <Text style={styles.popupTitle}>{title}</Text>
          <Text style={styles.popupDescription}>{description}</Text>
          <Text style={styles.popupDateTime}>{datetime}</Text>
          <Text style={styles.popupUrl}>{url}</Text>
          <View style={styles.popupActions}>
            <TouchableOpacity onPress={onDelete}>
              <FontAwesome5 name="trash-alt" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFavorite}>
              <FontAwesome5 name="star" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  popup: {
    backgroundColor: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 999,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popupDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  popupDateTime: {
    fontSize: 14,
    marginBottom: 10,
  },
  popupUrl: {
    fontSize: 14,
    marginBottom: 10,
    color: 'blue',
  },
  popupActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
  },
});
