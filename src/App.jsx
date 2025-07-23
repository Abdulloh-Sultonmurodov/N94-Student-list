import { useStudent } from "./context/Context";
import SaveIcon from "./assets/images";
import { Toaster } from "react-hot-toast";

const students = [
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

  const handleSaveClick = () => {
    const savedList = students.filter((student) =>
      savedStudents.includes(student.id)
    );
    const names = savedList.map((s) => `${s.name} ${s.surname}`).join(", ");
    alert(`Saved students (${savedList.length}): 
    ${names}`);
  };

  return (
    <div className="pt-[20px]">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex justify-between items-center mx-auto px-[80px] mb-[40px]">
        <h1 className="text-center font-extrabold text-[60px]">
          N94 Students' list
        </h1>
        <button
          onClick={handleSaveClick}
          className="relative w-[50px] h-[50px] cursor-pointer hover:text-[red]"
        >
          <img src={SaveIcon} alt="Save images" width={40} height={40} />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {savedStudents.length}
          </span>
        </button>
      </div>
      <div className="flex flex-wrap gap-[60px] mx-auto justify-center px-[30px]">
        {students.map((item, index) => (
          <div
            key={index}
            onClick={() => handleStudentClick(item.id)}
            className="relative group w-[200px] h-[350px] hover:scale-120 transition-transform duration-700 hover:text-[yellow]"
          >
            <img
              className="rounded-[15px] hover:shadow-lg hover:shadow-yellow-200"
              src={item.img}
              alt="Users images"
              width={200}
              height={200}
            />
            <strong className="text-[30px] flex justify-center">
              {item.name}
            </strong>
            <div className="absolute left-1/2 h-full -translate-x-1/2 mt-2 hidden group-hover:block">
              <p className="text-[20px] text-center font-bold text-black/60 ">
                {item.surname}
              </p>
              <p className="text-[20px] text-center text-black/50">
                {item.region}
              </p>
              <p className="text-[20px] text-center text-black/50">
                Age: {item.age}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
