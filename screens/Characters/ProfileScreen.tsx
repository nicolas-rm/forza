import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';

export const ProfileScreen = () => {

    // Obtener los parametros de la ruta
    const route = useRoute();
    const { characterId } = route.params as { characterId: string };

    return (
        <Text>Profile Screen</Text>
    )
}
