"use client"

import { Container } from "./components/container";
import { FaCalendarAlt, FaChevronCircleUp, FaPlus } from "react-icons/fa";
import { Footer } from "#/components/footer";
import { Nav } from "#/components/nav";
import { useToggle } from "#/hooks/use-toggle";
import clsx from "clsx";
import { Title } from "#/components/title";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./components/button";

export default function Page() {

  const { value } = useToggle();
  const hour = new Date().getHours();
  const propos = useRef<HTMLHeadingElement | null>(null);
  const wayRef = useRef<HTMLHeadingElement | null>(null);
  const expRef = useRef<HTMLHeadingElement | null>(null);
  const [position, setPosition] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  const scrollToPropros = () => {
    window.scrollTo({
      top: propos.current ? propos.current.getBoundingClientRect().top + window.scrollY : 0,
      left: 0,
      behavior: "smooth"
    });
  }

  const scrollToWay = () => {
    window.scrollTo({
      top: wayRef.current ? wayRef.current.getBoundingClientRect().top + window.scrollY : 0,
      left: 0,
      behavior: "smooth"
    });
  }

  const scrollToExp = () => {
    window.scrollTo({
      top: expRef.current ? expRef.current.getBoundingClientRect().top + window.scrollY : 0,
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

  const scrollToPropos = () => {
    window.scrollTo({
      top: propos.current ? propos.current?.getBoundingClientRect().top + window.scrollY - 40 : 0,
      left: 0,
      behavior: "smooth"
    });
  }

  console.groupCollapsed("Dev infos");
  console.log("Name: Youmbi Le-duc");
  console.log("Email: youmschoco@gmail.com | youmsc.co@gmail.com");
  console.groupEnd();

  return (
    <Container>
      <Nav />

      <div className={
        clsx(
          "transition-all duration-500 relative w-11/12 h-96 sm:h-[420px] flex justify-center items-center my-10 rounded-3xl before:absolute before:bottom-0 left-0 before:translate-y-10 before:w-full before:h-1",
          !value ? "before:bg-blue-200" : "before:bg-red-800"
        )
      }
      >
        <div className="transition-all duration-500 w-full sm:w-1/2 h-full p-3 flex flex-col justify-center items-start gap-1 bg-black bg-opacity-80 sm:bg-none">
          <h1 className="transition-all duration-500 text-2xl text-left text-blue-200">
            <p className="text-blue-50">
              {
                new Date().getHours() >= 16 ? "Bonsoir" : "Bonjour"
              },
            </p>
            <p className=" my-2">
              <span className="text-blue-50">
                je suis
              </span>
              <span className="relative font-['papyrus'] mx-4 before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 before:border-blue-200 after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 after:border-blue-200">Youmbi Le-duc</span>
            </p>
          </h1>
          <h2 className="transition-all duration-500 text-xl text-left text-blue-200 font-['papyrus']">Développeur full stack.</h2>
          <p className="transition-all duration-500 text-justify ">
            Je suis un développeur full stack passionné par la création d&rsquo;applications web. J&rsquo;ai une solide expérience dans le développement d&rsquo;applications front-end et back-end, ainsi que dans la conception de bases de données. Je suis toujours à la recherche de nouveaux défis et d&rsquo;opportunités pour apprendre et grandir en tant que développeur.
          </p>

          <Button action={() => scrollToPropos()}>
            <FaPlus />&nbsp;Plus à propos de moi
          </Button>

        </div>
        <div className="transition-all duration-500 absolute sm:relative w-1/2 h-full flex justify-center items-center -z-10">
          <div className="transition-all duration-500 relative w-[200px] h-5/6 before:absolute before:top-0 before:left-0 before:-translate-x-10 before:-translate-y-6 before:w-10 before:h-10 before:border-l-4 before:border-t-4 before:border-blue-200 after:absolute after:bottom-0 after:right-0 after:translate-x-10 after:translate-y-6 after:w-10 after:h-10 after:border-r-4 after:border-b-4 after:border-blue-200">
            <Image src="/img/mine-tof.jpg" alt="Dev image" fill objectPosition="center" className="aspect-[16/9]" />
          </div>
          <div className="transition-all duration-500 absolute top-0 left-0 w-full h-full bg-transparent sm:bg-black/60 z-10 sm:z-0"></div>
        </div>
      </div>

      <Title ref={propos}>A propos de moi</Title>

      <div className="transition-all duration-500 w-11/12 flex flex-col justify-center items-start gap-2">
        <Title className="transition-all duration-500 text-lg">Moi c&rsquo;est &nbsp;
          <span className="transition-all duration-500 relative text-blue-200 text-xl font-['papyrus'] font-bold mx-6 before:absolute before:top-0 before:left-0 before:-translate-x-6 before:-translate-y-1 before:w-4 before:h-4 before:border-l-2 before:border-t-2 before:border-blue-200 after:absolute after:bottom-0 after:right-0 after:translate-x-6 after:translate-y-1 after:w-4 after:h-4 after:border-r-2 after:border-b-2 after:border-blue-200">Youmbi Le-duc</span>&nbsp; et je suis <span className="text-blue-200 font-extrabold">Développeur web full stack.</span>
        </Title>

        <p className="transition-all duration-500 mt-3 text-justify text-lg">
          Ayant debuté ma carrière en 2022 dans le monde du développement d&rsquo;applications et plus particulièrement dans le monde du dévéloppment web, je suis étudiant en génie logiciel à <span>l&rsquo;IUEs / Insam</span> du campus de ndokoti (Douala - Cameroun). Je suis passionné par le développement d&rsquo;applications web et j&rsquo;ai acquis une solide expérience dans le développement front-end et back-end. J&rsquo;ai également une bonne connaissance des bases de données et des systèmes de gestion de contenu. Je suis toujours à la recherche de nouveaux défis et d&rsquo;opportunités pour apprendre et grandir en tant que développeur.
        </p>

        <div className="transition-all duration-500 w-11/12 flex flex-wrap justify-start items-start sm:gap-22 gap-16 mt-4">

          <div className="transition-all duration-500 flex flex-col justify-start items-start gap-10">
            <div className=" transition-all duration-500 flex flex-wrap justify-between items-center gap-16">

              <ul className="transition-all duration-500 flex flex-col justify-center items-start gap-6">
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span className="font-bold">Date de naissance :</span>
                  &nbsp;
                  <span className="text-blue-200">08 Mai 2002</span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Niveau d&rsquo;étude : <span className="text-blue-200">Licence</span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Pays : <span className="text-blue-200">Cameroun</span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Ville : <span className="text-blue-200">Douala</span>
                </li>
              </ul>

              <ul className="transition-all duration-500 flex flex-col justify-center items-start gap-6">
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  <span className="font-bold">Âge :</span>
                  &nbsp;
                  <span className="text-blue-200">{new Date().getFullYear() - 2002} ans</span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Email :
                  <span className="text-blue-200">
                    <Link href="mailto:youmschoco@gmail.com" className="underline">youmschoco@gmail.com</Link>
                    &nbsp;
                    |
                    &nbsp;
                    <Link href="mailto:youmsc.co@gmail.com" className="underline">youmsc.co@gmail.com</Link>
                  </span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Téléphone :
                  <span className="text-blue-200">
                    <Link href="tel:+237690552385">+237 690552385</Link>
                  </span>
                </li>
                <li className="transition-all duration-500 relative w-full before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 before:bg-gray-500/40">
                  Statut : <span className="text-blue-200">Full stack</span>
                </li>
              </ul>
            </div>

            <Link
              href={clsx("http://wa.me/+237690552385?text=", hour >= 16 ? "Bonsoir" : "Bonjour", " monsieur Le-duc. Je viens de visiter votre portfolio et j'aimerais discuter avec vous !")} className="transition-all duration-500 relative w-2/3 h-[50px] bg-transparent mt-2 text-blue-200 border-b-2 border-blue-200 rounded-xl flex justify-center items-center flex-nowrap hover:shadow-sm hover:shadow-blue-200 active:scale-90 before:transition-all before:duration-500 before:absolute before:top-0 before:left-1/2 before:border-t-2 before:border-blue-200 before:rounded-xl before:w-0 before:h-2 hover:before:w-[95%] hover:before:left-1
              " target="_blank">
              Discuter avec moi
            </Link>
          </div>

          <ul className="transition-all duration-500 w-[265px] flex flex-col justify-center items-start gap-6">
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[70%] after:h-[5px] after:bg-blue-200/60">
              Javascript : <span className="text-blue-200">70%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[70%] after:h-[5px] after:bg-blue-200/60">
              PHP : <span className="text-blue-200">70%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[50%] after:h-[5px] after:bg-blue-200/60">
              SQL : <span className="text-blue-200">50%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[50%] after:h-[5px] after:bg-blue-200/60">
              Typescript : <span className="text-blue-200">70%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[30%] after:h-[5px] after:bg-blue-200/60">
              Python : <span className="text-blue-200">30%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[60%] after:h-[5px] after:bg-blue-200/60">
              Laravel : <span className="text-blue-200">60%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[60%] after:h-[5px] after:bg-blue-200/60">
              React : <span className="text-blue-200">60%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[60%] after:h-[5px] after:bg-blue-200/60">
              Next.js : <span className="text-blue-200">60%</span>
            </li>
            <li className="transition-all duration-500 relative w-full flex justify-between before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[5px] before:bg-gray-500/40 after:absolute after:-bottom-2 after:left-0 after:w-[80%] after:h-[5px] after:bg-blue-200/60">
              Tailwindcss : <span className="text-blue-200">80%</span>
            </li>
          </ul>

        </div>

      </div>


      <div className="transition-all duration-500 w-11/12 min-h-[500px] flex flex-wrap sm:flex-nowrap justify-evenly items-start my-20 gap-6">

        <div className="transition-all duration-500 sm:w-1/2 h-full flex flex-col justify-center items-start">

          <Title ref={wayRef} className="transition-all duration-500 relative text-blue-200 mb-10 text-2xl">Parcours</Title>

          <div className="transition-all duration-500 bg-gray-900/40 rounded-2xl flex flex-col justify-center items-center">

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 gap-2 before:absolute before:top-0 before:translate-y-[42px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[60px] after:left-4 after:w-[2px] after:h-[74%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 2022</span>
              <p className="text-bold text-blue-200">Baccaloréat D</p>
              <p>
                J&rsquo;ai fait mes études secondaires au lycée classique d&rsquo;édéa (Région du littoral), où j&rsquo;ai obtenu mon baccalauréat D avant de m&rsquo;installer à douala-Cameroun pour poursuivre mes études au terciaire.
              </p>
            </div>

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 pt-0 gap-2 before:absolute before:top-0 before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[16px] after:left-4 after:w-[2px] after:h-[91%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 2022 - 2024</span>
              <p className="text-bold text-blue-200">BTS en Génie logiciel</p>
              <p>
                Une fois mon baccaloréat obtenu et peu de temps après mon installation dans la ville de douala-Cameroun, je me suis vu poursuivre mes études à l&rsquo;<span className="text-blue-200">I</span>nstitut <span className="text-blue-200">U</span>niversitaire et <span className="text-blue-200">S</span>tratégique de l&rsquo; <span className="text-blue-200">E</span>stuaire (<span className="text-blue-200">IUEs / Insam</span>) de ndokoti, où j&rsquo;ai pu obtenir après deux ans d&rsquo;études mon BTS en génie logiciel.
              </p>
            </div>

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 pt-0 gap-2 before:absolute before:top-0 before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[16px] after:left-4 after:w-[2px] after:h-[91%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 2024 - 2025</span>
              <p className="text-bold text-blue-200">Licence en Génie logiciel</p>
              <p>
                Après de mon BTS je me suis dit si j&rsquo;ai déjà un BTS dans le domaine où je prévoyais exercer depuis tout petit, pourquoi ne pas prolonger jusqu&rsquo;à la licence ?
                <br />Et donc un an plus tard j&rsquo;obtiens ma licence en génie logiciel comme prévu.
              </p>
            </div>
          </div>
        </div>


        <div className="transition-all duration-500 sm:w-1/2 h-full flex flex-col justify-start items-start">

          <Title ref={expRef} className="transition-all duration-500 relative text-blue-200 mb-10 text-2xl">Expérience</Title>

          <div className="transition-all duration-500 bg-gray-900/40 rounded-2xl flex flex-col justify-center items-center">

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 gap-2 before:absolute before:top-0 before:translate-y-[42px] before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[60px] after:left-4 after:w-[2px] after:h-[80%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 06 - 2023 au 08 - 2023</span>
              <p className="text-bold text-blue-200">Stage académique à AL-Consulting Sarl</p>
              <p className="w-full min-h-full">
                J&rsquo;ai effectué un stage dans l&rsquo;entreprise AL-Consulting Sarl où j&rsquo;ai appris à mieux manier l&rsquo;outil informatique ceci se traduisant par le logiciel qu&rsquo;on utilisait là-bas pour développer les applications de manière efficace à savoir <span className="text-blue-200">Visual studio code.</span> J&rsquo;y ai egalement appris les règles de création et de gestion d&rsquo;une base données avec le langage<span className="text-blue-200">MySQL</span> et aussi l&rsquo;apprentissage à l&rsquo;utilisation des bonnes pratiques dans les langages <span className="text-blue-200">Javascript</span> et <span className="text-blue-200">PHP</span>.
              </p>
            </div>

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 pt-0 gap-2 before:absolute before:top-0 before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[16px] after:left-4 after:w-[2px] after:h-[90%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 12 - 2024 au 01 -2025</span>
              <p className="text-bold text-blue-200">Employé à Soif.</p>
              <p>
                Cetres l&rsquo;entreprise <span className="text-blue-200">Soif</span> n&rsquo;exerce pas dans mon domaine (le génie logiciel), mais là-bas j&rsquo;ai eu l&rsquo;occasion d&rsquo;expérimenter ce qu&rsquo;est le monde professionnel et ainsi d&rsquo;améliorer mon savoir-être et mon savoir-faire.
              </p>
            </div>

            <div className="transition-all duration-500 relative w-full flex flex-col justify-start items-start text-justify p-10 pt-0 gap-2 before:absolute before:top-0 before:left-2 before:w-[18px] before:h-[18px] before:border-4 before:border-blue-200 before:bg-transparent before:rounded-full after:absolute after:top-0 after:translate-y-[16px] after:left-4 after:w-[2px] after:h-[88%] after:bg-blue-200">

              <span className="transition-all duration-500 flex justify-start items-center gap-2 text-bold text-blue-200"><FaCalendarAlt /> &nbsp; 01 - 2025 au 03 -2025</span>
              <p className="text-bold text-blue-200">Stage professionnel à MT Consulting Sarl.</p>
              <p>
                A <span className="text-blue-200">MT Consulting Sarl</span> j&rsquo;ai découvert le <span className="text-blue-200">python</span> et par la suite appris à manier quelques modules assez simple de l&rsquo;ERP <span className="text-blue-200">Odoo</span>.
              </p>
            </div>

          </div>
        </div>

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
          propos: scrollToPropros,
          parcours: scrollToWay,
          experience: scrollToExp,
        }
      }
      />
    </Container>
  );
}
