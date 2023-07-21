import React from 'react'
export default function Card(props)
{  
    return (

        <div className="container">
              <img src={props.img} alt="not there"/>
              <h4 className="title">{props.title}</h4>
              <p><span>Author:</span>{props.author}</p>
              <p><span>PageCount:</span>{props.pagecount}</p>
              <p><span>category:</span>{props.category}</p>
        </div>

    )
}