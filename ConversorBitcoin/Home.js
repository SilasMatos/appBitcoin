import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native';


import Web from './WebView'

const Home = ({ navigation }) => {
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

  const navigateToSecondScreen = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <View style={styles.container}>
        <Image
           source={require('./assets/bitcoin.png')}
         style={styles.bitcoinImage}
     />
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
        <Button
          title="Converter para Dólar"
          onPress={convertToUSD}
          color="#007AFF"
    
          style={[styles.buttonCv]}

        />
        <Button
          title="Converter para Real"
          onPress={convertToBRL}
          color="#007AFF"
          style={styles.button}
        />
      </View>
      <Button title="Limpar" onPress={clearFields} color="#FF3B30" />
      {convertedAmount !== '' && (
        <Text style={styles.convertedAmount}>
          Valor convertido: {convertedAmount}
        </Text>
      )}
      <Button title="Ir para a Segunda Tela" onPress={navigateToSecondScreen} color="#007AFF" />
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
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonCv: {
    marginTop: 50,
    paddingBottom: 15,
  },
  convertedAmount: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  btnDolar:{
    marginTop: 5,
    marginBottom: 5,
    color: '#D2D2D2',
  },
});

export default Home;

