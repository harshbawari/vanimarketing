import React, { Button, useState, Breadcrumb, BreadcrumbItem, LocalForm, Row, Col, Label, Control, Errors } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function ContactScreen(props) {

  return (
    <div>
      <HeaderComponent />

      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <address>
              <i className="fa fa-phone"></i>: +91 9999955502<br />
              <i className="fa fa-fax"></i>: +91 9899639191<br />
              <i className="fa fa-envelope"></i>: <a href="mailto:propertystudio.chandra@gmail.com">propertystudio.chandra@gmail.com</a><br />
              <i className="fa fa-envelope"></i>: <a href="mailto:bawari.k2@gmail.com">bawari.k2@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:9999955502"><i className="fa fa-phone"></i> Call</a>
              <a role="button" className="btn btn-success" href="mailto:propertystudio.chandra@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;