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
                "zone" : "608a6a4777faf4033ccb1340",
                "floor" : "608a6aa377faf4033ccb1343",
                "name": name,
                "type": "Metting Room",
                "description": description,
                "images": images,   
                "rooms":[],
            }

             axios.post('http://localhost:8800/api/common/rooms', group)
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