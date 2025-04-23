const AWS = require('aws-sdk');

const keys = require('../config/keys');

exports.s3Upload = async image => {
  let imageUrl = '';
  let imageKey = '';

  if (!keys.aws.accessKeyId) {
    console.warn('Image will not be uploaded');
  }

  return { imageUrl, imageKey };
};
