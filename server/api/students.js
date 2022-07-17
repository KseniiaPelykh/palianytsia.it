const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

const jsonDirectoryPath = path.join(__dirname, '..', 'data');

const getStudentList = function() {
    const data = [];
    const files = fs.readdirSync(jsonDirectoryPath);
    for (const file of files) {
        const obj = require(path.join(jsonDirectoryPath, file));
        const student = {
            name: obj.name,
            description: obj.description,
            filename: path.parse(file).name,
            photo: obj.photo,
        };
        data.push(student);
    }
    return data
}

const getStudentInfo = function(filename) {
    const filepath = path.join(jsonDirectoryPath, filename + ".json");
    const result = require(filepath);
    return result
}

module.exports = { getStudentList, getStudentInfo }
