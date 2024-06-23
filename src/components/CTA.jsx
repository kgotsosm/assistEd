// CTA.js
import React, { useState } from 'react';
import Button from './Button';
import styles from '../styles';
import Form from './Form';
const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <section id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Join our waiting list now!</h2>
        <p className={`${styles.paragraph} max-w-[540px] mt-5`}>Be part of the learning revolution and take back hundreds of hours every year.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 cursor-pointer`}>
        <Form />
      </div>
    </section>
  );
};

export default CTA;
