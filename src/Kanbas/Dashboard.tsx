import { Link } from "react-router-dom";
export default function Dashboard() {

//map to add courses dynamically 
  const courses = [
    { id: "01", title: "Intro to Concerts", term: "Fall", year: 2023, section: "001", description: "Learn about concerts", image: "/ClassImages/2024 9_20 ZEDD-61.jpg" },
    { id: "02", title: "Intro to Portraits", term: "Fall", year: 2023, section: "002", description: "How to take a portrait", image: "/ClassImages/michael thumbnail.png" },
    { id: "03", title: "Exploring Nature", term: "Spring", year: 2024, section: "001", description: "Experiencing the world outdoors", image: "/ClassImages/dji_fly_20230611_130138_604_1686513717213_photo_optimized.jpg" },
    { id: "04", title: "Cities and the World", term: "Summer", year: 2024, section: "001", description: "The history of the modern city", image: "/ClassImages/DJI_0425.jpg" },
    { id: "05", title: "Baseball and it's History", term: "Fall", year: 2024, section: "001", description: "The history and legacy of Baseball", image: "/ClassImages/DJI_0869.jpg" },
    { id: "06", title: "Bridges and how they work ", term: "Spring", year: 2025, section: "001", description: "Teaches students how bridges are made", image: "/ClassImages/DJI_0220.jpg" },
    { id: "07", title: "Drone 101", term: "Summer", year: 2025, section: "001", description: "Learn how to fly a drone", image: "/ClassImages/DJI_0353-2.jpg" },
  ];

  const NumberOfCourses = courses.length; //gets number of courses in the map
//${course.id} add that to the link to make it dynamic for each course

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course.id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/Home`}>
                  <img src={course.image} width="100%" height={160} alt={course.title} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.title}
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      {course.term} {course.year} - Section {course.section}
                    </p>
                    <p className="wd-dashboard-course-title card-text">
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}