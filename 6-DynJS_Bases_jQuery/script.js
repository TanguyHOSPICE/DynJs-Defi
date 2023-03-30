$(document).ready(() => {
	let constraintsText = {
		name: "Le nom d'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.",
		email: "Il doit s'agir d'un e-mail valide",
		password:
			"Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d'au moins 6 caractères",
		birthDate: "L'utilisateur doit être une personne majeure",
		comment: 'Le commentaire ne peut excéder plus de 200 caractères',
	};

	$('input').each(function () {
		console.log($(this).attr('name'));
	});
});
/*1-Vous disposez d'un certain nombre de messages de contraintes propres à chaque élément du formulaire.

Dans un premier temps, associez ces contraintes à chacun des champs du formulaire. Vous pourriez vous aider du console.log présent dans le script de base.

Par défaut, ces contraintes doivent être masquées. La contrainte concernée s'affichera uniquement lorsque l'utilisateur placera le focus sur ce champ, et disparaîtra s'il quitte le champ.

Vous prendrez soin de les faire apparaître lentement.

Attention, vous n'êtes pas chargé de valider les données du formulaire, seulement de gérer l'affichage.

2-Rendez ce formulaire plus agréable à la lecture en modifiant les éléments suivants :

Au chargement, les éléments h1 / legend seront masqués, puis lentement affichés sur 1000 ms.

Sur 2000 ms, la largeur du formulaire passera à 50 %.*/
