angular.module('archApp')
    .service('TextualContentService', [
        function() {
            var service = this;

            service.getLandingPageText = function (language) {
                var whyContent = {
                    header: "Why rafting tour is an awesome idea ?",
                    paragraph: "No matter if you are an adventurist looking for your dose of adrenalin, a family wanting to have some quality time together, or just nature lover, Tara river has to offer many exciting contents to you. Kanyon is one of the largest in Europe, and surely one of the most beautiful. For its cleaness it is called 'The TEAR of Europe' ! Fresh air, breathtaking panorama, untoutched wildlife and cool water clean as the glass will make you fall in love with this place. We can offer you boat rafting down the river, climbing guides to many of the surrounding mountains, camping places and tents, warm beds in etno styled restourant/hostel and much more."
                };
                var whoContent = {
                    header: "Little bit about ourselves ...",
                    paragraph: "We are common Montenegrin family, united and happy in what we do. We decided to make this warm and cozy facility on the grounds of our ancestors, to honour beauty and value of nature. This family business draws us closer to each other, but also enables us to make friend from all around the Globe. We highly value casual and friendly relations with our guests, as we give our best to fullfil their need and wishes. Our domestic kitchen will provide you the food you'll find nowhere else, with variations of local specialities and popular international dishes. We offer accomodation in shared and separated rooms, bungalows and tents. We are always open for communication and deal, so please feel free to ask us anything anytime."
                };
                var whereContent = {
                    header: "How do you find us ?",
                    paragraph: "In the ancient times, there was a huge monumental gate, with runes and carvings across its surface. Legend says this gate was build by half-god-half-human Greek hero Achiles. He named it 'Heaven's gate' for it ought to protect the lost paradise. Unfortunately, map containing the secret location of this gate is lost. Your quest is to find the map, decode its riddle and you will find a path to us. Wish you a good luck on your journey! No, really ... You only have to click on Google Maps and check our location, it isn't that complicated at all. Be sure to take a look at our 'Contact Us' page where you can find more useful information, as well as 'Gallery', where you can see how it looks once you get here !"
                };
                var whatContent = {
                    header: "What do we have for you ?",
                    paragraph: ""
                };

                return {
                    why: whyContent,
                    where: whereContent,
                    who: whoContent,
                    what: whatContent
                };
            };

            return service;
        }
    ]);