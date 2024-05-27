import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

import Texto from '../../../componentes/Texto' //Componente de exibição de texto

// Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
          <StatusBar />
          <Image source = {Header} style={styles.topo}/>
          <Texto style = {styles.titulo}>{titulo}</Texto>  
          </>
}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height:  2924 / 2808 * width,
    },
    
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 24,
      color: "orange",
      fontWeight: "bold",
      padding: 10,
      backgroundColor: "white",
    },
  });