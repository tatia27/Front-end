import { Routes, Route } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import { MainPage } from "../../pages/MainPage/ui/MainPage/MainPage";
import { RegisterPage } from "../../pages/RegisterPage/ui/Register/ui/RegisterPage/RegisterPage";
import { RegisterInternPage } from "../../pages/RegisterPage/ui/RegisterInternPage/RegisterInternPage";
import { RegisterCompanyPage } from "../../pages/RegisterPage/ui/RegisterCompanyPage/RegisterCompanyPage";
import { InternshipsPage } from "../../pages/InternshipsPage/ui/InternshipsPage/InternshipsPage";
import { useHeader } from "../../features/layout/Header/hooks/useHeader";
import { useFooter } from "../../features/layout/Footer/hooks/useFooter";
import { AuthPage } from "../../pages/AuthPage/ui/AuthPage/AuthPage";
import { InternPage } from "../../pages/InternPage/ui/InternPage/InternPage";
import { CompanyPage } from "../../pages/CompanyPage/ui/CompanyPage/CompanyPage";
import { CreateInternshipPage } from "../../pages/CreateInternshipPage/ui/CreateInternshipPage/CreateInternshipPage";
import { MyApplicationsPage } from "../../pages/MyApplicationsPage/MyApplicationsPage";
import { useAuth } from "../hooks/useAuth";
import { FavoritesContextProvider } from "../context/favoritesContext/favoritesContextProvider";
import { InternshipPage } from "../../pages/InternshipPage/ui/InternshipPage/InternshipPage";
import s from "../../../src/pages/MainPage/ui/MainPage/MainPage.module.scss";

export const AppRouter = () => {
  const { renderHeader } = useHeader();
  const { renderFooter } = useFooter();

  useAuth();

  return (
    <div className={s.wrapper}>
      {renderHeader()}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Routes>
        // * Login
        <Route path="/login" element={<AuthPage />} />
        // * Register
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/intern" element={<RegisterInternPage />} />
        <Route path="/register/company" element={<RegisterCompanyPage />} />
        // * Internships
        <Route path="/internships" element={<InternshipsPage />} />
        <Route path="/internships/:id" element={<InternshipPage />} />
        <Route path="/add" element={<CreateInternshipPage />} />
        <Route path="/my" element={<MyApplicationsPage />} />
        // * Profile
        <Route
          path="/intern"
          element={
            <FavoritesContextProvider>
              <InternPage />
            </FavoritesContextProvider>
          }
        />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>

      {renderFooter()}
    </div>
  );
};
