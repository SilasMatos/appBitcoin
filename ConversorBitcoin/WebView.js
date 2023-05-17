import { View, Text, StyleSheet, Button, Image } from "react-native";
import React, { useState } from "react";
import WebView from "react-native-webview";

export default function WebViewPage() {
  const [url, setUrl] = useState("");
  const [go, setGo] = useState(false);
  const cotacaoDolarURL = 'https://www.coinbase.com/pt/converter/btc/usd';
  const cotacaoRealURL = 'https://www.coinbase.com/pt/converter/btc/brl';
  if (go == false) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/bitcoin.png')} style={styles.bitcoinImage} />
        <View style={styles.spacing}>
          <Button
            title="Ver Cotação para o Real"
            color="grey"
            onPress={(event)=>{setGo(true) ,setUrl(cotacaoRealURL)}}
          />
        </View>
        <View>
          <Button
            title="Ver Cotação para o Dolar"
            color="grey"
            onPress={(event)=>{setGo(true) ,setUrl(cotacaoDolarURL)}}
            
          />
        </View>
      </View>
    );
  }else{
    return(
      
    <WebView 
    source={{ uri: url }}
      style={{ marginTop: 20 }}
    onNavigationStateChange = {this.handleNavigationStateChange}
    allowFileAccess={true}
    scalesPageToFit={true}
    originWhitelist={['*']}
    />
  );
      
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontSize: 20,
    marginBottom: 20,
    fontSize: 35,
    color: "#f8f9fa",
  },
  bitcoinImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  spacing: {
    width: 205,
    marginBottom: 20,
  },
});