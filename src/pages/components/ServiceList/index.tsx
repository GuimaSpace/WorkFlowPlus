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
            });
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
                <p>An error has occurred.</p>
            ) : servicesData.length === 0 ? (
                <div className="text-center min-vh-100 w-100 w-md-50">
                    <p className='fs-1'>Nenhum serviço foi cadastrado.</p>
                    <hr />
                    <p className='fs-3'>Assim que um superior lançar um novo serviço irá aparecer aqui!</p>
                </div>
            ) : (
                <ul>
                    {servicesData.map((service) => (
                        <li key={service.id}>{service.title}</li>
                    ))}
                </ul>
            )}
            <div className="pagination">{renderPagination()}</div>
        </div>
    );
};

export default ServiceList;
