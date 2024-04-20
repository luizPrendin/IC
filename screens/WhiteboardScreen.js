import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WhiteboardScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const savedCards = await AsyncStorage.getItem('savedCards');
      if (savedCards) {
        setCards(JSON.parse(savedCards));
      }
    } catch (error) {
      console.error('Erro ao carregar os cards:', error);
    }
  };

  const handleSaveCard = async () => {
    try {
      const newCard = {
        id: Date.now(),
        title,
        description,
        timestamp: new Date().toLocaleString() // Registro automático da data e hora
      };
      const updatedCards = [...cards, newCard];
      await AsyncStorage.setItem('savedCards', JSON.stringify(updatedCards));
      setCards(updatedCards);
      setTitle('');
      setDescription('');
      setShowModal(false);
    } catch (error) {
      console.error('Erro ao salvar o card:', error);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      const updatedCards = cards.filter((card) => card.id !== id);
      await AsyncStorage.setItem('savedCards', JSON.stringify(updatedCards));
      setCards(updatedCards);
    } catch (error) {
      console.error('Erro ao deletar o card:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>

          <Text style={[styles.title, { marginTop: 100 }]}>Anotações</Text>
          <Text style={styles.description}>
            Adicione aqui as anotações que você deseja. Você pode também favoritar este item ou deletar.
          </Text>
          <TouchableOpacity style={[styles.addButton, { backgroundColor: '#ff006c' }]} onPress={toggleModal}>
            <Text style={styles.addButtonText}>Nova Anotação</Text>
          </TouchableOpacity>
          <Modal visible={showModal} transparent={true} animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TextInput
                  style={styles.input}
                  placeholder="Título"
                  value={title}
                  onChangeText={setTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Descrição"
                  value={description}
                  onChangeText={setDescription}
                />
                <TouchableOpacity style={[styles.saveButton, { backgroundColor: '#ff006c' }]} onPress={handleSaveCard}>
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {cards.map((card) => (
            <View key={card.id} style={styles.card}>
              <FontAwesome5 name="bookmark" size={24} color="black" />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
                <Text style={styles.timestamp}>{card.timestamp}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteCard(card.id)}>
                <FontAwesome5 name="trash-alt" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
});
