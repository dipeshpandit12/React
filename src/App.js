import {
  Route,
  Routes
}from 'react-router-dom';
import pages from "./utils/pages"
import Layout from "./components/Layout/Layout"
import HomePage from "./components/pages/Home/HomePage"
import BookingPage from "./components/pages/Bookings/BookingPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";
import UnderConstructionPage from './components/pages/UnderConstruction/UnderConstructionPage';

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<HomePage/>}/>
          <Route path={pages.get("about").path} element={<UnderConstructionPage/>}/>
          <Route path={pages.get("menu").path} element={<UnderConstructionPage/>}/>
          <Route path={pages.get("bookings").path} element={<BookingPage/>}/>
          <Route path={pages.get("orderOnline").path} element={<UnderConstructionPage/>}/>
          <Route path={pages.get("login").path} element={<UnderConstructionPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </>
  );
}