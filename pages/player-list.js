import Container from 'react-bootstrap/Container'
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row'
import PlayerListItem from '../components/PlayerListItem'
import { useEffect, useState, useRef } from 'react'
import SearchBar from "../components/SearchBar"
function playerList() {
  const [pageCount, setPageCount] = useState(1)
  const [playerData, setPlayerData] = useState([])
  const [searchParam, setSearchParam] = useState('a')
  const searchRef = useRef()
  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.balldontlie.io/api/v1/players/?page=${pageCount}&search=${searchParam}`)
        .then((res) => res.json())
        .then((result) => {
          setPlayerData(result.data);
          console.log(result)

        });
    };
    fetchData();
  }, [pageCount, searchParam]);

  const submitSearch = (e) => {
    e.preventDefault()
    setSearchParam(searchRef.current.value)
  }

  return (
    <Container className="d-flex flex-column h-100vh">
      <SearchBar onsubmit={submitSearch} fieldRef={searchRef} type='text' placeholder='search for your favorite player' />
      <div className='player-list-container'>
        {playerData !== [] &&
          playerData.map((x) => (
            <PlayerListItem key={x.id} player={x} />))}
      </div>
      <Row className="d-flex flex-row justify-content-around">
        {pageCount > 1 && <Button onClick={() => setPageCount(pageCount - 1)}>Prev Page</Button>
        }
        {
          pageCount <= 514 && <Button onClick={() => setPageCount(pageCount + 1)}>Next Page</Button>
        }

      </Row>
    </Container >
  )
}

export default playerList