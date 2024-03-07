import { Student } from "@/models/Student";
import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";

export const POST = async (request) => {
    const requestData = await request.json();
    dbConnect();
    try {
        const studentData = Object.keys(requestData).reduce((acc, key) => {
            if (requestData[key] !== undefined) {
                acc[key] = requestData[key];
            }
            return acc;
        }, {});

        
        const newStudent = await Student.create(studentData);
        const classDocument = await Class.findById(newStudent.class);
        classDocument.students.push(newStudent._id);
        await classDocument.save();

        return Response.json({ student: newStudent }, { status: 200 });
    }
    catch (error) {
        console.error(error);
        return Response.json({ error }, { status: 500 });
    }
};

// Middleware to automatically add/remove the student from the corresponding class

