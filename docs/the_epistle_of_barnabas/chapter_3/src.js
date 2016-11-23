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
					"en": "He says then to them again concerning these things, Why do you fast to Me as on this day, says the Lord, that your voice should be heard with a cry?",
					"ja": "彼はもう一度声が叫びと聞かれるべきであることを、主は言う、なぜこの日のようにわたしに速くあなたを行うには、これらの事について彼らにその後言いましたか？"
				},
				{
					"id": 2,
					"en": " I have not chosen this fast, says the Lord, that a man should humble his soul.",
					"ja": "私は男が彼の魂を謙虚べきであると、主は言う、速い、これを選択していません。"
				},
				{
					"id": 3,
					"en": " Nor, though you bend your neck like a ring, and put upon you sackcloth and ashes, will you call it an acceptable fast.",
					"ja": "あなたがリングのようなあなたの首を曲げ、そしてあなたに入れても荒布と灰、あなたは許容可能な高速、それを呼び出します。"
				},
				{
					"id": 4,
					"en": " Isaiah 58:4-5 To us He says, Behold, this is the fast that I have chosen, says the Lord, not that a man should humble his soul, but that he should loose every band of iniquity, untie the fastenings of harsh agreements, restore to liberty them that are bruised, tear in pieces every unjust engagement, feed the hungry with your bread, clothe the naked when you see him, bring the homeless into your house, not despise the humble if you behold him, and not [turn away] from the members of your own family.",
					"ja": "イザヤ58：4-5彼は言う私たちに、見よ、これは私が選択したことは高速ですが、主は、述べていない人は、彼の魂を謙虚べきであることが、彼は不義のすべてのバンドを失うべきであること、過酷なの留め具をほどきます契約は、あなたが彼を見よ、とされていない場合謙虚を軽蔑ない、あなたの家にホームレスを持って、あなたは彼を見たときに裸を着せ、あなたのパンで空腹を養う、バラバラに、傷ついていること自由にすべての不当な関与を涙をそれらを復元しますあなた自身の家族のメンバーから[背を向けます]。"
				},
				{
					"id": 5,
					"en": " Then shall your dawn break forth, and your healing shall quickly spring up, and righteousness shall go forth before you, and the glory of God shall encompass you; and then you shall call, and God shall hear you; while you are yet speaking, He shall say, Behold, I am with you; if you take away from yourself the chain [binding others], and the stretching forth of the hands [to swear falsely], and words of murmuring, and give cheerfully your bread to the hungry, and show compassion to the soul that has been humbled.",
					"ja": "次に、あなたの夜明けブレーク等、あなたの癒しはすぐに跳ね上がるしなければならないものとし、義はあなたの前に出て行くものとし、神の栄光があなたを包含するものとします。そして、あなたは呼ぶ、神はあなたを聴かなければなりません。あなたがまだ話している間、彼は見よ、言わなければならない、私はあなたと一緒です。あなたは自分から離れてチェーンを取る場合は、[他の人を結合]、および手の前後ストレッチ[偽って誓うする]、およびせせらぎの言葉、および空腹に元気にあなたのパンを与え、そして謙虚されている魂に同情を示します。"
				},
				{
					"id": 6,
					"en": " Isaiah 58:6-10 To this end, therefore, brethren, He is long-suffering, foreseeing how the people whom He has prepared shall with guilelessness believe in His Beloved.",
					"ja": "イザヤ58：この目的のために6月10日には、それゆえ、兄弟、彼は彼が正直さとしなければならない準備している人は、彼の最愛のを信じてどのように予見、辛抱強いです。"
				},
				{
					"id": 7,
					"en": " For He revealed all these things to us beforehand, that we should not rush forward as rash acceptors of their laws.",
					"ja": "彼は、我々は彼らの法律の発疹受容体として前方急ぐべきではないことを、事前に私たちにすべてのこれらの事を明らかにしたために。"
				}
			]
		}
	];

/***/ }
/******/ ]);