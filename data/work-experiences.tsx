export type workExperienceType = {
    title: string;
    subtitle?: string;
    dates: string;
    company?: string;
    companyLink?: string;
    companyDescription?: string;
    taskDescription: string;
    skills?: string[];
};

export const WORK_EXPERIENCES: workExperienceType[] = [
    {
        title: 'UI/UX Design & Intégrateur WordPress',
        subtitle: 'Freelance',
        dates: 'Février 2021 à maintenant',
        taskDescription:
            "Réalisations de projets UI/UX Design & Intégrateur WordPress pour des clients : Maquettage de sites ou d'applications. Intégration sous WordPress de sites vitrines et e-commerce en optimisant l’expérience utilisateur et le référencement.",
        skills: [
            'UI/UX Design',
            'Maquettage',
            'WordPress',
            'Divi',
            'E-commerce',
            'Site vitrine',
        ],
    },
    {
        title: 'Initiation au métier de développeur React',
        subtitle: 'Stage de découverte',
        dates: 'Avril 2024 à Juillet 2024',
        company: 'Dots',
        companyLink: 'https://www.dots.cool/',
        companyDescription:
            "Dots est une plateforme intuitive qui facilite l'organisation et la collaboration en entreprise grâce à des workspaces flexibles et personnalisables. Sans configuration technique, elle remplace les outils complexes pour une gestion fluide des tâches, projets et données.",
        taskDescription:
            "Découverte du métier de développeur au sein d'une entreprise qui développe un logiciel de gestion de donnée. Apprentissage de JavaScript, TypeScript, React et Tailwind CSS, ainsi que des bonnes pratiques de développement et des bases de GitHub.",
        skills: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Next JS',
            'GitHub',
            'JavaScript',
        ],
    },
    {
        title: 'Co-fondateur & Responsable Technique',
        subtitle: 'Entrepreneuriat',
        dates: 'Février 2021 à Juillet 2024',
        company: 'Cuidam',
        companyDescription:
            "Cuidam était un service de soutien psychologique dédiée aux étudiants d'écoles supérieures. À travers une plateforme web, les étudiants pouvaient réserver des rendez-vous avec des psychologues pour réaliser des séances offertes par leurs écoles.",
        taskDescription:
            'J’étais en charge de l’ensemble de la partie technique, de la conception du MVP au développement de la plateforme et du site web. En parallèle, je m’occupais de plusieurs aspects de la gestion de l’entreprise, notamment la comptabilité.',
        skills: [
            'UI/UX Design',
            'Maquettage',
            'WordPress',
            'Divi',
            'JavaScript',
            'CSS',
            'HTML',
        ],
    },
    {
        title: 'UI/UX Designer & Product Owner',
        subtitle: 'Alternance & CDI',
        dates: 'septembre 2019 à Février 2021',
        company: "Log'in Line",
        companyLink: 'https://loginline.com/',
        companyDescription:
            "Log'in Line est une agence de développement bordelaise. Elle s'est recemment spécialisée dans l'infogérance Cloud sur mesure pour les startups tech, en optimisant et gérant leur infrastructure afin qu'elles puissent se concentrer sur leur produit. Grâce à une approche en quatre étapes (audit, mise en place, gestion continue et formation), l'entreprise garantit des performances optimales, une réduction des coûts et une totale tranquillité d’esprit.",
        taskDescription:
            'J’accompagnais les clients dans la réussite de leurs projets web en leur proposant des solutions adaptées à leurs besoins. De la conception à la réalisation, je créais des maquettes graphiques pour applications, sites et logiciels web, tout en rédigeant des spécifications fonctionnelles précises. Je réalisais également des supports graphiques tels que des logos, chartes graphiques et prints. En parallèle, je concevais des sites vitrines et e-commerces optimisés sous WordPress, garantissant une expérience utilisateur fluide et efficace.',
        skills: [
            'UI/UX Design',
            'Maquettage',
            'Spécifications fonctionnelles',
            'WordPress',
            'Divi',
            'HTML',
            'CSS',
            'Site vitrine',
            'E-commerce',
        ],
    },
    {
        title: 'Chargé de communication',
        subtitle: 'Alternance & CDD',
        dates: 'Octobre 2018 à Juillet 2019',
        company: 'A to B Communication',
        companyDescription:
            'A to B Communication est une ancienne agence de communication bordelaise spécialisée dans les startups scientifiques et technologiques.',
        taskDescription:
            'J’étais en charge de la communication générale pour des startups. Ma tâche principale était la conception de sites vitrines sous WordPress. Je m’occupais également du tournage et du montage vidéo, de la prise et de la retouche de photos, ainsi que de la création graphique, incluant logos, prints et chartes graphiques, afin d’assurer une identité visuelle cohérente et impactante.',
        skills: [
            'WordPress',
            'Site vitrine',
            'Montage vidéo',
            'Retouche de photos',
            'Graphisme',
        ],
    },
];
