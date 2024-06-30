import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import EmailInput from '../../components/emailField/emailInput';
import PasswordInput from '../../components/passwordField/passwordField';
import './loginPage.css';

const LoginPage = () => {
  return (
    <main className='mainLogin'>
      <Header />
      <section className='sectionMain'>
        <h1 className='titleLogin'>Login</h1>
        <span className='legendTitle'>
          Welcome back! <br />
          Please login to continue
        </span>
        <EmailInput />
        <PasswordInput />
        <button className='buttonLogin'>Login</button>
        <button className='buttonForgot'>Forgot Password</button>
      </section>
      <Footer createAccountText="Create Now" linkTo="/create-account" />
    </main>
  );
};

export default LoginPage;
