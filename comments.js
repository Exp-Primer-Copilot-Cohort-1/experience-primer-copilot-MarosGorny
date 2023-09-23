// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var port = process.env.PORT || 3000;
var router = express.Router();
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    name: String,
    comment: String,
    time: String
});
var Comment = mongoose.model('Comment', commentSchema);
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/comments', function (req, res) {
    Comment.find({}, function (err, comments) {
        if (err)
            throw err;
        res.json(comments);
    });
});
app.post('/comments', jsonParser, function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    var comment = new Comment(req.body);
    comment.save(function (err) {
        if (err)
            throw err;
        res.send(comment);
    });
});
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});