import { Tournoi as PrismaTournoi } from "@prisma/client";

export interface Tournoi extends PrismaTournoi {
  id: number;
  name: string;
  date: Date;
  location: string;
}

export interface FormAddTournoiProps {
  onAddTournoi: (tournoi: {
    title: string;
    location: string;
    date: string;
  }) => void;
}
