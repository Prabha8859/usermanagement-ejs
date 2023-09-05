const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3002/api/users')
        .then(function (response) {
            res.render('index', { users: response.data.data });
        })
        .catch(err => {
            res.send(err);
        });
}
exports.add_user = (req, res) => {
    res.render('add_user');
}
// exports.update_user = (req, res) => {
//     axios.get('http://localhost:3002/api/users', { params: { id: req.query.id } })
//         .then(function (userdata) {
//             res.render('update_user', { user: userdata.data });
//         })
//         .catch(err => {
//             res.send(err);
//         });
// };

exports.update_user = (req, res) => {
    const userId = req.query.id;
    console.log('Received user ID:', userId);

    axios.get(`http://localhost:3002/api/users/${userId} `)
        .then(function (userdata) {
            console.log('API response:', userdata.data.data);
            res.render('update_user', { user: userdata.data.data });
        })
        .catch(err => {
            console.error('Axios error:', err);
            res.send(err);
        });
};

// app.post('/update_user', (req, res) => {
//     const userId = req.body.id; // Get the user ID from the hidden input field
//     const updatedName = req.body.name; // Get the updated name from the form

//     // Use a database operation to update the user's name
//     // Example using Mongoose:
//     User.findByIdAndUpdate(userId, { name: updatedName }, { new: true }, (err, updatedUser) => {
//         if (err) {
//             // Handle error
//             res.send(err);
//         } else {
//             res.redirect('/'); // Redirect to a success page or the user list
//         }
//     });
// });
