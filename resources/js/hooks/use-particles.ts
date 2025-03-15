import { useEffect, useState, useMemo } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function useParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                },
                modes: {
                    push: { quantity: 4 },
                },
            },
            particles: {
                color: { value: ["#e30022bf", "#e97239", "#ff778b"] },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: { default: "out" },
                    speed: 1,
                },
                number: { density: { enable: true }, value: 100 },
                opacity: { value: { min: 0.4, max: 0.9 } },
                shape: { type: "circle" },
                size: { value: { min: 3, max: 5 } },
            },
            detectRetina: true,
        }),
        []
    );

    return { init, options };
}
