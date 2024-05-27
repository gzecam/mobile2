import React from 'react'
import {FlatList, View} from 'react-native'
import Texto from '../../componentes/Texto'

import Item from './componentes/Item'
import Styles from './componentes/estilos'

export default function Produto({itens}){

return <View style = {Styles.fundo}>
        <Texto style={Styles.titulo}> {itens.titulo} </Texto>
        <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={itens.lista.id}
        numColumns={2}    
    />
        </View>
    
}