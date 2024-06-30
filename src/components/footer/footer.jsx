import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoGoogle from '../../assets/logoGoogle.svg';
import LogoFacebook from '../../assets/logoFacebook.svg';
import LogoApple from '../../assets/logoApple.svg';
import LogoTwitter from '../../assets/logoTwitter.svg';
import './footer.css';

const Footer = ({ createAccountText, linkTo }) => {
  return (
    <footer className="footer">
      <span className='footerLetters'>Or Continue with Social Accounts</span>

      <section className='buttonsGroup'>
        <button className='buttonLinkTo'><img className='logosFooter' src={LogoGoogle} alt="Google Logo" /></button>
        <button className='buttonLinkTo'><img className='logosFooter' src={LogoFacebook} alt="Facebook Logo" /></button>
        <button className='buttonLinkTo'><img className='logosFooter' src={LogoApple} alt="Apple Logo" /></button>
        <button className='buttonLinkTo'><img className='logosFooter' src={LogoTwitter} alt="Twitter Logo" /></button>
      </section>

      <span className='footerLetters'>Don’t have an account? <Link to={linkTo} className='linkTo'>{createAccountText}</Link></span>
    </footer>
  );
};

Footer.propTypes = {
  createAccountText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Footer;
