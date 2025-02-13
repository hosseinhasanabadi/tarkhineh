import React from "react";
import Typewriter from "typewriter-effect";
import "./Landing.css";
import BtnGreen from "../btn/BtnGreen";
function Landing() {
  return (
    <section className="landing ">
      <div className="container-fluid">
        <h1 class="landing__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" تجربه غدای سالم و گیاهی ب سبک ترخینه")
                .start()
                .pauseFor(2000)
                .deleteAll();
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        <BtnGreen btnTitle="سفارش انلاین غذا" btnLink="/"  />
      </div>
    </section>
  );
}

export default Landing;
