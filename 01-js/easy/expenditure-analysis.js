/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(Object.keys(transactions[0]));
  // console.log(Object.values(transactions[0]));
  let ans = {};
  for (let i = 0; i < transactions.length; i++) {
    let c = Object.values(ans);
    if (!c.includes(transactions[i]["category"])) {
      ans.category = transactions[i]["category"];
    }
  }
  return [ans];
}

module.exports = calculateTotalSpentByCategory;

// Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }
// After Object.keys(): [ 'key1', 'key2', 'key3' ]
// After Object.values(): [ 'value1', 'value2', 'value3' ]
// After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
// After hasOwnProperty(): false
// After Object.assign(): {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }
