import { Cards } from "../components";
import { Input } from "../components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/pages/courses.css";

const Courses = () => {

  return (
    <div className="container">
      <section className="courses-grid">
        <div className="search-bar">
          <Input.Group>
            <Input id={"search"} label={"ابحث عن الكورس"} type={"text"} />
          </Input.Group>
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </div>
        </div>

        {/* Courses Cards */}
        <Cards
          type="courses"
          elements={[
            {
              id: "1",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["Free", "3rd Sec"],
            },
            {
              id: "2",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["100.00", "3rd Sec"],
            },
            {
              id: "3",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["100.00", "3rd Sec"],
            },
            {
              id: "4",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["Free", "3rd Sec"],
            },
            {
              id: "5",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["Free", "3rd Sec"],
            },
            {
              id: "6",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["100.00", "3rd Sec"],
            },
            {
              id: "7",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["Free", "3rd Sec"],
            },
            {
              id: "8",
              img: "/logo.png",
              title: "Course Title",
              desc: "Lorem ipsum dolor sit amet consectetur. Tempor volutpat etiam purus ultricies sit bibendum.",
              tags: ["100.00", "3rd Sec"],
            },
          ]}
        />

        {/* Filter List */}
        <div className="filters">
          <ul className="filter-list">
            <h4>الصف الدراسي</h4>
            <li>
              <input type="checkbox" />
              <span>الصف الأول الثانوي</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>الصف الثاني الثانوي</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>الصف الثالث الثانوي</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Courses;
