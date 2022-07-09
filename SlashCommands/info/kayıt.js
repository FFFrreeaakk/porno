const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "kayıt",
    description: "Kayıt eder",

    options: [{ type: "USER", name: "kişi", description: "Kişi", required: true },{ type: "ROLE", name: "birlik", description: "Birlik Rolü Seçiniz", required: true}, { type: "STRING", name: "isim", description: "Kişi İsmi Varsa Sınıf", required: true}, { type: "STRING", name: "rütbe", description: "Rütbesi", required: true }],
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

const ayars = {
  "985439856467521547": "T.S.K",
  "985439856446570534": "E.G.M",
  "985439856446570535": "J.G.K",
  "985439856467521546": "A.S.K",
  "985439856446570532": "Çakır",
  "962715824269979688": "Sarsılmaz",
  "962715824970424400": "Baron"
}

      const rolls = ["985439856467521547", "985439856446570534", "985439856446570535", "985439856467521546", "985439856446570532", "962715824269979688", "962715824970424400"]
      
if (!interaction.member.roles.cache.has("990234379890601995")) {

interaction.followUp({ content: "Bu komutu kullanmak için gerekli yetkiye sahip değilsin"})

return
}

if (!rolls.includes(`${interaction.options.getRole("birlik").id}`)) {

interaction.followUp({ content: "Bu rolü veremezsin!"})
return
}

let sss = interaction.options.getRole("birlik").id

      let tagi = ayars[sss]
         interaction.options.getMember("kişi").roles.add(`${interaction.options.getRole("birlik").id}`)
        
interaction.options.getMember("kişi").setNickname(`[${tagi}]${interaction.options.getString("isim")}[${interaction.options.getString("rütbe")}]`)

interaction.followUp({ content: "Başarılı :white_check_mark:"})
      
    },
};
