// API
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open("GET", url);

xhr.onload = function () {
	if (xhr.status === 200 && xhr.readyState === 4) {
		const response = JSON.parse(xhr.responseText);
		// console.log(response);

		let template = "";
		for (let i = 0; i < 1000; i = i + 50) {
			template += `
					<div class="container photos mt-3 p-3" style="background-color:#DFFCFB">
					<h5 class="">Album ${response[i].albumId}</h5>

						<div class="row my-2">
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 1].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 2].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 3].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 4].thumbnailUrl}" alt="" />
							</div>

							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 5].thumbnailUrl}" alt="" />
							</div>
						</div>
						<div class="row my-2">
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 6].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 7].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 8].thumbnailUrl}" alt="" />
							</div>
							
							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 9].thumbnailUrl}" alt="" />
							</div>

							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 10].thumbnailUrl}" alt="" />
							</div>

							<div class="col-sm-2 text-sm-end pe-4">
							<img src="${response[i + 11].thumbnailUrl}" alt="" />
							</div>
						</div>
					</div>
				`;

			// console.log(response[i]);
		}
		document.querySelector("#my-container").innerHTML = template;
	}
};
xhr.send();
