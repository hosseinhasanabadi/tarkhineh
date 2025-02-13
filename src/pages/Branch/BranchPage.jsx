import React from 'react'
import BranchPageCard from './BranchPageCard'
import { Branch } from "../../../public/Boxmenudata";

function BranchPage() {
  return (
<section className='main-branch'>
  <div className='title-branch text-center mb-4 mt-4'>ترخینه گردی</div>
  <div className="container">
    <div className="row w-100">
{
Branch.map((item)=>(
<BranchPageCard key={item.id} Img={item.img} Title={item.title} subTitle={item.subTitle} btn={item.btnTitle}/>

))
}
    </div>
  </div>
</section>
  )
}

export default BranchPage
