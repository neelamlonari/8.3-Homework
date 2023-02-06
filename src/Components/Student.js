import React from 'react';
import studentData from '../Data';
import Score from './Score';

function Student({studentData}){
    return(
        
        <div className = 'student'>
            {
                studentData.map((el,idx) =>(
                   // const{name,bio,scores} = Data;
                   //return (
                           <div key={idx} className="students-Info">
                           <h2 className='name'>{el.name}</h2>
                           <p className='para'>{el.bio}</p>
                        
                           <div className="score">
                            <Score score={el.scores}/>
                        </div>
                        </div>
                )
            )
            }
        </div>
    );
}
export default Student;
