

exports.posts = function(req, res) {
    var posts = []
    for(var x = 0; x < 100; x++){
        posts.push({
            "id": x,
            "name": "Post " + x,
            "summary": "This is a summary " + x,
            "rating": Math.floor(Math.random() * 5) + 1
        });
    }
    res.json(posts);
}

exports.post = function(req, res) {
    var post_id = req.params.id;
    res.json({
        "id": post_id,
        "body": "Post " + post_id + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at leo vel tortor rhoncus convallis ut sed enim. In interdum dui sit amet neque faucibus, sit amet volutpat leo mollis. Sed vulputate mi eget leo porta, eu lobortis erat lobortis. Suspendisse a laoreet arcu. Morbi pretium rhoncus eros quis pretium. Praesent sagittis leo at risus feugiat mollis. Etiam fringilla eget ex eget feugiat. In in lorem pellentesque velit luctus ullamcorper eget vitae nibh. Morbi sed nunc felis. Proin finibus dictum dui, eu maximus ligula porttitor vel. Vivamus in sapien a risus auctor mollis et vel tortor. Nulla sed auctor magna. Vivamus et neque justo. Aenean elit odio, suscipit ac purus quis, congue molestie massa. Maecenas tellus leo, fringilla ac placerat ac, varius eget nisl. Duis eget lacus orci.",
        "comments": [
            {
                "user": "Terrible User",
                "comment": "Flame flame flame..."
            },
            {
                "user": "Good User",
                "comment": "Useful info!"
            }
        ],
        "rating": Math.floor(Math.random() * 5) + 1
    });
}