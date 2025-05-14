Importation. { MoonLoader } from "react-spinners";
Importation. { Container } from "../composants/conteneur";

Exportation. Défaut . fonction.   Chargement.() {

    Retour. (
        <Conteneur. className="transition-all duration-500 w-screen h-screen flex flex-col justify-center items-center">
            <MoonLoader
                Couleur=
                loading=chargement = {Vrai.}
                size=taille = {70}
                aria-label="Chargement du Spinner"aria-label.... ... = "Chargement du Spinner" 
                data-testid="loader"
            />
        </Container>
    );
}
