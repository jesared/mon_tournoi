"use client";

import { useEffect, useState } from "react";

interface Tournoi {
  id: number;
  name: string;
  date: string;
  location: string;
}

export default function TournoiTemplate() {
  const [tournois, setTournois] = useState<Tournoi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/tournois")
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des tournois");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setTournois(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tournois:", error);
        setError("Erreur lors de la récupération des tournois");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement des tournois...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1>Liste des Tournois</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {tournois.map((tournoi) => (
          <div key={tournoi.id}>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {tournoi.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Date: {tournoi.date}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lieu: {tournoi.location}
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
