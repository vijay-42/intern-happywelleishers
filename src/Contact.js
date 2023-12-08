 import { useState } from 'react';
    
import "./style.css"

    const Contact = () => {
      const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
            [name]: value,
        });   
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
         alert(formData.name);
         setFormData({
          name: '',
          phone: '',
          email: '',
        });
      };
    
      return (
        <div>
        <h2 id='con'>Contact Us</h2>
        <div className="container  mt-2 forms">
          
          <form className='mb-5' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-cnt ">
              Submit
            </button>
          </form>
        </div>
        </div>
      );
    };
    
  
export default Contact;