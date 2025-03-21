import PageLoader from "@/Components/layout/PageLoader";
import SectionList from "@/Components/SectionList";
import { useEffect, useState } from "react";

interface Props {
    repositoryVersion?: string;
}

export default function Welcome({ repositoryVersion }: Props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return loading ? <PageLoader /> : <SectionList repositoryVersion={repositoryVersion} />;
}
