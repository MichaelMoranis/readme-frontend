import { SearchLoterias } from "../../hooks/SearchLoterias";

interface SearchLoteriaResult {
  data: string[] | null;
}

export function AppMegaSena() {
  const { data }: SearchLoteriaResult = SearchLoterias("megasena");
  return (
    <div className="text-center absolute top-52 max-h-screen text-black bg-zinc-100 flex w-full  p-6 rounded-t-[3rem]">
      <div className="flex items-center justify-center p-10 gap-10 flex-wrap">
        {/* Verifique se data é um array e mapeie os itens */}
        {data && Array.isArray(data) ? (
          data.map((item, index) => (
            <span
              key={index}
              className="flex items-center justify-center bg-zinc-300 rounded-full p-2 font-montSerrat font-bold text-black text-xl"
            >
              {item}
            </span>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
