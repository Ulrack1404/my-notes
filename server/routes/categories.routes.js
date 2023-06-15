const express = require("express");
const Category = require("../models/Category");
const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(async (req, res) => {
        try {
            const list = await Category.find();
            res.status(200).send(list);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    })
    .post(async (req, res) => {
        try {
            const categoryName = req.body.name;
            const categoryExist = await Category.findOne({
                name: categoryName
            });
            if (categoryExist) {
                res.status(400).json({
                    message: "Такая категория уже существует"
                });
            } else {
                const newCategory = await Category.create({
                    ...req.body
                });
                res.status(201).send(newCategory);
            }
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });
router
    .route("/:categoryId")
    .delete(async (req, res) => {
        try {
            const { categoryId } = req.params;
            await Category.findByIdAndRemove(categoryId);
            return res.send(null);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    })
    .patch(async (req, res) => {
        try {
            const { categoryId } = req.params;

            const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, {
                new: true
            });
            res.send(updatedCategory);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });

module.exports = router;
