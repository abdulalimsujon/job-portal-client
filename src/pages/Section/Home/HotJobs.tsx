import React, { useEffect, useState } from "react";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-8">Loading hot jobs...</p>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🔥 Hot Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-600">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>{job.type}</strong> • {job.location}
              </p>
              <p className="text-sm font-medium text-green-700 mb-2">
                {job.salary}
              </p>
              <p className="text-gray-700 mb-3">{job.description}</p>

              {job.requirements && job.requirements.length > 0 && (
                <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              )}

              <p className="text-xs text-gray-400">
                Posted on: {new Date(job.postedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotJobs;
