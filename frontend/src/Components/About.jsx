import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">About us</h1>
            <h3 className="text-lg font-medium">
                I'm Sachin, <b className="text-blue-500">Aspiring Web Developer</b>
            </h3>
            {/* Uncomment if you want to use the functional component */}
            {/* <User name={"Sachin Prajapati"} age={21} profession={"Software Developer"} /> */}
            <UserClass name={"Sachin Prajapati"} age={21} profession={"Software Developer"} />
        </div>
    );
};

export default About;
