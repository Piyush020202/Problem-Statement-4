This Project Api is can be used to Manage a School Database 
It can Accept
Student's Name as Name
Roll No as roll
Admission Year as admyear
marks as marks

To Get all articles You can Head Over to .You Can Perform Delete or Post To delete all students list or to Post a new Student Details.

To Get a Specific Student List You Have To Call it using (https://enigmatic-headland-29169.herokuapp.com/students/username) to access details of a specific student.
You can Perform Put Patch and Delete query on mongo db to update or delete the specific article.

The Schema is as Follows
const userschema=mongoose.Schema({
    name:String,
    password:String,
    phoneno:Number,
    username:String
});

    Hope You will benifit From This Api See You Soon!