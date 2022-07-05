import React from "react";

const Students = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students));
  }, []);

  console.log(students)
  return (
    <div>
      {/* <Container>
          {students.map(student => <Row key={student.name}><Col><p>{student.name}</p></Col></Row>)}
      </Container> */}
    </div>
  );
}

export default Students;
