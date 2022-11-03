import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Home/Home";
import Tour from "./components/Tour/Tour";
import {Route, Routes} from "react-router-dom";
import Faqs from "./components/Pages/Faqs/Faqs";
import Contact from "./components/Pages/Contact/Contact";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import Tours from "./components/Pages/Tours/Tours";
import {useSelector, useDispatch} from "react-redux";
import Modal from "./components/UI/Modal/Modal";
import * as contactActions from "./store/actions/contactAction"
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import {useEffect} from "react";

function App() {
    useEffect(()=>{
       dispatch(contactActions.getAddress())
    },[])
    const dispatch = useDispatch();
    const contactShow = useSelector((state) => state.contactSate.show);
    const _routes = <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/tours/:id" element={<Tour/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/tours" element={<Tours/>}/>
    </Routes>

    return (
        <Layout>
            <Modal show={contactShow} cancel={() => dispatch(contactActions.hide())}>
                <ContactUsForm/>
            </Modal>
            {_routes}
        </Layout>
    );
}

export default App;
