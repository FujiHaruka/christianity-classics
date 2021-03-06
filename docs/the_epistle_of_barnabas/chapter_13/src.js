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
					"en": "But let us see if this people is the heir, or the former, and if the covenant belongs to us or to them.",
					"ja": "しかし、この人が相続人、または前者であれば、と契約が私たちに、またはそれらに属している場合、私たちは見てみましょう。"
				},
				{
					"id": 2,
					"en": " Hear now what the Scripture says concerning the people.",
					"ja": "聖書は、人に関する言うことを今聞きます。"
				},
				{
					"id": 3,
					"en": " Isaac prayed for Rebecca his wife, because she was barren; and she conceived.",
					"ja": "彼女は不毛だったので、イサクは、レベッカ彼の妻のために祈りました。そして、彼女は考えました。"
				},
				{
					"id": 4,
					"en": " Genesis 25:21 Furthermore also, Rebecca went forth to inquire of the Lord; and the Lord said to her, Two nations are in your womb, and two peoples in your belly; and the one people shall surpass the other, and the elder shall serve the younger.",
					"ja": "創世記25:21はさらにまた、レベッカは、主に尋ねるために出て行きました。主は二つの国があなたの胎内にあり、あなたのお腹の中両国民、彼女に言いました。そして1人は他を凌駕しなければならない、と長老は若いを提供しなければなりません。"
				},
				{
					"id": 5,
					"en": " Genesis 25:23 You ought to understand who was Isaac, who Rebecca, and concerning what persons He declared that this people should be greater than that.",
					"ja": "創世記25:23あなたはアイザック、レベッカた人を理解するべきである、と彼はこの人々はそれよりも大きくなければならないことを宣言したもの人物について。"
				},
				{
					"id": 6,
					"en": " And in another prophecy Jacob speaks more clearly to his son Joseph, saying, Behold, the Lord has not deprived me of your presence; bring your sons to me, that I may bless them.",
					"ja": "そして、別の預言にヤコブは、見よ、主はあなたの存在の私を奪われていない、と言って、彼の息子ヨセフにより明確に話します。私は彼らを祝福することが、私にはあなたの息子を持って来ます。"
				},
				{
					"id": 7,
					"en": " And he brought Manasseh and Ephraim, desiring that Manasseh should be blessed, because he was the elder.",
					"ja": "そして彼は、彼は長老だったので、マナセは、祝福されるべきであることを望む、マナセとエフライムをもたらしました。"
				},
				{
					"id": 8,
					"en": " With this view Joseph led him to the right hand of his father Jacob.",
					"ja": "このビューではヨセフは父ヤコブの右手に彼を導きました。"
				},
				{
					"id": 9,
					"en": " But Jacob saw in spirit the type of the people to arise afterwards.",
					"ja": "しかし、ヤコブは、その後に発生する精神で人々の種類を見ました。"
				},
				{
					"id": 10,
					"en": " And what says [the Scripture]?",
					"ja": "そして、何[聖書]と言いますか？"
				},
				{
					"id": 11,
					"en": " And Jacob changed the direction of his hands, and laid his right hand upon the head of Ephraim, the second and younger, and blessed him.",
					"ja": "ヤコブは彼の手の向きを変え、エフライムの頭に右手を置いた、第若いし、彼を祝福しました。"
				},
				{
					"id": 12,
					"en": " And Joseph said to Jacob, Transfer your right hand to the head of Manasseh, for he is my first-born son.",
					"ja": "ヨセフは彼が私の最初の生まれの息子であるために、マナセの頭に右手を転送し、ヤコブに言いました。"
				},
				{
					"id": 13,
					"en": " Genesis 48:18 And Jacob said, I know it, my son, I know it; but the elder shall serve the younger: yet he also shall be blessed.",
					"ja": "創世記48:18ヤコブは、私の息子は、私はそれを知っている私はそれを知っている、と述べました。しかし長老は若いが仕える：まだ彼はまた、祝福されなければなりません。"
				},
				{
					"id": 14,
					"en": " Genesis 48:19 You see on whom he laid [his hands], that this people should be first, and heir of the covenant.",
					"ja": "創世記48:19あなたはこの人が最初に、そして契約の相続人であることを、彼は[手]敷設誰に参照してください。"
				},
				{
					"id": 15,
					"en": " If then, still further, the same thing was intimated through Abraham, we reach the perfection of our knowledge.",
					"ja": "その後、さらに別の、同じことがアブラハムを通してほのめかしていた場合、我々は、我々の知識の完成の域に達します。"
				},
				{
					"id": 16,
					"en": " What, then, says He to Abraham?",
					"ja": "何、その後、彼はアブラハムに言いましたか？"
				},
				{
					"id": 17,
					"en": " Because you have believed, it is imputed to you for righteousness: behold, I have made you the father of those nations who believe in the Lord while in [a state of] uncircumcision.",
					"ja": "あなたが信じてきたので、それは正義のためにあなたに帰属です：見よ、私はあなたに割礼を受けていない[状態]にある間に主を信じて、それらの国の父をしました。"
				}
			]
		}
	];

/***/ }
/******/ ]);