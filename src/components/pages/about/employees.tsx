import EemployeeCard from "../../ui/employeeCard";
import ScrollContainer from "../../ui/SmoothScrollContainer";

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
      name: "Mark Smith",
      postion: "Founder & Chairman",
      img: "/xpert 1.png",
    },
    { name: "Bob Smith", postion: "Managing Director", img: "/xpert 2.png" },
    { name: "Tylor Rebecca", postion: "Product Designer", img: "/xpert 3.png" },
  ];
  return (
    <ScrollContainer
    >
      {employees.map((employee, index) => (
        <EemployeeCard
          key={index}
          img={employee.img}
          name={employee.name}
          position={employee.postion}
        />
      ))}
    </ScrollContainer>
  );
}
