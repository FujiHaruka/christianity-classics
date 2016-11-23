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
					"en": "Since, therefore, the days are evil, and Satan possesses the power of this world, we ought to give heed to ourselves, and diligently inquire into the ordinances of the Lord.",
					"ja": "、したがって、日は悪であり、サタンはこの世界の力を持っているので、我々は自分自身に注意を与えるべきだ、と熱心に主の条例にお問い合わせください。"
				},
				{
					"id": 2,
					"en": " Fear and patience, then, are helpers of our faith; and long-suffering and continence are things which fight on our side.",
					"ja": "恐怖と忍耐は、その後、私たちの信仰のヘルパーです。そして長い間苦しんできたと自制は我々の側で戦うものです。"
				},
				{
					"id": 3,
					"en": " While these remain pure in what respects the Lord, Wisdom, Understanding, Science, and Knowledge rejoice along with them.",
					"ja": "これらは主を尊重するもので、純粋なままで、知恵、理解、科学、および知識は彼らと一緒に喜びます。"
				},
				{
					"id": 4,
					"en": " For He has revealed to us by all the prophets that He needs neither sacrifices, nor burnt-offerings, nor oblations, saying thus, What is the multitude of your sacrifices unto Me, says the Lord?",
					"ja": "彼は、彼がわたしにあなたの犠牲の多くは何ですか、このように言って、どちらも犠牲、また焼け - 提供、またoblationsを必要としていることを、すべての預言者たちに明らかにしたために、主は言いますか？"
				},
				{
					"id": 5,
					"en": " I am full of burnt-offerings, and desire not the fat of lambs, and the blood of bulls and goats, not when you come to appear before Me: for who has required these things at your hands?",
					"ja": "私は焼け - 提供のフルだ、と子羊の脂肪がない望む、と雄牛と山羊の血ではなく、あなたがわたしの前に現れるようになったときに：誰があなたの手でこれらの事を必要としていましたか？"
				},
				{
					"id": 6,
					"en": " Tread no more My courts, not though you bring with you fine flour.",
					"ja": "あなたはあなたと一緒に細かい粉を持っていないが、これ以上私のコートをトレッドません。"
				},
				{
					"id": 7,
					"en": " Incense is a vain abomination unto Me, and your new moons and sabbaths I cannot endure.",
					"ja": "お香はわたし無駄醜態で、あなたの新月や安息日私は耐えられません。"
				},
				{
					"id": 8,
					"en": " He has therefore abolished these things, that the new law of our Lord Jesus Christ, which is without the yoke of necessity, might have a human oblation.",
					"ja": "したがって、彼は必要のヨークなしで私たちの主イエス・キリストの新しい法律は、人間の奉納を持っている可能性があることを、これらの事を廃止しました。"
				},
				{
					"id": 9,
					"en": " And again He says to them, Did I command your fathers, when they went out from the land of Egypt, to offer unto Me burnt-offerings and sacrifices?",
					"ja": "彼らは私焼け-供物と犠牲がたに提供するために、エジプトの地から出て行ったときと再び彼は彼らに言って、私は、あなたがたの先祖を指揮しましたか？"
				},
				{
					"id": 10,
					"en": " But this rather I commanded them, Let no one of you cherish any evil in his heart against his neighbour, and love not an oath of falsehood.",
					"ja": "しかし、これはむしろ、私はあなたの誰もが彼の隣人に対する彼の心の中の任意の悪を大切にしない、と虚偽の宣誓をしませ愛しましょう、それらを命じました。"
				},
				{
					"id": 11,
					"en": " Jeremiah 7:22; Zechariah 8:17 We ought therefore, being possessed of understanding, to perceive the gracious intention of our Father; for He speaks to us, desirous that we, not going astray like them, should ask how we may approach Him.",
					"ja": "エレミヤ7：22;そこで我々は、私たちの父の優雅な意図を知覚するために、理解の所有されているべきでゼカリヤ8：17;彼は、我々は、彼らのように道に迷って行っていないことを望んで、私たちに話すために、私たちは神に近づく方法を尋ねてください。"
				},
				{
					"id": 12,
					"en": " To us, then, He declares, A sacrifice [pleasing] to God is a broken spirit; a smell of sweet savour to the Lord is a heart that glorifies Him that made it.",
					"ja": "私たちに、その後、彼は宣言し、神に[喜ば]犠牲は壊れた精神です。主に香ばしいかおりの香りがそれを作った神を賛美心臓部です。"
				},
				{
					"id": 13,
					"en": " We ought therefore, brethren, carefully to inquire concerning our salvation, lest the wicked one, having made his entrance by deceit, should hurl us forth from our [true] life.",
					"ja": "そこで、兄弟たちは、慎重に私たちの[真]人生から出て私たちを投げる必要があり、詐欺によって彼の入り口を作った、邪悪な者といけないので、私たちの救いについて問い合わせるべきです。"
				}
			]
		}
	];

/***/ }
/******/ ]);