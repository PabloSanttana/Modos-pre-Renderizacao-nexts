import type { NextApiRequest, NextApiResponse } from "next";

function numberRond() {
  return parseInt(`${Math.random() * (1000 - 1)}`) + 1;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: numberRond(), nome: "Caneta", price: 5.6 },
    { id: numberRond(), nome: "Caderno", price: 12.6 },
    { id: numberRond(), nome: "Lapis", price: 5.6 },
    { id: numberRond(), nome: "Borracha", price: 7.6 },
  ]);
}
