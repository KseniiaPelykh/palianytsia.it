import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Students = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
  <Grid container spacing={4}>
  {students.map(student => <Grid key={student.filename} item md={6}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="250"
          image={student.photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {student.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {student.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )}
  </Grid>
  );
}

export default Students;
