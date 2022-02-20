import './home.css';

const Home = () => {
    const image = 'https://around.uoregon.edu/sites/around2.uoregon.edu/files/field/image/lecture_hall-shutterstock.jpg'
    return (
        <article>
        <img className="home" src={image} alt='home image'/>
        </article>
    )
}

export default Home;