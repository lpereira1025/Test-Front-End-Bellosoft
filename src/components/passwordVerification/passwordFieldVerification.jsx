import { useState } from 'react';
import PropTypes from 'prop-types';
import IconLock from '../../assets/iconLock.svg';
import IconVisible from '../../assets/iconsShow.png';
import IconInVisible from '../../assets/iconsInvisible.png';
import './passwordVerification.css';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (password) => {
    let strength = '';
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/g;

    if (password.length > 8 && hasSpecialChar.test(password)) {
      strength = 'Strong';
    } else if (password.length > 5) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }

    return strength;
  };

  const handlePasswordChange = (password) => {
    setPasswordStrength(checkPasswordStrength(password));
    onChange(password);
  };

  return (
    <div className="inputWrapperPassword">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={value}
        className="inputPassword"
        onChange={(e) => handlePasswordChange(e.target.value)}
      />
      <img src={IconLock} alt="logo password" className="inputIcon" />
      <button type="button" onClick={toggleShowPassword} className="showPasswordButton">
        {showPassword ? (
          <img src={IconInVisible} alt="hide password" className="togglePassword" />
        ) : (
          <img src={IconVisible} alt="show password" className="togglePassword" />
        )}
      </button>
      <label className={`inputLabel ${value ? 'filled' : ''}`} htmlFor="password">
        Password
      </label>
      <div className={`passwordStrength ${passwordStrength.toLowerCase()}`}>
        {passwordStrength && <p>Password strength: {passwordStrength}</p>}
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
