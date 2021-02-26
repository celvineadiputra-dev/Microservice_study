const jwt = require('jsonwebtoken');

const JWT_SECRET = 'microservice_8327_cede';


// notes for "expiresIn": 1m adalah 1 menit, 1h adalah 1 jam atau 3600

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Cara 1 sync func
const token = jwt.sign({
    data: {
        kelas: 'microservice',
    }
}, JWT_SECRET, {
    expiresIn: '1h'
})

console.log(token);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Cara 2 async func

jwt.sign({
    data: {
        kelas: 'microservice'
    }
}, JWT_SECRET, {
    expiresIn : '1m'
}, (err, token) => {
    console.log(token);
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// ---------------------------------VERIFY---------------------------------

// cara 1
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoibWljcm9zZXJ2aWNlIn0sImlhdCI6MTYxNDM0NjcwNCwiZXhwIjoxNjE0MzUwMzA0fQ.7C7E9cRrpU-DViBqsj7daCS7YZtyoOB07SxAlYO2Sog';
jwt.verify(token1, JWT_SECRET,(err, decode)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(decode);
});


// cara 2
try {
    const decoded = jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch (error) {
    console.log(error.message);
}