import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <form action="https://formsubmit.co/2b8dc32ecc365ee022946b65ae31e4dc" method="POST" className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="py-2 px-4 rounded-md text-primary outline-none"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="py-2 px-4 rounded-md text-primary outline-none"
        required
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="py-2 px-4 rounded-md text-primary outline-none"
        required
      >
        <option value="" disabled>Select your role</option>
        <option value="Primary School teacher">Primary School Teacher</option>
        <option value="High School teacher">High School Teacher</option>
        <option value="Tutor">Tutor</option>
        <option value="Foreign Language Teacher">Foreign language teacher</option>
        <option value="University Lecturer / Professor">University Lecturer / Professor</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="py-2 px-4 rounded-md text-primary outline-none"
        rows="4"
        required
      />
      <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md" type="submit">Register</button>
    </form>
  );
}

export default Form;
