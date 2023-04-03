/*1-Vous disposez d'un certain nombre de messages de contraintes propres à chaque élément du formulaire.

Dans un premier temps, associez ces contraintes à chacun des champs du formulaire. Vous pourriez vous aider du console.log présent dans le script de base.

Par défaut, ces contraintes doivent être masquées. La contrainte concernée s'affichera uniquement lorsque l'utilisateur placera le focus sur ce champ, et disparaîtra s'il quitte le champ.

Vous prendrez soin de les faire apparaître lentement.

Attention, vous n'êtes pas chargé de valider les données du formulaire, seulement de gérer l'affichage.

2-Rendez ce formulaire plus agréable à la lecture en modifiant les éléments suivants :

Au chargement, les éléments h1 / legend seront masqués, puis lentement affichés sur 1000 ms.

Sur 2000 ms, la largeur du formulaire passera à 50 %.*/

$(document).ready(() => {
	let constraintsText = {
		name: "Le nom d'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.",
		email: "Il doit s'agir d'un e-mail valide",
		password:
			"Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d'au moins 6 caractères",
		birthDate: "L'utilisateur doit être une personne majeure",
		comment: 'Le commentaire ne peut excéder plus de 200 caractères',
	};

	//6- Au chargement, les éléments h1 / legend seront masqués, puis lentement affichés sur 1000 ms.
	$('h1, legend').hide().fadeIn(1000);
	//OU 6bis
	/* $('h1, legend').hide().show(1000); */

	//7- Sur 2000 ms, la largeur du formulaire passera à 50 %.
	$('#form').animate(
		{
			width: '50%',
		},
		2000
	);

	$('input').each(function () {
		// console.log($(this).attr('name'));
		//1-declare variable helpText qui var intégrer le texte contenu dans le tableau constraintsText
		let helpText = constraintsText[$(this).attr('name')];
		//2-Création balise p avec mon texte
		helpText = `<p class="help-text"> ${helpText} </p>`;
		//3-Insérer le texte dans le formulaire sous chaque input avec la method after (help-text reste en display none pour l'instant)
		$(this).after(helpText);

		//4-Quand on focus sur l'input, le texte s'affiche
		$(this).on('focus', () => {
			//4a-Quand on quitte l'input, le texte disparait
			$(this).next().fadeIn(500);
		});
		//OU 4bis
		/* $(this).focus((e) => {
			$(this).next('.help-text').show('slow');
		}); */

		//5-Quand on focus OUT sur l'input, le texte disparait
		$(this).focusout(() => {
			//5a-Quand on quitte l'input, le texte disparait
			$(this).next().fadeOut(500);
		});
		//OU 5bis
		/* $(this).focusout((e) => {
			$(this).next('.help-text').hide('slow');
		}); */
	});
});

//SOLUTION STUDI
/*
$(document).ready(() => {
    let constraintsText = {
        name: 'Le nom d\'un utilisateur ne peut contenir plus de 20 caractères et ne doit contenir que des lettres.',
        email: 'Il doit s\'agir d\'un e-mail valide',
        password: 'Le mot de passe ne peut contenir que des chiffres et des lettres. Il doit disposer d\'au moins 6 caractères',
        birthDate: 'L\'utilisateur doit être une personne majeure',
        comment: 'Le commentaire ne peut excéder plus de 200 caractères'
    }

    $('.js-hasHelpText').each(function () {
        let helpText = '<p class="help-text">' + constraintsText[$(this).attr('name')] + '</p>'
        $(this).after(helpText)
    })

    let form = $('#form')

    form.animate({'width': '50%'}, 2000)

    $('h1, legend').hide().show(1000)

    form.on('focus', 'input, textarea', function () {
        $(this).next('.help-text').show('slow')
    })

    form.on('blur', 'input, textarea', function () {
        $('.help-text').hide()
    })
});
*/
