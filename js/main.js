fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
		console.log(data);
		// Selection de l'élément <main>
    var main = document.querySelector('main');
    var stations = data.network.stations;
		var imgVelos = '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 38 22"><title>velo-meca</title><g id="separateur-titre"><path d="M29.85,7.78a7.23,7.23,0,0,0-2.29.38l-2-6A2.73,2.73,0,0,0,22.93.32H21.22a1.05,1.05,0,0,0,0,2.1h1.71a.66.66,0,0,1,.61.44l.29.88H15l-.14-.43.47-.06a.84.84,0,0,0,.73-.82V2.35a1.16,1.16,0,0,0-1-1.17L12.11.9a1.18,1.18,0,0,0-1.28,1.31l.1.85a.73.73,0,0,0,.27.49.75.75,0,0,0,.54.15l1-.13.32,1L10.81,8.32a6.92,6.92,0,0,0-2.7-.54,7.11,7.11,0,1,0,7,8.16h3a1.08,1.08,0,0,0,.81-.37L25.3,8l.38,1.1a7.1,7.1,0,1,0,4.17-1.36ZM13.93,7.19l2.2,6.65h-1a7.11,7.11,0,0,0-2.51-4.45Zm-2.41,4A5,5,0,0,1,13,13.84H10ZM8.11,19.9a5,5,0,0,1,0-10,5.08,5.08,0,0,1,1.61.27l-2.51,4.2a1.05,1.05,0,0,0,.9,1.59H13A5,5,0,0,1,8.11,19.9Zm10-6.65L15.7,5.84h8.71Zm11.7,6.65a5,5,0,0,1-3.45-8.64,12.08,12.08,0,0,0,2.69,4.36,1.07,1.07,0,0,0,.76.32,1.05,1.05,0,0,0,.75-1.78,9.8,9.8,0,0,1-2.23-3.64l-.13-.37a5,5,0,1,1,1.61,9.75Z"/></g></svg>';
		var imgPlaces = '<svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 28 24"><title>filtre-map-places-dispos</title><g id="separateur-titre"><path d="M14.54,8.88H13v2.56h1.54a1.34,1.34,0,0,0,1-.3,1.13,1.13,0,0,0,.34-.89,1.44,1.44,0,0,0-.35-1A1.22,1.22,0,0,0,14.54,8.88Z"/><path d="M19.79,3.78H8.26A2.28,2.28,0,0,0,6,6V17.56a2.26,2.26,0,0,0,2.26,2.22H19.79A2.22,2.22,0,0,0,22,17.56V6A2.25,2.25,0,0,0,19.79,3.78Zm-2.66,8.59a4.06,4.06,0,0,1-2.65.77H13v3.23H10.77V7.18h3.75a4.31,4.31,0,0,1,1.87.36,2.84,2.84,0,0,1,1.25,1.09,2.94,2.94,0,0,1,.45,1.61A2.62,2.62,0,0,1,17.13,12.37Z"/></g></svg>';

    for (var i = 0; i < stations.length; i++) {
			// Création de la div Station
      var station = document.createElement('div');
			station.classList = 'station';
			main.appendChild(station);
			// Création du h2 Nom Station
      var nomStation = document.createElement('h2');
			texteNomStation = stations[i].name;
      nomStation.textContent = texteNomStation;
			// Création du p Vélos Libres
			var velosLibres = document.createElement('div');
			velosLibres.classList = 'velosLibres';
			velosLibres.innerHTML = imgVelos + '<p>' + 'Vélos libres : ' + '<span>' + stations[i].free_bikes + '</span></p>';
      //velosLibres.textContent = texteVelosLibres;
			// Création du p Places Libres
			var placesLibres = document.createElement('div');
			placesLibres.classList = 'placesLibres';
      placesLibres.innerHTML = imgPlaces + '<p>' + 'Places libres : ' + '<span>' + stations[i].empty_slots + '</span></p>';
			// Ajout du h2 Nom Station dans div Station
			station.appendChild(nomStation);
			// Ajout de p Vélos Libres dans div station
			station.appendChild(velosLibres);
			// Ajout de p Places Libres dans div station
			station.appendChild(placesLibres);


			// Nombre de velos libres
			var nbVelos = stations[i].free_bikes;
			// Nombre de places libres
			var nbPlaces = stations[i].empty_slots;
			// Nombre de places totales
			var placesTotales = nbVelos + nbPlaces;
			// Moitié des places
			var demiPlaces = placesTotales / 2;
			// Actions pour les vélos
			if (nbVelos >= demiPlaces && nbVelos != 0) {
				velosLibres.classList.add('green');
			}
			if (nbVelos === 0) {
				velosLibres.classList.add('red');
			}
			// Actions pour les places
			if (nbPlaces >= demiPlaces && nbPlaces != 0) {
				placesLibres.classList.add('green');
			}
			if (nbPlaces === 0) {
				placesLibres.classList.add('red');
			}
    }
	});
});



// Le tableau s'appelle Data
// Afficher pour chacunes des stations le nom, empty slots et free bikes, si moins de 50% faire quelque chose


// stations[i].name
// stations[i].empty_slots
// stations[i].free_bikes
