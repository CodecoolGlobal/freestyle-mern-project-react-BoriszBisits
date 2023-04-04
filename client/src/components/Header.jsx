import React from 'react'

function Header({onCouncil, onClickCharacter}) {
  return (
    <>
    <div className='main-title'> Game of Thrones </div>
    <button className='header-btn' onClick={() => onClickCharacter()}>Characters</button>
    <button className='header-btn' onClick={() => onCouncil()}>My Council</button>
    </>
  )
}

export default Header