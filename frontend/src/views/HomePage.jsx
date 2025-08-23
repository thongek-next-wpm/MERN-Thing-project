import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import RateLimitdUi from "../components/RateLimitdUi";
import axios from "axios";

const HomePage = () => {
  const [isRateLimitd, setIsRateLimitd] = useState(true);
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcNote = async () => {
      try {
        const res = await axios.post("http://localhost:5001/api/notes");
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching notes");
      }
    };
    fetcNote();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar /> HomePage
      {isRateLimitd && <RateLimitdUi />}
    </div>
  );
};

export default HomePage;
