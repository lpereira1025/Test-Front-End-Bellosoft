import { useState } from 'react';
import PropTypes from 'prop-types';
import IconMail from '../../assets/iconMail.svg';
import './emailInput.css';

const EmailInput = ({ password, onPasswordToggle }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="inputWrapperEmail">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        className='inputEmail'
        onChange={handleEmailChange}
      />
      <img src={IconMail} alt="logo e-mail" className="inputIconEmail" />
      <label className={`inputLabelEmail ${email ? 'filled' : ''}`} htmlFor="Email Address">
        Email Address
      </label>
      {password && (
        <button className="showPasswordButton" onClick={onPasswordToggle}>
          <img
            className="togglePasswordEmail"
            src="/path/to/your/toggle-icon.svg"
            alt="Toggle Password"
          />
        </button>
      )}
    </div>
  );
};

EmailInput.propTypes = {
  password: PropTypes.bool,
  onPasswordToggle: PropTypes.func,
};

export default EmailInput;
