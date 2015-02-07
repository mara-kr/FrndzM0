var fakeTransactions = [
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
    },
    {
        "_id": "54d64a77c426083d4e144af2",
        "description": "Science!",
        "total_amount": { "amount": 10.00, "currency": "USD" },
        "tags": [ "food" ],
        "date": "2015-02-07T11:56:12.301Z",
        "chargees": {
            "54d62e0499f601a8b40362b5": { "amount": 5.00, "currency": "USD" },
            "54d62e2099f601a8b40362b7": { "amount": 5.00, "currency": "USD" }
        }
    },
    {
        "_id": "54d64a77c426083d4e144af2",
        "description": "Science?",
        "total_amount": { "amount": 5.00, "currency": "USD" },
        "tags": [ "food" ],
        "date": "2015-01-23T13:26:59.301Z",
        "chargees": {
            "54d62e0499f601a8b40362b5": { "amount": 2.50, "currency": "USD" },
            "54d62e2099f601a8b40362b7": { "amount": 2.50, "currency": "USD" }
        }
    }
];

exports.all = function(req, res) {
    res.json(fakeTransactions);
}

exports.get = function(req, res) {
    var _id = req.params.id;
    var transaction = _.findWhere(fakeTransactions, {"_id": _id});
    res.json(transaction);
}