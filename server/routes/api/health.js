const express = require('express');
const router = express.Router();
const setupDB = require('../../utils/db');
const Brand = require('../../models/brand');

function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('DB query timeout')), ms)
  );
  return Promise.race([promise, timeout]);
}

router.get('/', async (req, res) => {
  try {
    // Set timeout for DB check (e.g., 2 seconds)
    await withTimeout(Brand.findOne({}), 2000);

    res.status(200).json({
      success: true,
      message: `Ok`
    });
  } catch (error) {
    console.log('🚀 ~ router.get ~ error:', error);
    setupDB();
    return res.status(500).json({
      error: 'MongoDb not connected or timed out.'
    });
  }
});

module.exports = router;
