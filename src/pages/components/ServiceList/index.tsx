import api from "@/pages/services/api";
import { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { ServiceInterface } from "@/models";
import { useState } from "react";

const ServiceList: NextPage = () => {
    const data = api.get("/services") as unknown as ServiceInterface
    const content = data.data.reverse()

    const [Services, setServices] = useState<ServiceInterface>()
    console.log(Services)
    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Local</th>
                        <th scope="col">Data Criado</th>
                        <th scope="col">Requisitor</th>
                        <th scope="col">prioridade</th>
                        <th scope="col">status</th>
                        <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-primary">Baixa</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-success">Médio</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-warning">Alto</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-danger">Urgente</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-primary">Baixa</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-success">Médio</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-warning">Alto</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-danger">Urgente</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-primary">Baixa</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-success">Médio</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-warning">Alto</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>Lorem Impsum</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                        <td>Cozinha - Banheiro</td>
                        <td>00/00/0000</td>
                        <td>Superior1</td>
                        <td><span className="text-center badge text-bg-danger">Urgente</span></td>
                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                        <td><button type="button" className="btn btn-primary">Começar</button> <button type="button" className="btn btn-success" disabled>Concluir</button></td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default ServiceList