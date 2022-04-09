import logo from "../../images/Logo.svg";
import "./Header.css";
// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import icon from "../../images/login-icon.png";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import profileImg from "../../images/profile-img.png";
import { useEffect } from "react";

// -----------------------------------------------------------

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user?.displayName);

  // const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    // navigate("/");
  };

  useEffect(() => {
    if (user) {
      // navigate("/");
    }
  }, [user]);

  return (
    <div className="row header-sticky">
      <nav className="header-nav col-md-12 header-sticky">
        <ActiveLink to="/">
          <img src={logo} alt="" />
        </ActiveLink>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="barIcon">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <div className="me-5 header-info d-md-flex align-items-md-center justify-content-md-center">
          <ActiveLink to="/shop">Shop</ActiveLink>
          <ActiveLink to="/order-review">Order Review</ActiveLink>
          <ActiveLink to="/manage-inventory">Manage Inventory</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/privacy&policy">Privacy & Policy</ActiveLink>
          {/* -------------------------------------- */}
          <div>
            {user?.uid ? (
              <>
                <div
                  onClick={logout}
                  to="/login"
                  className="text-light fw-bold me-2"
                >
                  <span className="ms-1 border rounded py-1 px-2">
                    Logout
                    <img
                      src={icon}
                      alt="icon"
                      style={{ width: "25px", height: "20px" }}
                    />
                  </span>
                </div>
              </>
            ) : (
              <Link to="/login" className="text-light fw-bold me-2">
                <span className="ms-1 border rounded py-1 px-2">
                  Login
                  <img
                    src={icon}
                    alt="icon"
                    style={{ width: "25px", height: "20px" }}
                  />
                </span>
              </Link>
            )}
          </div>
          {/* --------------------------------- */}
          <div className="d-flex flex-column align-items-center py-2">
            <img
              className="profile-img"
              src={user?.photoURL ? user?.photoURL : profileImg}
              alt=""
            />
            <div className="fw-bold text-warning">{user?.displayName}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
