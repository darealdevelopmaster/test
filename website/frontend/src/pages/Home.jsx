import {
  Box,
  Button,
  Category,
  IconBox,
  Stats,
  Testimonials,
} from "../components/";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

// css styles
import "../styles/pages/home.css";

// Images & Assets
import Lamp from "../assets/lamp.gif";
import OwnerImg from "../assets/user.png";
import AtomImg from "../assets/atom.png";
import AboutMeImg from "../assets/about-me.png";
import IntroVideo from "../assets/video.mp4";
import faReport from "../assets/report.png";
import Sec1st from "../assets/1st-sec.png";
import Sec2nd from "../assets/2nd-sec.png";
import Sec3rd from "../assets/3rd-sec.png";
import Student from "../assets/student.png";

const Home = () => {
  return (
    <>
      {/* Header */}
      <header
        id="hero-section"
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundImage:
            "linear-gradient(rgb(64, 65, 116) 30%, rgb(238, 75, 106))",
        }}
      >
        {/* Lamp Figure */}
        <div className={`lamp-figure`}>
          <img src={Lamp} alt="Lamp" />
        </div>

        {/* Atom Figure */}
        <div className={`atom-figure`}>
          <img src={AtomImg} alt="Atom" />
        </div>

        <div className="container">
          <div className="content">
            {/* Owner Img */}
            <div className="profile-img">
              <img src={OwnerImg} />
            </div>

            {/* Title */}
            <div className="title">
              <h1 className="font-arabic">
                أهلا بكم طلابي في منصة
                <span>Key of physics</span>
              </h1>
              <div className="text-center mt-6">
                <Button label={"ابدأ الان"} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About me */}
      <div className="container">
        <section
          id="about-me"
          className="flex flex-col lg:grid grid-cols-2 justify-center lg:justify-between items-center"
        >
          <div className="section-title">
            <h1>من أنا؟؟</h1>
            <p className="small">
              Lorem ipsum dolor sit amet consectetur. Adipiscing leo phasellus
              enim porta feugiat donec. Auctor nec pellentesque enim aliquet.
              Dignissim at faucibus in habitasse adipiscing id ultricies sit et.
              Eu dis.
            </p>
          </div>
          <div
            className="mx-auto"
            style={{
              boxShadow: "0 0 10px 0 #000",
              borderRadius: "10px",
            }}
          >
            <img src={AboutMeImg} alt="About me" />
          </div>
        </section>
      </div>

      {/* Statistics */}
      <section id="statistics">
        <Stats
          numbers={[
            {
              name: "طلبة",
              value: 450,
            },
            {
              name: "أماكن التواجد",
              value: 10,
            },
            {
              name: "سنين الخبرة",
              value: 8,
            },
          ]}
        />
      </section>

      {/* Intro Video */}
      <div className="container">
        <section
          id="intro"
          className="flex flex-col lg:flex-row-reverse gap-20"
        >
          <Box.Video className={"flex-[0.6]"} src={IntroVideo} />
          <ul
            role="list"
            className="flex-col flex gap-[42px] flex-[0.4] sm:justify-center w-fit"
            style={{
              margin: "0 auto",
            }}
          >
            <li className="flex items-center flex-row-reverse gap-4">
              <IconBox icon={faClock} size="small" />
              <h3 className="text-right">توفير للوقت والمجهود</h3>
            </li>
            <li className="flex items-center flex-row-reverse gap-4">
              <IconBox icon={faCheck} size="small" />
              <h3 className="text-right">متاعبة دورية ومستمرة</h3>
            </li>
            <li className="flex items-center flex-row-reverse gap-4">
              <div className="icon-box icon-sm">
                <img src={faReport} />
              </div>
              <h3 className="text-right">امتحانات وتدريبات دورية</h3>
            </li>
          </ul>
        </section>
      </div>

      {/* Categories */}
      <section id="categories">
        <div className="container">
          <div className="section-title">
            <h1>الصفوف الدراسية المتاحة</h1>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8" style={{
            direction: "rtl"
          }}>
            <Category element={{ title: "الصف الأول الثانوي", img: Sec1st }} />
            <Category element={{ title: "الصف الثاني الثانوي", img: Sec2nd }} />
            <Category element={{ title: "الصف الثالث الثانوي", img: Sec3rd }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="container">
          <Testimonials
            quotes={[
              {
                username: "John Doe",
                img: Student,
                quote:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, deserunt?",
              },
              {
                username: "Mark Evan",
                img: Student,
                quote:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit vel tempora sed, reprehenderit ducimus placeat nihil eos voluptatem modi.",
              },
              {
                username: "Anne Peterson",
                img: Student,
                quote:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio commodi nam facere doloribus animi libero dignissimos ex! Asperiores officia accusamus nesciunt deserunt aspernatur eum voluptatibus?",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
