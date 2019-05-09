import request from 'superagent'

const DayCareUrl = 'http://catalogue.data.govt.nz/api/3/action/datastore_search_sql?sql=SELECT * FROM"26f44973-b06d-479d-b697-8d7943c97c57" '

export function getInfo (callback) {
  request
    .get(DayCareUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}

export function append (data, callback) {
  request
    .post(DayCareUrl)
    .send(DayCareInfo)
    .end((err, res) => {
      callback(err)
    })
}