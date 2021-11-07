if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,o)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=o(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"76475a0dffc4733d280e.png",revision:null},{url:"assets/background/CT_background.png",revision:"fb7cee880172eb9bf1dbe0001d1b6b92"},{url:"assets/background/blue_background.png",revision:"da0a25ac63d7c5fd9b910d4b5f5d9c7e"},{url:"assets/background/green_background.png",revision:"85fd1a8f0670816e40cfa419518dbedf"},{url:"assets/background/maratonou_background.png",revision:"661b2f78e0515f3bde7d1178b6223e72"},{url:"assets/fonts/Calling-Code-Regular.otf",revision:"5c8238165c4c0ec8e9659115ea02e1e3"},{url:"assets/fonts/Outfit-Black.otf",revision:"5f3c2a6e44a0d5fc59b691e41ae6bd2f"},{url:"assets/fonts/Outfit-Bold.otf",revision:"455a1152f51827f7e20192f668eeb64e"},{url:"assets/fonts/Outfit-ExtraBold.otf",revision:"bb17dee0c6894c97d6181f6cf05a7985"},{url:"assets/fonts/Outfit-ExtraLight.otf",revision:"0436201fc1cc5ea86555003cbd274a56"},{url:"assets/fonts/Outfit-Light.otf",revision:"651d8d493d0bab45413fe603b384eaa3"},{url:"assets/fonts/Outfit-Medium.otf",revision:"ad9b2cfeec01c8ecc150e737f6eb2e4b"},{url:"assets/fonts/Outfit-Regular.otf",revision:"8a5e8ef8b94b236fed8963b3a0ef1cd3"},{url:"assets/fonts/Outfit-SemiBold.otf",revision:"a03bf97bf05849a0944ee76361235bca"},{url:"assets/fonts/Outfit-Thin.otf",revision:"5d6ec7b5eb48e2adc9dfb0706b77b52d"},{url:"assets/icons/capivara.png",revision:"d57ecfbf666c399937001b11201f860c"},{url:"assets/icons/favicon.svg",revision:"24d37b7113d1eaeab5018e1cb28b3163"},{url:"assets/icons/folder.svg",revision:"17074135eafe2d4cf3aeb4831abede4e"},{url:"assets/icons/logo.svg",revision:"24d37b7113d1eaeab5018e1cb28b3163"},{url:"assets/icons/maratonou.svg",revision:"79b8cd7193f16bcf8867e751ab3325e3"},{url:"assets/icons/social_logo.svg",revision:"524eb8bad84b63d27b581347c51c9831"},{url:"assets/icons/twitch_folder.svg",revision:"61381e7bcfa94301f5f32fdf6d3c4c08"},{url:"assets/images/andrei.jpeg",revision:"1de934045191441c2b68980ea292162d"},{url:"assets/images/daniel.png",revision:"868dfd086c2d706e2a8e85c0cb11efe5"},{url:"assets/images/diego.jpg",revision:"35fb73c89dadb675286035180a89e4a4"},{url:"assets/images/eliel.jpg",revision:"e89708d2512fe25769c359e11daa8dd6"},{url:"assets/images/gilberto.jpg",revision:"3d32f61b97a21c4597e1b673262ec69a"},{url:"assets/images/logos/btg_logo.png",revision:"8087ac1f7299afc38898ea02da641b21"},{url:"assets/images/logos/ci&t_logo.png",revision:"a88dab7820b010adfc00943cef5f8ccf"},{url:"assets/images/logos/coppe_logo.png",revision:"0c895764dd9cd7ecd1a026a99e8574b3"},{url:"assets/images/logos/creditas_logo.png",revision:"b96b1daac465910fda102cf04c111d39"},{url:"assets/images/logos/globo_logo.png",revision:"0e2a21838d02ad1c0761eebb92c76c3c"},{url:"assets/images/logos/hurb_logo.png",revision:"ab7dc532a646e134fd24e5a993091d4a"},{url:"assets/images/logos/intelie_logo.png",revision:"a5ba625e3601bcb47311c1cde8b81381"},{url:"assets/images/logos/its_logo.png",revision:"d20708cc47cd6cdf775c28cac1b31101"},{url:"assets/images/logos/oracle_logo.png",revision:"fc753c76497e8ba2d1915311091ce615"},{url:"assets/images/logos/page_logo.png",revision:"2f0da734ca471b30e2ea0a65368490cb"},{url:"assets/images/logos/pebmed_logo.png",revision:"bfed7d6058ba4f7ee6889bbf5f7b863e"},{url:"assets/images/logos/vallourec_logo.png",revision:"caf2a4536ff67fdadc063bec1c8deca4"},{url:"assets/images/lucas.jpg",revision:"a2bc804d8715125ed1e2a780b62cf240"},{url:"assets/images/mario.jpg",revision:"226c42f6bfa4f6ac8c500a5c540f2c73"},{url:"assets/images/mateus.jpg",revision:"a70027871e74d889c67ee18925d6ecb5"},{url:"assets/images/meirylene.jpeg",revision:"8be39089b48150aa3d231fa3c7a890d0"},{url:"assets/images/miguel.jpeg",revision:"343ae5d4166691de6caf4dbb24e75b9f"},{url:"assets/images/thais.png",revision:"287d2e799f4014ef1e9fe857a92c1b1d"},{url:"assets/images/turibio.jpeg",revision:"9989123bb40bd131bc136339964630a9"},{url:"assets/images/ygor.jpg",revision:"a9e8b53bbe39d944db66460ac023b2b1"},{url:"favicon.svg",revision:"24d37b7113d1eaeab5018e1cb28b3163"},{url:"index.html",revision:"e11acc0f979c9d9ac0fd089e976a34b9"},{url:"main.js",revision:"12e393f215f4f53f7a3eccfab03eecd5"},{url:"main.js.LICENSE.txt",revision:"f7e623707d9b37a3821ec4c3548a4309"}],{})}));
