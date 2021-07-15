import React,{useState, useEffect } from 'react'
import SongCard from './SongCard';

const Player = ({code}) => {
    return (
        <div>
           <input type="text"/>
           <button >Search</button>
           <h3>{code}</h3>
        </div>
    )
}

export default Player
