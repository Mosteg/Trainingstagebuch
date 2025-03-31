const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env');

function generateNewSecretKey() {
    return crypto.randomBytes(64).toString('hex');
}

function updateEnvFile(newKey) {
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    // Falls es schon einen JWT_SECRET gibt, aktualisieren
    if (envContent.includes('JWT_SECRET=')) {
        envContent = envContent.replace(/JWT_SECRET=.*/g, `JWT_SECRET=${newKey}`);
    } else {
        envContent += `\nJWT_SECRET=${newKey}\n`;
    }

    fs.writeFileSync(envPath, envContent);
    console.log('Neuer JWT-Secret-Key wurde generiert und gespeichert!');
}

function setupMonthlyKeyRotation() {
    const now = new Date();
    const firstDayNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const timeUntilNextMonth = (firstDayNextMonth - now) > 2147483647 ? 2147483647 : firstDayNextMonth - now;
    
    setTimeout(() => {
        if((new Date).getDate !== 1) setupMonthlyKeyRotation(); //fals nicht erster des monats
        else {
            const newKey = generateNewSecretKey();
            updateEnvFile(newKey);
            setupMonthlyKeyRotation();
        }
        
    }, timeUntilNextMonth);

    console.log(`Key-Rotation geplant in ${Math.ceil(timeUntilNextMonth / (1000 * 60 * 60 * 24))} Tagen.`);
}

setupMonthlyKeyRotation();

module.exports = {generateNewSecretKey, updateEnvFile};
