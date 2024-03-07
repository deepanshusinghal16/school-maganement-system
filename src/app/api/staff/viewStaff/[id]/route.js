import { Staff } from "@/models/Staff";
import { dbConnect } from "@/config/mongodb";

export const POST = async (request, { params }) => {
    const { id } = params;
    dbConnect();
    try {
        const staff = await Staff.findById(id);
        console.log(id + "11111 ")
        return Response.json({ staff }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
