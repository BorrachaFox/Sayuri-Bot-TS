var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_discord = __toModule(require("discord.js"));
var import_server = __toModule(require("./server"));
const client = new import_discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.on("ready", () => {
  var _a, _b;
  console.log(`Logged in as ${(_a = client.user) == null ? void 0 : _a.tag}`);
  (_b = client.user) == null ? void 0 : _b.setPresence({
    activities: [{
      name: "Sexo 2"
    }],
    status: "online"
  });
});
client.on("message", async (msg) => {
  if (!msg.content.startsWith("!") || msg.author.bot)
    return;
  const text = msg.content.replace("!", "");
  if (text === "teste") {
    msg.reply(`Salve ${msg.author}`);
  }
});
(0, import_server.default)();
client.login(process.env.TOKEN);
//# sourceMappingURL=index.js.map
