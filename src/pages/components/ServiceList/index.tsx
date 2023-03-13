import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ServiceInterface } from '@/models';
import api from '../../services/api';

interface Props {
    services: ServiceInterface[];
    totalPages: number;
}

const PAGE_SIZE = 10;

const ServiceList = ({ services, totalPages }: Props) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(Number(router.query.page) || 1);
    const [limit] = useState(PAGE_SIZE);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [servicesData, setServicesData] = useState(services);

    useEffect(() => {
        setLoading(true);
        setError(false);

        api
            .get(`/services?page=${currentPage}&limit=${limit}`)
            .then((response) => {
                setLoading(false);
                setServicesData(response.data.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(true);
                console.error(error);
            })
    }, [currentPage, limit]);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={currentPage === i ? 'btn btn-primary active' : 'btn btn-primary'}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div>
            {loading ? (
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : error ? (
                <p>:( um erro interno ocorreu, confira o console e mande um e-mail para equipe técnica do WorkFlow Plus</p>
            ) : servicesData.length === 0 ? (
                <div className="text-center">
                    <p className='fs-1'>Nenhum serviço foi cadastrado.</p>
                    <hr />
                    <p className='fs-3'>Assim que um superior lançar um novo serviço irá aparecer aqui!</p>
                </div>
            ) : (

                    <>
                                    <div className="pagination">{renderPagination()}</div>

                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
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
                            {servicesData.map((service: ServiceInterface) => {
                                return (
                                    <tr>
                                        <th scope="row">{service.id}</th>
                                        <td>{service.title}</td>
                                        <td>{service.description}</td>
                                        <td>{service.place}</td>
                                        <td>{service.created_date}</td>
                                        <td>{service.requester}</td>
                                        <td><span className="text-center badge text-bg-primary">Baixa</span></td>
                                        <td><span className="badge text-bg-secondary">Aguardando</span></td>
                                        <td><button type="button" className="btn btn-primary">Começar</button><button type="button" className="btn btn-success" disabled>Concluir</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </>
            )}

        </div>
    );
};

export default ServiceList;
