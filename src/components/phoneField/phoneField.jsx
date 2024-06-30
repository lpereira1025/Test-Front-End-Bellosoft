import { useState } from 'react';
import PropTypes from 'prop-types';
import IconMobile from '../../assets/iconMobile.svg';
import './phoneNumberInput.css';

const PhoneNumberInput = ({ onChange, value }) => {
  const [isValid, setIsValid] = useState(true);

  const formatPhoneNumber = (inputValue) => {
    const cleaned = inputValue.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);

    if (match) {
      const part1 = match[1] ? `(${match[1]}` : '';
      const part2 = match[2] ? `) ${match[2]}` : '';
      const part3 = match[3] ? `-${match[3]}` : '';
      return `${part1}${part2}${part3}`;
    }

    return inputValue;
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (/\D/.test(inputValue.replace(/[()\s-]/g, ''))) {
      alert('Por favor, insira apenas números.');
      onChange(''); // Limpar o campo
      setIsValid(false);
      return;
    }

    const formattedInputValue = formatPhoneNumber(inputValue);
    const validPhoneNumberRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

    onChange(formattedInputValue);

    if (inputValue === '' || validPhoneNumberRegex.test(formattedInputValue)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="inputWrapperPhone">
      <input
        type="tel"
        placeholder='Your mobile number'
        value={value}
        onChange={handleInputChange}
        className={`inputPhone ${isValid ? '' : 'invalid'}`}
      />
      <img src={IconMobile} alt="logo mobile" className="inputIconPhone" />
      <label className={`inputLabelPhone ${value ? 'filled' : ''}`} htmlFor="Mobile Number">
        Mobile Number
      </label>
    </div>
  );
};

PhoneNumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default PhoneNumberInput;
