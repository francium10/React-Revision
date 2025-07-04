/** @format */

// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 className="bg-red-600">Welcome to my About page</h1>
      <div className="flex">
        {/* <User name={" Name: Francis L"} /> */}
        <UserClass name={" Name: Nosiku L"} />
      </div>
    </div>
  );
};
export default About;
