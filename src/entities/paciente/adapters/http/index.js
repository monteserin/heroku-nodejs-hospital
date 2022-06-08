import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const data = await Controller.get();
    res.send(data);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { params: { id } } = req;
    const data = await Controller.get({ id });
    res.send(data);
}));

router.post("/", asyncHandler(async (req, res) => {
    const { body: { name, surname, date } } = req;
    await Controller.create({ name, surname, date });
    res.send('Usuario creado con éxito');
}));

router.post("/:id", asyncHandler(async (req, res) => {
    const { body: { obj } } = req;
    const { params: { id } } = req;
    console.log('bbbbbbbbbbb', req.body, '------', id)

    await Controller.updateById(id, req.body);
    res.send('Usuario creado con éxito');
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    const { params: { id } } = req;

    await Controller.deleteById(id);
    res.send('Usuario creado con éxito');
}));

export default (app, entityUrl) => app.use(entityUrl, router);
