const getUsers = 'SELECT * FROM "user"';
const getUserById = 'SELECT * FROM "user" WHERE id = $1';
const checkEmail = 'SELECT s FROM "user" s WHERE s.email = $1';
const addUser = 'INSERT INTO "user" (name, email, dob) VALUES ($1, $2, $3)';
const removeUserById = 'DELETE FROM "user" WHERE id = $1';
const updateUser = 'UPDATE "user" SET name = $1 WHERE id = $2';

const queries = {
    getUsers,
    getUserById,
    checkEmail,
    addUser,
    removeUserById,
    updateUser,
}

export default queries;