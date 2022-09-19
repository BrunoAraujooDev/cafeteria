import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from './pages/Home';
import { PaymentPage } from './pages/PaymentPage';
import { ResumeOrder } from './pages/ResumeOrder';

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={ <Home/> }/>
        <Route path="/checkout" element={ <PaymentPage/> }/>
        <Route path="/success" element={ <ResumeOrder/> }/>
        </Route>
      </Routes>
    )
  }