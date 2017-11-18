var onWordClick = function(wordNode) {
  console.log(wordNode);
  alert(wordNode.orthography);
  return wordNode;
};

var opts = {
  element: 'cloud',
  orthography: '形態と成分[編集] 地球上においては、基本的に雲は水から成ると考えてよい。微量ながら水以外の成分、例えば土壌成分や火山噴出物、塵埃などからなる微粒子（エアロゾル）が混ざっているほか、空気の成分（窒素、酸素、二酸化炭素など）が溶解している。その成分も、雲が発生・成長する際に存在した場所に左右されるが、比率からしても水がほとんどを占める。雲を構成する水滴は液体か固体である。固体の場合、独特の結晶を形成する。 ただし、超低温・低圧環境の成層圏や中間圏では、主成分が硫酸塩や硝酸塩からなる雲が発生する。 本項では、以下より地球上の雲について説明する。 物理化学的特徴[編集] 空気中の水蒸気が凝結（凝縮とも言う）されて液体（水）になるか、凍結（凝固）または昇華されて固体（氷）になることで雲が作られる。 空気中の水蒸気が凝結する条件は、空気が過飽和になる（空気の温度が露点温度を下回る、あるいは湿度が100%を越える）ことである。凝結核がなければ凝結しにくいが、ふつう、空気中には凝結核が多数あるので、過飽和の限界は過飽和度1%（湿度101%）くらいであり、超過分はすべて雲になる。 凝結してできた水滴が凍結する条件は、水滴が0℃以下（氷点下）に冷却されることである。凍結核がなければ凝結しにくい。ふつう、空気中には凍結核が少ないので、凍結は空気中の一部の水滴しか起こらない。気温が低くなるにつれて凍結率が上がり、-30～-42℃くらいで全水滴が凍結する。 空気中の水蒸気が昇華する条件は、空気が過飽和で、かつ空気が0℃以下に冷却されることである。昇華核がなければ凝結しにくい。 主な雲の発生の種類3つを挙げる。 上昇・冷却 : 太陽放射、暖気との接触などにより空気が暖められ、断熱膨張を起こして上昇し次第に冷える。 前線面で暖気が寒気の上を上昇するパターン、山に沿って空気が上昇するパターン、太陽放射により地表が温められて対流が発生するパターン、暖気が冷たい水面や地面に接触するパターンなどがある。 非上昇・冷却 : 放射冷却、寒気との接触などにより空気が冷やされる。 上空の空気は冷やされても下降して昇温し過飽和が解消されるので、下降できない地上や水上の空気で多いパターン。 加湿 : 温度が変化しない場合でも、水域や陸からの蒸発によって湿度が上がり、露点温度が上昇する。 この原理単独で雲が発生することは少ないが、少なからず関与している。 雲を作る雲粒は、空気中に浮かぶ塵やほこりなどのエアロゾル微粒子を凝結核もしくは氷晶核としてつくられる（凝結核と氷晶核をまとめて雲核という）。そのため、エアロゾルが多いと水蒸気が凝結（固）しやすくなり雲は発生しやすくなる。また逆に、エアロゾルが少ないと過飽和となっても水蒸気が凝結（固）しにくいため、雲もできにくくなる。 ふつう、凝結や凍結、昇華直後の雲粒は1～10μmくらいと小さい。これが、雲粒同士が衝突したり、雲粒にさらに水蒸気がくっついて凝結（凍結）していくなどして雲粒は成長し、最大で200μm(0.2mm)、さらに雨粒クラスでは直径が1mm前後になる。詳しくは降水過程参照。また、雨粒の成長の計算はメイスンの方程式(Mason equation)などにまとめられている。 雲粒ひとつひとつに働く重力や下降気流による力と、雲粒ひとつひとつを支える上昇気流による力がつりあうことで、雲は大気中に浮かぶ。雲粒が大きくなって重力が増したり、下降気流の力が大きくなると、雲粒は雨粒や雪の結晶として落下することとなる。上昇気流が強い場合は、上昇や落下を繰り返すうち、雨粒や雪の結晶同士が衝突してさらに大きな粒となって落下する。また、上昇や落下を繰り返すと霰や雹などの大きな氷粒になり、氷粒同士の衝突で静電気が発生し、それが蓄積されて雷の原因になる。 形成される雲の形は、空気の対流構造や、温度差のある空気の衝突面の形によって左右される。強い上下対流がある場合は積雲や積乱雲が形成されることが多く、大気が安定している場合は水平方向に層雲や高層雲などが均一に広がることが多い。また、山などの地形の影響を受けた場合は、レンズ雲や波状雲などの特徴的な雲ができる',
  font: 'FreeSans',
  height: 400,
  isAndroid: false,
  onWordClick: onWordClick
};

