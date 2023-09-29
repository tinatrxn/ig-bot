const ig = require('./instagram');
const cron = require('node-cron');


(async () => {

    await ig.initialize();

    await ig.login('username', 'password');

    await ig.savePics();
})();

// const botWork = async () => {

//     await ig.savePics();

// }

// cron.schedule('0 * * * *', () => {
//     botWork();
// })
