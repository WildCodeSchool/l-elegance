// Import access to database tables
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");
const userManager = require("../models/userManager.js");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
    try {
        console.log("clicked");
        // return res.json({ lol: "lol" });
        // Fetch all items from the database
        const items = await userManager.readAll();

        // Respond with the items in JSON format
        res.json(items);
    } catch (err) {
        // Pass any errors to the error-handling middleware
        next(err);
    }
};
// The R of BREAD - Read operation
const read = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Fetch a specific item from the database based on the provided ID
        const item = await userManager.read(email, password);
        // console.log("item ", item);
        // If the item is not found, respond with HTTP 404 (Not Found)
        // Otherwise, respond with the item in JSON format
        if (item == null) {
            res.status(404).json({ message: "Mauvais identifiants!!!" });
        } else {
            res.json(item);
        }
    } catch (err) {
        res.status(404).json({ message: "Mauvais identifiants!!!" });
        // Pass any errors to the error-handling middleware
        next(err);
    }
};
// The E of BREAD - Edit (Update) operation
async function edit(req, res) {
    try {
        const user = req.body;
        // console.log("user from body", user);
        // Fetch a specific item from the database based on the provided ID
        const affectedRow = await userManager.update(user);

        console.log("row affected ", affectedRow);
        // If the item is not found, respond with HTTP 404 (Not Found)
        // Otherwise, respond with the item in JSON format
        if (+affectedRow === 0) {
            res.status(500).json({
                message: "Aucune modification réalisée, sans erreurs",
                affectedRow: 0,
            });
        } else {
            res.status(202).json({ message: "Utilisateur modifé", affectedRow });
        }
    } catch (err) {
        res
            .status(401)
            .json({ message: "Aucune modification réalisée", affectedRow: 0 });
    }
}
// The A of BREAD - Add (Create) operation
async function add(req, res) {
    // Extract the item data from the request body
    try {
        const user = req.body;
        // console.log("user added : ", user);
        // Insert the item into the database
        const { message, insertId } = await userManager.create(user);

        // Respond with HTTP 201 (Created) and the ID of the newly inserted item
        if (+insertId !== 0) {
            res.status(201).json({ message, insertId });
            return;
        }
        res.status(500).json({ message, insertId });
    } catch (err) {
        console.error("catch triggered ", err.message);
        res.status(409).json({ message: "Email existant!!!", insertId: 0 });
    }
}
//  generate access token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.APP_SECRET);
}
// check for existant user in the db
async function check(req, res) {
    try {
        const user = req.body;
        const userdb = await userManager.read(user.email, user.password);
        if (!userdb) {
            res.status(404).json({
                user: null,
                message: "Identifiants incorrects!!!",
            });
        } else {
            const token = generateAccessToken({
                firstname: userdb.firstname,
                lastname: userdb.lastname,
                email: user.email,
            });
            delete userdb.password;
            res.status(200).json({
                token,
                user: userdb,
                message: "Bravo!!! Vous êtes connecté",
            });
        }
    } catch (err) {
        res.status(404).json({
            user: null,
            message: "Mauvais identifiants",
        });
    }
}
// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
async function destroy(req, res) {
    try {
        const { email, password } = req.body;
        const result = await userManager.delete(email, password);
        // console.log("deleted rows number", result);
        if (+result !== 0) {
            res.status(200).json({ message: "Utilisateur supprimé" });
        } else {
            res
                .status(404)
                .json({ message: "Mauvais identifiants ou utilisateur non existant" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ message: "Suppression non autorisée" });
    }
}

async function updatePassword(req, res) {
    try {
        const { password, code, email } = req.body;
        const userdb = await userManager.readUserViaEmail(email);
        if (userdb.activationCode === code) {
            const { affectedRows } = await userManager.update({
                password,
                email,
            });
            if (affectedRows !== 0) {
                res
                    .status(200)
                    .json({ message: "Mot de passe actualisé!!!", result: true });
            } else {
                res.status(500).json({ message: "Erreur coté serveur", result: false });
            }
        } else {
            res.status(500).json({ message: "Mauvais code", result: false });
        }
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}



// Ready to export the controller functions
module.exports = {
    browse,
    read,
    add,
    edit,
    destroy,
    check,
    updatePassword,
};