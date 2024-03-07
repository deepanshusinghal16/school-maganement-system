import { Student } from "@/models/Student";
import { dbConnect } from "@/config/mongodb";

export const POST = async (request, context) => {
    const { params } = context;
    const { id } = params;
    dbConnect();
    try {
        const student = await Student.findById(id);
        return Response.json({ student }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
