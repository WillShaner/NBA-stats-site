import Container from 'react-bootstrap/Container'
import PlayerListContainer from '../components/PlayerListContainer'
function playerList() {
  return (
    <Container className="d-flex flex-column h-100vh">
      <PlayerListContainer />
    </Container >
  )
}

export default playerList