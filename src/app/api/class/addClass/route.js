import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";


export const POST = async (request) => {
    const { name, fee } = await request.json();
    dbConnect();

    try {
        const newClass = await Class.create({ name, fee });
        return Response.json({ class: newClass }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
