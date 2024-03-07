import { Staff } from "@/models/Staff";
import { dbConnect } from "@/config/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const requestData = await request.json();
    dbConnect();
    try {
        const staffData = Object.keys(requestData).reduce((acc, key) => {
            if (requestData[key] !== undefined) {
                acc[key] = requestData[key];
            }
            return acc;
        }, {});
        const newStaff = await Staff.create(staffData);
        return Response.json({ staff: newStaff }, { status: 200 });
    }
    catch (error) {
        return Response.json({ error }, { status: 500 });
    }
};
