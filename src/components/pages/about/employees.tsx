import EemployeeCard from "../../ui/employeeCard";

export default function Employees() {
  const employees = [
    {
      name: "Tom Cruise",
      postion: "Founder & Chairman",
      img: "/Tom.png",
    },
    { name: "Emma Watson", postion: "Managing Director", img: "/Emma.png" },
    { name: "Will Smith", postion: "Product Designer", img: "/Will.png" },
    {
      name: "Tom Cruise",
      postion: "Founder & Chairman",
      img: "/Tom.png",
    },
    { name: "Emma Watson", postion: "Managing Director", img: "/Emma.png" },
    { name: "Will Smith", postion: "Product Designer", img: "/Will.png" },
  ];
  return (
    <div
      className="flex gap-8 overflow-x-scroll justify-center snap-x snap-mandatory"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {employees.map((employee, index) => (
        <EemployeeCard
          key={index}
          img={employee.img}
          name={employee.name}
          position={employee.postion}
        />
      ))}
    </div>
  );
}
