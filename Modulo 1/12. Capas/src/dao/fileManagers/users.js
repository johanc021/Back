import fs from 'fs';

export const saveJSON = async (user) => {
    console.log(user)
    try {
        // Verificar si el archivo JSON existe
        if (fs.existsSync('./filesJSON/users.json')) {
            // Leer el archivo JSON existente
            const usersData = fs.readFileSync('users.json', 'utf8');
            const users = JSON.parse(usersData);

            // Agregar el nuevo usuario a la lista de usuarios
            users.push(user);

            // Escribir la lista de usuarios actualizada en el archivo JSON
            fs.writeFileSync('./filesJSON/users.json', JSON.stringify(users), 'utf8');
        } else {
            // Crear un nuevo archivo JSON con el objeto directamente
            fs.writeFileSync('./filesJSON/users.json', JSON.stringify([user]), 'utf8');
        }
    } catch (error) {
        throw new Error('Error al guardar el usuario en el archivo JSON');
    }
};

export const editJSON = async (userId, updatedUser) => {
    try {
        // Lee el archivo JSON
        const data = fs.readFileSync('./users.json', 'utf8');

        // Parsea los datos del archivo JSON a un objeto
        const users = JSON.parse(data);

        // Busca el usuario por ID en el array de usuarios
        const userIndex = users.findIndex(user => user._id === userId);

        if (userIndex === -1) {
            throw new Error('El usuario no existe en el archivo JSON');
        }

        // Actualiza los datos del usuario con los valores proporcionados
        users[userIndex] = {
            ...users[userIndex],
            ...updatedUser
        };

        // Convierte el objeto de usuarios a formato JSON
        const updatedData = JSON.stringify(users, null, 2);

        // Escribe los datos actualizados en el archivo JSON
        fs.writeFileSync('./users.json', updatedData);

        // Devuelve el usuario actualizado
        return users[userIndex];
    } catch (error) {
        throw new Error('Error al editar el usuario en el archivo JSON');
    }
};

export const removeFromJSON = async (userId) => {
    try {
        // Lee el archivo JSON
        const data = fs.readFileSync('./users.json', 'utf8');

        // Parsea los datos del archivo JSON a un objeto
        const users = JSON.parse(data);

        // Busca el índice del usuario por su ID en el array de usuarios
        const userIndex = users.findIndex(user => user._id === userId);

        if (userIndex === -1) {
            throw new Error('El usuario no existe en el archivo JSON');
        }

        // Elimina el usuario del array
        users.splice(userIndex, 1);

        // Convierte el objeto de usuarios a formato JSON
        const updatedData = JSON.stringify(users, null, 2);

        // Escribe los datos actualizados en el archivo JSON
        fs.writeFileSync('./users.json', updatedData);

        // Devuelve el ID del usuario eliminado
        return userId;
    } catch (error) {
        throw new Error('Error al eliminar el usuario del archivo JSON');
    }
};
