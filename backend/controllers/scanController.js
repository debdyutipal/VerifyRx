const { getDashboardStats } = require('../services/drugService');

exports.getDashboardData = (req, res) => {
    try {
        const stats = getDashboardStats();
        return res.status(200).json({
            success: true,
            data: stats
        });
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch dashboard data'
        });
    }
};
