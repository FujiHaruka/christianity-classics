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
					"en": "Yes [it is even so]; but let us inquire if the Lord has really given that testament which He swore to the fathers that He would give to the people.",
					"ja": "はい[それもそうです]。しかし主は本当に彼は彼が人々に与える父親に誓ったその証を与えた場合、私たちは問い合わせてみましょう。"
				},
				{
					"id": 2,
					"en": " He did give it; but they were not worthy to receive it, on account of their sins.",
					"ja": "彼はそれを与えませんでした。しかし、彼らは自分の罪のために、それを受け取るに値するはありませんでした。"
				},
				{
					"id": 3,
					"en": " For the prophet declares, And Moses was fasting forty days and forty nights on Mount Sinai, that he might receive the testament of the Lord for the people.",
					"ja": "預言者は宣言し、モーセは、彼が人々のために主の証を受ける可能性があること、シナイ山で40日と40夜断食したために。"
				},
				{
					"id": 4,
					"en": " Exodus 24:18 And he received from the Lord Exodus 31:18 two tables, written in the spirit by the finger of the hand of the Lord.",
					"ja": "出エジプト記24:18彼は主の手の指によって精神で書かれた主の出エジプト記31:18 2つのテーブルから受け取りました。"
				},
				{
					"id": 5,
					"en": " And Moses having received them, carried them down to give to the people.",
					"ja": "モーセは、それらを受け取った人々に与えるためにそれらを行いました。"
				},
				{
					"id": 6,
					"en": " And the Lord said to Moses, Moses, Moses, go down quickly; for your people has sinned, whom you brought out of the land of Egypt.",
					"ja": "主はモーセ、モーセ、モーセに言われ、すぐにダウンしました。あなたの人々のためにあなたがエジプトの国から持ち込ま人、罪を犯しました。"
				},
				{
					"id": 7,
					"en": " Exodus 32:7; Deuteronomy 9:12 And Moses understood that they had again made molten images; and he threw the tables out of his hands, and the tables of the testament of the Lord were broken.",
					"ja": "出エジプト記32：7;申命記9：12モーセは、彼らが再び溶融画像をしていたことが分かります。彼は彼の手からテーブルを投げ、そして主の証のテーブルが壊れていました。"
				},
				{
					"id": 8,
					"en": " Moses then received it, but they proved themselves unworthy.",
					"ja": "モーセはそれを受け取ったが、彼らは自分たちがふさわしくないことが判明しました。"
				},
				{
					"id": 9,
					"en": " Learn now how we have received it.",
					"ja": "今、我々はそれを受け取っている方法については、こちらをご覧ください。"
				},
				{
					"id": 10,
					"en": " Moses, as a servant, Hebrews 3:5 received it; but the Lord himself, having suffered in our behalf, has given it to us, that we should be the people of inheritance.",
					"ja": "モーセは、しもべとして、ヘブル人への手紙3：5は、それを受け取りました。しかし、主ご自身が、私たちに代わっに苦しんでた、私たちは相続の人でなければならないことを、私たちにそれを与えています。"
				},
				{
					"id": 11,
					"en": " But He was manifested, in order that they might be perfected in their iniquities, and that we, being constituted heirs through Him, might receive the testament of the Lord Jesus, who was prepared for this end, that by His personal manifestation, redeeming our hearts (which were already wasted by death, and given over to the iniquity of error) from darkness, He might by His word enter into a covenant with us.",
					"ja": "しかし、彼は彼らの不義に完成される可能性があること、そして私たちは、彼を通して相続人が構成されていることを、彼の個人的な症状によって、私たちを償還することを、この目的のために準備された主イエスの証を受け取るかもしれませんために、明らかにしました。心（すでに死によって浪費、およびエラーの不義に渡って与えられた）闇から、彼は私たちとの契約に入る彼の言葉をすることによって可能性があります。"
				},
				{
					"id": 12,
					"en": " For it is written how the Father, about to redeem us from darkness, commanded Him to prepare a holy people for Himself.",
					"ja": "父は、暗闇の中から私たちを償還しようと、彼自身のための神聖な人々を準備するために彼を命じどのようにそれが書かれているために。"
				},
				{
					"id": 13,
					"en": " The prophet therefore declares, I, the Lord Your God, have called You in righteousness, and will hold Your hand, and will strengthen You; and I have given You for a covenant to the people, for a light to the nations, to open the eyes of the blind, and to bring forth from fetters them that are bound, and those that sit in darkness out of the prison-house.",
					"ja": "預言者はそれゆえ、わたし、あなたの神、主は、義であなたを求めている、とあなたの手を保持し、あなたを強化し、宣言します。そして、私は盲目の目を開くために、国への光のために、人々に契約のためにあなたを与えている、と結合している足枷彼らから生み出すために、刑務所、家の外に闇の中に座っているもの。"
				},
				{
					"id": 14,
					"en": " Isaiah 42:6-7 You perceive, then, whence we have been redeemed.",
					"ja": "イザヤ42：あなたが知覚6-7は、その後、そこから私たちは贖われてきました。"
				},
				{
					"id": 15,
					"en": " And again, the prophet says, Behold, I have appointed You as a light to the nations, that You might be for salvation even to the ends of the earth, says the Lord God that redeems you.",
					"ja": "そして再び、預言者は言う、見よ、私はあなたも、地球の端に救いのためにあるかもしれない国への光のようにを任命し、あなたを償還する主なる神は言います。"
				},
				{
					"id": 16,
					"en": " And again, the prophet says, The Spirit of the Lord is upon me; because He has anointed me to preach the Gospel to the humble: He has sent me to heal the broken-hearted, to proclaim deliverance to the captives, and recovery of sight to the blind; to announce the acceptable year of the Lord, and the day of recompense; to comfort all that mourn.",
					"ja": "そして再び、預言者は言い、主の霊がわたしの上にあります。彼は謙虚に福音を宣べ伝えるために私を油注がれたため、彼は捕虜に救出、およびブラインドに視力の回復を宣言するために、壊れた心を持っを癒すために私を送りました。主の許容可能な年、および報酬の日を発表します。すべてのこと弔うを慰めるします。"
				},
				{
					"id": 17,
					"en": " Isaiah 61:1-2",
					"ja": "イザヤ61：1-2"
				}
			]
		}
	];

/***/ }
/******/ ]);