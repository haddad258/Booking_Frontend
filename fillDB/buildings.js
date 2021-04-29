const axios = require('axios');
const faker = require('faker');

        
            for (let id = 0; id <=2 ; id++) {

            let group = {}

            let name = faker.company.companyName();
            let contact = faker.company.companyName();
            let address = faker.address.streetAddress();
            let city = faker.address.city();
            let country = faker.address.city();
            let position = faker.address.zipCode();
            let zipcode = faker.address.zipCode();
            let description = faker.lorem.paragraph();
            let images = []

            for (var i = 0 ; i <= 3; i++) {
            	images.push(faker.image.city())
            }
            
            
            
            group = {
                "name": name,
                "description": description,
                "contact": contact,
                "address": address,
                "city": city,
                "country": country,
                "zipcode": zipcode,
                "position": position, 
                "images": images,      
            }

             axios.post('http://localhost:8800/api/common/buildings', group)
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