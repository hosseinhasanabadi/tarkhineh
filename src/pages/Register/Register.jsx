import React from "react";
import { Link } from "react-router";
import Input from "../../components/Form/Input";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Register.css";
import Button from "../../components/Form/Button";

function Register() {

  const regesterNewUser = (event) => {
    event.preventDefault()

    console.log("user regester");
  };
  return (
    <>
      <NavBar />
      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                element="input"
                type="text"
                placeholder="نام کاربری "
              />

              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                element="input"
                type="text"
                placeholder="آدرس ایمیل"
              />

              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                element="input"
                type="password"
                placeholder="رمز عبور"
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>

            <Button
              className="login-form__btn"
              type="submit"
              onClick={regesterNewUser}
              disabled={false}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
