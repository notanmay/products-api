The API consists information for the products.

Each product has 6 properties, namely:
1. name
2. price
3. featured
4. rating 
5. createdAt
6. company

The API has the functionality where the user can search and sort the products.

  The user can search products by,
  1. name
  2. company where companies are ['ikea', 'liddy','caressa', 'marcos']
  3. featured: true or false
  4. price and rating- >|<|=|>=|<=

  The user can sort the products by,
  1. name- both ascending and descending alphabetical order
  2. price - both ascending and desceding order

The API has the functionality to return only the specified fields from the product defined in the 'fields' query param.

The user can then limit the products viewed per page, the default is 10 and can jump to any page depending upon the limit.
