import React from "react";
import Menu from "../header/menu"
import Footer from "../footer/footer"

function Contact() {
 
    return (
        <>
        <Menu/>
        <div className="contact-container">
        <span className="contact-header">Contact Us</span>
        <section className="contact-card-container">
        <section className="contact-card">
        <i className="contact-icon fa fa-whatsapp fa-3x"/>
        <span className="contact-desc2"><b>Loja Sede:</b> (99) 8888-9999</span>
        <span className="contact-desc2"><b>Loja 02:</b> (99) 9999-9999</span>
        </section>
        
        <section className="contact-card">
        <i className="contact-icon fa fa-phone fa-3x"/>
        <span className="contact-desc2"><b>Loja Sede:</b> (99) 3333-9999</span>
        <span className="contact-desc2"><b>Loja 02:</b> (99) 4444-9999</span>
        </section>
        
        <section className="contact-card">
        <i className="contact-icon fa fa-envelope fa-3x"/>
        <span className="contact-desc2"><b>Loja Sede:</b> example@example.com </span>
        <span className="contact-desc2"><b>Loja 02:</b> example2@example2.com</span>
        </section>

        </section>
      </div>
        <Footer/>
        </>
    );
  }
  
  export default Contact;