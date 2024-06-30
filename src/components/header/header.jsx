import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons' // Atualize aqui
import Branch from '../../assets/branch.png'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faArrowLeft} className="arrowBack" />
      <img className='branchHeader' src={Branch} alt="branch with leaves" />
    </header>
  )
}

export default Header
