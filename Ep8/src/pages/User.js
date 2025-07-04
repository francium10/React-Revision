/** @format */

const User = ({ name }) => {
  return (
    <div className="p-3">
      <h1> User Functional component </h1>
      <h1>{name}</h1>
      <h2>Position: Director</h2>
      <h2>Location: Nyc</h2>
      <h2>Contact: francis@gmail.com</h2>
    </div>
  );
};
export default User;
