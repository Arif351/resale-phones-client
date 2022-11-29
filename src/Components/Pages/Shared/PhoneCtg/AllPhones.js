import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Phone from './Phone';


const AllPhones = () => {
    const param = useParams()

    const { data: phone = [] } = useQuery({
        queryKey: ['allPhones'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allPhones/${param.id}`)
            const data = await res.json();
            console.log(data);
            return data;
        }

    });

    return (
        <section className='my-6'>
            <div className=''>
                {
                    phone.map(phones =>
                        <Phone
                            key={phones.unid}
                            phones={phones}
                        ></Phone>
                    )
                }
            </div>
        </section>
    );
};

export default AllPhones;