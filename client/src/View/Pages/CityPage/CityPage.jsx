import React from 'react';
import { useEffect, useState } from "react";
import CitiesList from './CitiesList';
import './CityPage.css';
import cultourApi from "../../../Api/cultourApi";

const CityPage = () => {

	const [places, setPlaces] = useState([]);
	//const [curCity, setCurCity] = useState("");

	const currentCity = 'Haifa';
	const currentList = CitiesList.filter((places) => places.location==="Haifa");

	useEffect(() => {
		getReq();
	}, [places]);

	const getReq = async () => {
		try {
			const { requestData } = await cultourApi.get("sites");
			setPlaces(requestData);
			console.log(places)
		} catch (e) {
			console.error(e.message)
		}
	};
	console.log(places)
	
	return (
		<div className="container">
			<h2 className="city">{currentCity}</h2>
			{currentList.map((place, ind) => {
				return (
					<div className="place" key={`place${ind}`}>
						<h3 className="place-name">{place.name}</h3>
						<div className="place-description">{place.description}</div>
						{/* {place.description.map((par, index) => {
								return <p key={index}>{par}</p>
						})} */}
							<img className="place-image" src={place.image} alt=""/>
					</div>
				)
			})}
		</div>
	)
}

export default CityPage;