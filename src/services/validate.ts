/* 
WorkFlowPlus Validate By: Guimaraes 02/03/23
*/
import { UserInterface } from '@/models';
import { db, addDoc, getDocs, getDoc, updateDoc, doc, collection, query, orderBy, where, deleteDoc } from '@/services/firebaseClient';
import bcrypt from "bcrypt";

// Initialize features object with default values
const defaultFeatures = {
    role: {
        guest: true,
    }
};

//Validate User on Firebase, and return user data for callback
export const FirebaseUserValidate = (userData:{email:string, password: string}) => new Promise(async (resolve, reject) => {
    // Verifica campos vazios
    if (!userData.email || !userData.email) {
        reject("Nenhum campo deve estar vazio!");
        return;
}

    // Verifica a autenticidade do email fornecido pelo usuário
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(userData.email)) {
        reject("Email inválido");
        return;
    }

    try {
        const q = query(collection(db, 'users'), where('Email', '==', userData.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDataFromDb = querySnapshot.docs[0].data() as UserInterface;
            const passwordMatch = await bcrypt.compare(userData.password, userDataFromDb.password);
            if (passwordMatch) {
                // Retorna o objeto com o ID do documento
                resolve({ ...userDataFromDb, id: querySnapshot.docs[0].id });
                return;
            }
        }
        reject("Email ou senha inválidos");
        return;
    } catch (error) {
        reject('Erro ao procurar usuário: ' + error);
        return;
    }
});

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

export const emailExistent = async (userEmail: string) => {
    const q = query(collection(db, 'users'), where('email', '==', userEmail));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return true;
    }
    return false;
};

