/* Codded by @Amalser
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/anime_pixiv_art_s_1629910532757-01_1.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `β¦πΌππΈβ€οΈββ€βΜ±Μ±Μ±Μ±ΜΜΜππ π₯β¦


ππ π²     π _ππππ©π¨ππ₯π₯ πͺπ¨ππ§ ππ€π© 
ππ’ππ»π²πΏ  π  πΏπ€πππππ©π€π§
ππ©π²πΏππΆπΌπ» π .πΈ ππ‘π€ππ‘π

ββββββββββββββββββββ
          πΌ_πππππππ πΌπ πππ½πππΎ_πΌ ββββββββββββββββββ
ππππ ".π‘ππ¨π©"  πππ πππ πΎππππΌππΏπ 
ββββββββββββββββββββ
πππ© ππ§ππ£π©π¨ ππ€π’π’ππ£π¨ π‘ππ¨π©π¨
        β_.xmedia
        β_.deepai
        β_.effects
        β_.phub
        β_.mlog
ββββββββββββββββββ
β£:πππππΌπππΌπ ππππ π₯Ί

β­β£ https://Instagram.com/doceditormmx
ββββββββββββββββββββ
β£:πππ½ππΎπππ½π πππ πΎππΌππππ

β­β£https://youtube.com/channel/UCPuvs__dQ6QyYutqJVg004A
ββββββββββββββββββββ
β£:ππΌππ ππππππ

β­β£https://chat.whatsapp.com/GAHv157jSv484UPUQeMLfB

β­β£https://chat.whatsapp.com/GAHv157jSv484UPUQeMLfB
ββββββββββββββββββββ
β£:πππππ

β­β£ππΌπ»'π ππ½π?πΊ ππΌπ π?πΏπ² π―πΉπΌπ°πΈπ²π± π?πππΌπΊπ?ππΆπ°π?πΉπΉπ.
β­β£πΏπ€π£'π© π©π§π? π³π?πΈπ² ππ€π’π’ππ£ππ¨ ππ£ ππ£ππ€π­.
ββββββββββββββββββββ
β£:πππππ

β­β£https://wa.me/message/919061363103
ββββββββββββββββββββ
β£:πΎππΏππΏ π½π

β­β£πΏπ€πππππ©π€π§
ββββββββββββββββββ
β£πΎππππΌππΏ πππππ

β­β£.π‘ππ₯π©
β­β£.ππ₯π’π―π
β­β£.ππ’ππ‘π¨ππ§
β­β£.ππππ©ππ’
β­β£.π±π¦πππ’π
β­β£.πππ«π
β­β£.ππππππ©π¨

β£ππππΎππΌπ πΎππππΌππΏ
ββββββββββββββββββββ
β­β£.π¦ππ€ππ«π¦ππ§π?
ββββββββββββββββββββ
β£πππΏππΌ πΎππππΌππΏπ

β­β£.π¬π¨π§π 
β­β£.π―π’πππ¨
β­β£.π¬π­π’ππ€ππ«
β­β£.π©π‘π¨π­π¨
β­β£.π²π­
β­β£.ππ€π©
β­β£.π’π¦π 
β­β£.π¬π¬
β­β£.π­π­π¬
β­β£.π­π­π©
β­β£.ππ­π­π©
β­β£.π¦π©3
β­β£.π¦π©4ππͺπππ€
β­β£.ππ’ππ­
β­β£.πππ¦π©ππ 
β­β£.π£π¨π€π
β­β£.π¦ππ¦π
β­β£.π¦π¨π―π’π
β­β£.π’π§π¬π­π
β­β£.π§ππ°π¬
β­β£.π¨ππ«
β­β£.π£π’π
β­β£.πͺπ?π¨π­π
β­β£.π«ππ¦π¨π―πππ 
β­β£.π¬πππ§
β­β£.π­π«π­
β­β£.π π’π­π‘π?π
β­β£.π₯π²π«π’π
β­β£.ππ¨π―π’π
β­β£.π¬π‘π¨π°
β­β£.π’π 
β­β£.ππ§π’π¦ππ¬ππ²
β­β£.ππ‘ππ§π ππ¬ππ²
β­β£.π­π«π?π¦π©ππ¬ππ²
β­β£.π¬π°πππ­π‘ππ«
β­β£.π¬π²π¬π
β­β£.π­ππ₯ππ§π
β­β£.π
β­β£.π?π§π―π¨π’ππ
β­β£.π―π¨π’ππ²
β­β£.π°ππ₯π₯π©ππ©ππ«
β­β£.π°πππ­π‘ππ«
β­β£.π¬π‘π¨π«π­
β­β£.πππ₯π
β­β£.π¬ππ π

`}) 

}));

