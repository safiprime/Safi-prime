module.exports = {
  config: {
    name: "goku",
    version: "1.0",
    author: "Mahi--", // hopeless 
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  }, 
  onStart: async function(){}, 
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "goku") {
      const responses = [
        {
          body: "𝙳𝚘𝚗'𝚝 𝚌𝚊𝚕𝚕 𝙶𝙾𝙺𝚄 𝙱𝙻𝙰𝙲𝙺 𝚒𝚏 𝚑𝚎 𝚒𝚜𝚗'𝚝 𝚑𝚎𝚛𝚎 !!",
          gif: "https://i.ibb.co/RN7HcSY/image.gif"
        },
        {
          body: "𝙶𝙾𝙺𝚄 𝙱𝙻𝙰𝙲𝙺 𝚒𝚜 𝚋𝚞𝚜𝚢 𝚍𝚘𝚗'𝚝 𝚋𝚊𝚛𝚔",
          gif: "https://i.imgur.com/mQ7SbdR.gif"
        },
        {
          body: "𝚍𝚘𝚗'𝚝 𝚌𝚊𝚕𝚕 𝚖𝚢 𝚗𝚊𝚖𝚎 𝚢𝚘𝚞 𝚊𝚛𝚎𝚗'𝚝 𝚠𝚘𝚛𝚝𝚑𝚢 𝚝𝚘 𝚌𝚊𝚕𝚕 𝚖𝚢 𝚗𝚊𝚖𝚎?",
          gif: "https://i.imgur.com/gHJGMoK.gif"
        }
        // Add more responses as needed
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      return message.reply({
        body: randomResponse.body,
        attachment: await global.utils.getStreamFromURL(randomResponse.gif)
      });
    }
  }
    }
