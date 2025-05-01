import React from 'react';
import '../../styles/all.min.css';
import '../../styles/style.css';
import '../../styles/bootstrap.min.css';
import headerImage from '../../assets/images/header.png';
import bloodBag from '../../assets/images/blood-bag.png';
import Navbar from '../../components/NavigationBar';


export default function Home() {
  return (
    <>
      <Navbar />

      <header className="header" id="home">
        <div className="content">
          <h1><span>Be the Reason</span><br />Someone Lives Today</h1>
          <h4>
            Your blood can give life, hope, and a second chance. Donate now — It
            only takes a moment, but the impact lasts forever.
          </h4>
          <button className="donate-btn">Donate Now!</button>
        </div>
        <div className="image">
          <span className="image__bg"></span>
          <img src={headerImage} alt="header image" />
          <div className="image_content imagecontent_1">
            <span><i className="ri-user-3-line"></i></span>
            <div className="details">
              <h4>1.5+ Million</h4>
              <p>Deaths Worldwide Each Year!</p>
            </div>
          </div>
          <div className="image_content imagecontent_2">
            <ul>
              <li>
                <span><i className="ri-check-line"></i></span>
                Expert Doctors and Trained Staff
              </li>
              <li>
                <span><i className="ri-check-line"></i></span>
                Priority Access in Emergencies
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Why Donate Section */}
      <section className="section why-donate" id="why-donate">
        <h2>Why Donate Blood?</h2>
        <div className="cards">
          <div className="card">
            <i className="ri-heart-pulse-line"></i>
            <h3>Save Lives</h3>
            <p>
              One donation can save up to three lives, providing critical support
              for surgeries and emergencies.
            </p>
          </div>
          <div className="card">
            <i className="ri-shield-check-line"></i>
            <h3>Safe Process</h3>
            <p>
              Our trained staff ensures a safe and comfortable donation experience
              with strict health protocols.
            </p>
          </div>
          <div className="card">
            <i className="ri-group-line"></i>
            <h3>Community Impact</h3>
            <p>
              Your donation strengthens the community by ensuring a steady blood
              supply for all.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Process Section */}
      <section className="section donation-process" id="donate-process">
        <h2>How to Donate</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <h3>Register</h3>
            <p>
              Sign up online or at a donation site to schedule your appointment.
            </p>
          </div>
          <div className="step">
            <span>2</span>
            <h3>Screening</h3>
            <p>
              Undergo a quick health check to ensure you're eligible to donate.
            </p>
          </div>
          <div className="step">
            <span>3</span>
            <h3>Donate</h3>
            <p>
              Donate blood in a safe, 10-15 minute process with our expert staff.
            </p>
          </div>
          <div className="step">
            <span>4</span>
            <h3>Recover</h3>
            <p>
              Rest and hydrate, and feel proud of your life-saving contribution!
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-text">
          <h1>Ready to Make a Difference?</h1>
          <p>Join our community of donors and help save lives today.</p>
          <button className="btn">Become a Donor</button>
        </div>
        <div className="cta-image">
          <img src={bloodBag} alt="Blood donation bag" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" id="contact-us">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Seneb</h3>
            <p>Connecting donors with those in need, one donation at a time.</p>
          </div>
          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#why-donate">Why Donate Blood</a></li>
              <li><a href="#donate-process">Donate Process</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h3>Contact Us</h3>
            <p>Email: support@seneb.org</p>
            <p>Phone: +1-800-123-4567</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 Seneb. All rights reserved.</p>
        </div>
      </footer>

      {/* Bootstrap 5 JS Bundle (includes Popper) */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}