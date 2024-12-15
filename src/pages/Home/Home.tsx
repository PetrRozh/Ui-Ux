import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <img src='./src/assets/spider_man.png' alt='Spider Man' className='image-spider'/>
            <div className="text-container-title">
                <div className='ultra'>Your Way</div>
                <div className='ultra'>into The World</div>
                <div className='ultra'>of Comics</div>
            </div> 
            <div className='text-container'>
                <p>Discover the fascinating world of comics,</p>
                <p>where every page comes alive with vibrant</p>
                <p>illustrations and exciting stories!</p>
            </div>
            <div className='button-container'>
                <div className='special-button-home' onClick={() => navigate('/price')}>If you want more information</div>
            </div>
        </div>
    );
}

export default Home;
