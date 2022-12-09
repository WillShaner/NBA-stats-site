import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center">
      <Image src='/../public/home-hero.webp' alt="hero" className="img-fluid" width={500} height={500} />
      <div className={`${styles.hero} p-5`}>
        <h1>Get current stats of your favorite player</h1>
      </div>   </Container>
  )
}
