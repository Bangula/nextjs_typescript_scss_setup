import Navbar from "../../components/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>This is Admin page</h1>
      </div>
      <style jsx>
        {`
          h1 {
            text-align: center;
            color: lightblue;
          }
        `}
      </style>
    </div>
  );
};

export default Admin;
