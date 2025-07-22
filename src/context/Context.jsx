// StudentContext.jsx
import { createContext, useState, useContext } from "react";

const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [savedStudents, setSavedStudents] = useState([]);

  const handleStudentClick = (id) => {
    setSavedStudents((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <StudentContext.Provider value={{ savedStudents, handleStudentClick }}>
      {children}
    </StudentContext.Provider>
  );
};
