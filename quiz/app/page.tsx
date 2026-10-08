import NavProgress from "./components/NavProgress";
import Formulario from "./components/Formulario";
import Timer from "./components/Timer";
import PasswordGenerator from "./components/PasswordGenerator";
import RickAndMorty from "./components/RickAndMorty";

export default function Home() {
  return (
    <main> 
      <NavProgress />
      <Formulario />
      <Timer/>
      <PasswordGenerator />
      <RickAndMorty />
    </main>
  );
}
