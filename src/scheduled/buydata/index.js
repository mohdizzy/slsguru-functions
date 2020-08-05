const data = require('@begin/data')
const tableName = 'inventory';
const buyTableName = 'buyData';

exports.handler = async function scheduled (event) {
  console.log(JSON.stringify(event, null, 2))
  let invTable = await data.get({table: tableName})

  await data.set(
    {
    table:buyTableName,
    key:invTable[0].key,
    prod1:invTable[0].prod1,
    prod2:invTable[0].prod2
  });
  
  let bd = await data.get({table:buyTableName})
  console.log(bd)
  return
}