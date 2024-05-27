import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
},

container: {
    backgroundColor: "white",
},

textotituloMont:{
    color: "orange",
    paddingTop: 10,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
},

textoSobre:{
    color: "#0A5594",
    fontSize: 20,
    paddingTop: 15, 
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "justify",
},

textoDiferencial:{
    color: "orange",
    paddingTop: 40,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
}

}
)

export default styles;