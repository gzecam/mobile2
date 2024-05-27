import Placa from '../../assets/Produtos/PM01.png'
import Acelerometro from '../../assets/Produtos/CT13.png'
import Servo from '../../assets/Produtos/MD05.png'
import DisplayLCD from '../../assets/Produtos/DS08.png'
import Rele1ch from '../../assets/Produtos/RL01.png'
import Rele4ch from '../../assets/Produtos/RL04.png'
import ACS712 from '../../assets/Produtos/SS01.png'
import DHT from '../../assets/Produtos/SS03.png'
import PonteH from '../../assets/Produtos/MD01.png'
import OLED from '../../assets/Produtos/DS04.png'
import Bluetooth from '../../assets/Produtos/CT04.png'
import W5100 from '../../assets/Produtos/CT05.png'
import SIM800L from '../../assets/Produtos/CT15.png'
import Obstaculo from '../../assets/Produtos/SS10.png'
import CamVGA from '../../assets/Produtos/SS28.png'
import RFID from '../../assets/Produtos/SS19.png'

const catalogo = {
    itens:{
        titulo: "Veja nossos produtos",
        lista:[
            {
                nome: "Arduino Nano",
                descricao: "Placa Arduino nano mini USB sem cabo",
                imagem: Placa,
            },

            {
                nome: "Acelerometro",
                descricao: "Acelerometro e giroscópio MPU-6050",
                imagem: Acelerometro,
            },
                  
            {
                nome: "Servo motor",
                descricao: "Servo motor sg90 1,6kg com cabo 10cm",
                imagem: Servo,
            }, 

            {
                nome: "Display LCD",
                descricao: "Display LCD azul 16x2 com módulo I2C soldado",
                imagem: DisplayLCD,
            }, 

            {
                nome: "Relé 1 canal",
                descricao: "Módulo relé 5Vdc 1 canal",
                imagem: Rele1ch,
            }, 

            {
                nome: "Relé 4 canais",
                descricao: "Módulo relé 5Vdc 4 canais",
                imagem: Rele4ch,
            },
            
            {
                nome: "Sensor corrente",
                descricao: "Módulo sensor de corrente ACS712 30A",
                imagem: ACS712,
            }, 

            {
                nome: "Sensor DHT11",
                descricao: "Sensor DHT11 Umidade e Temperatura",
                imagem: DHT,
            },
            
            {
                nome: "Ponte H",
                descricao: "Ponte H modelo L298N",
                imagem: PonteH,
            }, 

            {
                nome: "Display OLED",
                descricao: "Display OLED 0.96' azul I2C",
                imagem: OLED,
            }, 

            {
                nome: "Módulo Bluetooth",
                descricao: "Módulo Bluetooth HC-05",
                imagem: Bluetooth,
            },

            {
                nome: "Shield Ethernet",
                descricao: "Shield Ethernet W5100",
                imagem: W5100,
            },

            {
                nome: "Módulo GPRS",
                descricao: "Módulo GPRS SIM800L",
                imagem: SIM800L,
            },

            {
                nome: "Sensor de Obstáculo",
                descricao: "Módulo Sensor de Obstáculo",
                imagem: Obstaculo,
            },

            {
                nome: "Camera VGA",
                descricao: "Módulo câmera VGA OV7670",
                imagem: CamVGA,
            },

            {
                nome: "Kit RFID",
                descricao: "Kit módulo RFID MFRC-522",
                imagem: RFID,
            },
        ]
    }
}

export default catalogo;