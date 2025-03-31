import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const SubCategory = ({ name }: any) => {

    interface SubCategories {
        id: number;
        name: string;
        href: string;
        category: string;
    }
    const [subCategories, setSubCategories] = useState<SubCategories[]>([]);
    const subFiltered = subCategories.filter(subcat => subcat.category === name)

    useEffect(() => {
        axios.get('/data.json')
            .then(res => setSubCategories(res.data.subcategories))
            .catch(error => console.error(error))
    }, []);
    return (
        <div>
            {
                subCategories.length > 0 ? (
                    <div className='w-full flex flex-col items-center'>
                        <span className='flex flex-row justify-center w-full gap-5'>
                            {subFiltered.map((cat) => (
                                <a
                                    href={`/category/${cat.href}`}
                                    key={cat.id}
                                    className='hover:text-blue-700 cursor-pointer'
                                >
                                    {cat.name}
                                </a>
                            ))}
                        </span>
                            <hr className='mt-2 mb-3' />
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default SubCategory