import Container from "react-bootstrap/Container";
import styles from "../../../styles/PlayerPage.module.css"
import { getMainColor, getSecondaryColor } from "nba-color"
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
const index = ({ player }) => {
  const [statistics, setStatistics] = useState(undefined)
  const [season, setSeason] = useState(2022)
  const yearParam = useRef()
  const { first_name, last_name, position, weight_pounds, height_feet, height_inches, team, id } = player
  const { full_name, abbreviation } = team

  useEffect(() => {
    const fetchStats = async () => {
      fetch(`https://www.balldontlie.io/api/v1/season_averages/?season=${season}&player_ids[]=${id}`)
        .then((res) => res.json())
        .then((result) => {
          setStatistics(result.data[0]);
          console.log(result)

        });
    };
    fetchStats();
  }, [season, id]);
  const bgColor = getMainColor(abbreviation).hex
  const textColor = getSecondaryColor(abbreviation).hex
  const yearSubmit = (ev) => {
    ev.preventDefault()

    setSeason(yearParam.current.value)
  }
  const bgStyle = {
    backgroundColor: `${bgColor}`,
    height: 'max-content',
    color: `${textColor}`
  }
  return (
    <Container fluid className="d-flex flex-column justify-content-between" style={{ height: '100vh' }
    }>
      <div style={bgStyle} className="d-flex justify-content-between p-3">
        <h1>{last_name}, {first_name}</h1>
        <h1>{position}</h1>
      </div>
      <div className={styles.playerInfo}>
        <div className="d-flex flex-row justify-content-between">
          <h1>{id}</h1>
        </div>
        <h3> Weight - {weight_pounds || 'N/A'} lbs</h3>
        <h3>Height - {height_feet ? `${height_feet}' ${height_inches}`
          : "N/A"
        }
        </h3>
        {statistics !== undefined ? <div className={styles.playerStats}>

          <div className={styles.playerStatsRow}>
            <div className="stat text-center"><h4>Games Played<br />{statistics.games_played}</h4></div>
            <div className="stat text-center"><h4>MPG<br />{statistics.min}</h4></div>
          </div>

          <div className={styles.playerStatsRow}>
            <div className="stat text-center"><h4>PPG<br />{statistics.pts}</h4></div>
            <div className="stat text-center"><h4>APG<br />{statistics.ast}</h4></div>
            <div className="stat text-center"><h4>RPG<br />{statistics.reb}</h4></div>
            <div className="stat text-center"><h4>STL<br />{statistics.stl}</h4></div>
            <div className="stat text-center"><h4>BLK<br />{statistics.blk}</h4></div>
            <div className="stat text-center"><h4>TOV<br />{statistics.turnover}</h4></div>
          </div>






        </div> : <h1>No stats for current season found</h1>}
      </div>
      <div style={bgStyle} className='p-3'><h3>Team - {full_name}</h3></div>

      <form onSubmit={yearSubmit}>
        <input type='number' required placeholder="search stats by season" ref={yearParam} />
        <Button type="submit">Search</Button>
      </form>
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