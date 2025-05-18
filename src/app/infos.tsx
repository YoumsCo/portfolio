import { Ap } from "./components/apostrophy";
import { P } from "./components/paragraph";
import { Span } from "./components/span";

interface Skills {
    technology: string;
    percent: number;
}

interface Experience {
    begin?: string,
    end?: string,
    title: string;
    description: React.ReactNode;
}

interface Way extends Experience {
    year?: string;
}

export const skills: Skills[] = [
    {
        technology: "Javascript",
        percent: 70
    },
    {
        technology: "PHP",
        percent: 80
    },
    {
        technology: "SQL",
        percent: 60
    },
    {
        technology: "Typescript",
        percent: 60
    },
    {
        technology: "Python",
        percent: 20
    },
    {
        technology: "Laravel",
        percent: 60
    },
    {
        technology: "Next.js",
        percent: 50
    },
    {
        technology: "Tailwindcss",
        percent: 65
    },
];

export const experiences: Experience[] = [
    {
        begin: "06 - 2023",
        end: "08 - 2023",
        title: "Stage académique à AL-Consulting Sarl",
        description: (
            <P>
                J<Ap />ai effectué un stage dans l<Ap />entreprise AL-Consulting Sarl où j<Ap />ai appris à mieux manier l<Ap />outil informatique ceci se traduisant par le logiciel qu<Ap />on utilisait là-bas pour développer les applications de manière efficace à savoir <Span>Visual studio code.</Span> J<Ap />y ai également appris les règles de création et de gestion d<Ap />une base données avec le langage <Span>MySQL</Span> et aussi l<Ap />apprentissage à l<Ap />utilisation des bonnes pratiques dans les langages <Span>Javascript</Span> et <Span>PHP</Span>.
            </P>
        )
    },
    {
        begin: "12 - 2024",
        end: "01 - 2025",
        title: "Employé à Soif.",
        description: (
            <P>
                Cetres l<Ap />entreprise <Span>Soif</Span> n<Ap />exerce pas dans mon domaine (le génie logiciel), mais là-bas j<Ap />ai eu l<Ap />occasion d<Ap />expérimenter ce qu<Ap />est le monde professionnel et ainsi d<Ap />améliorer mon savoir-être et mon savoir-faire.
            </P>
        )
    },
    {
        begin: "01 - 2025",
        end: "03 - 2025",
        title: "Stage professionnel à MT Consulting Sarl.",
        description: (
            <P>
                A <Span>MT Consulting Sarl</Span> j<Ap />ai découvert le <Span>python</Span> et par la suite appris à manier quelques modules assez simple de l<Ap />ERP <Span>Odoo</Span>.
            </P>
        )
    },
];

export const parcours: Way[] = [
    {
        year: "2022",
        title: "Baccaloréat D",
        description: (
            <P>
                J<Ap />ai fait mes études secondaires au lycée classique d<Ap />édéa (Région du littoral), où j<Ap />ai obtenu mon baccalauréat D avant de m<Ap />installer à douala-Cameroun pour poursuivre mes études au terciaire.
            </P>
        )
    },
    {
        begin: "2022",
        end: "2024",
        title: "BTS en Génie logiciel",
        description: (
            <P>
                Une fois mon baccaloréat obtenu et peu de temps après mon installation dans la ville de douala-Cameroun, je me suis vu poursuivre mes études à l<Ap /><Span>I</Span>nstitut <Span>U</Span>niversitaire et <Span>S</Span>tratégique de l<Ap /> <Span>E</Span>stuaire (<Span>IUEs / Insam</Span>) de ndokoti, où j<Ap />ai pu obtenir après deux ans d<Ap />études mon BTS en génie logiciel.
            </P>
        )
    },
    {
        begin: "2024",
        end: "2025",
        title: "Licence en Génie logiciel",
        description: (
            <P>
                Après l<Ap />obtention de mon BTS dans le domaine où j<Ap />ai toujours voulu execrer, je me suis dit si j<Ap />ai déjà un BTS dans le domaine où je prévoyais exercer depuis tout petit, pourquoi ne pas prolonger jusqu<Ap />à la licence ?
                <br />Et donc un an plus tard j<Ap />obtiens ma licence en génie logiciel comme prévu.
            </P>
        )
    },
];