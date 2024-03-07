import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";

export const POST = async (request, { params }) => {
    const { id } = params;
    dbConnect();
    try {
        const classData = await Class.findById(id).populate('students');
        return Response.json({ class: classData }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
