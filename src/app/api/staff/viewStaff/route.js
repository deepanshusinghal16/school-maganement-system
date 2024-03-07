import { Staff } from "@/models/Staff";
import { dbConnect } from "@/config/mongodb";

export const GET = async () => {
    dbConnect();
    try {
        const Staffs = await Staff.find();
        return Response.json({ Staffs }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};
