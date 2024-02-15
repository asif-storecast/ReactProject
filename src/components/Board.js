import React from 'react'
import Tiles from './Tiles'
import Strike from './Strike'

function Board({tiles,onTileClick,playerTurn,strikeClass}) {
  return (
    <div className='board'>
    <Tiles  onClick = {()=>onTileClick(0)}
            playerTurn={playerTurn} 
            value={tiles[0]} 
            className='right-border bottom-border'>
        
    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(1)}  
        playerTurn={playerTurn} 
        value={tiles[1]} 
        className='right-border bottom-border'>

    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(2)}
        playerTurn={playerTurn}   
        value={tiles[2]} 
        className='bottom-border'></Tiles>
    <Tiles
        onClick = {()=>onTileClick(3)}
        playerTurn={playerTurn}   
        value={tiles[3]} 
        className='right-border bottom-border'>

    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(4)}
        playerTurn={playerTurn}   
        value={tiles[4]} 
        className='right-border bottom-border'>

     </Tiles>
    <Tiles
        onClick = {()=>onTileClick(5)}
        playerTurn={playerTurn}   
        value={tiles[5]} 
        className='bottom-border'>

    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(6)}
        playerTurn={playerTurn}   
        value={tiles[6]} 
        className='right-border'>

    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(7)}
        playerTurn={playerTurn}   
        value={tiles[7]} 
        className='right-border'>

    </Tiles>
    <Tiles
        onClick = {()=>onTileClick(8)}
        playerTurn={playerTurn}   
        value={tiles[8]} 
        className=''>

    </Tiles>
    <Strike strikeClass={strikeClass}></Strike>

    </div>
  )
}

export default Board