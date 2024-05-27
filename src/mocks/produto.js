import Logo from '../../assets/logo.png'
import Placa from '../../assets/Produtos/PM01.png'
import Acelerometro from '../../assets/Produtos/CT13.png'
import Servo from '../../assets/Produtos/MD05.png'
import DisplayLCD from '../../assets/Produtos/DS08.png'
import Rele1ch from '../../assets/Produtos/RL01.png'
import Rele4ch from '../../assets/Produtos/RL04.png'
import ACS712 from '../../assets/Produtos/SS01.png'
import DHT from '../../assets/Produtos/SS03.png'


const produto = {
    topo:{
        titulo: "Detalhes do Kit",
    },
    detalhes:{
        nome: "Kit Básico de Arduino",
        logo: Logo,
        detalhes: "Acompanha Arduino Nano com plug micro USB não acompanha cabo USB",
        preco: "R$ 150,00",
        botao: "Adicionar ao carrinho"
    },
    itens:{
        titulo: "Itens do Kit",
        lista:[
            {
                nome: "1 Placa Arduino Nano",
                imagem: Placa,
            },

            {
                nome: "1 Acelerometro MPU-6050",
                imagem: Acelerometro,
            },  
                  
            {
                nome: "1 Servo motor sg90",
                imagem: Servo,
            }, 

            {
                nome: "1 Display LCD 16x2 I2C",
                imagem: DisplayLCD,
            }, 

            {
                nome: "1 Módulo relé 1 canal",
                imagem: Rele1ch,
            }, 

            {
                nome: "1 Módulo relé 4 canais",
                imagem: Rele4ch,
            },
            
            {
                nome: "1 Módulo Sensor de  \n corrente ACS712 30A",
                imagem: ACS712,
            }, 

            {
                nome: "1 Sensor DHT11 Umidade \n e Temperatura",
                imagem: DHT,
            }, 
        ]
    }
}

export default produto;