import React from 'react';
import './template_overview.css';
import TemplateCard from './template_card';
import data from '../DB/data.json';

const template_overview = () => {

  const newTemplateCard = data.map(item=>{
    return(
      <TemplateCard key={item.id} data={item}/>
    )
  });

  return (

    <div className="container">
      <h1> <span role="img" aria-label="">🌽</span> React Farm 🥦</h1>
      <div className="cards-container">
        {newTemplateCard}
      </div>
    </div>

  );
}

export default template_overview;