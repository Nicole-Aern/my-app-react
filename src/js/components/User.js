import React from 'react';
//css
import '../../css/components/User.css';

const User = ({openModal, name, email, city, phone, webiste, companyName}) => (
  <div onClick={openModal} className="user">
    <h3 className="name">{name}</h3>
    <p>{email}</p>
    <p>{city}</p>
    <p>{phone}</p>
    <p>{webiste}</p>
    <p>{companyName}</p>
  </div>
);

export default User;
