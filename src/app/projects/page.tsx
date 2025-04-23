"use client"

import { Container } from "#/components/container";
import { Footer } from "#/components/footer";
import { Nav } from "#/components/nav";
import { Title } from "#/components/title";
import Image from "next/image";
import { useRef } from "react";
import { FaInfoCircle, FaRProject } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";

export default function Projects() {

    const laravelRef = useRef<HTMLHeadingElement | null>(null);
    const nextRef = useRef<HTMLHeadingElement | null>(null);
    const phpRef = useRef<HTMLHeadingElement | null>(null);

    const scrollToLaravelTitle = () => {
        window.scrollTo({
            top: laravelRef.current ? laravelRef.current?.getBoundingClientRect().top + window.scrollY : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const scrollToNextTitle = () => {
        window.scrollTo({
            top: nextRef.current ? nextRef.current?.getBoundingClientRect().top + window.scrollY : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const scrollToPHPTitle = () => {
        window.scrollTo({
            top: phpRef.current ? phpRef.current?.getBoundingClientRect().top + window.scrollY : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <Container>
            <Nav />
            <Title>Projets réalisés</Title>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-10">
                <Title ref={laravelRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Laravel & Tailwindcss</Title>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start mt-10 bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[95%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-blue-200 font-bold text-lg">Blog</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Application web gérant un blog.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/Blog/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface d&rsquo;inscription</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/Blog/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface de connexion</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/Blog/Accueil.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Accueil</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/Blog/UnArticle.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Un article</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/Blog/Commentaires.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Espace commentaires</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[95%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-blue-200 font-bold text-lg">GES_SALLES</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Ceci est tout simplement une application permettant de gérer la reservation de salles en ligne pour pouvoir permettre aux différentes personne de pouvoir le faire depuis chez eux et ce peu importe l&rsquo;emplacement de la salle ou le propriétaire de celle-ci.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/GES_SALLES/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface d&rsquo;inscription</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/GES_SALLES/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface de connexion</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/GES_SALLES/Accueil.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Accueil</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/GES_SALLES/AccueilMobile.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Vue le l&rsquo;accueil sur mobile</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Laravel/GES_SALLES/One.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Affichage d&rsquo;une salle</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-10">
                <Title ref={nextRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Next.js & Tailwindcss</Title>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start mt-10 bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[85%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-blue-200 font-bold text-lg">Projets_List</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Plate-forme de plublication de projet en fonction des différents utilisateurs.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Next/CodersMonkeys/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Next/CodersMonkeys/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/Next/CodersMonkeys/Footer.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-10">
                <Title ref={phpRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Javascript et PHP</Title>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start mt-10 bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[95%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-blue-200 font-bold text-lg">GES_LOCATION</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Application permettant au commun des mortels de pouvoir non seulement trouver un futur logements parmi plusieurs disponibles sur la plateforme mais aussi d&rsquo;en héberger sur la plateforme si jamais le desir de mettre un location un logement se fait ressentir.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">interface d&rsquo;inscription</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Interface de connexion</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Accueil.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Accueil</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Side.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Vide du panneau latéral.</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Notifs.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Espace de notifications</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/EspaceProprios.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Espace du propriétaire</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/GES_LOCATION/Commentaires.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Espace commentaires</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[95%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-nowrap text-blue-200 font-bold text-lg">E-commerce</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Petit site faisant office de maquette de site web.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/E-commerce/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Interface d&rsquo;inscription</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/E-commerce/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Interface de connexion</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/E-commerce/Accueil.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Accueil</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/E-commerce/One.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Un article</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/E-commerce/Mobile.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Version mobile</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="transition-all duration-500 w-full flex flex-col justify-start items-start bg-gray-800/40 rounded-3xl">

                    <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[95%] after:min-h-[96%] after:bg-blue-200">

                        <p className="transition-all duration-500 flex justify-start items-center gap-2">
                            <span className="w-full flex justify-center items-center gap-2">
                                <FaRProject className="text-xl" /> Nom du projet :
                            </span>
                            <span className="text-nowrap text-blue-200 font-bold text-lg">AgPOO</span>
                        </p>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaInfoCircle className="text-xl" />Description:
                            </span>
                            <p className="pt-1 pl-[28px]">
                                Application web de gestion des réservation des tickets de voyage dans les agences de la ville de douala-Cameroun.
                            </p>
                        </div>
                        <div>
                            <span className="flex justify-start items-center gap-2">
                                <FaImages className="text-xl" />Quelques interfaces
                            </span>
                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/AgPOO/Inscription.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Interface d&rsquo;inscription</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/AgPOO/Connexion.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Interface de connexion</p>
                                </div>
                                <div className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                    <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                        <Image src="/img/PHP/AgPOO/Location.png" alt="title" fill className="transition-all duration-500 rounded-3xl" />
                                    </div>
                                    <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">Posibilité de localiser une agence sur google map.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <Footer action={
                {
                    laravel: scrollToLaravelTitle,
                    next: scrollToNextTitle,
                    php: scrollToPHPTitle,
                }
            } />
        </Container>
    );
}