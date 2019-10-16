import xhrAdapter from 'axios/lib/adapters/xhr'
import lscache from 'lscache'
import has from 'lodash.has'

lscache.setBucket('axios');

const pendingRequests = {};

export const ajaxadapter = function (config) {

    if (config.method === 'get') {
        const key = JSON.stringify({u: config.url, c: config.params ? config.params: null})

        //Dont repeat requests
        if (has(pendingRequests, key)) {
            console.log("Request "+key+" merged")
            return new Promise((res, rej) => {
                pendingRequests[key]
                    .then(response => {
                        const clone = {...response}
                        clone.merged = true
                        res(clone)
                    })
                    .catch(rej)
            })
        }

        //Cache management

        if (config.cache && config.cache === true) {

            const cached = lscache.get(key)

            if (cached) {
                console.log("Cached " + config.url + " Params: " + JSON.stringify(config.params))
                return Promise.resolve(cached)
            }

            const request = new Promise((resolve, reject) => {
                xhrAdapter(config)
                    .then(function(res){
                        if (res.status === 200) {
                            const time = config.cacheTime ? config.cacheTime : null
                            lscache.set(key, res,time)
                        }
                        resolve(res)
                    })
                    .catch(reject)
                    .finally(() => {
                        delete pendingRequests[key]
                    })
            });
            pendingRequests[key] = request;
            return request;
        }
    }
    return xhrAdapter(config)
}