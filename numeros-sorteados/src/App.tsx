import bannerLoteria from "./assets/loteria-banner.png"

export function App() {
  return (
    <div className="text-center absolute top-52 max-h-screen text-black bg-zinc-100 flex w-full  p-6 rounded-t-[3rem]">
        <div className="flex flex-col gap-4 p-4">
          <h1 className="font-montSerrat font-bold text-xl">Veja os números sorteados das loterias Caixa</h1>
          <img className="w-full rounded-full" src={bannerLoteria} alt="imagem da caixa" />
        </div>
    </div>
  );
}