import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-md-2 px-4">
        <div>
          <h4 className="title-4-white mb-4">HELP</h4>
          <nav className="li-white">
            <ul>
              <li>FAQs</li>
              <li>Payments</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Copyright</li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="title-4-white mb-4">SERVICES</h4>
          <nav className="li-white">
            <ul>
              <li>Heritage & Taxation</li>
              <li>Estates, Appraisals & Valuations</li>
              <li>Buy & Sell</li>
              <li>Restitution</li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="title-4-white mb-4">ABOUT</h4>
          <nav className="li-white">
            <ul>
              <li>Who we are</li>
              <li>Location</li>
              <li>Career</li>
              <li>Contacts</li>
              <li>Social Responsibility</li>
              <li>Sustainability</li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="title-4-white mb-4">SOCIAL</h4>
          <p className="text-sm font-extralight">&copy; 2023 E-commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
