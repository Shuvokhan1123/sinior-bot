module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  permission: 0,
  credits: "shakil",
  description: "mention",
  prefix: true,
  category: "user",
  usages: "tag",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61576617688656") {
    var aid = ["61576617688656"];
    for (const id of aid) {
      if (Object.keys(event.mentions) == id) {
        var msg = [
          "Mantion_দিস না _ বস শুভ এর মন মন ভালো নেই আস্কে-!💔🥀",
          "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔",
          "আমার একটা প্রিয় মানুষ এর খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣",
          "এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒",
          "Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨",
          "এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হচ্ছে আমার 😭😭",
          " বস "শুভ" এখন বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰",
          "এতো মেনশন নাহ দিয়া সিঙ্গেল শুভ রে একটা গফ দে 😒 😏",
          "Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স",
          "মেনশন দিস না পারলে একটা গফ দে",
          "Mantion_দিস না বাঁলপাঁক্না শুভ প্রচুর বিজি 🥵🥀🤐",
          "চুমু খাওয়ার বয়স টা চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"
"লজ্জার কিছু নেই", ☹️😐🐒
"আমার বস শুভ'র সাথে প্রেম করেন জীবন সুন্দর হবে" 🫵🤦‍♂️
🤷‍♀️🥵
        ];
        return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
      }
    }
  }
};

module.exports.run = async function({}) {};
