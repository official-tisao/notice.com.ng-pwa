import Carousel from "../components/home/Carousel";
import GridLayout from "../components/home/GridLayout";
import React, { useState, useEffect } from 'react';
import {CarouselData} from "../data/carousel";
// import ScriptResource from "../hooks/scriptResource";

const HomeScreen = () => {
	// ScriptResource("/src/assets/js/owl.carousel.min.js");
	// ScriptResource("/src/assets/js/main.js");

	const [data, setData] = useState(CarouselData);
	const [dataOld, setDataOld] = useState(CarouselData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(data);
				const headers = new Headers();
				headers.set('Authorization', 'Basic c3RhZ2luZzpzdGFnaW5nQDBwYXNz');
				const response = await fetch('https://staging.api.notice.com.ng/post?page=0&size=20',{
					method: 'GET', // Or 'POST' if it's a POST request
					headers: headers
				});
				// fetch("https://treasuryportal.rosabon-finance.com/login", {
				// 	"headers": {
				// 		"accept": "application/json, text/plain, */*",
				// 		"accept-language": "en-GB,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,en-US;q=0.6",
				// 		"content-type": "application/json",
				// 		"sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
				// 		"sec-ch-ua-mobile": "?1",
				// 		"sec-ch-ua-platform": "\"Android\"",
				// 		"sec-fetch-dest": "empty",
				// 		"sec-fetch-mode": "cors",
				// 		"sec-fetch-site": "same-site"
				// 	},
				// 	"referrerPolicy": "no-referrer",
				// 	"body": "{\"email\":\"tiamiyusaheedoluwatosin@gmail.com\",\"password\":\"Q8aur5pw5dG@VmF\",\"platformType\":\"WEB\",\"platform\":\"TREASURY\"}",
				// 	"method": "POST"
				// });
				// fetch("https://treasuryportal.rosabon-finance.com/notification?platform=TREASURY", {
				// 	"headers": {
				// 		"accept": "application/json, text/plain, */*",
				// 		"accept-language": "en-GB,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,en-US;q=0.6",
				// 		"authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aWFtaXl1c2FoZWVkb2x1d2F0b3NpbkBnbWFpbC5jb20iLCJzY29wZXMiOiJJTkRJVklEVUFMX1VTRVIiLCJpYXQiOjE3MjgxOTk1MDgsImV4cCI6MTczMzM4MzUwOH0.CDCuNugCc0Od6ModVkFXgktG9Dy5s70elfJZINf787U",
				// 		"sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
				// 		"sec-ch-ua-mobile": "?1",
				// 		"sec-ch-ua-platform": "\"Android\"",
				// 		"sec-fetch-dest": "empty",
				// 		"sec-fetch-mode": "cors",
				// 		"sec-fetch-site": "same-site"
				// 	},
				// 	"referrerPolicy": "no-referrer",
				// 	"body": null,
				// 	"method": "GET"
				// });

				const headers2 = new Headers();
				headers.set("accept", "application/json, text/plain, */*");
				headers.set("accept-language", "en-GB,en;q=0.9,fr-CA;q=0.8,fr;q=0.7,en-US;q=0.6");
				headers.set("sec-ch-ua", "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"");
				headers.set("sec-ch-ua-mobile", "?1");
				headers.set("sec-ch-ua-platform", "\"Android\"");
				headers.set("sec-fetch-dest", "empty");
				headers.set("sec-fetch-mode", "cors");
				headers.set("sec-fetch-site", "same-site");
				headers.set("authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aWFtaXl1c2FoZWVkb2x1d2F0b3NpbkBnbWFpbC5jb20iLCJzY29wZXMiOiJJTkRJVklEVUFMX1VTRVIiLCJpYXQiOjE3MjgxOTk1MDgsImV4cCI6MTczMzM4MzUwOH0.CDCuNugCc0Od6ModVkFXgktG9Dy5s70elfJZINf787U");
				const response2 = await fetch('https://treasuryportal.rosabon-finance.com/notification?platform=TREASURY',{
					method: 'GET', // Or 'POST' if it's a POST request
					headers: headers
				});
				console.log(await response2.json());
				const result = await response.json();
				const addPrefixToFields = (arr: any, prefix: string) => {
					return arr.map((item: any) => {
						item.slug = `${prefix}${item.slug}`;
						item.thumbImg = `${prefix}${item.thumbImg}`;
						return item;
					});
				};

				const updatedData = addPrefixToFields(data, "https://www.notice.com.ng/");
				if(typeof result._embedded.post =="object") console.log(result._embedded.post);
				//setData(result._embedded.post);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<Carousel data={dataOld} setDataOld={setDataOld} />
			{/* ads top */}
			<div className="ads-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="ads-block">
								<a href="./#">
									<img src="/assets/others/ads1.jpg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<GridLayout />
		</>
	);
};

export default HomeScreen;
