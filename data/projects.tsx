import arrosiaImage from '../public/images/arrosia-site.png';
import bloompoesieImage from '../public/images/bloompoesie-site.png';
import pokedexImage from '../public/images/pokedex.png';
import lucemImage from '../public/images/lucem-application.png';
import laCremerieImage from '../public/images/la-cremerie-site.png';
import { CATEGORIES, Category, CategoryKey } from './categories';
import { StaticImageData } from 'next/image';

export type projectType = {
    imageSrc: StaticImageData;
    imageAlt?: string;
    title: string;
    catArr: Category[];
    description: string;
    link: string;
    siteLink?: string;
};

export const PROJECTS: projectType[] = [
    {
        imageSrc: lucemImage,
        imageAlt: 'Lucem Application',
        title: 'Lucem',
        catArr: [
            CATEGORIES['React Native'],
            CATEGORIES['Node.js'],
            CATEGORIES.JavaScript,
            CATEGORIES['Mongo DB'],
            CATEGORIES.Maquettage,
        ],
        description:
            'Lucem est une application qui permet de faciliter les suivi des patients pour les psychlogues et psychiatres.',
        link: '#',
    },
    {
        imageSrc: arrosiaImage,
        imageAlt: 'site vitrine et e-commerce Arrosia',
        title: 'Arrosia',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES['E-commerce'],
            CATEGORIES.Maquettage,
        ],
        description:
            "Réalisation d'un site vitrine et e-commerce pour une manufacture d'objet en résine de pin.",
        link: '#',
        siteLink: 'https://arrosia.fr/',
    },
    {
        imageSrc: bloompoesieImage,
        imageAlt: 'Bloompoésie site vitrine et e-commerce',
        title: 'Bloompoésie',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES['E-commerce'],
            CATEGORIES.Maquettage,
        ],
        description:
            "Réalisation d'un site vitrine et e-commerce de fleurs séchées.",
        link: '#',
        siteLink: 'https://www.bloompoesie.fr/',
    },
    {
        imageSrc: laCremerieImage,
        imageAlt: 'La Crèmerie site vitrine et e-commerce',
        title: 'La Crèmerie',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES['E-commerce'],
        ],
        description:
            "Réalisation d'un site vitrine et e-commerce pour des architectes d'intérieur.",
        link: '#',
        siteLink: 'https://lacremerie.fr/',
    },
    {
        imageSrc: pokedexImage,
        imageAlt: 'Pokedex',
        title: 'Pokedex',
        catArr: [
            CATEGORIES.React,
            CATEGORIES['Node.js'],
            CATEGORIES.JavaScript,
            CATEGORIES.Maquettage,
        ],
        description:
            "Projet d'entraînement à l'utilisation d'une API externe & infinite scroll",
        link: '#',
        siteLink:
            'https://pokedex-d4wxleqpi-quentins-projects-683360a5.vercel.app/',
    },
];
