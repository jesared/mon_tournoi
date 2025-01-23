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
    <div>
      <h1>Liste des Tournois</h1>
      <ul>
        {tournois.map((tournoi) => (
          <li key={tournoi.id}>
            <h2>{tournoi.name}</h2>
            <p>Date: {tournoi.date}</p>
            <p>Lieu: {tournoi.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
