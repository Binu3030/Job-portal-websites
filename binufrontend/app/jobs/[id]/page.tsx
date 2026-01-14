export default async function JobDetailPage({ params }) {
  const { id } = await params  // <— await params

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store',
  })
  const item = await res.json()

  const job = {
    id: item.id,
    title: [
      'frontend developer','backend developer','fullstack developer',
      'data scientist','devops engineer','AI Developer','QA','Security Engineer',
    ][item.id % 8],
    company: `Company ${item.id}`,
    location: ['Kathmandu','Pokhara','Lalitpur','Butwal','Chitwan'][item.id % 5],
    type: ['Full Time','Part Time','Remote'][item.id % 3],
    salary: `$${Math.floor(item.price * 100)} - $${Math.floor(item.price * 200)}`
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>

      <section className="job-details">
        <header>
          <h1>{job.title}</h1>
          <p className="meta"><strong>Company:</strong> {job.company} • <strong>Location:</strong> {job.location} • <strong>Type:</strong> {job.type}</p>
          <p className="salary"><strong>Salary:</strong> {job.salary} / year (pro‑rated)</p>
        </header>

        <h2>Overview</h2>
        <p>Join {job.company} as a {job.type} {job.title} to build and maintain scalable server-side systems that power our product.</p>

        <h3>Responsibilities</h3>
        <ul>
          <li>Build and maintain APIs and backend services</li>
          <li>Design data models and optimize performance</li>
          <li>Write tests and maintain CI/CD</li>
        </ul>

        <h3>Qualifications</h3>
        <ul>
          <li>3+ years backend experience (Node.js, Python, Go)</li>
          <li>Experience with SQL/NoSQL, Docker, Git</li>
          <li>Strong problem-solving and communication skills</li>
        </ul>

      
          <button>Apply for this job</button>
       
      </section>
    </div>
  )
}
