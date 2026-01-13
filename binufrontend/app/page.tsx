import { normalizeToArray } from '@/lib/normalize'

const Homepage = async () => {
  try {
    const res = await fetch(
      'https://901522ec-fa4d-4b63-aecc-a237dc24ac90.mock.pstmn.io/companies',
      { next: { revalidate: 60 } } // revalidate cache every 60s
    )

    // Handle API errors
    if (!res.ok) {
      if (res.status === 429) {
        return (
          <div className="text-red-500">
            Rate limited by the API (429). Please try again later.
          </div>
        )
      }
      return (
        <div className="text-red-500">
          Failed to load companies ({res.status})
        </div>
      )
    }

    const data = await res.json()
    const companies = normalizeToArray<any>(data).filter(
      item => typeof item === 'object' && item.company
    )

    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Companies</h1>
        {companies.length === 0 ? (
          <div>No companies found</div>
        ) : (
          <ul className="list-disc pl-6">
            {companies.map((c: any, i: number) => (
              <li key={i}>
                {c.company} {c.URL && <a href={c.URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{c.URL}</a>}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  } catch (err: any) {
    console.error('Fetch error:', err)
    return <div className="text-red-500">Error loading companies</div>
  }
}

export default Homepage
