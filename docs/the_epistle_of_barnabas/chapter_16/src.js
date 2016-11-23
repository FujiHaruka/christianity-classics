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
					"en": "Moreover, I will also tell you concerning the temple, how the wretched [Jews], wandering in error, trusted not in God Himself, but in the temple, as being the house of God.",
					"ja": "また、私はまた、あなたが神の家であるとして、惨め[ユダヤ人]は、エラーで放浪、神ご自身にない、信頼できる方法寺院を、についてですが神殿で教えてくれます。"
				},
				{
					"id": 2,
					"en": " For almost after the manner of the Gentiles they worshipped Him in the temple.",
					"ja": "異邦人のほぼ後の仕方については、彼らは神殿で神を崇拝していました。"
				},
				{
					"id": 3,
					"en": " But learn how the Lord speaks, when abolishing it: Who has meted out heaven with a span, and the earth with his palm?",
					"ja": "彼の手のひらでスパンとの天、地をmetedた人：しかし、それを廃止するとき主は、話す方法を学びますか？"
				},
				{
					"id": 4,
					"en": " Have not I?",
					"ja": "私はそうではありませんか？"
				},
				{
					"id": 5,
					"en": " Isaiah 40:12 Thus says the Lord, Heaven is My throne, and the earth My footstool: what kind of house will you build to Me, or what is the place of My rest?",
					"ja": "イザヤ40:12は、このように主は、天が私の王座であると言い、そして地球私の足台：家の種類をあなたが私に構築、またはマイ残りの場所は何であるのだろうか？"
				},
				{
					"id": 6,
					"en": " Isaiah 66:1 You perceive that their hope is vain.",
					"ja": "イザヤ66：1あなたは彼らの希望が無駄であることを感じます。"
				},
				{
					"id": 7,
					"en": " Moreover, He again says, Behold, they who have cast down this temple, even they shall build it up again.",
					"ja": "また、彼は再び言う、見よ、この寺を投げてきた彼らが、も、彼らは再びそれを構築しなければなりません。"
				},
				{
					"id": 8,
					"en": " It has so happened.",
					"ja": "それはとても起こっています。"
				},
				{
					"id": 9,
					"en": " For through their going to war, it was destroyed by their enemies; and now: they, as the servants of their enemies, shall rebuild it.",
					"ja": "彼らは戦争に行く経由の場合、それは彼らの敵によって破壊されました。そして今：彼らは、彼らの敵のしもべとして、それを再構築しなければなりません。"
				},
				{
					"id": 10,
					"en": " Again, it was revealed that the city and the temple and the people of Israel were to be given up.",
					"ja": "繰り返しますが、それは都市と神殿とイスラエルの人々はあきらめするあったことが明らかになりました。"
				},
				{
					"id": 11,
					"en": " For the Scripture says, And it shall come to pass in the last days, that the Lord will deliver up the sheep of His pasture, and their sheep-fold and tower, to destruction.",
					"ja": "聖書について述べている、そしてそれは主が破壊に彼の牧場の羊、およびそれらの羊倍とタワーを、アップお届けしますことを、最後の日に渡すために来なければなりません。"
				},
				{
					"id": 12,
					"en": " And it so happened as the Lord had spoken.",
					"ja": "主が語られたとして、それがそう起こりました。"
				},
				{
					"id": 13,
					"en": " Let us inquire, then, if there still is a temple of God.",
					"ja": "まだ神の神殿がある場合、私たちは、その後、問い合わせてみましょう。"
				},
				{
					"id": 14,
					"en": " There is— where He himself declared He would make and finish it.",
					"ja": "彼自身は彼が作るとそれを終えることになると宣言どこにありIS-。"
				},
				{
					"id": 15,
					"en": " For it is written, And it shall come to pass, when the week is completed, the temple of God shall be built in glory in the name of the Lord.",
					"ja": "それが書かれている、そしてそれは週が完了したときに、渡すために来るために、神の神殿は、主の御名の栄光に建設されなければなりません。"
				},
				{
					"id": 16,
					"en": " Daniel 9:24-27; Haggai 2:10 I find, therefore, that a temple does exist.",
					"ja": "ダニエル9：24-27;ハガイ2：10私は寺院が存在しないこと、したがって、見つけます。"
				},
				{
					"id": 17,
					"en": " Learn, then, how it shall be built in the name of the Lord.",
					"ja": "それは主の名前で構築されなければならないか、それから、こちらをご覧ください。"
				},
				{
					"id": 18,
					"en": " Before we believed in God, the habitation of our heart was corrupt and weak, as being indeed like a temple made with hands.",
					"ja": "私たちが神を信じて前に、私たちの心の居住地は、手で造った神殿のように実際にあるように、腐敗し弱かったです。"
				},
				{
					"id": 19,
					"en": " For it was full of idolatry, and was a habitation of demons, through our doing such things as were opposed to [the will of] God.",
					"ja": "以下のためには、偶像崇拝に満ちていた、と神[の意志]に反対したとして、私たちはそのようなことをやって通って、悪魔の居住でした。"
				},
				{
					"id": 20,
					"en": " But it shall be built, you observe, in the name of the Lord, in order that the temple of the Lord may be built in glory.",
					"ja": "しかし、それは主の神殿を栄光に構築することができるようにするために、主の御名によって、あなたが観察し、構築されなければなりません。"
				},
				{
					"id": 21,
					"en": " How?",
					"ja": "どうやって？"
				},
				{
					"id": 22,
					"en": " Learn [as follows].",
					"ja": "[次のように]をご覧ください。"
				},
				{
					"id": 23,
					"en": " Having received the forgiveness of sins, and placed our trust in the name of the Lord, we have become new creatures, formed again from the beginning.",
					"ja": "罪の赦しを受け、主の御名によって、私たちの信頼を置いたので、私たちはもう一度最初から形成された新しい生き物、となっています。"
				},
				{
					"id": 24,
					"en": " Wherefore in our habitation God truly dwells in us.",
					"ja": "私たちの居住の神で何のためには、本当に私たちのうちに宿ります。"
				},
				{
					"id": 25,
					"en": " How?",
					"ja": "どうやって？"
				},
				{
					"id": 26,
					"en": " His word of faith; His calling of promise; the wisdom of the statutes; the commands of the doctrine; He himself prophesying in us; He himself dwelling in us; opening to us who were enslaved by death the doors of the temple, that is, the mouth; and by giving us repentance introduced us into the incorruptible temple.",
					"ja": "信仰の彼の言葉。約束の彼の呼び出し。法令の知恵;教義のコマンド。彼は自身が私たちに預言します。彼は自身が私たちのうちに宿ります。死によって、口の中で神殿の扉を奴隷にした私たちに開放。そして私たちに悔い改めを与えることによって、清廉潔白な寺院に私たちを紹介しました。"
				},
				{
					"id": 27,
					"en": " He then, who wishes to be saved, looks not to man, but to Him who dwells in him, and speaks in him, amazed at never having either heard him utter such words with his mouth, nor himself having ever desired to hear them.",
					"ja": "その後彼は、保存することを希望する人にはないように見えますが、彼には彼に宿る者、そして彼は彼の口でそのような言葉を口聞いて、また自分自身が今までにそれらを聞くために希望したのいずれかを有することはありませんで驚いて、彼に話します。"
				},
				{
					"id": 28,
					"en": " This is the spiritual temple built for the Lord.",
					"ja": "これは主のために構築された精神的な寺院です。"
				}
			]
		}
	];

/***/ }
/******/ ]);