var opts2 = {
  element: 'cloud2',
  orthography: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the mirror of my soul, as my soul is the mirror of the infinite God! O my friend -- but it is too much for my strength -- I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of bliss; and then, my friend, when darkness overspreads my eyes, and heaven and earth seem to dwell in my soul and absorb its power, like the form of a beloved mistress, then I often think with longing, Oh, would I could describe these conceptions, could impress upon paper all that is living so full and warm within me, that it might be the',
  font: 'FreeSerif',
  nonContentWordsArray: /^(like|feel|soul|around|the|and|that|my|i|of|was|so|with|a|in|when|then|which|these|us|as|me|an|am|at|be|is|by)$/,
  // userSpecifiedNonContentWords: true,
  cutoff: 10,
  isAndroid: false,
  onWordClick: onWordClick
};

var opts3 = {
  element: 'cloud3',
  orthography: 'Gosh austerely gosh less until rosy mockingly yawned onto mastodon one diverse rubbed less where rosily meadowlark some darn danced that lantern worm sobbed the nudged horse wow kookaburra goat strove ignobly more that unproductive notwithstanding yikes normal porcupine far fixed up whimpered while less while false much much noisily pangolin where much less told snapped far despite clung the pinched more sheep jeez some thoroughly the dear and hawk much the following unbearably smoked incorrectly the dear scorpion loud outside quizzical immature that manatee waked until oh preparatory crud some this foolhardily underwrote let light jeez subversive the pathetic. Mandrill tiger far glanced evasively after far hummed alas hence firefly witless kookaburra and blushed and agilely flatly foolishly where where stretched some thus knelt goodness cuffed cozy some wow ouch much a less since knelt shot iguana less contemplated juggled attractive aboard ouch gosh some far much at as irresistible within and far newt tortoise flamboyantly and deft dreamed and and kangaroo dear broken by around this some this eclectically and on that spoke that so to considering much oversold concomitant much impala earnest yet testily tarantula dear leered therefore one gosh curtsied lemming erotic some the much oriole. This hello and cordial on by well far deer and lax since coy smoked loyal save since that so fraudulently iguanodon in the much some much the much darn connected oh and because played far hello covetous beheld mammoth rampantly and more groundhog well onto oriole wailed overhung greyhound opposite hello slept one loose until ape lingering jeepers stopped toughly alas less much radiantly wow eel up within immensely inclusive dear overheard interbred up indicatively more instantaneous chameleon excepting limpet across yikes goodness therefore less audacious much hello less darn while purred woodpecker dragonfly since told serene especial marginally dove. Wasp flipped and behind and gulped barring beaver wound greyhound ate goodness much far deceiving taught jeepers much hello dear deservedly plankton dubious this misspelled kneeled wildebeest porpoise cardinal rooster wrung rattlesnake while much dear hello hello ouch more more groaned dipped astride strict characteristically far to poured opossum away therefore and forward satanically and notwithstanding spacious alongside sorrowful greyhound shortsighted before poured impulsively well shy far considering jeez lurid much the in more gorgeous beneficently stridently as much alas and humble porcupine gosh jeez a far deserved far easy the supreme kookaburra krill the sent crud and gosh elephant.',
  font: 'Liberation Mono',
  nonContentWordsArray: 'much, far, less, dear, and, some, more, the, that, this, a, an, since, oh, hello, until, where, while, gosh',
  // userSpecifiedNonContentWords: true,
  isAndroid: false,
  onWordClick: onWordClick
};

// var cloudToSave = new ILanguageCloud({
//       orthography: newWordCloud,
//       archived: false,
//       nonContentWordsArray: [],
//       prefixesArray: [], // |სა-, სტა-,იმის,-ში/
//       suffixesArray: [],
//       punctuationArray: [],
//       wordDelimitersArray: [],
//       fineWordInternallyButNotExternallyArray: [],
//       wordFrequencies: [],
//       collection: 'datums',
//       lexicalExperience: {},
//       // caseSensitivity: false,
//       url: wordCloudStorage.dbUrl(),
//       enteredByUser: angular.extend({}, navigator)
//     });

var cloud = new ILanguageCloud(opts).runStemmer();
console.log("This is all the new info added to the text ", cloud);
var cloud2 = new ILanguageCloud(opts2).runStemmer();
console.log("This is all the new info added to the text ", cloud2);
var cloud3 = new ILanguageCloud(opts3).runStemmer();
console.log("This is all the new info added to the text ", cloud3);

// timeout(function() {
cloud.render();
cloud2.render();
cloud3.render();
// }, 2000);
//
document.getElementById("inputText").onblur = function(event) {
  cloud.orthography = event.target.value;
  cloud
    .runSegmenter()
    .runWordFrequencyGenerator()
    .runStemmer()
    .render();
  console.log(cloud);
}
