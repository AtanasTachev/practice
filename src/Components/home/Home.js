import './home.css';

const Home = () => {
    const image = 'https://miro.medium.com/max/1400/1*g-WrYg2JDifHJ1esUJO3IA.jpeg'
    return (
        <article>
        <img className="home" src={image}/>
        </article>
    )
}

export default Home;