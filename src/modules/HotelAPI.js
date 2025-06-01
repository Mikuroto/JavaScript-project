class HotelAPI {
    static async fetchReviews() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
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

module.exports = HotelAPI;
