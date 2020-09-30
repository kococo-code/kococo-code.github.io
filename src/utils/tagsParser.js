import React from 'react';


export default function TagsParset(props){
    return (
        <ul className="tags">
            {props.tags.map((tag,i)=>{
                return(
                    <li className={`tag${props.isMain ? '-main' :''} ${props.isMain ? '' : tag} `} key={i}>#{tag}</li>
                )
            })}
        </ul>
    )
}
