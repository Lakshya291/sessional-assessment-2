// API
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open("GET", url);

xhr.onload = function () {
	if (xhr.status === 200 && xhr.readyState === 4) {
		const response = JSON.parse(xhr.responseText);
		// console.log(response);

		let template = "";
		for (let i = 0; i < response.length; i++) {
			template += `
			<div class="card m-5" style="width: 18rem">
				<img src="${response[i].thumbnailUrl}" loading="lazy" class="card-img-top py-3 px-2" alt="..." />
				<div class="card-body">
					<h5 class="card-title"> ${response[i].id}. ${response[i].title} </h5>
					<a href="${response[i].url}" class="btn btn-primary">Go somewhere</a>
				</div>
		</div>

					
				`;

			// console.log(response[i]);
		}
		document.querySelector("#my-container").innerHTML = template;
	}
};
xhr.send();
