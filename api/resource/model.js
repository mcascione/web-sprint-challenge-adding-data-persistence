const db = require('../../data/dbConfig');

function FindResource(){
    return db('resources');
}

module.exports = {
    FindResource
};