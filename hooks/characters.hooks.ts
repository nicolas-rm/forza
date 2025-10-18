import { useState } from "react"
import { RickAndMorty, Character } from '../services/api.service';

// Hooks de carga de personajes
export const useCharacters = () => {

    // Datos de los personajes
    const [characters, setCharacters] = useState<Character[]>([])

    // Loading de carga
    const [loading, setLoading] = useState<boolean>(false)


    // Error de carga
    const [error, setError] = useState<string | null>(null)


    const execute = () => {
        // Inicio de carga
        setLoading(true);

        // Consulta de los personajes
        RickAndMorty.getCharacters().then((data) => {

            // Validacion de los personajes
            if (data) {
                setCharacters(data);
            }
        }).catch((err) => {
            setError(err.message);
        }).finally(() => {
            setLoading(false);
        });

    }

    useState(() => {
        execute();
    });

    return {
        characters,
        // Loading de carga
        loading,
        // Error de carga
        error
    }
}
