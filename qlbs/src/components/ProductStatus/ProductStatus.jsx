import React, { useState } from 'react'

export default function ProductStatus() {
    const [isApproved,setIsApproved] = useState(false)

    const handleApproveProduct = (id)=>{
        fetch(`${process.env.REACT_APP_API_URL}/order/approve/${id}`,{
            method:'PUT'
        })
        .then(responsive => responsive.json())
        .then(data =>{
            setIsApproved(true)
        })
        .catch(error=>{
            console.log('loi san pham' , error);
        })
    }

    return (
    <div>
        {isApproved ?(
            <p>Đã duyệt sản phẩm</p>
        ):(
            <button onClick={handleApproveProduct}>Duyệt Sản phẩm</button>
        )}
    </div>
  )
}
