import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CiSearch } from "react-icons/ci";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";

const RightNav = ({ open }) => {
  const [activeItem, setActiveItem] = useState("");
  const handleClick = (item) => setActiveItem(item);
  const [branchName, setBranchName] = useState(""); // وضعیت برای ذخیره اسم شعبه
  const { BranchName } = useParams();
  useEffect(() => {
    // وقتی که پارامتر BranchName تغییر می‌کند، نام شعبه را به وضعیت بروز می‌کنیم
    if (BranchName) {
      setBranchName(BranchName);
    }
  }, [BranchName]);
  return (
    <>
      <ul className={open ? "open" : ""} dir="rtl">
        <Navbar.Brand href="#home" className="brand">
          <img src="./logo/logo.svg" alt="Logo" />
        </Navbar.Brand>

        <div className="d-flex nav-text">
          <Link
            to="/"
            className={activeItem === "صفحه اصلی" ? "active-nav" : ""}
            onClick={() => handleClick("صفحه اصلی")}
          >
            صفحه اصلی
          </Link>

          <NavDropdown
            title={branchName || "شعبه"}
            id="basic-nav-dropdown"
            className="custom-dropdown pt-2"
          >
            <NavDropdown.Item
              as={Link}
              to="/BranchSHo/سعادت اباد"
              onClick={() => handleClick("شعبه ۱")}
            >
              سعادت اباد ۱
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/BranchSHo/اکباتان">
              اکباتان
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="BranchSHo/3"
              onClick={() => handleClick(" ۲جردن")}
            >
              جردن
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="منو"
            id="basic-nav-dropdown"
            className="custom-dropdown pt-2"
          >
            <NavDropdown.Item as={Link} to="/menu/main">
              غذاهای اصلی
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/menu/side">
              غذاهای فرعی
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/menu/desserts">
              دسرها
            </NavDropdown.Item>
          </NavDropdown>

          <div className="nav-items">
            <Link
              to={"/representatives"}
              className={activeItem === "نمایندگی" ? "active-nav" : ""}
              onClick={() => handleClick("نمایندگی")}
            >
              اعطای نمایندگی
            </Link>

            <Link
              to={"/about"}
              className={activeItem === "درباره ما" ? "active-nav" : ""}
              onClick={() => handleClick("درباره ما")}
            >
              درباره ما
            </Link>

            <Link
              to={"/contact"}
              className={activeItem === "تماس" ? "active-nav" : ""}
              onClick={() => handleClick("تماس")}
            >
              تماس با ما
            </Link>
          </div>
        </div>

        <div className="d-flex gap-3 icon">
          <Link to="/login">
            <img src="/logo/Login.svg" alt="Login" />
          </Link>
          <Link to="/shopping-cart">
            <img src="/logo/Shopping.svg" alt="Shopping" />
          </Link>
          <a href="#">
            <CiSearch size={24} />
          </a>
        </div>
      </ul>
    </>
  );
};

export default RightNav;
