import { PaperProvider, Text } from 'react-native-paper';


import IonIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './screens/routes/StackNavigator';


const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <StackNavigator />
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
