import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center items-center bg-gray-100 py-5 not-2xl:px-5 w-full h-1/6'>
            <div className='grid grid-cols-12 items-center gap-0 not-lg:grid-cols-1 not-lg:text-center w-3/4'>
                <div className='flex justify-start w-full col-span-9 '>
                    <span className='not-lg:text-center'>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Tạp chí điện tử tri thức</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Cơ quan chủ quản. Hội Xuất bản Việt Nam</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs text-wrap' >Giấy phép báo chí: số 75/GP-BTTTT và do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Phó tổng biên tập phụ trách: Lâm Quang Hiếu© Toàn bộ bản quyền thuộc Tri thức</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >© Toàn bộ bản quyền thuộc Tri thức</p>
                    </span>
                </div>
                <div className='flex justify-end items-end w-full col-span-3'>
                    <span className='h-full w-full'>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Tòa soạn: tầng 2, 55 Đặng Dung, Q1, TP. Hồ Chí Minh</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Hotline: 0987654321</p>
                        <p className='text-sm text-gray-500 not-lg:text-xs' >Liên hệ: nhannt@techhaus.vn</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer