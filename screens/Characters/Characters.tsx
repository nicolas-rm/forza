import { ActivityIndicator } from 'react-native-paper';
import { useCharacters } from '../../hooks/characters.hooks'
import { Character } from '../../services/api.service';
import { View, Text, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const renderCharacter = (character: Character) => {

    // const navigation: any = useNavigation();

    // const handlePress = () => {
    //     navigation.navigate(('Profile' as never), { characterId: character.id } as never);
    // }

    return (
        <Pressable style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.name}>{character.name}</Text>
                <Text>{character.species} - {character.gender}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    name: {
        fontWeight: 'bold',
    },
});

export const CharactersScreen = () => {

    const { characters, loading, error } = useCharacters();


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>
                    {error}
                </Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList data={characters} renderItem={({ item }) => renderCharacter(item)} />
        </View>
    );
}


