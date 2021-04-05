const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log(`Oh no, error: ${err}`)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

const Product = mongoose.Model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599 })
bike.save()
    .then(data => {
        console.log("It worked!")
        console.log(data)
    })
    .catch(err => {
        console.log("Oh no, error!")
        console.log(err)
    })