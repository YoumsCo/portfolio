"use client"

import { Container } from "#/components/container";
import { Footer } from "#/components/footer";
import { Nav } from "#/components/nav";
import { Title } from "#/components/title";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronCircleUp, FaInfoCircle, FaRProject } from "react-icons/fa";
import { FaImages } from "react-icons/fa6";
import { Laravel, Next, PHP } from "./projects";
import cuid from "cuid";

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

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl">
                <Title ref={nextRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold mb-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Next.js & Tailwindcss</Title>

                {
                    Next.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full flex flex-col justify-start items-start">

                                <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[90%] after:max-[639px]:min-h-[96%] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description:
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaImages className="text-xl" />Quelques interfaces
                                        </span>
                                        <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                            {
                                                child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">{img.titre}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }


            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl">
                <Title ref={laravelRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold mb-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Laravel & Tailwindcss</Title>

                {
                    Laravel.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full flex flex-col justify-start items-start">

                                <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[90%] after:max-[639px]:min-h-[96%] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description:
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaImages className="text-xl" />Quelques interfaces
                                        </span>
                                        <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                            {
                                                child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">{img.titre}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }


            </div>

            <div className="transition-all duration-500 w-11/12 flex flex-col justify-start items-start pt-6 bg-gray-800/40 rounded-3xl">
                <Title ref={phpRef} className="transition-all duration-500 relative text-2xl text-blue-200 font-extrabold mb-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-200 after:absolute after:bottom-0 after:left-0 after:w-[3px] after:h-4 after:translate-y-4 after:bg-blue-200">Javascript et PHP</Title>

                {
                    PHP.map((child) => {
                        return (
                            <div key={cuid()} className="transition-all duration-500 w-full flex flex-col justify-start items-start">

                                <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start gap-4 pt-6 p-10 text-justify before:absolute before:top-0 before:translate-y-[25px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[40px] after:left-4 after:w-[2px] sm:after:h-[90%] after:max-[639px]:min-h-[96%] after:bg-blue-200">

                                    <p className="transition-all duration-500 grid grid-cols-1 sm:flex justify-start items-center gap-2">
                                        <span className="w-full flex justify-center items-center sm:gap-2 gap-1 text-nowrap">
                                            <FaRProject className="text-xl" /> Nom du projet :
                                        </span>
                                        <span className="text-blue-200 font-bold text-lg translate-x-6 sm:translate-x-0 sm:text-nowrap">{child.titre}</span>
                                    </p>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaInfoCircle className="text-xl" />Description:
                                        </span>
                                        <p className="pt-1 pl-[28px]">
                                            {child.description}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="flex justify-start items-center gap-2">
                                            <FaImages className="text-xl" />Quelques interfaces
                                        </span>
                                        <div className="transition-all duration-500 w-full flex flex-wrap justify-start items-center gap-6 pt-4">
                                            {
                                                child.interfaces.map((img) => {
                                                    return (
                                                        <div key={cuid()} className="transition-all duration-500 relative flex flex-col justify-center items-center gap-2 sm:w-[380px] w-full sm:h-[300px] h-[270px] bg-gray-900/90 rounded-3xl p-4">
                                                            <div className="transition-all duration-500 relative w-full h-[95%] rounded-3xl">
                                                                <Image src={img.lien} alt={img.titre} fill className="transition-all duration-500 rounded-3xl" />
                                                            </div>
                                                            <p className="transition-all duration-500 w-full h-[5%] text-center text-lg">{img.titre}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
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