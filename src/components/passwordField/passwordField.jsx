import { useState } from 'react';
import PropTypes from 'prop-types';
import IconLock from '../../assets/iconLock.svg';
import IconVisible from '../../assets/iconsShow.png';
import IconInVisible from '../../assets/iconsInvisible.png';
import './passwordField.css';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="inputWrapperPassword">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={value}
        className='inputPassword'
        onChange={(e) => onChange(e.target.value)}
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
    </div>
  );
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
