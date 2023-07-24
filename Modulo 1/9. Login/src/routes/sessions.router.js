import { Router } from "express";
import userModel from "../dao/models/users.js";

const router = Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password, role } = req.body;
    const exist = await userModel.findOne({ email });

    if (exist) return res.status(400).send({ status: "error", error: "Users already exists" })

    const user = {
        first_name,
        last_name,
        email,
        age,
        password,
        role
    }
    let result = await userModel.create(user)
    res.send({ status: "success", message: "User registered" })
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email, password });

    if (!user) return res.status(400).send({ status: "error", error: "Incorrect credentials" })

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        age: user.age,
        role: user.role
    }
    res.send({ status: "success", payload: req.session.user, message: "Nuestro primer logueo" })
})

router.post('/logout', async (req, res) => {
    try {
        // Eliminar la sesión de la base de datos (en este caso, utilizando el email del usuario)
        const { email } = req.session.user;
        await userModel.findOneAndUpdate({ email }, { $unset: { session: 1 } });

        // Destruir la sesión en el servidor
        req.session.destroy((err) => {
            if (err) {
                console.error('Error al cerrar la sesión:', err);
                return res.status(500).json({ status: 'error', error: 'Error al cerrar la sesión' });
            }

            // Enviar una respuesta exitosa
            return res.status(200).json({ status: 'success', message: 'Sesión cerrada correctamente' });
        });
    } catch (err) {
        console.error('Error al cerrar la sesión:', err);
        res.status(500).json({ status: 'error', error: 'Error al cerrar la sesión' });
    }
});

export default router;