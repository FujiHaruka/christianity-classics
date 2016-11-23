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
					"en": "Now what do you suppose this to be a type of, that a command was given to Israel, that men of the greatest wickedness should offer a heifer, and slay and burn it, and, that then boys should take the ashes, and put these into vessels, and bind round a stick purple wool along with hyssop, and that thus the boys should sprinkle the people, one by one, in order that they might be purified from their sins?",
					"ja": "今、あなたはコマンドが最大の邪悪の男性は雌牛を提供し、殺し、それを燃やし、そして、それは次に男の子が灰を取る必要があり、これらを置くべきであることを、イスラエルに与えられたこと、のタイプがあることをこのとして仮定何をすべきか容器に、及びヒソップと一緒にスティック紫ウールラウンド結合し、したがってことを少年たちは、彼らが罪から精製されるかもしれないようにするために、人々、一つ一つを振りかける必要がありますか？"
				},
				{
					"id": 2,
					"en": " Consider how He speaks to you with simplicity.",
					"ja": "彼はシンプルさとのあなたに話す方法を考えてみましょう。"
				},
				{
					"id": 3,
					"en": " The calf is Jesus: the sinful men offering it are those who led Him to the slaughter.",
					"ja": "子牛はイエスです：それを提供している罪深い男たちが虐殺に彼を導いた人々です。"
				},
				{
					"id": 4,
					"en": " But now the men are no longer guilty, are no longer regarded as sinners.",
					"ja": "しかし、今の男性はもはや罪人とみなされ、もはや罪を犯していません。"
				},
				{
					"id": 5,
					"en": " And the boys that sprinkle are those that have proclaimed to us the remission of sins and purification of heart.",
					"ja": "そして、振りかける男の子は、私たちに心の罪の赦しと精製を宣言しているものです。"
				},
				{
					"id": 6,
					"en": " To these He gave authority to preach the Gospel, being twelve in number, corresponding to the twelve tribes of Israel.",
					"ja": "これらに彼はイスラエルの12部族に対応し、数は12であること、福音を説くする権限を与えました。"
				},
				{
					"id": 7,
					"en": " But why are there three boys that sprinkle?",
					"ja": "しかし、なぜ振りかける3人の男の子がありますか？"
				},
				{
					"id": 8,
					"en": " To correspond to Abraham, and Isaac, and Jacob, because these were great with God.",
					"ja": "これらは、神との大きかったので、アブラハム、イサク、ヤコブに対応します。"
				},
				{
					"id": 9,
					"en": " And why was the wool [placed] upon the wood?",
					"ja": "そして、なぜ木材時にウール【置いがありましたか？"
				},
				{
					"id": 10,
					"en": " Because by wood Jesus holds His kingdom, so that [through the cross] those believing on Him shall live for ever.",
					"ja": "[クロスを通して]彼に信じるものは永遠に生きるように木材イエスは、彼の王国を保持していることであるので。"
				},
				{
					"id": 11,
					"en": " But why was hyssop joined with the wool?",
					"ja": "しかし、なぜヒソップはウールと結合しましたか？"
				},
				{
					"id": 12,
					"en": " Because in His kingdom the days will be evil and polluted in which we shall be saved, [and] because he who suffers in body is cured through the cleansing efficacy of hyssop.",
					"ja": "彼の王国に日が体内に苦しむ彼はヒソップのクレンジング効果により硬化されるので、我々は、保存された[と]しなければならないここで悪と汚染されるからです。"
				},
				{
					"id": 13,
					"en": " And on this account the things which stand thus are clear to us, but obscure to them because they did not hear the voice of the Lord.",
					"ja": "彼らは主の声を聞いていないので、このアカウントにこうして立つ事が私たちに明確な、しかしそれらにあいまいです。"
				}
			]
		}
	];

/***/ }
/******/ ]);