# Magic the Gathering card database

A simple Next.js application deployed through AWS Amplify that allows users to search for Magic the Gathering cards by name and view their details.
The application uses a [seeded database](https://mtgjson.com/downloads/all-files/) hosted AWS DynamoDB that is accessed through AppSync (GraphQL).
Real-time card data utilizes the [Scryfall API](https://scryfall.com/docs/api). It also allows users to add cards to an inventory and specify ownership and condition.

Planned features include:
- User authentication
- Card sale through a marketplace (TCGPlayer, Card Kingdom, etc.)
