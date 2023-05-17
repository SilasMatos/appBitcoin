import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import Web from './WebView'

const Home = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState('');
  const [bitcoinQuantity, setBitcoinQuantity] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertToUSD = () => {
    // Fórmula de conversão do Bitcoin para Dólar
    const amountInUSD = parseFloat(bitcoinPrice) * parseFloat(bitcoinQuantity);
    setConvertedAmount(amountInUSD.toFixed(2));
  };
  
  const convertToBRL = () => {
    // Fórmula de conversão do Bitcoin para Real
    const amountInBRL = parseFloat(bitcoinPrice) * parseFloat(bitcoinQuantity) * 5.5;
    setConvertedAmount(amountInBRL.toFixed(2));
  }

  const clearFields = () => {
    setBitcoinPrice('');
    setBitcoinQuantity('');
    setConvertedAmount('');
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Image source={require('./assets/bitcoin.png')} style={styles.bitcoinImage} />
    <Text style={styles.heading}>Conversor de Bitcoin</Text>
    <TextInput
      placeholder="Cotação atual do bitcoin"
      value={bitcoinPrice}
      onChangeText={setBitcoinPrice}
      keyboardType="numeric"
      style={styles.input}
    />
    <TextInput
      placeholder="Quantidade de bitcoins"
      value={bitcoinQuantity}
      onChangeText={setBitcoinQuantity}
      keyboardType="numeric"
      style={styles.input}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button
          title="Converter para Dólar"
          onPress={convertToUSD}
          color="#007AFF"
          icon={<Icon name="dollar" size={20} color="white" />}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Converter para Real"
          onPress={convertToBRL}
          color="#007AFF"
          icon={<Icon name="money" size={20} color="white" />}
        />
      </View>
    </View>
    <Button title="Limpar" onPress={clearFields} color="#FF3B30" />
    {convertedAmount !== '' && (
      <Text style={styles.convertedAmount}>Valor convertido: {convertedAmount}</Text>
    )}
    <Button
      title="Ir para a Segunda Tela"
      onPress={() => {
        navigation.navigate('WebView');
      }}
      color="#007AFF"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginRight: 10,
  },
  bitcoinImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007AFF',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  convertedAmount: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});


export default Home;