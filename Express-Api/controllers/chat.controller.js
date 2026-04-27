const chatService = require("../services/chat.service");

module.exports.StaticBot = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(404).json({ message: "cant get message !!!" });
    }
    const reply = await chatService.BotReply(message);
    return res.status(200).json({ message: "ChatBot Reply:", reply });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports.AIBot = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(404).json({ message: "can't get message !!!" });
    }
    const reply = await chatService.AIBotReplay(message);
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
