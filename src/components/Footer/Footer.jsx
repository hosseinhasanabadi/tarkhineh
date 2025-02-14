import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import Form from 'react-bootstrap/Form';

function Footer() {
  return (
    <footer className="main-fotter">
      <div className="container">
        <div className="row">
          <div className="col-4  col-lg-4">
            <div className="d-flex flex-column text-start">
              <p className="text-white mt-2">دسترسی آسان</p> 
              <div className="list-unstyled text-start  flex-column">
                <Link to="/faq">پرسش‌های متداول</Link>
                <Link to="/rules">قوانین ترخینه</Link>
                <Link to="/privacy">حریم خصوصی</Link>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-4 col-lg-4 d-flex flex-column text-start">
              <p className="text-white mt-2 "> شعبه‌های ترخینه</p>
              <div className="list-unstyled flex-column">
                <Link to="/faq"> شعبه اکباتان</Link>
                <Link to="/rules">شعبه چالوس </Link>
                <Link to="/privacy"> شعبه اقدسیه</Link>
              </div>
          </div>
          <div className="col-4 col-lg-4">
          <div className="input text-start d-none d-md-block">
            <p className="mb-4">پیام به ترحینه</p>
          <Form className="form">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control className="text-start" type="email" placeholder="  نام و نام خانوادگی  " />
        <Form.Control className="text-start mt-3" type="email" placeholder="   شماره تماس" />
        <Form.Control className="text-start mt-3" type="email" placeholder=" ایمیل را وارد کنید" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>پیام شما </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
