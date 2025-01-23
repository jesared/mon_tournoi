import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tournois = await prisma.tournoi.findMany();
    return NextResponse.json(tournois, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des tournois:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des tournois" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, location, date, level } = await req.json();
    const newTournoi = await prisma.tournoi.create({
      data: {
        name: title,
        location,
        date: new Date(date),
      },
    });
    return NextResponse.json(newTournoi, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'ajout du tournoi:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'ajout du tournoi" },
      { status: 500 }
    );
  }
}
