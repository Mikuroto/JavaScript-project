class HotelAPI {
    static async fetchReviews() {
        try {
            const res = await fetch("http://localhost:3000/reviews");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return await res.json();
        } catch (error) {
            console.error("Could not fetch reviews:", error);
            return [];
        }
    }
}

export default HotelAPI;
