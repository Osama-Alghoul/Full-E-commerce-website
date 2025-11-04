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
      name: "Tom Cruise",
      postion: "Founder & Chairman",
      img: "/Tom.png",
    },
    { name: "Emma Watson", postion: "Managing Director", img: "/Emma.png" },
    { name: "Will Smith", postion: "Product Designer", img: "/Will.png" },
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
