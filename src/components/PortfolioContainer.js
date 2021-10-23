import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./pages/Footer";
import ContactForm from "./pages/ContactForm";
import projectsArray from "./pages/GetProjects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Hero");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Hero") {
      return <Hero />;
    }
    if (currentPage === "Projects") {
      return (
        <div>
          <Projects projectsArray={projectsArray} />
          <Footer />
        </div>
      );
    }
    if (currentPage === "About") {
      return (
        <div>
          <About />
          <Footer />
        </div>
      );
    }
    return (
      <div>
        <ContactForm />
        <Footer />
      </div>
    );
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
