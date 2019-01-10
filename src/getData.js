const datasets = new Map([
  ['main', { results: 1 }]
]);

function getDataCallback(location, callback) {
  let error;
  let response;
  if (!datasets.has(location)) {
    error = `Location ${location} unknown`;
    response = { statusCode: 404 };
  } else {
    response = { statusCode: 200, body: datasets.get(location) };
  }
  callback(error, response);
}

function getDataPromise() {

}

export default { getDataCallback, getDataPromise };