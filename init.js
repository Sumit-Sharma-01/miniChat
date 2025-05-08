const mongoose= require("mongoose");
const Chat=require("./models/chat")

main().then(()=>{console.log("connection successfull")
})
.catch(err=>console.log(err)
)

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allchats=[{
    from:"amit",
    to:"sumit",
    msg:"hey are you there",
    created_at:new Date(),

},{
    from:"shyamal",
    to:"rachit",
    msg:"you can go now",
    created_at:new Date(),

},{
    from:"sumit",
    to:"abhishek",
    msg:"na na munna",
    created_at:new Date(),

},{
    from:"vaibhav",
    to:"ashish",
    msg:"will you come tommorrow",
    created_at:new Date(),

},{
    from:"ajeet",
    to:"sujeet",
    msg:"give me some ideas",
    created_at:new Date(),

}]

Chat.insertMany(allchats);

