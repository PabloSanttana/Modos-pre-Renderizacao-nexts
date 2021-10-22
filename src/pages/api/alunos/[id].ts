import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = +req.query.id;
  res.status(200).json({
    id,
    name: "Guilherme Pablo de Santana Maciel",
    idade: 25,
    email: "guilherme@gmail.com",
  });
}
