import React, { useState, useEffect } from 'react'
import styles from "../styles/PlayerPage.module.css"

function PlayerInformation({ id, season }) {
  const [statistics, setStatistics] = useState(undefined);

  useEffect(() => {
    const fetchStats = async () => {
      fetch(`https://www.balldontlie.io/api/v1/season_averages/?season=${season}&player_ids[]=${id}`)
        .then((res) => res.json())
        .then((result) => {
          setStatistics(result.data[0]);

        });
    };
    fetchStats();
  }, [season, id]);


  return (
    <div className={styles.playerStats}>


      {statistics !== undefined ?
        <>
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
        </>
        : <h1>No stats for this season
        </h1>}

    </div>

  )
}

export default PlayerInformation