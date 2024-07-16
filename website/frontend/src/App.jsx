import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Books,
  Contact,
  Course,
  Courses,
  Exam,
  Exercises,
  Home,
  NotFound,
  Results,
  SignIn,
  SignUp,
  User,
  Video,
} from "./pages";
import { Navbar, Footer, SocialLinks, Loading, ScrollToTop } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Render the component after 5s
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return ( 
    <>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/courses/:id/video/:videoId" element={<Video />} />
        <Route path="/courses/:id/exam/:examId" element={<Exam />} />
        <Route path="/courses/:id/exam/:examId/results" element={<Results />} />

        {/* Exercises */}
        <Route path="/exercises" element={<Exercises />} />

        {/* Books */}
        <Route path="/books" element={<Books />} />

        {/* Personal */}
        <Route path="/user/:id" element={<User />} />

        {/* Forms */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />

        {/* Error Handling */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Social Links */}
      <SocialLinks />

      {/* Scroll to top */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
