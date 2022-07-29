import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import GlobalProvider from './hooks/reducers/Provider';
import AppNavContainer from './navigations';

export default function App() {
  return (
    <GlobalProvider>
       <AppNavContainer/>    
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
