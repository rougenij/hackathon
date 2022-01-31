import React from 'react';
import { useEffect, useState } from "react";
//import CitiesList from './CitiesList';
import './CityPage.css';
import cultourApi from "../../../Api/cultourApi";
import NavBar from '../../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';

const CityPage = () => {

	const [sites, setSites] = useState([]);
	const params = useParams();
	console.log("params", params.city);

  useEffect(() => {
    fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			
			const { data } = await cultourApi.get(`/cities/${params.city}`);
			console.log(data);
			setSites(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	

	return (
		<div> <NavBar id="logo-city-page"/>
			<div className="container">
				<h2 className="city">{params.city}</h2>
				{sites.map((place, ind) => {
					return (
						<div className="place" key={`place${ind}`}>
							<h3 className="place-name">{(place.name).split(" ").slice(1).join(" ")}</h3>
							<div className="place-description">{place.description}</div>
							<img className="place-image" src={place.image} alt=""/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default CityPage;