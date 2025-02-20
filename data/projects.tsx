import arrosiaImage from '../public/images/arrosia-site.png';
import bloompoesieImage from '../public/images/bloompoesie-site.png';
import pokedexImage from '../public/images/pokedex.png';
import { CATEGORIES } from './categories';

export const PROJECTS = [
    {
        imageSrc: arrosiaImage,
        imageAlt: 'Site Arrosia',
        title: 'Arrosia',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES['E-commerce'],
        ],
        description:
            "Réalisation d'un site vitrine et e-commerce pour une manufacture d'objet en résine de pin.",
        link: '#',
    },
    {
        imageSrc: bloompoesieImage,
        imageAlt: 'Site Bloompoésie',
        title: 'Bloompoésie',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES['E-commerce'],
        ],
        description:
            "Réalisation d'un site vitrine et e-commerce de fleurs séchées.",
        link: '#',
    },
    {
        imageSrc: pokedexImage,
        imageAlt: 'Pokedex',
        title: 'Pokedex',
        catArr: [CATEGORIES.React, CATEGORIES.JavaScript],
        description:
            "Projet d'entraînement à l'utilisation d'une API externe & infinite scroll",
        link: '#',
    },
];
