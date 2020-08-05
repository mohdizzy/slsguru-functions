const arc = require('@architect/functions')
const data = require('@begin/data')
const table = 'inventory'
const key = 'stock'


async function buyEvent(event) {
  let { type } = event
  console.log(event)
  await data.decr({
    table,
    key,
    prop: type
  });

  let stockUpdate = await data.get({
    table,
    key,
    prop: type
  });

  console.log(stockUpdate)

  return
}

exports.handler = arc.events.subscribe(buyEvent)