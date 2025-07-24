import { useState, useEffect } from "react";
import { useStudent } from "./context/Context";
import SaveIcon from "./assets/images";
import { Toaster } from "react-hot-toast";

const initialStudents = [
  {
    id: 1,
    name: "Jamshid",
    surname: "Akramov",
    age: 20,
    region: "Qoqon",
    img: "https://picsum.photos/id/1/800/800",
  },
  {
    id: 2,
    name: "Hamroz",
    surname: "Nuriddinov",
    age: 19,
    region: "Samarqand",
    img: "https://picsum.photos/id/2/800/800",
  },
  {
    id: 3,
    name: "Sarvar",
    surname: "A'zamov",
    age: 18,
    region: "Surxondaryo",
    img: "https://picsum.photos/id/3/800/800",
  },
  {
    id: 4,
    name: "Ibrohimjon",
    surname: "Shukurullayev",
    age: 18,
    region: "Toshkent",
    img: "https://picsum.photos/id/4/800/800",
  },
  {
    id: 5,
    name: "Ulug'bek",
    surname: "Raxmatullayev",
    age: 20,
    region: "Toshkent",
    img: "https://picsum.photos/id/5/800/800",
  },
  {
    id: 6,
    name: "Ulug'bek",
    surname: "Jo'rayev",
    age: 15,
    region: "Toshkent",
    img: "https://picsum.photos/id/6/800/800",
  },
  {
    id: 7,
    name: "Dilnoza",
    surname: "Rahmatullayeva",
    age: 17,
    region: "Qashqadaryo",
    img: "https://picsum.photos/id/7/800/800",
  },
  {
    id: 8,
    name: "Muslima",
    surname: "Yoqubova",
    age: 16,
    region: "Toshkent",
    img: "https://picsum.photos/id/8/800/800",
  },
  {
    id: 9,
    name: "Laylo",
    surname: "Ismatullayeva",
    age: 16,
    region: "Toshkent",
    img: "https://picsum.photos/id/9/800/800",
  },
  {
    id: 10,
    name: "Nigora",
    surname: "Xasanova",
    age: 19,
    region: "Toshkent",
    img: "https://picsum.photos/id/10/800/800",
  },
  {
    id: 11,
    name: "Abdulloh",
    surname: "Sultonmurodov",
    age: 26,
    region: "Toshkent",
    img: "https://picsum.photos/id/11/800/800",
  },
  {
    id: 12,
    name: "Muhammadali",
    surname: "Rustambekov",
    age: 17,
    region: "Toshkent",
    img: "https://picsum.photos/id/12/800/800",
  },
  {
    id: 13,
    name: "Raxmatulloh",
    surname: "Raxmatov",
    age: 14,
    region: "Toshkent",
    img: "https://picsum.photos/id/13/800/800",
  },
  {
    id: 14,
    name: "Abduvahob",
    surname: "Mirzaaxmedov",
    age: 19,
    region: "Toshkent",
    img: "https://picsum.photos/id/14/800/800",
  },
  {
    id: 15,
    name: "Mirzohamdam",
    surname: "To'lqinov",
    age: 19,
    region: "Toshkent",
    img: "https://picsum.photos/id/15/800/800",
  },
];

const App = () => {
  const { savedStudents, handleStudentClick } = useStudent();

  const [students, setStudents] = useState(initialStudents);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    region: "",
    img: "",
  });

  const handleSaveClick = () => {
    const savedList = students.filter((student) =>
      savedStudents.includes(student.id)
    );
    const names = savedList.map((s) => `${s.name} ${s.surname}`).join(", ");
    alert(`Saved students (${savedList.length}):\n${names}`);
  };

  const handleAddBtnClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setForm({ name: "", surname: "", age: "", region: "", img: "" });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      const reader = new FileReader();
      reader.onload = () =>
        setForm((prev) => ({ ...prev, img: reader.result }));
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      ...form,
      id: Date.now(),
      age: Number(form.age),
    };
    setStudents((prev) => [...prev, newStudent]);
    handleCloseModal();
  };

  const renderStudentCard = (student) => (
    <div
      key={student.id}
      onClick={() => handleStudentClick(student.id)}
      className="relative group w-[200px] h-[350px] hover:scale-110 transition-transform duration-700 cursor-pointer hover:text-[yellow]"
    >
      <img
        className="w-[200px] h-[200px] rounded-full hover:shadow-lg hover:shadow-yellow-200"
        src={student.img}
        alt="User"
      />
      <strong className="text-[30px] flex justify-center">
        {student.name}
      </strong>
      <div className="absolute left-1/2 -translate-x-1/2 top-[250px] hidden group-hover:block text-center">
        <p className="text-[20px] font-bold text-black/60">{student.surname}</p>
        <p className="text-[20px] text-black/50">{student.region}</p>
        <p className="text-[20px] text-black/50">Age: {student.age}</p>
      </div>
    </div>
  );

  return (
    <div className="pt-[20px]">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-between items-center mx-auto px-[80px] mb-[40px]">
        <h1 className="text-center font-extrabold text-[60px]">
          N94 Students' list
        </h1>
        <div className="flex gap-[30px] items-center">
          <button
            onClick={handleSaveClick}
            className="relative w-[50px] h-[50px] cursor-pointer hover:text-[red]"
          >
            <img src={SaveIcon} alt="Save images" width={40} height={40} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {savedStudents.length}
            </span>
          </button>
          <button
            onClick={handleAddBtnClick}
            className="py-[15px] w-[100px] font-bold text-[15px] cursor-pointer hover:bg-blue-500 duration-300 hover:scale-110 hover:text-white bg-yellow-500 rounded-[20px]"
          >
            Create
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-[60px] mx-auto justify-center px-[30px] mb-10">
        {students.map(renderStudentCard)}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[700px] p-6 rounded-[20px] relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-[25px] text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-[24px] font-bold mb-6 text-center">
              Add New Student
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border p-3 rounded-md"
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={form.surname}
                onChange={handleChange}
                required
                className="border p-3 rounded-md"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
                required
                className="border p-3 rounded-md"
              />
              <input
                type="text"
                name="region"
                placeholder="Region"
                value={form.region}
                onChange={handleChange}
                required
                className="border p-3 rounded-md"
              />
              <input
                type="file"
                name="img"
                onChange={handleChange}
                accept="image/*"
                required
                className="border p-3 rounded-md"
              />
              <button className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition">
                Add Student
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
