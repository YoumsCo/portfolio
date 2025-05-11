"use client"

import Image from "next/image";
import { Container } from "./container";
import { FaLongArrowAltLeft, FaProjectDiagram } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHouseChimneyUser } from "react-icons/fa6";

export const Nav = () => {
    // const { value, handleValue } = useToggle();
    const pathName = usePathname();
    const router = useRouter();

    // const state: { icon: IconType } = {
    //     icon: value ? FaSun : FaMoon,
    // }

    return (
        <Container className="transition-all duration-500 relative flex justify-between items-center gap-6 w-full h-16 sm:px-10 px-5">
            <div className="hidden sm:block">
                <span className={
                    clsx(
                        "relative max-[415px]:text-lg sm:text-2xl font-['papyrus'] before:absolute before:w-16 before:h-[2px] before:left-0 before:bottom-0 after:absolute after:w-10 after:h-[2px]  after:left-0 after:-bottom-4 font-extrabold text-blue-200 before:bg-blue-200 after:bg-blue-200"
                    )
                }
                >
                    <Link href="/">Youms&rsquo;s portfolio</Link>
                </span>
            </div>
            <div className="transition-all duration-500 sm:hidden w-[50px] h-[50px] relative rounded-full cursor-pointer" onClick={() => router.push("/")}>
                <Image src="/img/logo.jpg" alt="Logo" fill objectPosition="center" className="rounded-full"></Image>
            </div>

            <div className="transition-all duration-500 relative flex justify-center items-center gap-6 pr-10">
                {
                    pathName != "/"
                    &&
                    (<button
                        type="button"
                        className="transition-all duration-500 relative w-48 h-[30px] bg-transparent mt-2 text-blue-200 border-b-2 border-blue-200 rounded-xl hidden lg:flex justify-center items-center flex-nowrap hover:shadow-sm hover:shadow-blue-200 active:scale-90 before:transition-all before:duration-500 before:absolute before:top-0 before:left-1/2 before:border-t-2 before:border-blue-200 before:rounded-xl before:w-0 before:h-2 hover:before:w-[95%] hover:before:left-1"
                        onClick={() => router.back()}
                    >
                        <FaLongArrowAltLeft />&nbsp;Retour
                    </button>)
                }

                <Link
                    href="/"
                    className={clsx(
                        "transition-all duration-500 relative text-nowrap flex justify-center items-center gap-2 text-base sm:text-lg hover:text-blue-200 hover:scale-110",
                        pathName == "/" && "text-blue-100 animate-bounce before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-blue-100 after:absolute after:w-10 after:h-[2px] after:right-0 after:-bottom-2 after:bg-blue-100 before:animate-ping after:animate-ping"
                    )}
                >
                    <FaHouseChimneyUser className="text-xl" />
                    &nbsp;
                    Accueil
                </Link>
                <Link
                    href="/projects"
                    className={clsx(
                        "transition-all duration-500 relative text-nowrap flex justify-center items-center gap-2 text-base sm:text-lg hover:text-blue-200 hover:scale-110",
                        pathName == "/projects" && "text-blue-100 animate-bounce before:absolute before:w-full before:h-[2px] before:left-0 before:bottom-0 before:bg-blue-100 after:absolute after:w-10 after:h-[2px] after:right-0 after:-bottom-2 after:bg-blue-100 before:animate-ping after:animate-ping"
                    )}
                >
                    <FaProjectDiagram className="text-xl inline" />
                    &nbsp;
                    Projets
                </Link>

                {/* <span onClick={() => handleValue()}>
                    <state.icon className={
                        clsx(
                            "transition-all duration-500  drop-shadow-2xl drop-shadow-blue-200 hover:scale-110 active:scale-90 cursor-pointer text-2xl",
                            !value ? "fill-blue-200" : "fill-blue-500"
                        )
                    }
                    />
                </span> */}

                <Image src="/img/logo.jpg" alt="Logo" width={60} height={60} objectPosition="center" className="hidden sm:block w-12 h-12 rounded-full cursor-pointer" onClick={() => router.push("/")} />
            </div>
        </Container>
    );
}