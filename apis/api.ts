export const fetchRestaurants = async () => {
  try {
    const response = await fetch(
      "https://67ffe074b72e9cfaf7262d0b.mockapi.io/api/v1/restaurants"
    );
    const result = await response.json();
    if (!result) {
      throw new Error("Invalid API response");
    }
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
