const Category = require("../models/Category");
const categoriesMock = require("../mock/categories.json");
const Note = require("../models/Note");
const notesMock = require("../mock/notes.json");

module.exports = async () => {
    const categories = await Category.find();
    if (categories.length !== categoriesMock.length) {
        await createInitialEntity(Category, categoriesMock);
    }
    const notes = await Note.find();
    if (notes.length !== notesMock.length) {
        await createInitialEntity(Note, notesMock);
    }
};

async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id;
                const newItem = new Model(item);
                await newItem.save();
                return newItem;
            } catch (e) {
                return e;
            }
        })
    );
}
