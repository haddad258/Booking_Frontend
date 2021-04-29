const axios = require('axios');
const faker = require('faker');

        
            for (let id = 0; id <=2 ; id++) {

            let group = {}

            let name = faker.company.companyName();
            let description = faker.lorem.paragraph();
            let images = []

            for (var i = 0 ; i <= 3; i++) {
            	images.push(faker.image.city())
            }
            
            
            
            group = {
                "building" : "608a62e877faf4033ccb133f",
                "name": name,
                "description": description,
                "images": images,   
                "floors":[],
            }

             axios.post('http://localhost:8800/api/common/zones', group)
            .then(function (response) {
                 console.log(response);
                })
            .catch(function (error) {
                  console.log(error);
            });
            



        }
      

        
        

    
    // axios.delete('http://197.27.92.203:9875/sib-api/common/groups/4')
    //         .then(function (response) {
    //              console.log(response);
    //             })
    //         .catch(function (error) {
    //               console.log(error);
    //         });