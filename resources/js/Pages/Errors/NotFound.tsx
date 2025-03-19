import { Link } from "@inertiajs/react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen flex items-center justify-center bg-white text-center">
            <div>
                <p className="text-lg mb-4">Sorry, the page you're looking for doesn't exist.</p>
                <h1 className="text-3xl quicksand-semibold mb-2">404 - Page Not Found</h1>
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
