import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className="container">
                <button className='button-header' onClick={() => navigate('/')}>General</button>
                <button className='button-header' onClick={() => navigate('/about')}>History</button>
                <button className='button-header' onClick={() => navigate('/founders')}>Founders</button>
                <button className='button-header' onClick={() => navigate('/community')}>Community</button>
                <button className='button-header' onClick={() => navigate('/price')}>Subscription</button>
            </div>
        </header>
    );
}

export default Header;

