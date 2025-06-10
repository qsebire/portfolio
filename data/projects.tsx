import arrosiaImage from '../public/images/arrosia-site.png';
import bloompoesieImage from '../public/images/bloompoesie-site.png';
import pokedexImage from '../public/images/pokedex.png';
import lucemImage from '../public/images/lucem-application.png';
import laCremerieImage from '../public/images/la-cremerie-site.png';
import wildCampervanImage from '../public/images/wild-campervan-site.png';
import { CATEGORIES, Category, CategoryKey } from './categories';
import { StaticImageData } from 'next/image';

export type projectType = {
    imageSrc: StaticImageData;
    imageAlt: string;
    title: string;
    catArr: Category[];
    description: string;
    shortDescription?: string;
    link?: string;
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
            "Lucem est une application mobile dédiée aux psychologues et psychiatres. Elle permet de faciliter le suivi des patients en simplifiant la récolte et l'échange de données. Lucem a été réalisé dans le cadre de ma formation de Concepteur Développeur d'Applications",
        shortDescription:
            'Lucem est une application qui permet de faciliter le suivi des patients pour les psychlogues et psychiatres.',
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
            'Arrosia est une agence et manufacture qui conçoit et fabrique des objets en résine de pin. Son site se divise en deux univers : une section dédiée à la manufacture et aux collaborations sous la marque Arrosia, et une boutique en ligne présentant les créations originales commercialisées sous la marque Jemà.',
        shortDescription:
            "Réalisation d'un site vitrine et e-commerce pour une manufacture d'objet en résine de pin.",
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
            'Bloompoésie est un atelier de création florale basé en Bretagne, spécialisé dans les compositions en fleurs séchées. Le site met en valeur l’ensemble des prestations proposées : décorations et cadeaux pour les entreprises, accompagnement floral pour les mariages, ainsi que des ateliers créatifs. Une boutique en ligne permet également de commander les créations de l’atelier.',
        shortDescription:
            "Réalisation d'un site vitrine et e-commerce pour un atelier de fleurs séchées.",
        siteLink: 'https://www.bloompoesie.fr/',
    },
    {
        imageSrc: wildCampervanImage,
        imageAlt: 'site vitrine catalogue de Wild Campervan',
        title: 'Wild Campervan',
        catArr: [
            CATEGORIES['WordPress'],
            CATEGORIES['Site Vitrine'],
            CATEGORIES.Maquettage,
            CATEGORIES.JavaScript,
        ],
        description:
            'Wild Campervan est une entreprise spécialisée dans la vente de vans aménagés, en collaboration avec deux garages partenaires basés en Espagne. Le site a pour vocation de mettre en valeur ces partenaires ainsi que les différents modèles qu’ils proposent. L’objectif est d’aider les utilisateurs à identifier le van qui correspond le mieux à leurs besoins, puis de les orienter vers les configurateurs des marques pour finaliser leur projet.',
        shortDescription:
            "Réalisation d'un site vitrine pour un vendeur de vans aménagés.",
        siteLink: 'https://wildcampervan.com/',
    },
    {
        imageSrc: laCremerieImage,
        imageAlt: 'La Crèmerie site vitrine et e-commerce',
        title: 'La Crèmerie',
        catArr: [CATEGORIES['WordPress'], CATEGORIES['Site Vitrine']],
        description: `La Crèmerie est une agence d’architecture d’intérieur qui accompagne aussi bien les professionnels que les particuliers. Le site présente deux univers distincts : d’un côté, les prestations d’aménagement et de design intérieur et de l’autre, une boutique en ligne proposant des meubles conçus par des artisans français. Cette boutique prend la forme d’un "Tinder du meuble", offrant une expérience ludique pour les utilisateurs.`,
        shortDescription:
            "Réalisation d'un site vitrine et e-commerce pour des architectes d'intérieur.",
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
        description: `Réalisation d’un Pokédex dans le cadre de ma formation de Concepteur Développeur d’Applications, avec pour objectif principal l’apprentissage de l’intégration d’API externes. J’en ai profité pour concevoir un design original et mettre en place un scroll infini permettant de charger dynamiquement les différents Pokémon. (PS: Le responsive n'a pas été fait sur ce projet)`,
        shortDescription:
            "Projet d'entraînement à l'utilisation d'une API externe & infinite scroll",
        siteLink: 'https://pokedex-theta-steel-53.vercel.app/',
    },
];
