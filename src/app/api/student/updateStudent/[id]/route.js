import { Student } from "@/models/Student";
import { dbConnect } from "@/config/mongodb";
import { Class } from "@/models/Class";

export const POST = async (request, { params }) => {
    const { id } = params;
    const requestData = await request.json();
    dbConnect();

    try {
        const student = await Student.findById(id).exec();
        if (requestData.class && requestData.class !== student.class) {

            const prevClass = await Class.findById(student.class);
            if (prevClass) {
                prevClass.students.pull(id);
                await prevClass.save();
            }

            const newClass = await Class.findById(requestData.class);
            if (newClass) {
                newClass.students.push(id);
                await newClass.save();
            }
        }

        const updateObject = Object.keys(requestData).reduce((acc, key) => {
            return requestData[key] !== undefined ? { ...acc, [key]: requestData[key] } : acc;
        }, {});
        const updatedStudent = await Student.findByIdAndUpdate(id, updateObject, { new: true }).exec();

        return Response.json({ student: updatedStudent }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};


export const GET = async () => {
    await dbConnect();
    return Response.json({ message: "Hello ji" }, { status: 200 })
}
