const express = require("express");
const Note = require("../models/Note");
const router = express.Router({ mergeParams: true });

router
    .route("/")
    .get(async (req, res) => {
        try {
            const list = await Note.find();
            res.status(200).send(list);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
        }
    })
    .post(async (req, res) => {
        try {
            const newNote = await Note.create({ ...req.body });
            res.status(201).send(newNote);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });
router
    .route("/:noteId")
    .delete(async (req, res) => {
        try {
            const { noteId } = req.params;
            await Note.findByIdAndRemove(noteId);
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
            const { noteId } = req.params;

            const updatedNote = await Note.findByIdAndUpdate(
                noteId,
                req.body,
                {
                    new: true
                }
            );
            res.send(updatedNote);
        } catch (e) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже"
            });
            console.log(e.message);
        }
    });

module.exports = router;
