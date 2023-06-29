// HOOKS
import { useNavigate } from 'react-router-dom';

// STYLE SHEET
import './_BackButton.scss';

const BackButton = ({ pageTitle }) => {
  const navigate = useNavigate();

  return (
    <nav className={'back-nav'}>
      <button onClick={() => {
        navigate(-1);
      }}
        className='back-button'
      > <span className='back-arrow'> </span>
      </button>
      <h1 className='back-title'>{pageTitle}</h1>
    </nav>

  );
};

export default BackButton;