import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: "white",
    },
    
    titulo: {
        fontSize: 24,
        color: "#0A5594",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
    },

    imagem: {
        width: 180,
        height: 130,
        alignSelf: "center",
        resizeMode: "contain", 
    },

    card: {
        flex: 1,
        height: 320,
        margin: 8,
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white",
    },

    nomeProduto: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 18,
    },
    
    descProduto: {
        color: "#0A5594",
        fontSize: 16,
        paddingBottom: 5,
        height: 100,
    },

    fundo:{
        backgroundColor: "orange"
    }

})

export default styles;