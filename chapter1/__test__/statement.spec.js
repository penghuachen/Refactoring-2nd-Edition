const statement = require('../statement');

test('test statement fn', () => {
  const invoice = require("../invoices.json");
  const plays = require("../plays.json");
  expect(statement(invoice[0], plays)).toBe(`Statement for BigCo
 Hamlet: $650.00 (55 seats)
 As You Like It: $580.00 (35 seats)
 Othello: $500.00 (40 seats)
Amount owed is $1,730.00
Your earned 47 credits
`);
});