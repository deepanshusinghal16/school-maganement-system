import { Staff } from "@/models/Staff";
import { dbConnect } from "@/config/mongodb";
import { Class } from "@/models/Class";

export const POST = async (request, { params }) => {
    const { id } = params;
    const requestData = await request.json();
    dbConnect();

    try {
        const updateObject = Object.keys(requestData).reduce((acc, key) => {
            return requestData[key] !== undefined ? { ...acc, [key]: requestData[key] } : acc;
        }, {});
        const updatedStaff = await Staff.findByIdAndUpdate(id, updateObject, { new: true }).exec();

        return Response.json({ staff: updatedStaff }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500, });
    }
};


export const GET = async () => {
    await dbConnect();
    return Response.json({ message: "Hello ji" }, { status: 200 })
}
