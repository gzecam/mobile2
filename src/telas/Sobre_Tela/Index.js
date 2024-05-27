import React from 'react';
import {ScrollView, Image} from 'react-native';

import styles from './estilos';
import Texto from '../../componentes/Texto' //Componente de exibição de texto

export default function Index({info, detalhes, itens}){
    return  <ScrollView style= {styles.container}>
              <Image source = {info.logo} style={styles.logo} resizeMode='contain'/>

              <Texto style = {styles.textotituloMont}>{info.titulo}</Texto>

              <Texto style = {styles.textoSobre}>{detalhes.info}</Texto>
              <Texto style = {styles.textoSobre}>{detalhes.info1}</Texto>
              <Texto style = {styles.textoSobre}>{detalhes.info2}</Texto>
              <Texto style = {styles.textoSobre}>{detalhes.info3}</Texto>

              <Texto style = {styles.textoDiferencial}>{itens.titulo}</Texto>
              <Image source = {itens.imagem} style={styles.logo} resizeMode='contain'/>

            </ScrollView>   
}
