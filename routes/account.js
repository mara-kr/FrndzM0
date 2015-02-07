var fakeUsers = [
    {
        "_id": "54d62e0499f601a8b40362b5",
        "first_name": "John",
        "last_name": "Money",
        "email": "jmoney@makinbank.com",
        "username": "jmoney",
    },
    {
        "_id": "54d62e2099f601a8b40362b7",
        "first_name": "Money",
        "last_name": "Indebank",
        "email": "money@makinbank.com",
        "username": "money",
    },
    {
        "_id": "54d68e03a9cd9615dd9b4055",
        "first_name": "Jack",
        "last_name": "Cash",
        "email": "jcash@makinbank.com",
        "username": "jcash",
    },
];

var currUserId = "54d68e03a9cd9615dd9b4055";

exports.all = function(req, res) {
    res.json(fakeUsers);
}

exports.current = function(req, res) {
    var user = _.findWhere(fakeUsers, {"_id": currUserId});
    res.json(user);
}

exports.get = function(req, res) {
    var _id = req.params.id;
    var user = _.findWhere(fakeUsers, {"_id": _id});
    res.json(user);
}