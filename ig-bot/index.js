const ig = require('./instagram');
const cron = require('node-cron');


(async () => {

    await ig.initialize();

    // Replace with your account details
    await ig.login('username', 'password');

    await ig.savePics();
})();


// Uncomment the below lines to allow cron to schedule jobs/repeat 

// const botWork = async () => {

//     await ig.savePics();

// }

// cron.schedule('0 * * * *', () => {
//     botWork();
// })
