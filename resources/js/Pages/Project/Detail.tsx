import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
    return (
        <div className="h-screen flex items-center justify-center bg-white text-center">
            <div>
                <p className="text-lg mb-4">Sorry for the inconvenience.</p>
                <h1 className="text-3xl quicksand-semibold mb-2">Project Detail Under Construction</h1>
                <p className="text-md text-gray-500">John is still working on creating more information about this project. Please check back later.</p>
                <div className="mt-12 flex items-center justify-center">
                    <Link
                        href={route('home')}
                        className="w-1/2 flex items-center justify-center space-x-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="quicksand-regular underline hover:decoration-primary">Back to Home</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
