import { Student } from "@/models/Student";
import { dbConnect } from "@/config/mongodb";

export const GET = async () => {
    dbConnect();
    try {
        const students = await Student.find();
        return Response.json({ students }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
