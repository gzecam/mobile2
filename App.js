import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';

import mock_sobre from './src/mocks/sobre_nos';
import Sobre_tela from './src/telas/Sobre_Tela/Index';

import mock_catalogo from './src/mocks/catalogo';
import Catalogo from './src/telas/Catalogo/index';

function MenuKit(){
  return <View>
              <Produto {...mock}/>
          </View>
}

function MenuSobre(){
  return <View>
              <Sobre_tela {...mock_sobre}/>
          </View>
}

function MenuCatalogo(){
  return <View>
              <Catalogo {...mock_catalogo}/>
          </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator
          screenOptions={ ({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if(route.name === "Kit"){
                iconName = focused
                ? 'basket'
                : 'basket-outline';
              } else if (route.name === "Sobre nós"){
                iconName = focused 
                ? 'business'
                : 'business-outline';
              } else if (route.name === "Catálogo") {
                iconName = focused
                ? 'cart'
                : 'cart-outline';
              } else if (route.name === "Lista de Desejos") {
                iconName = focused
                ? 'heart'
                : 'heart-outline';
              }

              return <Ionicons name ={iconName} size={size} color = {color}/>
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyBoard: true,
            headerShown: false,
          })}>
            <Tab.Screen name = "Sobre nós" component={MenuSobre}/>
            <Tab.Screen name = "Kit" component={MenuKit}/>
            <Tab.Screen name = "Catálogo" component={MenuCatalogo}/>
            <Tab.Screen name = "Lista de Desejos" component={MenuKit}/>
          </Tab.Navigator>
}

export default function App() {

  // Carrega a fonte para o projeto
const [fonteCarregada] = useFonts({
  "SpaceGRegular": SpaceGrotesk_300Light,
  "SpaceGBold": SpaceGrotesk_700Bold,
})

  // Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View />
  }

  return  <NavigationContainer>
              <TabsMenu />
          </NavigationContainer>
}