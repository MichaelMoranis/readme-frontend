import { useNavigate } from "react-router-dom";
import { LogoSena } from "./logo-sena";

export default function SortContainer() {

  const navigate = useNavigate()

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectElement = event.target.value;
    navigate(`${selectElement}`)
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 gap-4 w-full rounded-b-2xl overflow-hidden bg-customGreem font-montSerrat">
      <select 
        className="bg-zinc-200 border-none rounded-xl p-2 font-montSerrat font-bold"
        name="select-game" 
        id="mega-sena"
        onChange={handleSelectChange}
      >
        <option value="/">Mega Sena</option>
        <option value="lotofacil">Loto Fácil</option>
        <option value="quina">Quina</option>
        <option value="lotomania">Lotomania</option>
        <option value="timemania">Timemania</option>
      </select>
      <div className="flex flex-col justify-center items-center gap-2">
        <LogoSena  />
        <h2 className="font-montSerrat font-bold text-2xl text-white">Mega Sena</h2>
      </div>
      <h4 className="font-montSerrat font-bold text-2xl text-white">Concurso 2353</h4>
    </div>
  );
}
