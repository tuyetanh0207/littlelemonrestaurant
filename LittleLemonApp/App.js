import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './source/WelcomScreen'
import MenuItems from './source/MenuItems';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <WelcomeScreen/>
      {/* <MenuItems/> */}
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
