//Post UserAPI Rest 02/03/23
import { db, addDoc, collection } from '@/services/firebaseClient';
import { ValidateCadForm, emailExistent } from '@/services/validate';
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserInterface } from '@/models/';

export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(403).send({ Error: 'Only POST requests allowed' });
    return;
  }

  try {
    const userData = req.body
    const trustedUserData = await ValidateCadForm(userData, true) as UserInterface; //Envia a filtragem de dados, as interface informa os valores pré definido de retorno.

    //Verifica se o email existe
    if (await emailExistent(trustedUserData.email)) {
      res.status(405).json({ Error: "Esse email já está cadastrado no sistema" });
      return;
    }

    await addDoc(collection(db, "users"), trustedUserData);
    res.status(200).json({ Mensagem: "Usuario cadastrado com sucesso" });

  } catch (error) {
    res.status(405).json({ Error: "" + error });
  }

}