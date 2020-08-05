const data = require('@begin/data')
const tableName = 'inventory';
const buyTableName = 'buyData';

exports.handler = async function scheduled (event) {
  console.log(JSON.stringify(event, null, 2))
  let table = await data.get({table: tableName})

  await data.set({table:buyTableName,key:table[0].key,prod1:table[0].prod1,prod2:table[0].prod2})
  
  let bd = await data.get({table:buyTableName})
  console.log(bd)
  return
}