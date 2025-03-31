import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center bg-gray-100 mt-5 items-center'>
            <div className='grid grid-cols-2 items-center '>
                <div className='flex justify-center w-full'>
                    <span className=' col-span-7 w-11/12'>
                        <p className='text-sm text-gray-600' >Tạp chí điện tử tri thức</p>
                        <p className='text-sm text-gray-600' >Cơ quan chủ quản. Hội Xuất bản Việt Nam</p>
                        <p className='text-sm text-gray-600 text-wrap' >Giấy phép báo chí: số 75/GP-BTTTT và do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023</p>
                        <p className='text-sm text-gray-600' >Phó tổng biên tập phụ trách: Lâm Quang Hiếu© Toàn bộ bản quyền thuộc Tri thức</p>
                        <p className='text-sm text-gray-600' >© Toàn bộ bản quyền thuộc Tri thức</p>
                    </span>
                </div>
                <div className='flex justify-end items-end w-full'>
                    <span className='col-span-3  h-11/12 w-1/3'>
                        <p  className='text-sm text-gray-600' >Tòa soạn: Tầng 10, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội</p>
                        <p  className='text-sm text-gray-600' >Hotline: 0987654321</p>
                        <p  className='text-sm text-gray-600' >Liên hệ: nhannt@techhaus.vn</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer