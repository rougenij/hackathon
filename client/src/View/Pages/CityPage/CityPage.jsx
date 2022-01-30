import React from 'react';
import CitiesList from './CitiesList';
import './CityPage.css'

const CityPage = () => {
	//const currentCity = props
	const currentCity = 'Haifa';
	const currentList = CitiesList.filter((places) => places.location==="Haifa")
	return (
		<div className="container">
			<h2>{currentCity}</h2>
			{currentList.map((place) => {
				return (
					<div className="place">
						<h3 className="place-name">{place.name}</h3>
						{place.description.map((par) => {
								return <p>{par}</p>
						})}
							<img className="place-image" src={place.image} alt=""/>
					</div>
				)
			})}
		</div>
	)
}

export default CityPage;