import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
          throw new Error(
            `Erro de rede: ${response.status} ${response.statusText}`
          );
        }

        const jsonData = await response.json();

        setData(jsonData);
      } catch (err) {
        console.error("Falha ao buscar dados:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // --- Lógica de Renderização Condicional ---
  if (loading) {
    return (
      <div className="">
        <h1 className=""></h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="">
        <h1 className="">Erro: {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Dados da API</h1>
      <div>
        {data ? (
        <>
          <h2 className="bg-black ">{data.title}</h2>
          <p className="">{data.body}</p>
          <p className="">ID do post: </p>
          <p className="">ID do Usuário: </p>
        </>
        ) : (<p className="">Nenhum dado encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default DataFetcher;
