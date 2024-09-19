import React from "react";

//include images into your bundle
import Card from "./card.jsx";
import SecondsCounter from "./SecondsCounter.jsx";
//create your first component

const Home = () => {


	return (
		<div>
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
			<div style={{ flex: 1 }}>
				<SecondsCounter />
			</div>
			
			
			</div>
		</div>
		
	);
};

export default Home;