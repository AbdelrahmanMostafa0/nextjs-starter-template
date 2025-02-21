import axiosInstance from "@/lib/axiosInstance";

// Dummy function to simulate an API call
export const fetchDummyData = async () => {
  try {
    const response = await axiosInstance.get("/dummy-endpoint");
    return response.data;
  } catch (error) {
    console.error("Error fetching dummy data:", error);
    throw error;
  }
};
