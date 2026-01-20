// "use client"

// import { useEffect, useState } from "react";
// import { Navbar } from "@/components/navbar";
// import { Hero } from "@/components/hero";
// import { Footer } from "@/components/footer";
// import { getAllJobs } from "@/services/jobService";

// export default function Home() {
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);

//   const JOBS_TO_SHOW = 6;

//   useEffect(() => {
//     const loadJobs = async () => {
//       try {
//         const data = await getAllJobs();
//         setJobs(data);
//       } catch (error) {
//         console.error("API error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadJobs();
//   }, []);

//   const visibleJobs = showAll ? jobs : jobs.slice(0, JOBS_TO_SHOW);

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       <Navbar />

//       <main className="flex-1">
//         <Hero />

//         {/* Jobs Section */}
//         <section className="px-6 py-10 max-w-7xl mx-auto">
//           <h2 className="text-2xl font-bold mb-6">Latest Jobs</h2>

//           {loading && <p>Loading jobs...</p>}

//           {!loading && jobs.length === 0 && (
//             <p className="text-gray-500">No jobs found.</p>
//           )}

//           {!loading && jobs.length > 0 && (
//             <>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {visibleJobs.map((job) => (
//                   <div
//                     key={job.id}
//                     className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//                   >
//                     <h3 className="font-semibold text-lg">{job.title}</h3>
//                     <p className="text-gray-600">{job.company}</p>
//                     <p className="text-sm text-gray-400">{job.location}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Show More / Show Less */}
//               {jobs.length > JOBS_TO_SHOW && (
//                 <div className="text-center mt-8">
//                   <button
//                     onClick={() => setShowAll(!showAll)}
//                     className="px-6 py-2 border rounded-md hover:bg-gray-100 transition"
//                   >
//                     {showAll ? "Show Less" : "Show More"}
//                   </button>
//                 </div>
//               )}
//             </>
//           )}
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }




'use client'

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { getAllJobs } from "@/services/jobService";
import Jobcard from "@/components/jobcard";

export default function Home() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const JOBS_TO_SHOW = 6;

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const visibleJobs = showAll ? jobs : jobs.slice(0, JOBS_TO_SHOW);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Jobs Section */}
        <section className="px-6 py-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Latest Jobs</h2>

          {loading && <p>Loading jobs...</p>}

          {!loading && jobs.length === 0 && (
            <p className="text-gray-500">No jobs found.</p>
          )}

          {!loading && jobs.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleJobs.map((job) => (
                  <Jobcard key={job.id} job={job} />
                ))}
              </div>

              {/* Show More / Show Less */}
              {jobs.length > JOBS_TO_SHOW && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 border rounded-md hover:bg-gray-100 transition"
                  >
                    {showAll ? "Show Less" : "Show More"}
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
