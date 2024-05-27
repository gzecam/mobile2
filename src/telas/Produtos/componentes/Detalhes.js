import React from 'react';
import { StyleSheet, View, Image, Alert} from 'react-native';

import Texto from '../../../componentes/Texto'        //Componente de exibição de texto
import BotaoAdd from '../../../componentes/BotaoAdd'  //Componente de exibição do botão

export default function Detalhes({nome, logo, detalhes, preco, botao}){
    return  <View style= {styles.produto}>
              <View style = {styles.logotipo}>
                <Image source = {logo} style={styles.logo} resize='contain'/>
                <Texto style = {styles.nome}>{nome}</Texto>
              </View>
            <Texto style = {styles.descricao}>{detalhes}</Texto>
            <Texto style = {styles.preco}>{preco}</Texto>
            <BotaoAdd textoBotao={botao} clickBotao={()=>{Alert.alert("Adicionar ao carrinho", "Em breve seu carrinho de compras estará disponível")}}/>
            </View>   
}

const styles = StyleSheet.create({
 
  produto: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor:"white", 
    },
    
    nome:{
      color: "orange",
      fontSize: 20,
      fontWeight: "bold",
      paddingTop: 25, 
      paddingLeft: 15,
    },
    
    descricao: {
      paddingTop: 10,
      paddingBottom: 10,
      color: "#0A5594",
      fontSize: 18
    },

    preco: {
      color: "orange",
      fontSize: 24,
      fontWeight: "bold"
    },

   logo: {
    height: 100,
    width: "33%",
   },

   logotipo: {
    flexDirection: "row",
   }

    });