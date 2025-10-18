import { createStackNavigator } from '@react-navigation/stack';
import { CharactersScreen } from '../Characters/Characters';
import { ProfileScreen } from '../Characters/ProfileScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Characters" component={CharactersScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
