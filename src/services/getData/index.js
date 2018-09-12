import Prismic from 'prismic-javascript';
import Config from '../../config';

const getDataByApi = function(type, uid){

    var promise = new Promise(function(resolve, reject){

        Prismic.api(Config.apiEndpoint).then(api => {
            api.query(
                Prismic.Predicates.at(type, uid)
            ).then(function(response) {
                var document = response.results;
                resolve(document);
                // document contains the document content
            }).catch(err => {
                reject(err);
            })
        })

    })

    return promise;

}

export default getDataByApi;
