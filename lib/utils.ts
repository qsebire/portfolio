import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(text: string) {
    return text
        .toLowerCase() // Met tout en minuscules
        .normalize('NFD') // Décompose les accents (é → e +  ́)
        .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
        .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux sauf tirets et espaces
        .trim() // Supprime les espaces en début/fin
        .replace(/\s+/g, '-') // Remplace les espaces par des tirets
        .replace(/-+/g, '-'); // Supprime les tirets multiples
}

export function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
