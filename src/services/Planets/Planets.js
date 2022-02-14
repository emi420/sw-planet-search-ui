import config from '../config';

class PlanetService {
    search (query) {
        return new Promise((resolve, reject) => {
            fetch(`${config.API_URL}/planets?search=${query}`)
                .then(response => {
                    if (response.ok) {
                        return resolve(response.json());
                    } else {
                        reject();
                    }
                })   
                .catch(error => error)
        });
    }
}
    
export default PlanetService;
