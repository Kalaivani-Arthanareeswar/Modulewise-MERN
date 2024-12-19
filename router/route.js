const express=require('express');
const router=express.Router()
const signupCopy=require('../model/signUp')

router.post('/signup',(request,response)=>
{
    const form_data=new signupCopy(
        {
            name:request.body.name,
            email:request.body.email,
            contact:request.body.contact,
            age:request.body.age,
            city:request.body.city
    })
    form_data.save().then(data=>
    {
        response.json(data);
        console.log("Data added successfully") 
    }).catch(error=>
    {
        response.json(error);
    })
})

module.exports = router;
