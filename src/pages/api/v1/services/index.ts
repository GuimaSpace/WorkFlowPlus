import type { NextApiRequest, NextApiResponse } from 'next'
import { ServiceInterface } from '@/models'
import { ValidateServiceForm } from '@/pages/services/validate';
import { db, addDoc, collection } from '@/services/firebaseClient';

export default async function createService(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(404).json({ Mensagem: "Apenas requisições em POST é permitido" });
    }
    try {
        const FormData = req.body
        const TrustedData = await ValidateServiceForm(FormData) as ServiceInterface

        await addDoc(collection(db, "services"), TrustedData);
        res.status(200).json({ Mensagem: "Serviço cadastrado com sucesso" });
        return;
    } catch (error) {
        res.status(405).json({ Error: "" + error });
        return;
    }
}