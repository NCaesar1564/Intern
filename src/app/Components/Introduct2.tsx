"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';

const Introduct2 = () => {
    interface Introduct2 {
        id: string;
        imgIntro: string;
    }
    const [introducts, setIntroducts] = useState<Introduct2[]>([])
    const [close, setClose] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:4000/introductions')
            .then(response => setIntroducts(response.data))
            .catch(error => console.error("Lỗi mẹ gòy: ", error))
    })
    const HideIntroduction = () => {
        setClose(true)
    }
    return (
        <div className='my-5 w-full flex justify-center min-h-fit'>
            {introducts.slice(3, 4).map((introduct, index) => (
                <div key={introduct.id} className={`w-2/5 flex justify-center h-50 bg-yellow-400 cursor-pointer relative not-lg:w-full ${close ? 'hidden' : ''}`}>
                    <a href='/' target='_blank' className='w-full'>
                        <img src={introduct.imgIntro} alt="introduct" className='w-full h-50' />
                    </a>
                    <button onClick={HideIntroduction} className='absolute top-0 right-0 text-lg font-bold cursor-pointer border-2 border-black bg-black'><RxCross2 color='white'/></button>
                </div>
            ))}
        </div>
    )
}

export default Introduct2