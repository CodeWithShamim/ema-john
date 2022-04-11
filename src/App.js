import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import About from "./components/About/About";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";
import ForgottenPassword from "./components/ForgottenPassword/ForgottenPassword";
import ResetEmail from "./components/ResetEmail/ResetEmail";
import Shipment from "./components/Shipment/Shipment";

function App() {
  const [user] = useAuthState(auth);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        {user ? (
          <Route path="/login" element={<NotFound></NotFound>}></Route>
        ) : (
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        )}
        <Route path="/signup" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>

        <Route
          path="/email-confirmation"
          element={<EmailConfirmation></EmailConfirmation>}
        ></Route>

        <Route path="/reset-email" element={<ResetEmail></ResetEmail>}></Route>

        <Route
          path="/forgotten-password"
          element={<ForgottenPassword></ForgottenPassword>}
        ></Route>

        <Route
          path="/order-review"
          element={<OrderReview></OrderReview>}
        ></Route>

        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment></Shipment>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/privacy&policy"
          element={<PrivacyPolicy></PrivacyPolicy>}
        ></Route>
        {/* ----------------Not Found------------------ */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
