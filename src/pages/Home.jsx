import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

function Home() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome />
      <ViewAllJobs />
    </>
  );
}

export default Home;
