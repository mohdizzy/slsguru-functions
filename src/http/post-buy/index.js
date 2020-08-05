const arc = require('@architect/functions')

exports.handler = async function http (req) {
  // console.log(req.queryStringParameters.type)
  const name = 'buy-now'
  const payload = arc.http.helpers.bodyParser(req)

  await arc.events.publish({ name, payload })
  return {
    statusCode: 302,
    headers: {
      location: '/'
    }
  }
}

