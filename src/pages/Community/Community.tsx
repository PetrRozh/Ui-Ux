import { useEffect, useState } from 'react';
import './Community.css';

function Community() {
    const [dogImageUrl, setDogImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchDogImage = async () => {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setDogImageUrl(data.message);
            } catch (error) {
                console.error('Error fetching dog image:', error);
            }
        };
        fetchDogImage();
    }, []);

    return (
        <div>
            <div className='title-container-community'>
                What about our community?
            </div>
            <div className='text-container-about-title'>
                <p>Comic Book Fan Community is an exciting community of comic book fans and creators from around the world. Here, people of different ages and interests find like-minded people and discuss their favorite stories and characters.</p>
                <p>The community actively holds meetings and festivals, gathering thousands of fans for joint celebrations. These events host workshops and presentations where members can meet comic book creators and be the first to see new issues and trailers.</p>
                <p>These events are filled with joy and a spirit of creativity, allowing each participant to feel part of the vast and friendly world of fantasy and comic book art. In such a friendly atmosphere, many not only make new friends, but also get inspired to create their own works.</p>
            </div>
            {dogImageUrl && (
                <div className='dog-image-container'>
                    <img src={dogImageUrl} alt='Random Dog' className='dog-image' />
                </div>
            )}
        </div>
    );
}

export default Community;
