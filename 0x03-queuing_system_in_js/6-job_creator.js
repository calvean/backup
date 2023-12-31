const kue = require('kue');

const queue = kue.createQueue();

const jobData = {
  phoneNumber: '4153518780',
  message: 'This is the code to verify your account',
};

const job = queue.create('push_notification_code', jobData)
  .on('enqueue', () => {
    console.log(`Notification job created: ${job.id}`);
  })
  .on('complete', () => {
    console.log('Notification job completed');
    process.exit(0);
  })
  .on('failed', () => {
    console.log('Notification job failed');
    process.exit(1);
  })
  .save();

