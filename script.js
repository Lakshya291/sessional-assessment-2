// API
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open("GET", url);

xhr.onload = function () {
	if (xhr.status === 200 && xhr.readyState === 4) {
		const response = JSON.parse(xhr.responseText);
		// console.log(response);

		let template = "";
		for (let i = 0; i < 50; i++) {
			// console.log(response[i]);
			template += `
				<div class="container photos mt-3" style="background-color:#D3FFFE">
				<h5>${response[i].id}</h5>
				
				</div>
			`;
		}
		document.querySelector("#my-container").innerHTML = template;
	}
};
xhr.send();
