const data = require('@begin/data');
const tableName = 'inventory';

exports.handler = async function http (req) {

  let table = await data.get({table: tableName})
  
  if(table.length === 0){
    await data.set({table:tableName, key:"stock", prod1:10, prod2:10});
  }

  let td = await data.get({table: tableName})

  console.log(td[0].key)
  
  console.log('Begin API called')
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify({
      message: 'Hello Serverless Guru!'
    })
  }
}
