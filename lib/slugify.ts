function slugify(text: string) {
    return text
        .toLowerCase() // Met tout en minuscules
        .normalize('NFD') // Décompose les accents (é → e +  ́)
        .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
        .replace(/[^a-z0-9\s-]/g, '') // Supprime les caractères spéciaux sauf tirets et espaces
        .trim() // Supprime les espaces en début/fin
        .replace(/\s+/g, '-') // Remplace les espaces par des tirets
        .replace(/-+/g, '-'); // Supprime les tirets multiples
}

export default slugify;
