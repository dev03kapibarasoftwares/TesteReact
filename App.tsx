import { StyleSheet, View } from 'react-native';
import { Home } from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
        <NavigationContainer>
            <Home />
        </NavigationContainer>
    );
}