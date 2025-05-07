import express from "express";
import { addStudent, deleteStudent, getStudents, getStudentsById, updateStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get('/', getStudents);
studentRouter.get('/:id',getStudentsById);
studentRouter.post('/', addStudent);
studentRouter.delete('/:id',deleteStudent);
studentRouter.put('/:id',updateStudent);

export default studentRouter;