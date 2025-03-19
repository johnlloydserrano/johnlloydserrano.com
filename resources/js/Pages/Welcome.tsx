import PageLoader from "@/Components/layout/PageLoader";
import SectionList from "@/Components/SectionList";
import { useEffect, useState } from "react";

export default function Welcome() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <PageLoader /> : <SectionList />;
}
