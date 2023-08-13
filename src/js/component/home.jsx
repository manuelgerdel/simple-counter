import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (number) => {


	setInterval(() => {

	}

	)

	return (
		<>
			<h1 className="text-center mt-5">Simple counter</h1>

			<div className="container vh-100 d-flex align-items-center justify-content-center">

				<div className="row display-3 col-5 border rounded">
					<div className="col-2 "><i class="fa-regular fa-clock"></i></div>
					<div className="col-2 ">{number.num5}</div>
					<div className="col-2">{number.num4}</div>
					<div className="col-2">{number.num3}</div>
					<div className="col-2">{number.num2}</div>
					<div className="col-2">{number.num1}</div>
				</div>

			</div>

		</>
	);
};

export default Home;
