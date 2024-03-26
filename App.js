import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Text, View, Image } from 'react-native';
import { styles } from './AppStyle';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Image style={styles.imagens}
      source={require('./assets/atividade.jpg')}
      />
      <Text style={styles.texto}>Esse é um pequeno passo para o homem, mas um gigantesco salto para a humanidade</Text>
      <StatusBar backgroundColor='#61dafb' barStyle="dark-content" />
    </SafeAreaView>
   
  );
}

