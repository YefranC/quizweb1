import NavProgress from "./components/NavProgress";
import Formulario from "./components/Formulario";
import Timer from "./components/Timer";
import PasswordGenerator from "./components/PasswordGenerator";

export default function Home() {
  return (
    <main> 
      <NavProgress />
      <Formulario />
      <Timer/>
      <PasswordGenerator />
    </main>
  );
}
