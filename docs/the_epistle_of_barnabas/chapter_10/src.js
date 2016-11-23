var Src =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const chapterSrc = __webpack_require__(1)
	const article = __webpack_require__(4)

	module.exports = Object.assign({
	  article
	}, chapterSrc)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const books = __webpack_require__(2)
	const chapters = __webpack_require__(3)

	module.exports = {
	  books,
	  chapters
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  {
	    id: 1,
	    title: {
	      en: 'The Epistle of Barnabas',
	      ja: 'バルナバの手紙'
	    },
	    directory: 'the_epistle_of_barnabas',
	    author: {
	      en: 'Barnabas',
	      ja: 'バルナバ'
	    },
	    authorInfo: '',
	    writtenYear: '80-190',
	    description: '使徒教父文書',
	    comment: '',
	    originalUrl: 'http://www.newadvent.org/fathers/0124.htm'
	  }
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
		{
			"id": 1,
			"title": {
				"en": "Chapter 1. After the salutation, the writer declares that he would communicate to his brethren something of that which he had himself received",
				"ja": "第1章 挨拶の後、著者は自身が受け取ってきたものを兄弟たちに伝えることを宣言する"
			},
			"directory": "chapter_1"
		},
		{
			"id": 2,
			"title": {
				"en": "Chapter 2. The Jewish sacrifices are now abolished",
				"ja": "第2章 ユダヤ教の犠牲は今日廃止されている"
			},
			"directory": "chapter_2"
		},
		{
			"id": 3,
			"title": {
				"en": "Chapter 3. The fasts of the Jews are not true fasts, nor acceptable to God",
				"ja": "第3章 ユダヤ人の断食は、真の断食ではなく、神に受け入れられない"
			},
			"directory": "chapter_3"
		},
		{
			"id": 4,
			"title": {
				"en": "Chapter 4. Antichrist is at hand: let us therefore avoid Jewish errors",
				"ja": "第4章 反キリストは、すぐすばにある。だからユダヤ教の過ちを避けるようにしよう"
			},
			"directory": "chapter_4"
		},
		{
			"id": 5,
			"title": {
				"en": "Chapter 5. The new covenant, founded on the sufferings of Christ, tends to our salvation, but to the Jews' destruction",
				"ja": "第5章 キリストの苦しみに基礎を置いた新しい契約は、私たちには救いになるが、ユダヤ人にとって破壊である"
			},
			"directory": "chapter_5"
		},
		{
			"id": 6,
			"title": {
				"en": "Chapter 6. The sufferings of Christ, and the new covenant, were announced by the prophets",
				"ja": "第6章 キリストの苦しみ、そして新しい契約は、預言者によって告げられていた"
			},
			"directory": "chapter_6"
		},
		{
			"id": 7,
			"title": {
				"en": "Chapter 7. Fasting, and the goat sent away, were types of Christ",
				"ja": "第7章 断食と放たれた山羊は、キリストの予型だった"
			},
			"directory": "chapter_7"
		},
		{
			"id": 8,
			"title": {
				"en": "Chapter 8. The red heifer a type of Christ",
				"ja": "第8章 赤の若雌牛もキリストの予型"
			},
			"directory": "chapter_8"
		},
		{
			"id": 9,
			"title": {
				"en": "Chapter 9. The spiritual meaning of circumcision",
				"ja": "第9章 割礼の霊的な意味"
			},
			"directory": "chapter_9"
		},
		{
			"id": 10,
			"title": {
				"en": "Chapter 10. Spiritual significance of the precepts of Moses respecting different kinds of food",
				"ja": "第10章 食物の種類に関するモーセの戒律の霊的な意義"
			},
			"directory": "chapter_10"
		},
		{
			"id": 11,
			"title": {
				"en": "Chapter 11. Baptism and the cross prefigured in the Old Testament",
				"ja": "第11章 旧約で予表されていたバプテスマと十字架"
			},
			"directory": "chapter_11"
		},
		{
			"id": 12,
			"title": {
				"en": "Chapter 12. The cross of Christ frequently announced in the Old Testament",
				"ja": "第12章 キリストの十字架は、何度も旧約聖書で告げられてきた"
			},
			"directory": "chapter_12"
		},
		{
			"id": 13,
			"title": {
				"en": "Chapter 13. Christians, and not Jews, the heirs of the covenant",
				"ja": "第13章 ユダヤ人ではなくクリスチャンが契約の相続人"
			},
			"directory": "chapter_13"
		},
		{
			"id": 14,
			"title": {
				"en": "Chapter 14. The Lord has given us the testament which Moses received and broke",
				"ja": "第14章 主は私たちにモーセが受けた契約を与え、それを破棄した"
			},
			"directory": "chapter_14"
		},
		{
			"id": 15,
			"title": {
				"en": "Chapter 15. The false and the true Sabbath",
				"ja": "第15章 偽の安息日と真の安息日"
			},
			"directory": "chapter_15"
		},
		{
			"id": 16,
			"title": {
				"en": "Chapter 16. The spiritual temple of God",
				"ja": "第16章 神の霊的な神殿"
			},
			"directory": "chapter_16"
		},
		{
			"id": 17,
			"title": {
				"en": "Chapter 17. Conclusion of the first part of the epistle",
				"ja": "第17章 手紙の最初の部分の結論"
			},
			"directory": "chapter_17"
		},
		{
			"id": 18,
			"title": {
				"en": "Chapter 18. Second part of the epistle.",
				"ja": "第18章 手紙の第二部"
			},
			"directory": "chapter_18"
		},
		{
			"id": 19,
			"title": {
				"en": "Chapter 19. The way of light",
				"ja": "第19章 光の道"
			},
			"directory": "chapter_19"
		},
		{
			"id": 20,
			"title": {
				"en": "Chapter 20. The way of darkness",
				"ja": "第20章 闇の道"
			},
			"directory": "chapter_20"
		},
		{
			"id": 21,
			"title": {
				"en": "Chapter 21. Conclusion",
				"ja": "第21章 結論"
			},
			"directory": "chapter_21"
		}
	];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = [
		{
			"paragraphId": 1,
			"sentences": [
				{
					"id": 1,
					"en": "Now, wherefore did Moses say, You shall not eat the swine, nor the eagle, nor the hawk, nor the raven, nor any fish which is not possessed of scales?",
					"ja": "今、なぜモーセはあなたが豚、またワシ、タカも、またカラス、またスケールの所有されていない任意の魚を食べてはならない、と言ったのですか？"
				},
				{
					"id": 2,
					"en": " He embraced three doctrines in his mind [in doing so].",
					"ja": "彼は[その際に]彼の心の中で3教義を受け入れ。"
				},
				{
					"id": 3,
					"en": " Moreover, the Lord says to them in Deuteronomy, And I will establish my ordinances among this people.",
					"ja": "また、主は申命記に彼らに言います、そして、私はこの人々の間で私の条例を確立します。"
				},
				{
					"id": 4,
					"en": " Deuteronomy 4:1 Is there then not a command of God they should not eat [these things]?",
					"ja": "申命記4：1 [これらの事]その後、彼らは食べてはいけない、神のコマンドがありませんか？"
				},
				{
					"id": 5,
					"en": " There is, but Moses spoke with a spiritual reference.",
					"ja": "ありますが、モーセは、精神的な基準と話しました。"
				},
				{
					"id": 6,
					"en": " For this reason he named the swine, as much as to say, You shall not join yourself to men who resemble swine.",
					"ja": "このような理由から、彼は言って限りとして、あなたは豚に似ている男たちに自分自身に参加してはならない、豚の名前。"
				},
				{
					"id": 7,
					"en": " For when they live in pleasure, they forget their Lord; but when they come to want, they acknowledge the Lord.",
					"ja": "彼らは喜びに住んでたときのために、彼らは主を忘れます。彼らが望むようになったときしかし、彼らは主を認めます。"
				},
				{
					"id": 8,
					"en": " And [in like manner] the swine, when it has eaten, does not recognize its master; but when hungry it cries out, and on receiving food is quiet again.",
					"ja": "そして、それは食べた豚、[同様に]、そのマスターを認識しません。しかし、空腹時にそれが叫ぶと、食品を受けて、再び静かです。"
				},
				{
					"id": 9,
					"en": " Neither shall you eat, says he the eagle, nor the hawk, nor the kite, nor the raven.",
					"ja": "どちらもあなたが食べるならない、ワシ、タカも、また凧、またカラスと彼は言います。"
				},
				{
					"id": 10,
					"en": " You shall not join yourself, he means, to such men as know not how to procure food for themselves by labour and sweat, but seize on that of others in their iniquity, and although wearing an aspect of simplicity, are on the watch to plunder others.",
					"ja": "あなたは労働と汗によって自分自身のために食料を調達する方法を知らないような男性に、彼は意味、自分自身への参加が、彼らの不義で他人のことにつかむてはならない、と単純化の様相を身に着けているものの、略奪する時計であります他の人。"
				},
				{
					"id": 11,
					"en": " So these birds, while they sit idle, inquire how they may devour the flesh of others, proving themselves pests [to all] by their wickedness.",
					"ja": "彼らはアイドル座っている間そこでこれらの鳥は、彼らの邪悪によって[すべてに]自分自身害虫を証明し、他の人の肉をむさぼり食うことができる方法をお問い合わせください。"
				},
				{
					"id": 12,
					"en": " And you shall not eat, he says, the lamprey, or the polypus, or the cuttlefish.",
					"ja": "そして、あなたは、彼は言う、ヤツメウナギ、またはpolypus、またはイカを食べてはなりません。"
				},
				{
					"id": 13,
					"en": " He means, You shall not join yourself or be like to such men as are ungodly to the end, and are condemned to death.",
					"ja": "彼は自分自身に参加したり、最後にとんでもないです、と死を宣告されているような男性にのようであってはならない、ことを意味します。"
				},
				{
					"id": 14,
					"en": " In like manner as those fishes, above accursed, float in the deep, not swimming [on the surface] like the rest, but make their abode in the mud which lies at the bottom.",
					"ja": "呪われた上記のもの魚、などなどのように、残りのよう[表面上]水泳ではない、深いに浮くが、一番下にある泥の中に自分の住まいを作ります。"
				},
				{
					"id": 15,
					"en": " Moreover, You shall not, he says, eat the hare.",
					"ja": "また、あなたは、彼は言う、ウサギを食べてはなりません。"
				},
				{
					"id": 16,
					"en": " Wherefore?",
					"ja": "何のために？"
				},
				{
					"id": 17,
					"en": " You shall not be a corrupter of boys, nor like such.",
					"ja": "あなたはも、そのようなような、少年たちの堕落であってはなりません。"
				},
				{
					"id": 18,
					"en": " Because the hare multiplies, year by year, the places of its conception; for as many years as it lives so many it has.",
					"ja": "ノウサギの乗算、年々、その概念の場所からです。それが持っているので、多くの住んでいる限り多くの年のため。"
				},
				{
					"id": 19,
					"en": " Moreover, You shall not eat the hyena.",
					"ja": "また、あなたがハイエナを食べてはなりません。"
				},
				{
					"id": 20,
					"en": " He means, You shall not be an adulterer, nor a corrupter, nor be like to them that are such.",
					"ja": "彼はあなたが姦淫、また堕落すること、またそのようなあることを、それらのようであってはならない、ことを意味します。"
				},
				{
					"id": 21,
					"en": " Wherefore?",
					"ja": "何のために？"
				},
				{
					"id": 22,
					"en": " Because that animal annually changes its sex, and is at one time male, and at another female.",
					"ja": "その動物は、毎年、その性別を変更し、1時間のオスで、別の女性であるため。"
				},
				{
					"id": 23,
					"en": " Moreover, he has rightly detested the weasel.",
					"ja": "また、彼は間違いなくイタチを嫌っています。"
				},
				{
					"id": 24,
					"en": " For he means, You shall not be like to those whom we hear of as committing wickedness with the mouth, on account of their uncleanness; nor shall you be joined to those impure women who commit iniquity with the mouth.",
					"ja": "彼は意味のために、私たちは彼らの汚れの都合上、口の中で邪悪をコミットするように聞こえる人たちにのようであってはなりません。あなたが口の中で罪を犯すものを不純な女性に接合されなければなりません。"
				},
				{
					"id": 25,
					"en": " For this animal conceives by the mouth.",
					"ja": "この動物のために口で考案。"
				},
				{
					"id": 26,
					"en": " Moses then issued three doctrines concerning meats with a spiritual significance; but they received them according to fleshly desire, as if he had merely spoken of [literal] meats.",
					"ja": "モーセはその後、精神的な意味を持つ肉に関する3教義を発行しました。彼は単に[リテラル]肉の語られたかのように、彼らは、肉の欲求に応じてそれらを受け取りました。"
				},
				{
					"id": 27,
					"en": " David, however, comprehends the knowledge of the three doctrines, and speaks in like manner: Blessed is the man who has not walked in the counsel of the ungodly, even as the fishes [referred to] go in darkness to the depths [of the sea]; and has not stood in the way of sinners, even as those who profess to fear the Lord, but go astray like swine; and has not sat in the seat of scorners, even as those birds that lie in wait for prey.",
					"ja": "ダビデは、しかし、3教義の知識を把握し、同じように話す：祝福されたにもの[深さに暗闇の中で行く[呼ばれる]魚のように、不信心なの弁護人で歩いていない人であります海];さらには主を恐れることを公言した者として、罪人の道に立っていたが、豚のように道に迷って行くされていません。さらには獲物を待ちにあるものを鳥のように、scornersの席に座っていません。"
				},
				{
					"id": 28,
					"en": " Take a full and firm grasp of this spiritual knowledge.",
					"ja": "この精神的な知識の完全かつしっかり把握してください。"
				},
				{
					"id": 29,
					"en": " But Moses says still further, You shall eat every animal that is cloven-footed and ruminant.",
					"ja": "しかし、モーセはまたさらに言う、あなたは悪魔のと反芻あるすべての動物を食べなければなりません。"
				},
				{
					"id": 30,
					"en": " What does he mean?",
					"ja": "彼は何を意味するのでしょうか？"
				},
				{
					"id": 31,
					"en": " [The ruminant animal denotes him] who, on receiving food, recognizes Him that nourishes him, and being satisfied by Him, is visibly made glad.",
					"ja": "、食品を受けて、彼を養うことを彼を認識し、彼によって満たされている方[反芻動物は彼を表す]、目に見えて喜んで行われます。"
				},
				{
					"id": 32,
					"en": " Well spoke [Moses], having respect to the commandment.",
					"ja": "まあは、戒めに敬意を持つ、[モーセ]話しました。"
				},
				{
					"id": 33,
					"en": " What, then, does he mean?",
					"ja": "その後、彼は何を意味するのでしょうか？"
				},
				{
					"id": 34,
					"en": " That we ought to join ourselves to those that fear the Lord, those who meditate in their heart on the commandment which they have received, those who both utter the judgments of the Lord and observe them, those who know that meditation is a work of gladness, and who ruminate upon the word of the Lord.",
					"ja": "私たちは主を恐れるものに自分自身に参加するべきであることを、彼らが受けている戒めに自分の心に瞑想する人たちは、主の判断を発声し、それらを観察し、両方の人たちは、その瞑想を知っている人は喜びの作品です、と誰が主の言葉に応じ反芻。"
				},
				{
					"id": 35,
					"en": " But what means the cloven-footed?",
					"ja": "しかし、何が悪魔の意味しますか？"
				},
				{
					"id": 36,
					"en": " That the righteous man also walks in this world, yet looks forward to the holy state [to come].",
					"ja": "正しい人も、この世界で歩く、まだ神聖な状態を楽しみにしていることを[来ます]。"
				},
				{
					"id": 37,
					"en": " Behold how well Moses legislated.",
					"ja": "モーセが制定どれだけ見よ。"
				},
				{
					"id": 38,
					"en": " But how was it possible for them to understand or comprehend these things?",
					"ja": "彼らはこれらの事を理解したり、理解するためにしかし、どのようにそれは可能でしたか？"
				},
				{
					"id": 39,
					"en": " We then, rightly understanding his commandments, explain them as the Lord intended.",
					"ja": "主が意図したように私たちは、その後、当然彼の戒めを理解し、それらを説明します。"
				},
				{
					"id": 40,
					"en": " For this purpose He circumcised our ears and our hearts, that we might understand these things.",
					"ja": "この目的のために、彼は、私たちはこれらの事を理解するかもしれないと、私たちの耳と心を割礼。"
				}
			]
		}
	];

/***/ }
/******/ ]);