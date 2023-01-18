const mongoose = require('mongoose');
 
main().catch(err => console.log(err));
 
async function main() {
 
    mongoose.set('strictQuery', false);  //Adding this line is very important
 
    await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
 
    const fruitSchema = new mongoose.Schema({
        name: {
            type:String,
            // required: [true, "Please check your data entry, no name specified!"]
        },
        rating: {
            type: Number,
            min: 1,
            max: 10,
        },
        review: String
    });
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favoriteFruit: fruitSchema,
    });
 
    const Fruit = mongoose.model('Fruit', fruitSchema);
    const Person = mongoose.model('Person', personSchema)
    // const fruit = new Fruit({
    //     name: "Apple",
    //     rating: 10,
    //     review: "Peaches are so yummy!"
    // });
 
    // fruit.save();



 
    // const person = new Person({
    //     name: "John",
    //     age: 37,
    // });
 
    // person.save();

 
    // const kiwi = new Fruit({
    //     name: "Kiwi",
    //     rating: 10,
    //     review: "the best fruit"
    // });
 
    // const orange = new Fruit({
    //     name: "orange",
    //     rating: 4,
    //     review: "Too sour for me"
    // });
 
    // const banana = new Fruit({
    //     name: "Banana",
    //     rating: 3,
    //     review: "Weird texture"
    // });
    // const pineapple = new Fruit({
    //         name: "Pineapple",
    //         rating: 9,
    //         review: "Great fruit"
    //     });
    // pineapple.save();
    const mango = new Fruit({
        name:"Mango",
        rating:6,
        review:"Great fruit" 
    })
    mango.save()

    // const person = new Person({
    //     name: "Chen",
    //     age:12,
    //     favoriteFruit: pineapple,
    // })
    // person.save();
    // Fruit.insertMany([kiwi, orange, banana], function (err) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Succesfully saved");
    //     }
    // });
    // Fruit.find(function (err, fruits){
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log(fruits);
    //         // mongoose.connection.close();
    //         fruits.forEach(function(fruit){
    //             console.log(fruit.name);
    //         })
    //     }

    // });

    Person.updateOne({name: "John"}, {favoriteFruit:mango}, function(err){
        if (err){
            console.log(err);
        }else{
            console.log("Successfully updated the document!");
        }
    })
      Person.find(function (err, persons){
        if (err) {
            console.log(err);
        } else {
            // console.log(fruits);
            // mongoose.connection.close();
            persons.forEach(function(person){
                console.log(person);
            })
        }
    });
    // Fruit.updateOne({_id:"63c848a2ecd7dc86f82273be"}, {name:"Peach"},function(err){
    //     if (err){
    //         console.log(err);
    //     }else{
    //         console.log("Successfully updated the document!");
    //     }
    // })

    // Fruit.deleteOne({_id:"63c84f445311fea13b03948b"}, function(err){
    //     if (err){
    //         console.log(err);
    //     }else{
    //         console.log("Sucessfully deleted the document!");
    //     }
    // })
    // People.deleteMany({name: "John"}, function(err){
    //         if (err){
    //             console.log(err);
    //         }else{
    //             console.log("Sucessfully deleted all the document!");
    //         }
    //     })
}