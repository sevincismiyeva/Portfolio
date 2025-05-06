import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;
app.use(express.json());

const { students } = JSON.parse(fs.readFileSync("db.json"));

app.get("/students", (req, res) => {
    try {
        res.status(200).send({ message: "success", data: students })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    try {
        const student = students.find((student) => student.id == id);

        if (!student) {
            res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "success", data: student });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})

app.post("/students", (req, res) => {
    try {
        const newStudent = req.body;

        if (!newStudent.name && newStudent.age) {
            return res.status(404).send({ message: "Bad request" });
        }

        students.push({ id: uuidv4(), ...newStudent });

        fs.writeFileSync("db.json", JSON.stringify({ students }));

        res.status(201).send({ message: "student created", data: newStudent })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    try {
        const studentIndex = students.findIndex((student) => student.id == id)

        if (studentIndex == -1) {
            res.status(404).send({ message: "User not found" });
        }

        students.splice(studentIndex, 1);
        fs.writeFileSync("db.json", JSON.stringify({ students }))

        res.status(200).send({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
})

app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    try {
        const updateStudent = req.body

        const studentIndex = students.findIndex((student) => student.id == id)

        if (studentIndex == -1) {
            res.status(404).send({ message: "User not found" });
        }

        students[studentIndex] = { id, ...updateStudent };

        fs.writeFileSync("db.json", JSON.stringify({ students }));

        res.status(200).send({ message: "Student updatet successfully", data: updateStudent });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }

})

app.patch("/students/:id", (req, res) => {
    const { id } = req.params;
    try {
        const updateData = req.body;
        const studentIndex = students.findIndex((student) => student.id == id);

        if (studentIndex === -1) {
            return res.status(404).send({ message: "User not found" });
        }

        const updatedStudent = {
            ...students[studentIndex],
            ...updateData,
        };

        students[studentIndex] = updatedStudent;

        fs.writeFileSync("db.json", JSON.stringify({ students }));

        res.status(200).send({ message: "Student updated successfully", data: updatedStudent });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});


app.listen(port, () => {
    console.log(`Server is running from ${port}`);
});