import studentData from '../Data';
import React from 'react'

function Scores({score}){
    return(
        <div className="score">
            <h3 >Scores with Date</h3>
            { score.map((score,idx) => (
                 <div key={idx} className = "score">
                    <h4 className="date">{score.date}</h4> 
                    <div >{score.score}</div>
                    </div>
                ))
            }
        </div>
    );
    }
    export default Scores;