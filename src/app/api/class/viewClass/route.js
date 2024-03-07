import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";

export const GET = async () => {
    dbConnect();
    try {
        const classes = await Class.find().populate('students');
        return Response.json({ classes }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
