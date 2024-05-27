import React from "react";
import{Card} from 'react-native-paper'

import Texto from '../../../componentes/Texto'
import styles from './estilos'

export default function Item({item:{nome,descricao, imagem}}){

    return  <Card mode='elevated' style={styles.card}> 
    <Card.Content>
        <Texto style={styles.nomeProduto}>{nome}</Texto>
        <Texto style={styles.descProduto}>{descricao}</Texto>
    </Card.Content>
    <Card.Cover source={imagem} style={styles.imagem}/>
  </Card>
  
}