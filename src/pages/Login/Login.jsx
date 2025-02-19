import React from "react";
import "./Login.css";
import { Link } from "react-router";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";

function Login() {
  const userLogin=(event)=>{
    event.preventDefault()
    console.log("login");
    
  }
  return (
    <>
      <NavBar />
      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                element="input"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
              />

              <i className="login-form__username-icon fa fa-user"></i>
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
  
            <Button  className="login-form__btn" type="submit"
            onClick={userLogin} disabled ={false}>
            <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
            <span className="login-form__btn-text">ورود</span>

            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
