"use client";

import FormAddTournoi from "@/components/formAddTournoi";
import TournoiTemplate from "@/components/tournoiTemplate";
import { FormAddTournoiProps } from "@/types/types";
import { Tournoi as PrismaTournoi } from "@prisma/client";

interface Tournoi extends PrismaTournoi {
  id: number;
  name: string;
  date: Date;
  location: string;
}

export default function TournoisPage() {
  const handleAddTournoi: FormAddTournoiProps["onAddTournoi"] = (
    newTournoi
  ) => {
    // Conversion des types pour correspondre à l'interface Tournoi
    const tournoi: Tournoi = {
      id: Date.now(), // ID temporaire
      name: newTournoi.title,
      date: new Date(newTournoi.date),
      location: newTournoi.location,
    };

    console.log("Nouveau tournoi ajouté :", tournoi);
    // Ici, vous pouvez ajouter la logique pour enregistrer le tournoi
  };
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Tournois
          </h1>
          <FormAddTournoi onAddTournoi={handleAddTournoi} />
        </div>
        <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="p-4 sm:ml-64">
        <TournoiTemplate />
      </div>
    </>
  );
}
