const axios = require("axios");

const Service = {
    fetchService: async (url, res) => {
        try {
            const response = await axios.get(url, {
                timeout: 7000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36',
                    'Referer': url
                }
            });
            return response;
        } catch (error) {
            console.error("❌ Error fetching URL:", url);
            res.status(500).json({
                status: false,
                code: error.code || 500,
                message: error.message || "Internal Server Error"
            });
            throw error;
        }
    }
};

module.exports = Service;
