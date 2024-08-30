import { useNavigate } from "react-router-dom";
import { LogoSena } from "./logo-sena";

export default function SortContainer() {

  const navigate = useNavigate()

  function handleSelectChange(event) {
    const selectElement = event.target.value;
    navigate(`${selectElement}`)
  }

  return (
    <div className="flex flex-col justify-center items-center p-12 gap-6 w-full rounded-b-2xl overflow-hidden bg-customGreem">
      <select 
        className="bg-zinc-200 border-none rounded-xl p-2 text-lg font-medium"
        name="select-game" 
        id="mega-sena"
        onChange={handleSelectChange}
      >
        <option value="mega-sena">Mega Sena</option>
        <option value="loto-facil">Loto Fácil</option>
        <option value="quina">Quina</option>
        <option value="lotomania">Lotomania</option>
        <option value="timemania">Timemania</option>
        <option value="dia-de-sorte">Dia de Sorte</option>
      </select>
      <div className="flex flex-col justify-center items-center gap-4">
        <LogoSena  />
        <h2>Mega Sena</h2>
      </div>
      <h4>Concurso 2353</h4>
    </div>
  );
}
