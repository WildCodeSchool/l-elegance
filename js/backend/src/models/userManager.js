const bcrypt = require("bcrypt");
const database = require("../../database/client");

class UserManager {
    static async Hashing(password) {
        const res = await bcrypt.hash(password, 3);
        return res;
    }

    static async compare(password, passwordHash) {
        const res = await bcrypt.compare(password, passwordHash);
        return res;
    }

    static async create(user) {
        // Execute the SQL INSERT query to add a new item to the "item" table
        const hashedPassword = await this.Hashing(user.password);
        try {
            const [result] = await database.query(
                `insert into user (firstname, lastname, email, password, birthday, city,profession) values (?,?,?,?,?,?,?)`,
                [
                    user.firstname,
                    user.lastname,
                    user.email,
                    hashedPassword,
                    user.birthday,
                    user.city,
                    user.profession
                ]
            );
            return { message: "Utilisateur ajouté!!!", insertId: result.insertId };
        } catch (err) {
            throw new Error(err.message);
        }

        // Return the ID of the newly inserted item
    }
    // The Rs of CRUD - Read operations

    static async read(email, password) {
        // Execute the SQL SELECT query to retrieve a specific item by its ID
        try {
            const [rows] = await database.query(
                `select * from user where email = ?`,
                [email]
            );
            if (rows[0]) {
                const res = await this.compare(password, rows[0].password);
                if (res) {
                    return rows[0];
                }
                return null;
            }
            return null;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async readAll() {
        // Execute the SQL SELECT query to retrieve all items from the "item" table
        const [rows] = await database.query(`select * from user`);

        // Return the array of items
        return rows;
    }

    // The U of CRUD - Update operation
    // TODO: Implement the update operation to modify an existing item

    static async update(user) {
        try {
            const [userdb] = await database.query(
                `select * from user where email = ?`,
                [user.email]
            );
            if (userdb[0]) {
                const keys = Object.keys(user);
                // console.log("keys ", keys);
                keys.forEach((ele) => {
                    userdb[0][ele] = user[ele];
                });
                if (user.password) {
                    userdb[0].password = await this.Hashing(user.password);
                }
                const [res] = await database.query(
                    "update user set firstname = ?, lastname = ?, birthday = ?, city = ?, password = ?  WHERE email = ?",
                    [
                        userdb[0].firstname,
                        userdb[0].lastname,
                        userdb[0].birthday,
                        userdb[0].city,
                        userdb[0].password,
                        userdb[0].email,
                    ]
                );
                return res.affectedRows;
            }
            return 0;
        } catch (err) {
            throw new Error("Aucune modification réalisé!!!");
        }
    }

    // The D of CRUD - Delete operation
    // TODO: Implement the delete operation to remove an item by its ID

    static async delete(email, password) {
        try {
            const [user] = await database.query(
                "select * from user WHERE email = ?",
                [email]
            );
            if (user[0]) {
                const comparison = await this.compare(password, user[0].password);
                if (comparison) {
                    const res = await database.query("delete from user WHERE email = ?", [
                        email,
                    ]);
                    // console.log("res ", res);
                    return res.affectedRows;
                }
            }
            return 0;
        } catch (err) {
            // console.log("Error ", err.message);
            throw new Error(err.message);
        }
    }
}

module.exports = UserManager;