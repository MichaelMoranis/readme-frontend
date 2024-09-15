import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogoSena } from "./logo-sena";
import { SearchLoterias } from "../../hooks/SearchLoterias";

export default function SortContainer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bgColor, setBgColor] = useState("bg-customMegasena");

  useEffect(() => {
    // Verifica a rota atual e define a cor de fundo correspondente

    switch (location.pathname) {
      case "/":
        setBgColor("bg-ShowLoterias");
        break;
      case "/megasena":
        setBgColor("bg-customMegasena");
        break;
      case "/lotofacil":
        setBgColor("bg-customLotoFacil");
        break;
      case "/quina":
        setBgColor("bg-customQuina");
        break;
      case "/lotomania":
        setBgColor("bg-customLotomania");
        break;
      case "/timemania":
        setBgColor("bg-customTimemania");
        break;
      default:
        setBgColor("bg-customGreem"); // Mega Sena
        break;
    }
  }, [location.pathname]);

  const { concurso, loteria } = SearchLoterias(location.pathname);

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectElement = event.target.value;
    navigate(`${selectElement}`);
  }

  function formatLoteriaName(pathname: string): string {
    return pathname.replace(/^\/(\w)(\w+)/, (_, firstLetter, rest) => {
      return firstLetter.toUpperCase() + rest;
    });
  }

  const formattLoteria = formatLoteriaName(loteria);

  return (
    <div
      className={`flex flex-col justify-center items-center p-6 gap-4 w-full overflow-hidden ${bgColor} font-montSerrat`}
    >
      <select
        className="bg-zinc-200 border-none rounded-xl p-2 font-montSerrat font-bold"
        name="select-game"
        id="select-game"
        onChange={handleSelectChange}
      >
        <option value="/">{formattLoteria !== "/" ? loteria : "" }</option>
        <option value="megasena">Mega Sena</option>
        <option value="lotofacil">Loto Fácil</option>
        <option value="quina" id="quina">Quina</option>
        <option value="lotomania">Lotomania</option>
        <option value="timemania">Timemania</option>
      </select>
      <div className="flex flex-col justify-center items-center gap-2">
        <LogoSena />
        <h2 className="font-montSerrat font-bold text-xl text-white">
          {formattLoteria === "/" ? "" : formattLoteria}
        </h2>
      </div>
      <h4 className="font-montSerrat font-bold text-xl text-white">
        Concurso - {formattLoteria === "/" ? "" : concurso}
      </h4>
    </div>
  );
}
