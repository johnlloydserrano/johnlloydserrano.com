import { motion } from "framer-motion";

export default function PageLoader() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onAnimationComplete={() => console.log("JLS-40 : Page Loaded")}
        >
            <div className="h-12 w-12 rounded-full flex items-center justify-center">
                <img src="/images/serrano.png" alt="" />
            </div>
        </motion.div>
    );
}
