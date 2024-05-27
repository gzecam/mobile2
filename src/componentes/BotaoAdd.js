import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';

import Texto from './Texto' //Componente de exibição de texto

export default function BotaoAdd({textoBotao, clickBotao}){
    return <TouchableOpacity style={styles.botao} onPress={clickBotao} >
             <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
            </TouchableOpacity> 
}

const styles = StyleSheet.create({
    botao:{
    marginTop: 16,
    backgroundColor: "#0A5594",
    paddingVertical: 16,
    borderRadius: 6,
   },

   botaoTexto: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
   }
   
  });