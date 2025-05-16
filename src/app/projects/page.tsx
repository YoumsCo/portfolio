"use client"

import { Container } from "#/components/container";
import { Footer } from "#/components/footer";
import { Nav } from "#/components/nav";
import { Title } from "#/components/title";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleUp, FaInfoCircle, FaRProject } from "react-icons/fa";
import { FaGithubAlt, FaImages } from "react-icons/fa6";
import { Laravel, Next, PHP } from "./projects";
import cuid from "cuid";
import Link from "next/link";

export default function Projects() {

    const laravelRef = useRef<HTMLHeadingElement | null>(null);
    const nextRef = useRef<HTMLHeadingElement | null>(null);
    const phpRef = useRef<HTMLHeadingElement | null>(null);
    const [position, setPosition] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    const scrollToLaravelTitle = () => {
        window.scrollTo({
            top: laravelRef.current ? laravelRef.current?.getBoundingClientRect().top + window.scrollY - 10 : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const scrollToNextTitle = () => {
        window.scrollTo({
            top: nextRef.current ? nextRef.current?.getBoundingClientRect().top + window.scrollY - 10 : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    const scrollToPHPTitle = () => {
        window.scrollTo({
            top: phpRef.current ? phpRef.current?.getBoundingClientRect().top + window.scrollY - 10 : 0,
            left: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", function () {
            setPosition(window.scrollY);
        });

        setWindowHeight(window.innerHeight);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return (
        <Container>
            <Nav />
            <Title>Projets réalisés</Title>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl p-2 pb-4">
                <Title ref={nextRef} className="transition-all duration-500 relative sm:text-2xl text-lg text-blue-200 font-extrabold mb-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Next.js & Tailwindcss</Title>

                {
                    Next.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full min-h-50 flex flex-col justify-start items-start">

                                <div className="desc_p transition-all duration-500 relative w-full h-full flex flex-col justify-start items-start gap-4 p-10 pt-5 text-justify  before:transition-all before:duraton-500 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 before:border-blue-200 before:rounded-full after:transition-all after:duraton-500 after:absolute after:left-[9px] after:top-5 after:w-[2px] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span onClick={() => window.open(child.github, "_blank")} className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap cursor-pointer hover:underline">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description :
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    {
                                        child.github
                                        &&
                                        (<p className="transition-all duration-500 w-full h-full flex flex-wrap justify-start items-start gap-2">
                                            <span className="w-full flex justify-start items-center gap-2">
                                                <FaGithubAlt className="transition-all duration-500 text-xl" /> Github :
                                            </span>
                                            <Link href={child.github} target="_blank" className="transition-all duration-500 text-blue-200 font-bold sm:text-lg text-xs hover:underline">{child.github}</Link>
                                        </p>)
                                    }
                                    {
                                        child.interfaces
                                        &&
                                        (<div>
                                            <span className="flex justify-start items-center gap-2">
                                                <FaImages className="text-xl" />Quelques interfaces :
                                            </span>
                                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                                {child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center sm:text-lg text-base">{img.titre}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>)
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl p-2 pb-4">
                <Title ref={laravelRef} className="transition-all duration-500 relative sm:text-2xl text-lg text-blue-200 font-extrabold mb-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Laravel & Tailwindcss</Title>

                {
                    Laravel.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full min-h-50 flex flex-col justify-start items-start">

                                <div className="desc_p transition-all duration-500 relative w-full h-full flex flex-col justify-start items-start gap-4 p-10 pt-5 text-justify  before:transition-all before:duraton-500 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 before:border-blue-200 before:rounded-full after:transition-all after:duraton-500 after:absolute after:left-[9px] after:top-5 after:w-[2px] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span onClick={() => window.open(child.github, "_blank")} className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap cursor-pointer hover:underline">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description :
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    {
                                        child.github
                                        &&
                                        (<p className="transition-all duration-500 w-full h-full flex flex-wrap justify-start items-start gap-2">
                                            <span className="w-full flex justify-start items-center gap-2">
                                                <FaGithubAlt className="transition-all duration-500 text-xl" /> Github :
                                            </span>
                                            <Link href={child.github} target="_blank" className="transition-all duration-500 text-blue-200 font-bold sm:text-lg text-xs hover:underline">{child.github}</Link>
                                        </p>)
                                    }
                                    {
                                        child.interfaces
                                        &&
                                        (<div>
                                            <span className="flex justify-start items-center gap-2">
                                                <FaImages className="text-xl" />Quelques interfaces :
                                            </span>
                                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                                {child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center sm:text-lg text-base">{img.titre}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>)
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl p-2 pb-4">
                <Title ref={phpRef} className="transition-all duration-500 relative sm:text-2xl text-lg text-blue-200 font-extrabold mb-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Javascript & PHP</Title>

                {
                    PHP.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full min-h-50 flex flex-col justify-start items-start">

                                <div className="desc_p transition-all duration-500 relative w-full h-full flex flex-col justify-start items-start gap-4 p-10 pt-5 text-justify  before:transition-all before:duraton-500 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:border-4 before:border-blue-200 before:rounded-full after:transition-all after:duraton-500 after:absolute after:left-[9px] after:top-5 after:w-[2px] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span onClick={() => window.open(child.github, "_blank")} className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap cursor-pointer hover:underline">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description :
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    {
                                        child.github
                                        &&
                                        (<p className="transition-all duration-500 w-full h-full flex flex-wrap justify-start items-start gap-2">
                                            <span className="w-full flex justify-start items-center gap-2">
                                                <FaGithubAlt className="transition-all duration-500 text-xl" /> Github :
                                            </span>
                                            <Link href={child.github} target="_blank" className="transition-all duration-500 text-blue-200 font-bold sm:text-lg text-xs hover:underline">{child.github}</Link>
                                        </p>)
                                    }
                                    {
                                        child.interfaces
                                        &&
                                        (<div>
                                            <span className="flex justify-start items-center gap-2">
                                                <FaImages className="text-xl" />Quelques interfaces :
                                            </span>
                                            <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                                {child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center sm:text-lg text-base">{img.titre}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>)
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </div>


            <span
                className={clsx(
                    "transition-all duration-500 fixed right-4 sm:bottom-18 bottom-5 text-4xl hover:scale-110 hover:opacity-100 active:scale-90 cursor-pointer z-10",
                    position >= windowHeight ? "opacity-50" : "opacity-0"
                )}
                onClick={() => scrollTop()}
            >
                <FaChevronCircleUp className="w-full" />
            </span>

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