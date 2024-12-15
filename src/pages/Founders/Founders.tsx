import './Founders.css';

interface PeopleCard {
    name: string;
    role: string;
    image: string;
}

export const Dict_pepople = ({name, role, image}: PeopleCard) => {
    return (
        <div className='image-card'>
            <div className='image-container'>
                <img src={image} alt="Img" className='image' />
            </div>
            <div className='text-container'>
                <div className='names ultra-18'>{name}</div>
                <div className='roles ultra-11'>{role}</div>
            </div>
        </div>
    );
};

function Founders() {
    return (
        <div>
            <div className='title-container-people ultra-48'>The Founding Fathers of Comics Book</div>
            <div className='image-box'>
                <Dict_pepople
                    name='John Romita Jr'
                    role="Iron Man's creator"
                    image='./src/assets/John Romita.webp'
                />
                <Dict_pepople
                    name='Brian Bolland'
                    role='Creator of Batman: The Killing Joke'
                    image='./src/assets/Brian Bolland.jpg'
                />
                <Dict_pepople
                    name='Will Eisner'
                    role='Creator of The Spirit'
                    image='./src/assets/Will Eisner.avif'
                />
                <Dict_pepople
                    name='Jim Steranko'
                    role='Creator of Giant Size Hulk'
                    image='./src/assets/Jim Steranko.avif'
                />
            </div>
        </div>
    );
}

export default Founders;
