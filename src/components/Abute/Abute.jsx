import React from "react";
import { Link } from "react-router"; 
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row align-items-center">
          {/* متن سمت راست */}
          <div className="col-12 col-md-6 text-start about-text">
            <h3>رستوران‌های زنجیره‌ای ترخینه</h3>
            <p>
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <button className="info-btn">
              <Link to="/about">اطلاعات بیشتر</Link>
            </button>
          </div>

          {/* ستون چپ شامل تصاویر و متن */}
          <div className="col-12 col-md-6 info-aboutt">
            <div className="row">
              <div className="col-6 d-flex mb-5 flex-column align-items-center text-center">
                <img src="/logo/user.svg" alt="Diagram" className="about-image mb-2" />
                <span>  پرسنل محبوب و حرفه ای</span>
              </div>

              <div className="col-6 d-flex flex-column align-items-center text-center">
                <img src="/logo/diagram.svg" alt="Diagram" className="about-image mb-2" />
                <span>  کیفیت بالای غداها</span>
              </div>

              <div className="col-6 d-flex flex-column align-items-center text-center">
                <img src="/logo/home-wifi.svg" alt="Diagram" className="about-image mb-2" />
                <span>محیطی دلنشین و ارام </span>
              </div>

              <div className="col-6 d-flex flex-column align-items-center text-center">
                <img src="/logo/menu-board.svg" alt="Diagram" className="about-image mb-2" />
                <span> من.ی متنوع</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
