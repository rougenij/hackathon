import React from 'react';
import { useEffect, useState } from "react";
import CitiesList from './CitiesList';
import './CityPage.css';
import cultourApi from "../../../Api/cultourApi";
import NavBar from '../../Components/NavBar/NavBar';
import { useParams } from 'react-router-dom';

const CityPage = () => {
	const paramsCity = 'Dead Sea';
	const [sites, setSites] = useState([]);
	//const params = useParams();
	console.log(paramsCity);

  useEffect(() => {
    fetchData();
	}, []);
	
	const fetchData = async () => {
		try {
			//const { data } = await cultourApi.get(`sites/${params.city}`);
			const { data } = await cultourApi.get("sites");
			console.log(data);
			setSites(data);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div>
			<NavBar />
			<div className="container">
			<h2 className="city">{paramsCity}</h2>
			{sites.map((place, ind) => {
				return (
					<div className="place" key={`place${ind}`}>
						<h3 className="place-name">{place.name}</h3>
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