import axios from "axios";


const API_URL = 'https://rickandmortyapi.com/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})


export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    image: string,
}

export const RickAndMorty = {

    // Consultar personajes
    async getCharacters(): Promise<Character[] | undefined> {
        try {
            const result = await api.get('/character');
            console.log('\n\nDatos brutos de la API');
            console.log(result);


            if(!result.data.results){
                return [];
            }


            const characters = result.data.results.map((char: Character) => ({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                image: char.image,
            }));

            console.log('\n\nConsulta de personajes exitosa');
            console.log(characters);
            return characters;
        } catch (error) {
            console.error('\n\nFallo la consulta de personajes');
            console.error(error);
        }
    }
}
