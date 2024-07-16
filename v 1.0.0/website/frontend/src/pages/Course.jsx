import { Link, useLocation, useParams } from "react-router-dom";
import { Accordion, Course as CourseCard } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../styles/pages/course.css";

const Course = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const accordionItems = [
    {
      label: <h3>فيديوهات</h3>,
      text: (
        <div
          className="grid grid-cols-3 gap-4"
          style={{
            direction: "rtl",
          }}
        >
          <Link to={`/courses/${id}/video/1`} className="course-video" />
          <Link to={`/courses/${id}/video/2`} className="course-video" />
          <Link to={`/courses/${id}/video/3`} className="course-video" />
          <Link to={`/courses/${id}/video/4`} className="course-video" />
          <Link to={`/courses/${id}/video/5`} className="course-video" />
          <Link to={`/courses/${id}/video/6`} className="course-video" />
          <Link to={`/courses/${id}/video/7`} className="course-video" />
          <Link to={`/courses/${id}/video/8`} className="course-video" />
        </div>
      ),
    },
    {
      label: <h3>شيتات</h3>,
      text: (
        <div className="grid grid-cols-1 gap-y-4">
          <a href="../assets/atom.svg" download>
            <div className="course-sheet">
              <p>Session 1</p>
              <FontAwesomeIcon icon={faDownload} size="2x" />
            </div>
          </a>
          <a href="../assets/atom.svg" download>
            <div className="course-sheet">
              <p>Session 2</p>
              <FontAwesomeIcon icon={faDownload} size="2x" />
            </div>
          </a>
          <a href="../assets/atom.svg" download>
            <div className="course-sheet">
              <p>Session 3</p>
              <FontAwesomeIcon icon={faDownload} size="2x" />
            </div>
          </a>
          <a href="../assets/atom.svg" download>
            <div className="course-sheet">
              <p>Session 4</p>
              <FontAwesomeIcon icon={faDownload} size="2x" />
            </div>
          </a>
        </div>
      ),
    },
    {
      label: <h3>امتحانات</h3>,
      text: (
        <div
          className="grid grid-cols-3 gap-4"
          style={{
            direction: "rtl",
          }}
        >
          <Link to={`/courses/${id}/exam/1`} className="course-exam" />
          <Link to={`/courses/${id}/exam/2`} className="course-exam" />
          <Link to={`/courses/${id}/exam/3`} className="course-exam" />
          <Link to={`/courses/${id}/exam/4`} className="course-exam" />
          <Link to={`/courses/${id}/exam/5`} className="course-exam" />
          <Link to={`/courses/${id}/exam/6`} className="course-exam" />
          <Link to={`/courses/${id}/exam/7`} className="course-exam" />
          <Link to={`/courses/${id}/exam/8`} className="course-exam" />
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <section className="grid grid-cols-4 lg:grid-cols-6 items-start gap-y-24 gap-x-10">
        <div className="course">
          <CourseCard element={state} subscribe={true} key={id} />
        </div>
        <div className="course-data">
          <Accordion>
            {accordionItems.map(({ label, text }, index) => {
              return <Accordion.Item key={index} label={label} text={text} />;
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Course;
