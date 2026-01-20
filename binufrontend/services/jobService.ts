import axios from "axios"

const BASE_URL = "https://jsonfakery.com"

// Get all jobs
export const getAllJobs = async () => {
  const { data } = await axios.get(`${BASE_URL}/jobs`)
  return data
}

// Get job by ID
export const getJobById = async (id: string | number) => {
  const { data } = await axios.get(`${BASE_URL}/jobs/${id}`)
  return data
}

// Delete job by ID
export const deleteJob = async (id: string | number) => {
  const { data } = await axios.delete(`${BASE_URL}/jobs/${id}`)
  return data
}

// Update job by ID (optional)
export const updateJob = async (id: string | number, jobData: any) => {
  const { data } = await axios.put(`${BASE_URL}/jobs/${id}`, jobData)
  return data
}
