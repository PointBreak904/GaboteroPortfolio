// components/Contacts.jsx
import React from 'react';
import '../style/Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h2 className="contacts-title">Let's Connect</h2>
      <div className="contacts-icons">

        {/* Facebook */}
        <a href="https://www.facebook.com/Giero34/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.326v21.348C0 
              23.407 0.593 24 1.325 24h11.483v-9.294H9.691v-3.622h3.117V8.413c0-3.1 
              1.893-4.788 4.659-4.788 1.325 0 2.463.099 
              2.795.143v3.24h-1.917c-1.505 0-1.797.715-1.797 
              1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 
              24 24 23.407 24 22.674V1.326C24 .593 23.407 0 
              22.675 0z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/giero_904/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 
              4.85.07 1.366.062 2.633.334 3.608 
              1.308.974.975 1.246 2.242 1.308 
              3.608.058 1.266.069 1.646.069 
              4.851s-.012 3.584-.069 
              4.85c-.062 1.366-.334 2.633-1.308 
              3.608-.975.974-2.242 1.246-3.608 
              1.308-1.266.058-1.646.069-4.851.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 
              15.647 2.163 15.267 2.163 12s.012-3.584.069-4.85c.062-1.366.334-2.633 
              1.308-3.608C4.515 2.497 5.782 2.225 7.148 
              2.163 8.414 2.105 8.794 2.163 12 2.163zm0 
              10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 
              1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="https://x.com/Giero904" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-0.885 
              0.392-1.83 0.656-2.825 0.775 1.014-0.611 
              1.794-1.574 2.163-2.723-0.951 0.564-2.005 
              0.974-3.127 1.195-0.897-0.957-2.178-1.555-3.594-1.555-2.723 
              0-4.928 2.205-4.928 4.928 0 0.39 0.045 0.765 
              0.127 1.124-4.094-0.205-7.725-2.165-10.158-5.144-0.424 
              0.729-0.666 1.577-0.666 2.476 0 1.708 0.87 
              3.216 2.191 4.099-0.807-0.026-1.566-0.247-2.228-0.616v0.061c0 
              2.385 1.693 4.374 3.946 4.827-0.413 0.112-0.849 
              0.171-1.296 0.171-0.317 0-0.626-0.03-0.928-0.087 
              0.627 1.956 2.444 3.379 4.6 
              3.419-1.68 1.318-3.808 2.104-6.102 
              2.104-0.396 0-0.788-0.023-1.175-0.069 
              2.179 1.397 4.768 2.213 7.557 2.213 9.054 
              0 14.002-7.496 14.002-13.986 
              0-0.213-0.004-0.425-0.014-0.636 
              0.961-0.689 1.8-1.56 2.46-2.548l-0.047-0.02z"/>
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:giero.gab@gmail.com" className="contact-link" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 512 512">
            <path d="M502.3 190.8L327.4 338.9c-20.9 
              18.2-52.5 18.2-73.3 0L9.7 
              190.8C3.7 185.5 0 177.7 0 
              169.3V96c0-26.5 21.5-48 48-48h416c26.5 
              0 48 21.5 48 48v73.3c0 8.4-3.7 
              16.2-9.7 21.5zM48 464h416c26.5 
              0 48-21.5 48-48V224L327.4 
              372.1c-36.3 31.6-90.4 31.6-126.8 
              0L0 224v192c0 26.5 21.5 48 48 
              48z" />
          </svg>
        </a>

      </div>
      <p className="contacts-footer">© 2025 Rogie Gabotero. All rights reserved.</p>
    </div>
  );
};

export default Contacts;
