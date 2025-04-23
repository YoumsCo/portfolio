import { MoonLoader } from "react-spinners";
import { Container } from "../components/container";

export default function Loading() {

    return (
        <Container className="transition-all duration-500 w-screen h-screen flex flex-col justify-center items-center">
            <MoonLoader
                color="white"
                loading={true}
                size={70}
                aria-label="Chargement du Spinner"
                data-testid="loader"
            />
        </Container>
    );
}