import Navbar from "../components/Navbar";
import "../scss/styles.scss";

const isAdmin = false;

const Index = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello NextJs</h1>
      <p className="text-red-600 ml-48">some dummy data</p>
    </div>
  );
};

export default Index;
