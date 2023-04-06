/**Défi
Maintenant que nous maîtrisons les appels AJAX, il est temps de construire notre propre site. Celui-ci aura pour but d'indiquer à un utilisateur les informations d'une ville en fonction de sa recherche. Pour cela, nous allons utiliser l'API du gouvernement : https://geo.api.gouv.fr/decoupage-administratif/communes#name à la rubrique Recherche avancée.
**Question***
-À partir du code HTML ci-dessous, construisez le code JavaScript permettant de récupérer le nom d'une ville en fonction du code postal. Le nom des villes sera injecté dans le Select sous forme d'option. Pour cela, vous devrez respecter certaines règles.
-Vous n’êtes pas responsable des recherches erronées des utilisateurs (fautes d’orthographe). Retournez un message d'erreur indiquant de recommencer dans le cas où la recherche retourne un objet vide.
-L'utilisateur devra voir :
-le code postal de la ville,
-le/les noms de villes recherchées sous forme d'option dans le select,
-Le code HTML vous est fourni, vous n'avez pas besoin de le modifier. Il vous faudra utiliser cette structure pour afficher les informations à l'écran.
-Toutes les informations nécessaires pour construire la requête vous sont fournies dans la documentation de l'API.
-Afin de vous orienter, quelques morceaux de code vous sont proposés : le code HTML et la structure de la fonction stockant une commune dans l'URL.
-En revanche, vous devrez établir :
-Une fonction permettant de transformer le texte de la commune en fonction des spécifications.
-Une fonction permettant de créer l'objet à partir des données reçues via l'API. */

//Fonction pour construire l'URL :
const apiUrl = 'https://geo.api.gouv.fr/communes?codePostal=';
const zipcode = document.getElementById('zipcode');
const city = document.getElementById('city');
const boutonTester = document.getElementById('tester');

boutonTester.addEventListener('click', (event) => {
	event.preventDefault(); // évite que la page ne recharge
	//Récupérer le code postal
	const code = zipcode.value;
	//Construire l'URL
	const url = apiUrl + code;
	//Effectuer une requête sur l'URL
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);

	xhr.addEventListener('load', () => {
		//Vérifier que la requête est terminée
		if (xhr.status === 200) {
			// Récupérer la réponse dans une variable
			const response = JSON.parse(xhr.response);

			//Vérifier que la réponse est valide
			if (response.length) {
				//Boucler sur cette variable pour insérer les résultats dans le Select sous forme d'options
				response.forEach((value, key) => {
					//Afficher le nom de la ville
					const option = document.createElement('option');
					option.value = value.nom;
					option.innerHTML = value.nom;
					city.appendChild(option);
				});
			} else {
				//Afficher un message d'erreur
				console.log("L'appel API a échoué");
			}
		}
	});
	xhr.send();
});
