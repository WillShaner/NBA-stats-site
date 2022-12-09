import Container from "react-bootstrap/Container";
import PlayerInfo from "../../../components/PlayerInfo";
const index = ({ player }) => {
  return (
    <Container fluid className="d-flex flex-column justify-content-between" style={{ height: '100vh' }
    }>
      <PlayerInfo player={player} />
    </Container >
  )
}
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/players/${context.params.id}`)
  const player = await res.json()

  return {
    props: {
      player,


    }
  }
}

export default index