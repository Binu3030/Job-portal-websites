import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"

export default function SeekerHome() {
  return (
    <div className="min-h-screen">
     

      <div className="flex">
             
        <main className="flex-1 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Find Your Dream Job Today</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Connect with top employers and discover opportunities that match your skills and career goals.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
