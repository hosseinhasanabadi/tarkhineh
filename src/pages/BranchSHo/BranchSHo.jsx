import React from 'react';
import { useParams } from 'react-router';
import './BranchSHo.css'
import RightNav from '../../components/NavBar/RightNav';
import NavBar from '../../components/NavBar/NavBar';

function BranchSHo() {
  // دریافت پارامتر شعبه از URL
  const { BranchName } = useParams();

  // محتوای مختلف برای هر شعبه
  let branchContent;
  if (BranchName === "سعادت اباد") {
    branchContent =
     <section>



شسبشسبشس









    </section>;
  } else if (BranchName === "2") {
    branchContent = <div>محتوای شعبه ۲</div>;
  } else if (BranchName === "3") {
    branchContent = <div>محتوای شعبه ۳</div>;
  } else {
    branchContent = <div>شعبه پیدا نشد</div>;
  }

  return (
    <div>
              <NavBar/>

      {branchContent}
    </div>
  );
}

export default BranchSHo;
