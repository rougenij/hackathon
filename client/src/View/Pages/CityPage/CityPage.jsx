import React from 'react';
import CitiesList from './CitiesList';
import './CityPage.css'

const CityPage = () => {
    return (
        <div>
            <h2>{CitiesList[0].city}</h2>
            {CitiesList[0].placesList.map((place) => {
               return (
                   <div>
                       <h3>{place.placeName}</h3>
                       <img className="place-image" src={place.imageUrl} alt=""/>
                       {place.description.map((par) => {
                           return <p>{par}</p>
                       })}
                   </div>
               )
            })
            }   
            
        </div>
    )
}

export default CityPage;