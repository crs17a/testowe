		var app = angular.module("productsModule", []);
		
		app.controller('productsCtrl', ['$scope', function($scope){
			
	
		
			
			$scope.cancel = function()
			{
				
				
			}
			
			
			
			// hide btn Update
			$scope.hideval = false;
			$scope.isShowHide = function (param)
			{
				$scope.edit = false;
				
				if (param == "hide") 
				{
				$scope.edit = true;
				$scope.hideval = true;
				}

			}
			
		
		// show the products Details
		$scope.showDetails = function(){
			$scope.namemodel = this.product;
			$('#viewModal').modal('show');
		}
		
		
		
		$scope.produkty = [
						{
							"name": "Paladyn",
							"karty": "2x Żrący Bagienny Szlam, 2x Dar Królów, 2x Konsekracja, 2x Monterka Smokorów, 2x Wódz Mroźnych Wilków, 2x Grizli Żelaznoskóry, 2x Władca Areny, 2x Murloc Brzegowiec, 2x Łowczyni z Brzytwoskórych, 2x Czempion Wichrogrodu, 2x Srebrytowy Czempion, 2x Dar Mocy, 2x Młodsza Inżynier, 2x Dowódca Rajdu, 2x Tarczowy z Sen'jinu",
							"description": "Założenia są proste - zdobycie przewagi na polu gry za pomocą jednostek oraz ich buffowanie. Dar mocy i Dar Królów to najważniejsze elementy zestawu, warto zwracać uwagę na jakich jednostkach ich używamy, by nie zmarnować potencjału."
							
						},
						
						{
							"name": "Łowca",
							"karty": "2x Znak Łowcy, 2x Tajemny Strzał, 2x Leśny Wilk, 2x Wygłodniały Sęp, 2x Zwierzęcy Towarzysz, 2x Rozkaz Zabicia, 2x Treser Ogarów, 2x Wielostrzał, 2x Tundrowy Nosorożec, 2x Dzik Szabloskalny, 2x Bagienny Raptor, 2x Grizli Żelaznoskóry, 2x Wódz Srebrnogrzbietych, 2x Żółwior Szczękogryz, 2x Ognisty Ogar",
							"description": "Od samego początku staraj się zapełnić swoją planszę jak najwiekszą ilością bestii, następnie wzmacniaj ich statystyki, m.in. za pomocą Tresera ogarów. Tundrowy Nosorożec jest w tej talii gwoździem do trumny, może w bardzo szybki sposób zwiększyć szansę na wygraną."
						},
						
						{
							"name": "Druid",
							"karty": "2x Kobold Geomanta, 2x Mag z Dalaranu, 2x Kapłanka Straceńczego Słońca, 2x Wilczy Jeździec, 2x Yeti z Zimnych Wichrów, 2x Ogrzy Mag, 2x Tarczowy z Sen'jinu, 1x Uzdrawiaczka Mrocznołuskich, 1x Berserker z Gurubaszi, 2x Orzeźwienie, 2x Księżycowy Ogień, 2x Znak Ostępów, 1x Gwałtowny Wzrost, 1x Dziki Ryk, 2x Zamaszysty Cios, 2x Gwiezdny Ogień, 2x Żelaznokory Obronca",
							"description": "Ten zestaw kart skupia się na zaklęciach Druida - stąd też duża ilość stronników z umiejętnością zwiększającą obrażenia od zaklęć. Karta Zamaszysty cios w użytwa odpowiednim momencie może stać się naprawdę zabójcza."
						},
						{
							"name": "Kapłan",
							"karty": "2x Młodsza Inżynier , 2x Rzeczny Krokoliszek, 2x Grizli Żelaznoskóry, 2x Kapłanka Straceńczego Słońca, 2x Yeti z Zimnych Wichrów, 2x Gnomka Wynalazca, 2x Tarczowy z Sen'jinu, 2x Uzdrawiaczka Mrocznołuskich, 2x Święty Cios, 2x Gorliwa Kapłanka, 2x Słowo Mocy: Tarcza, 2x Słowo Cienia: Ból, 2x Słowo Cienia: Śmierć, 2x Rozbłysk Świętości, 2x Kontrola Umysłu",
							"description": "Jedna z najlepszych talii kart podstawowych. Pewien gracz zdobył dzięki niej poziom legendy. Najważniejsze karty w tej talii to: tanie czary usuwające, stronnicy z dużą ilością życia oraz Gorliwa Kapłanka."
						},
						{
							"name": "Druid",
							"karty": "2x Orzeźwienie, 2x Pazur, 2x Znak Ostępów, 2x Gwałtowny Wzrost , 2x Żrący Bagienny Szlam, 2x Młodsza Inżynier, 2x Rzeczny Krokoliszek, 2x Kapłanka Straceńczego Słońca, 2x Wilczy Jeździec, 2x Yeti z Zimnych Wichrów, 1x Tarczowy z Sen'jinu, 1x Gnomka Wynalazca, 2x Zamaszysty Cios, 2x Gwiezdny Ogień, 2x Ogr z Głazograbych, 2x Żelaznokory Obronca",
							"description": "W tej talii staramy się od początku budować jak największą ilość kryształów, a następnie we wczesnej fazie gry możemy wystawiać mocnych stronników o dużym koszcie. Dodatkowo posiadamy czary, które pomagają pozbyć się niechcianych przeszkód na drodze do wygrania."
						}
				];
					
							
			
		}]);
	
		
		
			
			
		
		
			
			
			
			
			
			
				