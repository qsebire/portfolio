export type CategoryKey =
    | 'Maquettage'
    | 'WordPress'
    | 'Site Vitrine'
    | 'E-commerce'
    | 'JavaScript'
    | 'React'
    | 'React Native'
    | 'TypeScript'
    | 'Tailwind CSS'
    | 'Mongo DB'
    | 'Next.js'
    | 'Node.js';

export type Category = {
    label: string;
    color: string;
};

export const CATEGORIES: Record<CategoryKey, Category> = {
    Maquettage: {
        label: 'Maquettage',
        color: '#fb923c',
    },
    WordPress: {
        label: 'WordPress',
        color: '#93c5fd',
    },
    'Site Vitrine': {
        label: 'Site Vitrine',
        color: '#d946ef',
    },
    'E-commerce': {
        label: 'E-commerce',
        color: '#ef4444',
    },
    JavaScript: {
        label: 'JavaScript',
        color: '#fde047',
    },
    React: {
        label: 'React',
        color: '#3b82f6',
    },
    'React Native': {
        label: 'React Native',
        color: '#5eead4',
    },
    TypeScript: {
        label: 'TypeScript',
        color: '#8b5cf6',
    },
    'Tailwind CSS': {
        label: 'Tailwind CSS',
        color: '#84cc16',
    },
    'Mongo DB': {
        label: 'Mongo DB',
        color: '#34d399',
    },
    'Next.js': {
        label: 'Next.js',
        color: '#db2777',
    },
    'Node.js': {
        label: 'Node.js',
        color: '#d6d3d1',
    },
};
