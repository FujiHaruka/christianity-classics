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
					"en": "All hail, you sons and daughters, in the name of our Lord Jesus Christ, who loved us in peace.",
					"ja": "私たちの主イエス・キリストの名において、私たちを平和のうちに愛しているあなたたち息子娘を歓迎します。"
				},
				{
					"id": 2,
					"en": "Seeing that the divine fruits of righteousness abound among you, I rejoice exceedingly and above measure in your happy and honoured spirits, because you have with such effect received the engrafted spiritual gift.",
					"ja": "あなたはこのような効果を移植した霊的な賜物を受けているので、義の神の果実はあなたがたのうちにたくさんあることを見て、私は、あなたの幸せと光栄スピリッツに極めて及び対策の上に喜びます。"
				},
				{
					"id": 3,
					"en": " Wherefore also I inwardly rejoice the more, hoping to be saved, because I truly perceive in you the Spirit poured forth from the rich Lord of love.",
					"ja": "何のためにも、私は内側に、私は本当にあなたに知覚するため、御霊は愛の豊かな主から示さ注ぎ、保存することを期待して、より多くの喜びます。"
				},
				{
					"id": 4,
					"en": " Your greatly desired appearance has thus filled me with astonishment over you.",
					"ja": "あなたの非常に所望の外観は、このようにあなたの上に驚きで私を埋めました。"
				},
				{
					"id": 5,
					"en": " I am therefore pursuaded of this, and fully convinced in my own mind, that since I began to speak among you I understand many things, because the Lord has accompanied me in the way of righteousness.",
					"ja": "主は正義の道に私を同行しているので、私は、私はあなたがたのうちに話し始めたので、私は多くのことを理解していること、したがって、こののpursuaded、そして私自身の心の中で完全に確信しています。"
				},
				{
					"id": 6,
					"en": " I am also on this account bound by the strictest obligation to love you above my own soul, because great are the faith and love dwelling in you, while you hope for the life which He has promised.",
					"ja": "偉大な信仰であり、あなたに住居愛しているからあなたは彼が約束した生活のために願っている間、私は、私自身の魂の上にあなたを愛するように、最も厳しい義務によって拘束、このアカウントにも思います。"
				},
				{
					"id": 7,
					"en": " Considering this, therefore, that if I should take the trouble to communicate to you some portion of what I have myself received, it will prove to me a sufficient reward that I minister to such spirits, I have hastened briefly to write unto you, in order that, along with your faith, you might have perfect knowledge.",
					"ja": "私はあなたに私は自分自身が受信持っているものの一部を通信するために手間を取る必要がある場合、それはそのような霊に十分な報酬I大臣私に証明することは、したがって、このことを考慮すると、私はに、あなたがたに書くことが簡単に急いでいますあなたがたの信仰と一緒に、あなたは完全な知識を持っているかもしれない、ということ順番。"
				},
				{
					"id": 8,
					"en": " The doctrines of the Lord, then, are three: the hope of life, the beginning and the completion of it.",
					"ja": "主の教義は、その後、3次のとおりです。人生の希望、始まりとそれが完了しました。"
				},
				{
					"id": 9,
					"en": " For the Lord has made known to us by the prophets both the things which are past and present, giving us also the first-fruits of the knowledge of things to come, which things as we see accomplished, one by one, we ought with the greater richness of faith and elevation of spirit to draw near to Him with reverence.",
					"ja": "主は、私たちが熟練見るようにする事、また私たちに来るべき事の知識の最初の果実を与え、過去と現在あるものの両方の預言者たちに知られている一つ一つをしたために、我々は持つべき信仰と精神の上昇の大きな豊かさは、畏敬の念をもって彼に近い描画します。"
				},
				{
					"id": 10,
					"en": " I then, not as your teacher, but as one of yourselves, will set forth a few things by which in present circumstances you may be rendered the more joyful.",
					"ja": "私はその後、ないあなたの教師としてではなく、自分自身の一つとして、現在の状況であなたはより多くの喜びにレンダリングされるかもしれないいくつかのことを記載します。"
				}
			]
		}
	];

/***/ }
/******/ ]);