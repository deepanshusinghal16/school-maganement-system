import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";


export const POST = async (request, { params }) => {
    const { id } = params;
    const { fee } = await request.json();
    dbConnect();

    try {
        const updatedClass = await Class.findByIdAndUpdate(id, { fee }, { new: true }).exec();

        return Response.json({ class: updatedClass }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
