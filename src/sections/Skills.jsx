import BlurText from "../components/BlurText";
import LogoWall from "../components/LogoWall";

const Skills = () => {
    return (
        <div id="skills" className="max-w-screen-xl mx-auto px-4 lg:px-8">
            <div className="">
                <BlurText
                    text="Tech Stack"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-5xl text-3xl font-semibold mb-0"
                />
            </div>

            <LogoWall />
        </div>
    );
};

export default Skills;
