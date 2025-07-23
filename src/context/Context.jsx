import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [savedStudents, setSavedStudents] = useState([]);

  const handleStudentClick = (id) => {
    toast.success("Successfully saved!");

    setSavedStudents((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <StudentContext.Provider value={{ savedStudents, handleStudentClick }}>
      {children}
    </StudentContext.Provider>
  );
};
