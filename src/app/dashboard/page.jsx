import Header from "./Header";
import SideBar from "./SideBar";

export const metadata = {
    title: "Dashboard",
    description: "KCPS Dashboard",
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <Header />
            <div className="flex gap-5  w-full">
                <SideBar />
                <div>Page Name</div>

            </div>
        </main>
    );
}
