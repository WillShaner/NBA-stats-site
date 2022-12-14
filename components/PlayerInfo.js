import React, { useState, useRef } from 'react'
import PlayerStats from './PlayerStats'
import SearchBar from './SearchBar'
import { getMainColor, getSecondaryColor } from "nba-color"
import styles from '../styles/PlayerPage.module.css'
function PlayerInfo({ player }) {
  const [season, setSeason] = useState(2022)
  const [searchErrors, setSearchErrors] = useState()
  const yearParam = useRef()
  const { first_name, last_name, position, weight_pounds, height_feet, height_inches, team, id } = player
  const { full_name, abbreviation } = team
  const yearSubmit = (ev) => {
    ev.preventDefault()
    setSearchErrors('')
    const year = yearParam.current.value
    if (!year) {
      setSearchErrors('cannot be empty')
    }
    if (year < 1979) {
      setSearchErrors('No stats before 1979')
    }
    if (year > 2022) {
      setSearchErrors('We do not know the future')
    }
    else if (searchErrors === '') {
      setSeason(yearParam.current.value)

    }
  }


  const bgColor = getMainColor(abbreviation).hex
  const textColor = getSecondaryColor(abbreviation).hex
  const bgStyle = {
    backgroundColor: `${bgColor}`,
    height: 'max-content',
    color: `${textColor}`
  }
  return (
    <>
      <div style={bgStyle} className="d-flex justify-content-between p-3">
        <h1>{last_name}, {first_name}</h1>
        <h1>{position}</h1>
      </div>
      <div className={styles.playerInfo}>
        <div className="d-flex flex-row justify-content-between">
        </div>
        <h1>{season}</h1>
        <h3> Weight - {weight_pounds || 'N/A'} lbs</h3>
        <h3>Height - {height_feet ? `${height_feet}' ${height_inches}`
          : "N/A"
        }
        </h3>

        <PlayerStats id={id} season={season} />
      </div>
      <div style={bgStyle} className='p-3'><h3>{full_name}</h3></div>
      <SearchBar fieldRef={yearParam} onsubmit={yearSubmit} type='number' placeholder='search stats by season' errors={searchErrors} />
    </>
  )
}

export default PlayerInfo