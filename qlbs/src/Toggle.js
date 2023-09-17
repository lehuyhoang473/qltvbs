

import React, {  useState, useTransition } from 'react'
const largeList = [
  {id:1,product:'hach lop 2 anh van'},
  {id:2,product:'furniture'},
  {id:3,product:'huy hoàng'},
  {id:4,product:'anh huy'},
  {id:5,product:'van vuong'},
  {id:6,product:'vinh lo'},
  {id:7,product:'duong'},
  {id:8,product:'nhat'},
  {id:10,product:'dai '},
  {id:11,product:'beo'},
  {id:12,product:' sach lop 1 toan'},
]

export default function Toggle() {
  const [isPending,startTransition] = useTransition()
  const [list,setList] = useState(largeList)
  const [name,setName] = useState("")
    // console.log(isPending);
  function handleChange(e){
    setName(e.target.value)
    startTransition(()=>{
      setList(largeList.filter(item=>item.product.includes(e.target.value) ))
    // console.log(isPending);
    
    })
  }
  
  return (
    <div>
      <input 
        type='text'
        value={name}
        onChange={handleChange}/>
      {isPending ?
        <div>loadding...</div>
           :
        list.map(item=><div key={item.id}>{item.product}</div>)}
    </div>
  )
}
