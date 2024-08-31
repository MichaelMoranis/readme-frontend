import axios from "axios";
import { useEffect, useState } from "react";

// Tipos definidos para os dados
interface LoteriasData {
  dezenasOrdemSorteio: string[];
  concurso: number | null; // Ajuste o tipo se a estrutura for diferente
}

// Tipagem do retorno do hook
interface SearchLoteriasResult {
  data: string[] | null;
  error: Error | null;
  loading: boolean;
  concurso: number | null;
  loteria: string;
}

export function SearchLoterias(loteria: string): SearchLoteriasResult {
  const [data, setData] = useState<string[] | null>(null);
  const [concurso, setConcurso] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<LoteriasData>(
          `https://loteriascaixa-api.herokuapp.com/api/${loteria}/latest`
        );
        setData(response.data.dezenasOrdemSorteio);
        setConcurso(response.data.concurso);
        setLoading(false); // Atualiza o estado de carregamento
      } catch (error) {
        setError(error as Error);
        setLoading(false); // Atualiza o estado de carregamento
      }
    };

    fetchData();
  }, [loteria]);

  return { data, error, loading, concurso, loteria };
}
