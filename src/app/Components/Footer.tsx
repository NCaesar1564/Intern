import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center bg-gray-100 mt-5 items-center py-5 not-2xl:px-5'>
            <div className='grid grid-cols-6 items-center gap-5 not-lg:grid-cols-1 not-lg:text-center'>
                <div className='flex justify-center w-full col-span-3 '>
                    <span className='not-lg:text-center'>
                        <p className='text-sm text-gray-600 not-lg:text-xs' >Tạp chí điện tử tri thức</p>
                        <p className='text-sm text-gray-600 not-lg:text-xs' >Cơ quan chủ quản. Hội Xuất bản Việt Nam</p>
                        <p className='text-sm text-gray-600 not-lg:text-xs text-wrap' >Giấy phép báo chí: số 75/GP-BTTTT và do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023</p>
                        <p className='text-sm text-gray-600 not-lg:text-xs' >Phó tổng biên tập phụ trách: Lâm Quang Hiếu© Toàn bộ bản quyền thuộc Tri thức</p>
                        <p className='text-sm text-gray-600 not-lg:text-xs' >© Toàn bộ bản quyền thuộc Tri thức</p>
                    </span>
                </div>
                <div className='col-span-1 not-lg:hidden'></div>
                <div className='flex justify-start  w-full col-span-2'>
                    <span className='col-span-3 h-full w-full'>
                        <p  className='text-sm text-gray-600 not-lg:text-xs' >Tòa soạn: Tầng 10, D29 Phạm Văn Bạch, Quận Cầu Giấy, Hà Nội</p>
                        <p  className='text-sm text-gray-600 not-lg:text-xs' >Hotline: 0987654321</p>
                        <p  className='text-sm text-gray-600 not-lg:text-xs' >Liên hệ: nhannt@techhaus.vn</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer