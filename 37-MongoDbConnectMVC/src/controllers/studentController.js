import student from "../models/studentModel.js";


export const getStudents = async (req, res) => {
    try {
        const students = await student.find();

        res.status(200).send(students);
    } catch (error) {
        return res.status(500).send("Server error")
    }
}

export const getStudentsById = async (req, res) => {
    const { id } = req.params
    try {
        const findStudent=await student.findById(id);
        
        if(!findStudent){
            res.status(404).send("Student not found")
        }
        res.status(200).send(findStudent)
    } catch (error) {
        return res.status(500).send("Server error")
    }
}

export const addStudent = async (req, res) => {
    try {
        const newStudent = new student(req.body);

        await newStudent.save();
        return res.status(201).send({ message: "Student create success", data: newStudent })
    } catch (error) {
        return res.status(500).send("Server error")
    }
}

export const deleteStudent=async(req,res)=>{
    const {id}=req.params

    try {
        const deletedStudent=await student.findByIdAndDelete(id);

        if(!deletedStudent){
            res.status(400).send("Student not deleted");
        }
        res.status(200).send("Student deleted success")
    } catch (error) {
        return res.status(500).send("Server error")
    }
}

export const updateStudent=async(req,res)=>{
    const {id}=req.params

    try {
        const newStudent=req.body;
        const updatedStudent=await student.findByIdAndUpdate(id,newStudent);

        if(!updatedStudent){
            res.status(400).send("Student not updated");
        }

        res.status(200).send({message:"Student update success",newStudent});
    } catch (error) {
        return res.status(500).send("Server error")
    }
}