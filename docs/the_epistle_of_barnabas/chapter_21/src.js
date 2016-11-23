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
					"en": "It is well, therefore, that he who has learned the judgments of the Lord, as many as have been written, should walk in them.",
					"ja": "それは、彼誰が主の判断を学習したこと、したがって、よく書かれている限り多くあり、それらの中を歩く必要があります。"
				},
				{
					"id": 2,
					"en": " For he who keeps these shall be glorified in the kingdom of God; but he who chooses other things shall be destroyed with his works.",
					"ja": "彼のために誰がこれらは神の国に栄光なければならない保ちます。しかし、他のものを選択し、彼は彼の作品で破壊されなければなりません。"
				},
				{
					"id": 3,
					"en": " On this account there will be a resurrection, on this account a retribution.",
					"ja": "このため、このアカウントに、報復復活があるでしょう。"
				},
				{
					"id": 4,
					"en": " I beseech you who are superiors, if you will receive any counsel of my good-will, have among yourselves those to whom you may show kindness: do not forsake them.",
					"ja": "私はあなたが私の善意のいずれかの助言を受ける場合は、上司であるあなたを懇願互にあなたは優しさを示すことが誰にそれらの持っている：彼らを見捨てないでくださいを。"
				},
				{
					"id": 5,
					"en": " For the day is at hand on which all things shall perish with the evil [one].",
					"ja": "一日のためにすべてのものは悪[1]で滅びた手です。"
				},
				{
					"id": 6,
					"en": " The Lord is near, and His reward.",
					"ja": "主は近く、彼の報酬。"
				},
				{
					"id": 7,
					"en": " Again, and yet again, I beseech you: be good lawgivers to one another; continue faithful counsellors of one another; take away from among you all hypocrisy.",
					"ja": "再び、そして再び、私はあなたを懇願：良いlawgiversは、互いにこと。互いの忠実なカウンセラーを続けます。離れてあなたの中からすべての偽善を取ります。"
				},
				{
					"id": 8,
					"en": " And may God, who rules over all the world, give to you wisdom, intelligence, understanding, knowledge of His judgments, with patience.",
					"ja": "そして、世界中で支配する神は、忍耐と、あなたに知恵、知性、理解、彼の判断の知識を与えることができます。"
				},
				{
					"id": 9,
					"en": " And be taught of God, inquiring diligently what the Lord asks from you; and do it that you maybe safe in the day of judgment.",
					"ja": "そして、主はあなたから尋ね何熱心に興味津々、神の教えられます。そして、裁きの日であなたは多分安全なことにそれを行います。"
				},
				{
					"id": 10,
					"en": " And if you have any remembrance of what is good, be mindful of me, meditating on these things, in order that both my desire and watchfulness may result in some good.",
					"ja": "あなたは良いものの任意の思い出を持っている場合と、私の欲望と油断の両方がいくつかの良いになるようにするために、これらの事に瞑想、私に留意します。"
				},
				{
					"id": 11,
					"en": " I beseech you, entreating this as a favour.",
					"ja": "私は好意としてこれをentreating、あなたを懇願します。"
				},
				{
					"id": 12,
					"en": " While yet you are in this fair vessel, do not fail in any one of those things, but unceasingly seek after them, and fulfil every commandment; for these things are worthy.",
					"ja": "まだあなたは、このフェア容器内にあるが、それらのもののいずれかに失敗したが、絶え間なくそれらの後求め、すべての戒めを満たしていません。これらの事のために価値があります。"
				},
				{
					"id": 13,
					"en": " Wherefore I have been the more earnest to write to you, as my ability served, that I might cheer you.",
					"ja": "何のために私は私の能力は、私はあなたを応援かもしれないと、務めとして、あなたに書き込むために、より本格的でした。"
				},
				{
					"id": 14,
					"en": " Farewell, you children of love and peace.",
					"ja": "さらば、あなたの愛と平和の子供たち。"
				},
				{
					"id": 15,
					"en": " The Lord of glory and of all grace be with your spirit.",
					"ja": "栄光の、すべての恵みの主があなたの精神であること。"
				},
				{
					"id": 16,
					"en": " Amen.",
					"ja": "アーメン。"
				}
			]
		}
	];

/***/ }
/******/ ]);