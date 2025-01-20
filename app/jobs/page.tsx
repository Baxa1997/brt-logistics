"use client";
import React, {useState} from "react";

type Filters = {
  salaryType?: string;
  cpm?: string;
  flatRate?: string;
  percentage?: string;
  perHour?: string;
};

type Job = {
  title: string;
  location: string;
  type: string;
  description: string;
};

const JobFilter: React.FC<{
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}> = ({filters, setFilters}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFilters({...filters, [e.target.name]: e.target.value});
  };

  return (
    <div className="hidden md:block w-1/4 p-4 bg-gray-50 border-r border-gray-200">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Filter Jobs</h2>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Salary Type</label>
        <select
          name="salaryType"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}>
          <option value="">Choose all that apply</option>
          <option value="CPM">CPM</option>
          <option value="Flat Rate">Flat Rate</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">CPM</label>
        <input
          type="text"
          name="cpm"
          placeholder="CPM"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Flat Rate</label>
        <input
          type="text"
          name="flatRate"
          placeholder="Flat Rate"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Percentage</label>
        <input
          type="text"
          name="percentage"
          placeholder="Percentage"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Per/Hr</label>
        <input
          type="text"
          name="perHour"
          placeholder="Per/Hr"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const JobCard: React.FC<{job: Job}> = ({job}) => (
  <div className="p-6 border rounded mb-4 bg-white shadow-sm">
    <h3 className="text-lg font-bold text-gray-800 mb-2">{job.title}</h3>
    <p className="text-sm text-gray-600 mb-1">{job.location}</p>
    <p className="text-sm text-gray-600 mb-3">{job.type}</p>
    <p className="text-gray-700 mb-4">{job.description}</p>
    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
      Apply now
    </button>
  </div>
);

const JobsPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({});

  const jobs: Job[] = [
    {
      title: "OTR Driver",
      location: "All States",
      type: "Refrigerated",
      description: "OTR position, no touch, no forced dispatch. Home weekly.",
    },
    {
      title: "Regional Flatbed Company Driver",
      location: "Ohio",
      type: "Flatbed",
      description:
        "Looking for regional flatbed drivers, manual transmission. Flexible home time.",
    },
  ];

  return (
    <div className="flex bg-gray-50">
      {/* <JobFilter filters={filters} setFilters={setFilters} />
      <div className="w-full md:w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Available Jobs
        </h2>

        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div> */}
      <div className="w-full h-[calc(100vh-300px)] flex items-center justify-center">
        <h3>No Jobs Available yet...</h3>
      </div>
    </div>
  );
};

export default JobsPage;
