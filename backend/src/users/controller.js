import pool from "../../databaseConnection.js";
import queries from "./queries.js";

const getAllUser = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const {name, email, dob} = req.body;

    // check if email exists
    pool.query(queries.checkEmail, [email], (error, results) => {
        if (results.rows.length){
            res.send("Email already exists");
        } else {
            // add User to db
            pool.query(queries.addUser, [name, email, dob], (error, results) => {
                if(error) throw error;
                res.status(201).send("User added successfully!");
            });
        }
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database");
        } else {
            pool.query(queries.updateUser, [name, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User update successfully!");
            });
        }
    });
};

const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exist in the database");
        } else {
            pool.query(queries.removeUserById, [id], (error, results) => {
                if(error) throw error;
                res.status(200).send("User delete successfully!");
            });
        }
    });
};

const userController = {
    getAllUser,
    addUser,
    getUserById,
    updateUser,
    deleteUserById,
};

export default userController;