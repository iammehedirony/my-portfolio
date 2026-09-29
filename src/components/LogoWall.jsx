const technologies = [
    "javaScript",
    "typeScript",
    "react",
    "next",
    "nodejs",
    "express",
    "nest",
    "mongodb",
    "postgresql",
    "redis",
    "bullmq",
    "graphql",
    "socket",
    "linux",
    "docker",
    "nginx",
];

const LogoWall = () => {
    return (
        <div className="relative overflow-x-hidden py-8">
            {/* Left gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>

            {/* Right gradient */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

            {/* Scrolling row */}
            <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max">
                {[...technologies, ...technologies, ...technologies].map(
                    (tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 group transition-all duration-300"
                        >
                            <img
                                src={`/svg/${tech}.svg`}
                                alt={tech}
                                className="md:h-15 h-8 w-auto object-contain transition-transform group-hover:scale-110 opacity-60"
                                width="30"
                                height="30"
                                loading="lazy"
                            />
                            <span className="md:text-2xl text-lg font-medium text-[var(--white-icon)]">
                                {tech.charAt(0).toUpperCase() + tech.slice(1)}
                            </span>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
};

export default LogoWall;
