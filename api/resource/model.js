const db = require('../../data/dbConfig');

function FindResource(){
    return db('resources');
}

async function CreateResource(resource){
    await db('resources').insert(resource)
    return resource;
}

module.exports = {
    FindResource,
    CreateResource
};