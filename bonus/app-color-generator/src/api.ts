import { ApiColorResponse } from "./palette";

import mockPalettes from './mocks/palettes.json'


interface MockColorResponse {
    results: ApiColorResponse[]
}

const API_URL = import.meta.env.VITE_COLOR_API;

const transformToHex = (arrayColor: number[]): string => {
    console.log(arrayColor,"#" + arrayColor?.map(item => Math.abs(item).toString(16)).join(""))
    return "#" + arrayColor?.map(item => Math.abs(item).toString(16)).join("");
}

export const fetchRandomPalette = async () => {
    if (import.meta.env.PROD) {
        if (API_URL) {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({
                    model: 'default'
                })
            });
            const { result } = await response.json() as ApiColorResponse
            return result.map(i => transformToHex(i))
        } else {
            throw new Error("API_URL no definida");
        }
    } else { 
        const results=(mockPalettes as MockColorResponse)?.results;
        if (results) {
            const rndPalette = Math.floor(Math.random() * results.length)
            console.log(rndPalette)
            return results[rndPalette]?.result?.map(i => transformToHex(i));
        }
    }
    return []
}


