import type { NextApiRequest, NextApiResponse } from 'next'
import { ServiceInterface } from '@/models'
import { ValidateServiceForm, } from '@/pages/services/validate';
import { db, addDoc, collection, getDocs } from '@/services/firebaseClient';
import { DocumentData } from 'firebase/firestore';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST') {
        try {
            const FormData = req.body
            const TrustedData = await ValidateServiceForm(FormData) as ServiceInterface
            await addDoc(collection(db, "services"), TrustedData);
            res.status(200).json({ message: "Serviço cadastrado com sucesso" });
            return;
        } catch (error) {
            res.status(405).json({ Error: "" + error });
            return;
        }
    }

    if (req.method === 'GET') {
        try {
            const querySnapshot = await getDocs(collection(db, 'services'));
            const servicesData: DocumentData[] = [];

            querySnapshot.forEach((doc) => {
                const service = doc.data();
                service.id = doc.id;
                servicesData.push(service);
            });

            if (servicesData.length > 0) {
                res.status(200).json(servicesData);
            } else {
                res.status(404).json({ message: "Nenhum serviço está cadastrado" });
            }

            return;
        } catch (error) {
            res.status(500).json({ Error: '' + error });
            return;
        }
    }



    res.status(400).json({ message: "The specified method is not accepted" })


}