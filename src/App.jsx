import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import NotFound from "./pages/NotFound";

function App() {
  // Add Job
  const addJob = async (newJob) => {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    return;
  };

  // Update Job
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<Job deleteJob={deleteJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJob updateJobSubmit={updateJob} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
