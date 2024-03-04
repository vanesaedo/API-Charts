
//Gráfica1

fetch("https://swapi.dev/api/films/")
    .then(res => res.json())
    .then(element => {
        let films = []; // --> ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"]
        for (let i = 0; i < element.results.length; i++) {
            films.push(element.results[i].title)
        };

        let years = [];
        let yearsArray = []; // Es necesario crear este segundo array porque el eje "Y" solo trabaja con arrays de arrays
        for (let i = 0; i < element.results.length; i++) {
            yearsArray.push((element.results[i].release_date).slice(0, 4)) // El .slice solo recoge el año de la fecha entera
        };
        years.push(yearsArray)

        new Chartist.Line('.grafica1', {
            labels: films, // Aqui me pilla el array
            series: years // Aquí me pilla el array de arrays
        }, {
            fullWidth: true,
            chartPadding: {
            right: 40
            }
        });
    })



//Gráfica 2


fetch('https://swapi.dev/api/people/')
    .then(rest => rest.json())
    .then(data => {
        let characters = [];
        let films = [];

        for (let i = 0; i < data.results.length; i++) {

            characters.push(data.results[i].name);
        }

        for (let i = 0; i < data.results.length; i++) {

            films.push(data.results[i].films.length);


        }


        var data = {
            labels: characters,
            series: [films
            ]
        };

        var options = {
            seriesBarDistance: 10
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        new Chartist.Bar('.ct-chart', data, options, responsiveOptions);


    }
    )



