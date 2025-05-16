interface projectType {
    titre: string;
    description: string;
    github?: string;
    interfaces?: {
        lien: string;
        titre: string;
    }[] 
}

export const PHP: projectType[] = [
    {
        titre: "GES_LOCATION",
        description: "Application permettant au commun des mortels de pouvoir non seulement trouver un futur logements parmi plusieurs disponibles sur la plateforme mais aussi d&rsquo;en héberger sur la plateforme si jamais le desir de mettre un location un logement se fait ressentir.",
        github: "https://github.com/YoumsCo/GES_LOCATION",
        interfaces: [
            {
                lien: "/img/PHP/GES_LOCATION/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/PHP/GES_LOCATION/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/PHP/GES_LOCATION/Accueil.png",
                titre: "Accueil"
            },
            {
                lien: "/img/PHP/GES_LOCATION/Side.png",
                titre: "Vue du panneau latéral"
            },
            {
                lien: "/img/PHP/GES_LOCATION/Notifs.png",
                titre: "Espace de notifications"
            },
            {
                lien: "/img/PHP/GES_LOCATION/EspaceProprios.png",
                titre: "Espace propriétaire"
            },
            {
                lien: "/img/PHP/GES_LOCATION/Commentaires.png",
                titre: "Espace commentaires"
            },
        ]
    },
    {
        titre: "E-commerce",
        description: "Petite application faisant office de maquette de site E-commerce.",
        github: "https://github.com/YoumsCo/E-commerce",
        interfaces: [
            {
                lien: "/img/PHP/E-commerce/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/PHP/E-commerce/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/PHP/E-commerce/Accueil.png",
                titre: "Accueil"
            },
            {
                lien: "/img/PHP/E-commerce/One.png",
                titre: "Un article"
            },
            {
                lien: "/img/PHP/E-commerce/Mobile.png",
                titre: "Version mobile"
            },
        ]
    },
    {
        titre: "Wallpapers",
        description: "Petite application web de téléchargements d'images de fond d'écrans.",
        github: "https://github.com/YoumsCo/Wallpapers",
        interfaces: [
            {
                lien: "/img/PHP/Galerie/Accueil.png",
                titre: "Accueil"
            },
            {
                lien: "/img/PHP/Galerie/Profile.png",
                titre: "Interface de changement de photo"
            },
            {
                lien: "/img/PHP/Galerie/Clair.png",
                titre: "Thème clair."
            },
            {
                lien: "/img/PHP/Galerie/Mobile.png",
                titre: "Interface mobile."
            }
        ]
    },
    {
        titre: "AgPOO",
        description: "Application web de gestion des réservations des tickets de voyage dans les agences de la ville de douala (Cameroun).",
        github: "https://github.com/YoumsCo/AgPOO",
        interfaces: [
            {
                lien: "/img/PHP/AgPOO/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/PHP/AgPOO/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/PHP/AgPOO/Location.png",
                titre: "Localiser une agence via google map."
            }
        ]
    },
    
];

export const Laravel = [
    {
        titre: "GES_SALLES",
        description: "Ceci est tout simplement une application permettant de gérer la reservation de salles en ligne pour pouvoir permettre aux différentes personne de pouvoir le faire depuis chez eux et ce peu importe l'emplacement de la salle ou le propriétaire de celle-ci.",
        github: "https://github.com/YoumsCo/Ges_SALLES",
        interfaces: [
            {
                lien: "/img/Laravel/GES_SALLES/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/Laravel/GES_SALLES/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/Laravel/GES_SALLES/Accueil.png",
                titre: "Accueil"
            },
            {
                lien: "/img/Laravel/GES_SALLES/AccueilMobile.png",
                titre: "Vue sur mobile"
            },
            {
                lien: "/img/Laravel/GES_SALLES/One.png",
                titre: "Affichage d'une salle"
            },
        ]
    },
    {
        titre: "Blog",
        description: "Application web gérant un blog.",
        github: "https://github.com/YoumsCo/Blog",
        interfaces: [
            {
                lien: "/img/Laravel/Blog/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/Laravel/Blog/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/Laravel/Blog/Accueil.png",
                titre: "Accueil"
            },
            {
                lien: "/img/Laravel/Blog/UnArticle.png",
                titre: "Un article"
            },
            {
                lien: "/img/Laravel/Blog/Commentaires.png",
                titre: "Espace commentaires"
            },
        ]
    },
];

export const Next = [
    {
        titre: "Portfolio",
        description: "C'est tout simplement ce portfolio que vous visitez actuellement",
        github: "https://github.com/YoumsCo/Portfolio",
    },
    {
        titre: "Projects_List",
        description: "Plate-forme de plublication de projets en fonction des différents utilisateurs voualant partager ceux ci et avoir des feedback",
        github: "https://github.com/YoumsCo/Projects_List",
        interfaces: [
            {
                lien: "/img/Next/CodersMonkeys/Inscription.png",
                titre: "Interface d'inscription"
            },
            {
                lien: "/img/Next/CodersMonkeys/Connexion.png",
                titre: "Interface de connexion"
            },
            {
                lien: "/img/Next/CodersMonkeys/Footer.png",
                titre: "Footer"
            },
        ]
    },
];