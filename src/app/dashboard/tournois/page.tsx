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
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Tournois
          </h1>
          <FormAddTournoi onAddTournoi={handleAddTournoi} />
        </div>
      </div>
      <div className="p-4">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <TournoiTemplate />
        </div>
      </div>
    </>
  );
}
