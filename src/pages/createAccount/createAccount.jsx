import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PhoneNumberInput from '../../components/phoneField/phoneField'
import EmailInput from '../../components/emailField/emailInput'
import PasswordVericationInput from '../../components/passwordVerification/passwordFieldVerification'
import './createAccount.css';

const CreateAccount = () => {

  return (
    <main className='mainCreate'>
      <Header />
      <section className='sectionMain'>
        <h1 className='titleLogin'>Create Account</h1>
        <span className='legendTitle'>
          Enter your information below or continue <br />
          with social media account
        </span>
        <EmailInput/>
        <PhoneNumberInput/>
        <PasswordVericationInput/>
        <button className='buttonLoginAccount'>Create Account</button>
      </section>
      <Footer createAccountText="Login Now" linkTo="/" />
    </main>
  );
};

export default CreateAccount;
