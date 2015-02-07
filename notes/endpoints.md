# API Endpoints
**API Root:** /api/

# Transactions
Manages transactions between users/groups.

## GET /transaction
Gets the current user's recent transactions

#### Response
```json
[
    {
        "_id": "54d632f699f601a8b40362b8",
        "description": "Dinner at the NYC Beachside Steakhouse",
        "total_amount": { "amount": 524.00, "currency": "USD" },
        "tags": [ "food" ],
        "date": "2015-01-22T18:56:59.301Z",
        "chargees": {
            "54d62e0499f601a8b40362b5": { "amount": 262.00, "currency": "USD" },
            "54d62e2099f601a8b40362b7": { "amount": 262.00, "currency": "USD" }
        }
    }
]
```

# Other
Assorted things

## GET /category
Get the list of categories available

#### Reponse
```json
[
    {
        "name": "food",
        "description": "Anything edible"
    },
    {
        "name": "utilities",
        "description": "Electricity, gas, water"
    },
]
```

# Account Management
Manages user accounts and groups

## GET /user
Returns basic information about the current authenticated user.

#### Response
```json
{
    "_id": "54d62e0499f601a8b40362b5",
    "first_name": "John",
    "last_name": "Money",
    "email": "jmoney@makinbank.com",
    "username": "jmoney",
}
```

##  GET /user/:id
Returns basic information about the user.

#### Response
```json
{
    "_id": "54d62e2099f601a8b40362b7",
    "first_name": "Money",
    "last_name": "Indebank",
    "email": "money@makinbank.com",
    "username": "money",
}
```

## GET /user/:id/friends
Returns the friends of the user

#### Response
```json
[
    {
        "_id": "54d62e2099f601a8b40362b7",
        "first_name": "Jack",
        "last_name": "Cash",
        "email": "jcash@makinbank.com",
        "username": "jcash",
    },
]
```

## GET /user/:id/groups
Returns a list of groups the user is associated with

#### Response
```json
[
    {
        "_id": "54d62e2099f601a8b40362b7",
        "name": "Moneybags",
        "description": "People with money",
        "members": [
            {
                "_id": "54d62e2099f601a8b40362b7",
                "first_name": "Jane",
                "last_name": "Money",
                "email": "jmoney2@bank.com",
                "username": "jmoney2",
            },
            {
                "_id": "54d62e0499f601a8b40362b5",
                "first_name": "John",
                "last_name": "Money",
                "email": "jmoney@bank.com",
                "username": "jmoney",
            }
        ]
    }
]
```
