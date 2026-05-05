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
import { MyApplicationsPage } from "../../pages/MyApplicationsPage/MyApplicationsPage/MyApplicationsPage";
import { useAuth } from "../hooks/useAuth";
import { FavoritesContextProvider } from "../context/favoritesContext/favoritesContextProvider";
import { InternshipPage } from "../../pages/InternshipPage/ui/InternshipPage/InternshipPage";
import { UpdateCompany } from "../../pages/UpdateCompany/UpdateCompany";
import { UpdateIntern } from "../../pages/UpdateIntern/UpdateIntern";
import { Participants } from "../../pages/Participants/Participants";
import { CompanyContextProvider } from "../context/companyContext/companyContextProvider";
import { AdminPage } from "../../pages/_admin/AdminPage/ui/AdminPage/AdminPage";
import { AdminCompaniesPage } from "../../pages/_admin/AdminCompaniespage/ui/AdminCompaniesPage/AdminCompaniesPage";
import { AdminInternsPage } from "../../pages/_admin/AdminInternsPage/ui/AdminInternsPage/AdminInternsPage";
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
        <Route
          path="/internships/:id"
          element={
            <CompanyContextProvider>
              <InternshipPage />
            </CompanyContextProvider>
          }
        />
        <Route
          path="/internships/:id/participants"
          element={
            <FavoritesContextProvider>
              <Participants />
            </FavoritesContextProvider>
          }
        />
        <Route path="/add" element={<CreateInternshipPage />} />
        <Route path="/my" element={<MyApplicationsPage />} />
        // * Intern
        <Route
          path="/intern"
          element={
            <FavoritesContextProvider>
              <InternPage />
            </FavoritesContextProvider>
          }
        />
        <Route path="/intern/update" element={<UpdateIntern />} />
        // * Company
        <Route
          path="/company"
          element={
            <CompanyContextProvider>
              <CompanyPage />
            </CompanyContextProvider>
          }
        />
        <Route path="/company/update" element={<UpdateCompany />} />
        // * Admin
        <Route path="/review" element={<AdminPage />} />
        <Route path="/admin-internships" element={<InternshipsPage />} />
        <Route path="/admin-companies" element={<AdminCompaniesPage />} />
        <Route
          path="/admin-companies/:id"
          element={
            <CompanyContextProvider>
              <CompanyPage />
            </CompanyContextProvider>
          }
        />
        <Route path="/admin-interns" element={<AdminInternsPage />} />
      </Routes>

      {renderFooter()}
    </div>
  );
};
