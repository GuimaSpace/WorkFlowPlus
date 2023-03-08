/* 
WorkFlowPlus Validate By: Guimaraes 02/03/23
*/
import { db, addDoc, getDocs, getDoc, updateDoc, doc, collection, query, orderBy, where, deleteDoc } from '../services/firebaseClient';
import { UserInterface } from '../../../models';
import { ServiceInterface } from '@/models';
import bcrypt from "bcrypt";

// Initialize features object with default values
const defaultFeatures = {
    administrator: true,
    role: {
        guest: true,
    }
};

export const ValidateServiceForm = (FormData: any) => new Promise((resolve, reject) => {
    //Verifica se os campos estão vazios
    if (!FormData.title || !FormData.description || !FormData.place || !FormData.created_date || !FormData.requester) {
        reject("Nenhum campo deve estar vazio")
        return
    }

    //Verifica o tamanho da descrição
    if (FormData.description.length < 30) {
        reject("A descrição precisa ser mais detalhada")
        return;
    }

    resolve(FormData) 
    return;
})

export const ValidateCadForm = (UserData: UserInterface, PassEncrypt: Boolean) => new Promise((resolve, reject) => {
    // Verifica campos vazios
    if (!UserData.first_name || !UserData.last_name || !UserData.email || !UserData.password) {
        reject("Nenhum campo deve estar vazio!");
        return;
    }

    // Verifica caracteres especiais
    const specialCharRegex = /[^\w\s]/;
    if (specialCharRegex.test(UserData.first_name)) {
        reject("Caracteres especiais em nome não permitidos! " + specialCharRegex);
        return;
    }
    //Verifica o tamanho da senha
    if (UserData.password.length < 6) {
        reject("A senha precisa conter no mínimo 6 caracteres")
        return;
    }

    //Verifica a autenticidade do email fornecido pelo usuario
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(UserData.email)) {
        reject("Email invalido")
        return;
    }

    if (PassEncrypt == true) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(UserData.password, salt, (err, hash) => {
                UserData.password = hash
                UserData.features = defaultFeatures
                resolve(UserData)
            });
        });
    }
})
