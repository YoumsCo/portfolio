"use client"

import Image from "next/image";
import { Container } from "./container";
import { FaChevronCircleUp, FaInfoCircle, FaLaravel, FaMobileAlt, FaPhp, FaReact, FaUserAlt } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import { useToggle } from "#/hooks/use-toggle";
import { FaGithubAlt, FaLinkedinIn, FaRoad } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    action?: {
        propos?: () => void;
        parcours?: () => void;
        experience?: () => void;
        laravel?: () => void;
        next?: () => void;
        php?: () => void;
    };
}

export const Footer = ({ action }: Props) => {

    const { value } = useToggle();
    const pathname = usePathname();
    const router = useRouter();

    return (
        <Container className={
            clsx(
                "transition-all duration-500 w-screen h-[200px] flex flex-col justify-center items-center mt-10 sm:p-10 p-5",
                !value ? "bg-black" : "bg-gray-400"
            )
        }
        >
            <div className={clsx(
                "transition-all duration-500 w-full h-full flex justify-center items-center",
                pathname == "/projects" ? "gap-3" : "gap-8"
            )}>
                <div className={clsx(
                    "transition-all duration-500 relative w-[100px] sm:h-[100px] h-20 flex justify-center items-center",
                    pathname == "/projects" ? "mr-1" : "mr-4"
                )}>
                    <Image src="/img/logo.jpg" alt="Logo" fill objectPosition="center" className="rounded-full aspect-video cursor-pointer" onClick={() => router.push("/")} />
                </div>

                {/* Footer de la page "Accueil" */}

                {
                    pathname == "/"
                    &&
                    (<div className="transition-all duration-500 relative w-full sm:w-[85%] grid grid-cols-2 sm:flex m justify-evenly flex-wrap">
                        <button type="button" className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90" onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}>Sommet <FaChevronCircleUp /></button>

                        {
                            pathname == "/"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90"
                                onClick={
                                    () => action?.propos && action.propos()
                                }
                            >
                                A propos <FaInfoCircle />
                            </button>)
                        }

                        {
                            pathname == "/"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90"
                                onClick={
                                    () => action?.parcours && action.parcours()
                                }
                            >
                                Parcours <FaRoad />
                            </button>)

                        }

                        {

                            pathname == "/"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90"
                                onClick={
                                    () => action?.experience && action.experience()
                                }
                            >
                                Expérience <FaUserAlt />
                            </button>)

                        }

                        <Link href="tel:+237690552385" className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90">Contact <FaMobileAlt /></Link>
                    </div>)
                }

                {/* Footer de la page "projects" */}

                {
                    pathname == "/projects"
                    &&
                    (<div className="transition-all duration-500 relative w-full sm:w-[85%] grid grid-cols-2 sm:flex sm:justify-evenly sm:flex-wrap">
                        <button type="button" className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90" onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })}>Sommet <FaChevronCircleUp /></button>

                        {

                            pathname == "/projects"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90 text-nowrap"
                                onClick={
                                    () => action?.laravel && action.laravel()
                                }
                            >
                                Laravel <FaLaravel className="text-2xl" />
                            </button>)

                        }

                        {

                            pathname == "/projects"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90 text-nowrap"
                                onClick={
                                    () => action?.next && action.next()
                                }
                            >
                                Next.js <FaReact className="text-2xl" />
                            </button>)

                        }

                        {

                            pathname == "/projects"
                            &&
                            (<button
                                type="button"
                                className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90 text-nowrap"
                                onClick={
                                    () => action?.php && action.php()
                                }
                            >
                                PHP <FaPhp className="text-4xl" />
                            </button>)

                        }

                        <Link href="tel:+237690552385" className="transition-all duration-500 flex justify-start items-center gap-1 hover:scale-105 hover:text-blue-200 active:scale-90">Contact <FaMobileAlt /></Link>
                    </div>)
                }


            </div>
            <div className="transition-all duration-500 w-full flex justify-center items-center gap-10 my-2">
                <Link href="https://www.linkedin.com/in/youms-c-dev-887275360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="transition-all duration-500 hover:scale-125 active:scale-80">
                    <FaLinkedinIn className="transition-all duration-500 w-full sm:text-2xl text-lg" />
                </Link>
                <Link href="https://github.com/YoumsCo" target="_blank" className="transition-all duration-500 hover:scale-125 active:scale-80">
                    <FaGithubAlt className="transition-all duration-500 w-full sm:text-2xl text-lg" />
                </Link>
            </div>
            <p className="text-blue-200 mt-3 flex justify-center items-center flex-wrap">
                Copyright &copy; {new Date().getFullYear()} &nbsp; youms&rsquo;s dev &nbsp; 
                <Link href="mailto:youmschoco@gmail.com" className="underline hover:text-white">youmschoco@gmail.com</Link>
            </p>
        </Container>
    );
}