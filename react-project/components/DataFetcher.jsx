import React, {useState, useEffect} from "react";
// import { useState } from "react";

function DataFetcher(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                setError(null)

                const responde = await fetch('https://jsonplaceholder.typicode.com/posts')

                if(!responde.ok){
                    throw new Error(`Erro de rede: ${responde.status} ${responde.statusText}`);
                }

                const jsonData = await responde.json();
                setData(jsonData)
            }

        }
    })
}