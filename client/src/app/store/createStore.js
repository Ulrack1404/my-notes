const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    categories: categoriesReducer
});
