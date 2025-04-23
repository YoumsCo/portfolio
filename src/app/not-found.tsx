"use client"

import { Button } from "./components/button";
import { Container } from "./components/container";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

export default function NotFound() {

    const router = useRouter();

    return (
        <Container className="transition-all duration-500 w-screen h-screen flex flex-col justify-center items-center p-10">
            <p className="sm:text-7xl text-5xl pb-3">
                😥
            </p>
            <h1 className="text-center">Désolé mais cette page n&rsquo;existe pas sur cette plateforme.</h1>

            <Button action={() => router.push("/")}><FaChevronLeft /><span className="ml-3">Revenir en lieu sûr.</span></Button>
        </Container>
    );
}