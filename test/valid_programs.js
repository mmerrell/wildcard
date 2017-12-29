const valid = [
  '',
  '0','1','2','3','4','5','6','7','8','9',
  '0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣',
  '00', '10', '15', '20', '25', '30', '40', '45', '50',
  '60', '70', '80', '90', '100',
  '0️⃣0️⃣','1️⃣0️⃣','1️⃣5️⃣','2️⃣0️⃣','2️⃣5️⃣','3️⃣0️⃣','3️⃣5️⃣','4️⃣0️⃣','4️⃣5️⃣','5️⃣0️⃣','5️⃣5️⃣',
  '6️⃣0️⃣','7️⃣0️⃣','8️⃣0️⃣','9️⃣0️⃣','1️⃣0️⃣0️⃣',
  '▶️1⏹️',
  '▶️ 1 ⏹️',
  '▶️1️⃣⏹️',
  '▶️2️⃣⏹️',
  '▶️10⏹️',
  '▶️ 10 ⏹️',
  '▶️1️⃣0️⃣⏹️',
  '▶️ 1️⃣0️⃣ ⏹️',
  '▶️""⏹️',
  "▶️''⏹️",
  '⬜',
  '▶️⬜⏹️',
  ':start:⬜⏹️',
  ':start:⬜ ⏹️',
  '▶️⬜:stop:',
  '▶️⬜:stop:',
  '▶️ ⬜⬜:stop:',
  '👋🏽',
  '👋',
  '▶️👋🏽⏹️',
  ':start::hello::stop:',
  ':start: :hello: :stop:',
  ':start: :hello: :hello: :stop:',
  ':start: :hello: :world: :stop:',
  '▶️👋🏽👋🏽⏹️',
  '▶️👋🏽 👋🏽⏹️',
  '▶️ 👋🏽 👋🏽 ⏹️',
  '▶️👋🏽👋🏽👋🏽⏹️',
  '▶️👋🏽👋🏽⏹️',
  '▶️🌐🌐⏹️',
  '▶️👋🏽🌐👋🏽🌐👋🏽🌐⏹️',
  '▶️👋🏽🌐👋🏽🌐1️⃣0️⃣👋🏽🌐👋🏽🌐⏹️',
  '👋🏽🌐',
  ':hello: :world:',
  '💬',
  ':say:',
  '💬👋🏽',
  '💬🌐',
  '💬👋🏽🌐',
  '▶️💬👋🏽⏹️',
  '▶️💬👋🏽💬🌐⏹️',
  '▶️💬👋🏽🌐⏹️',
  '▶️💬👋🏽🌐⏹️',
  ':say: :hello: :world:',
  '▶️💬👋🏽🌐⏹️',
  '"hello"',
  "'hello'",
  '"hello world"',
  "'hello world'",
  '"iñtërnâtiônàlizætiøn"',
  "'iñtërnâtiônàlizætiøn'",
  '"yo"',
  '💬 "hello world"',
  ':say: "hello world"',
  '💬 1',
  '💬 1 2 3',
  '💬 "1 2 3"',
  "💬 '1 2 1'",
  '💬 "Play is the highest form of research. - Albert Einstein"',
  '💬 "There are no rules here--we\'re trying to accomplish something. - Thomas Edison"',
  '💬 "The most dangerous phrase in the language is, \'We\'ve always done it this way.\' - Grace Hopper"',
  '💬 "A good painting to me has always been like a friend. It keeps me company, comforts and inspires. - Hedy Lamarr"',
  '💬 "It always seems impossible until it\'s done. - Nelson Mandela"',
  '💬 "There was no choice but to be pioneers. - Margaret Hamilton"',
  '💬 "The walls between art and engineering exist only in our minds - Theo Jansen"',
  '💬 "If you get, give. If you learn, teach. - Maya Angelou"',
  '💬 "Invention, it must be humbly admitted, does not consist in creating out of void, but out of chaos. - Mary Shelley"',
  '💬 "Be regular and orderly in your life, so that you may be violent and original in your work. - Gustave Flaubert"',
  '💬 ""',
  "💬 ''",
  '▶️💬1️⃣⏹️',
  '▶️💬1⏹️',
  "▶️💬'1'⏹️",
  '▶️💬"1"⏹️',
  "▶️💬''⏹️",
  '▶️💬""⏹️',
  '▶️ :say: 1 ⏹️',
  '▶️:say:"."⏹️',
  '▶️💬"Hello, World!"⏹️',
  '▶️"Hello, World!"⏹️',
  '▶️"123 - 456"⏹️',
  '▶️💬3️⃣💬6️⃣💬3️⃣⏹️',
  '▶️👋🏽🌐⏹️',
  // Escaped quotes:
  '▶️"💡"⏹️',
  "▶️'💡'⏹️",
  "▶️'💡\"💡'⏹️",
  "▶️'💡\\'💡'⏹️",
  '▶️"💡\'💡"⏹️',
  '▶️"💡\\"💡"⏹️',
  // World languages
  '▶️"你好，世界"⏹️',              // Chinese
  '▶️"ওহে বিশ্ব!"⏹️',                // Bangla
  '▶️"Hello, World!"⏹️',         // English
  '▶️"Bonjour le monde!"⏹️',     // French
  '▶️"Hallo Welt!"⏹️',           // German
  '▶️"नमस्ते दुनिया!"⏹️',             // Hindi
  '▶️"こんにちは世界！"⏹️',         // Japanese
  '▶️"안녕, 세상!"⏹️',             // Korean
  '▶️"Olá Mundo!"⏹️',            // Portuguese
  '▶️"ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ!"⏹️',     // Punjabi
  '▶️"Привет мир!"⏹️',           // Russian
  '▶️"¡Hola Mundo!"⏹️',          // Spanish
  // World languages - Right-to-left
  '⏹️🌐👋🏽◀️',
  '⏹️"!"💬◀️',
  '⏹️"' + '!' + "مرحبا يا عالم" + '"💬◀️',  // Arabic ( Credit: nasser. https://github.com/nasser/--- )
  '⏹️"' + '!' + "שלום עולם" + '"💬◀️',     // Hebrew
  '⏹️"' + '!' + "שלום עולם" + '"◀️',      // Hebrew
  '"🃟"'
]

module.exports = valid
