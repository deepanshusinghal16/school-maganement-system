import { Student } from "@/models/Student";
import { Class } from "@/models/Class";
import { dbConnect } from "@/config/mongodb";


const updateAmountPendingForAllStudents = async () => {
    dbConnect();

    try {
        const students = await Student.find().populate('class').exec();


        for (const student of students) {
            student.amountPending += student.class.fee;
            await student.save();
        }
        console.log('Amount pending updated for all students.');
    } catch (error) {
        console.error('Error updating amount pending:', error);
    }
};

const scheduleTask = () => {
    cron.schedule('0 0 1 * *', () => {
        updateAmountPendingForAllStudents();
    });
};

scheduleTask();
