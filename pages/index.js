import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import HeroImg from "../public/home-hero.webp"
export default function Home() {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center">
      <Image src={HeroImg} alt="hero" className="img-fluid" width={500} height={500} />
      <div className={`${styles.hero} p-5 text-center`}>
        <h1>Get current stats of your favorite players</h1>
      </div>   </Container>
  )
}
