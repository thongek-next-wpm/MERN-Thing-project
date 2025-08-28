import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimitd, setIsRateLimitd] = useState(false);
  const [notes, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcNote = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        console.log(res.data);
        setNote(res.data);
        setIsRateLimitd(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error);
        if (error.response?.status === 429) {
          setIsRateLimitd(true);
        } else {
          toast.error("failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };
    fetcNote();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimitd && <isRateLimitd />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {notes.length === 0 && !isRateLimitd && <NotesNotFound />}

        {notes.length > 0 && !isRateLimitd && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
