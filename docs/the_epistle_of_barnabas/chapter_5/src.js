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
					"en": "For to this end the Lord endured to deliver up His flesh to corruption, that we might be sanctified through the remission of sins, which is effected by His blood of sprinkling.",
					"ja": "この目的のためにのために主は私たちが散水の彼の血によってもたらされる罪の赦し、通って神聖化される可能性があること、腐敗に彼の肉を提供するために耐えました。"
				},
				{
					"id": 2,
					"en": " For it is written concerning Him, partly with reference to Israel, and partly to us; and [the Scripture] says thus: He was wounded for our transgressions, and bruised for our iniquities: with His stripes we are healed.",
					"ja": "それは部分的にイスラエルを参照して、部分的に私たちに、彼について書かれているために、そして【聖書】このように述べている：彼は私たちのそむきの罪のために傷ついた、と私たちの咎のために砕かれた。彼のストライプで、私たちは癒されています。"
				},
				{
					"id": 3,
					"en": " He was brought as a sheep to the slaughter, and as a lamb which is dumb before its shearer.",
					"ja": "彼は虐殺に羊のようになっており、その剪断機の前にダムである子羊のようにしました。"
				},
				{
					"id": 4,
					"en": " Isaiah 53:5, 7 Therefore we ought to be deeply grateful to the Lord, because He has both made known to us things that are past, and has given us wisdom concerning things present, and has not left us without understanding in regard to things which are to come.",
					"ja": "5、7そこで我々は彼が両方の過去のある私たちに知られている事をしたが、本事について私たちに知恵を与えている、との事に関して理解することなく、私たちを残していないため、主に深く感謝するべきである：イザヤ書53これは来ています。"
				},
				{
					"id": 5,
					"en": " Now, the Scripture says, Not unjustly are nets spread out for birds.",
					"ja": "さて、聖書は不当に鳥のためにネットに広がっているわけではない、と言います。"
				},
				{
					"id": 6,
					"en": " This means that the man perishes justly, who, having a knowledge of the way of righteousness, rushes off into the way of darkness.",
					"ja": "これは正義の道の知識を持つ人、男が正当に滅びことを意味し、闇のようにオフに突入。"
				},
				{
					"id": 7,
					"en": " And further, my brethren: if the Lord endured to suffer for our soul, He being Lord of all the world, to whom God said at the foundation of the world, Let us make man after our image, and after our likeness, Genesis 1:26 understand how it was that He endured to suffer at the hand of men.",
					"ja": "そしてさらに、私の兄弟は：主は私たちの魂のために苦しむことに耐えた場合、彼は、全世界の主である神は、私たちが私たちのイメージの後に男を作ってみよう、世界の基盤で語った、と私たちの肖像後、創世記1人に：26それは彼が人の手で苦しむことに耐えていることだったかを理解しています。"
				},
				{
					"id": 8,
					"en": " The prophets, having obtained grace from Him, prophesied concerning Him.",
					"ja": "預言者は、神からの恵みを得た、彼に関する預言しました。"
				},
				{
					"id": 9,
					"en": " And He (since it behooved Him to appear in flesh), that He might abolish death, and reveal the resurrection from the dead, endured [what and as He did], in order that He might fulfil the promise made unto the fathers, and by preparing a new people for Himself, might show, while He dwelt on earth, that He, when He has raised mankind, will also judge them.",
					"ja": "彼は死を廃止し、死者の中から復活を明らかにする可能性があること、（それが肉に表示されるように彼をbehoovedので）と彼は、彼が父親がたに約束を果たすかもしれないようにするために、[彼が何をしたかとのように]耐え、および彼は地上に住んでいながら、自分自身のために新しい人々を調製することにより、彼は人類を調達している彼は、また、それらを判断することが、表示されることがあります。"
				},
				{
					"id": 10,
					"en": " Moreover, teaching Israel, and doing so great miracles and signs, He preached [the truth] to him, and greatly loved him.",
					"ja": "また、イスラエルを教え、そしてとても素晴らしい奇跡としるしを行って、彼は彼に[真実]を説教し、大幅に彼を愛していました。"
				},
				{
					"id": 11,
					"en": " But when He chose His own apostles who were to preach His Gospel, [He did so from among those] who were sinners above all sin, that He might show He came not to call the righteous, but sinners to repentance.",
					"ja": "彼は彼の福音を宣べ伝えていた彼自身の使徒たちを選んだときには、彼は彼が義人を呼び出すために、罪人が悔い改めないようになりました表示される場合がありますことを、すべての罪上記の罪人であった者[彼はそれらの中から、そのようにしました]。"
				},
				{
					"id": 12,
					"en": " Then He manifested Himself to be the Son of God.",
					"ja": "その後、彼は神の子であることを自分自身を明らかに。"
				},
				{
					"id": 13,
					"en": " For if He had not come in the flesh, how could men have been saved by beholding Him?",
					"ja": "彼は肉に来ていなかった場合のために、どのように男性は彼をbeholdingによって救われただろうか？"
				},
				{
					"id": 14,
					"en": " Since looking upon the sun which is to cease to exist, and is the work of His hands, their eyes are not able to bear his rays.",
					"ja": "存在しなくなることであり、彼の手の作品です日時に探しているので、彼らの目は、彼の光線を負担することができません。"
				},
				{
					"id": 15,
					"en": " The Son of God therefore came in the flesh with this view, that He might bring to a head the sum of their sins who had persecuted His prophets to the death.",
					"ja": "神の御子は、したがって、彼は頭に死に預言者を迫害していた罪の合計を持って来るかもしれないと、このビューに肉に来ました。"
				},
				{
					"id": 16,
					"en": " For this purpose, then, He endured.",
					"ja": "この目的のために、その後、彼は耐えました。"
				},
				{
					"id": 17,
					"en": " For God says, The stroke of his flesh is from them; and when I shall smite the Shepherd, then the sheep of the flock shall be scattered.",
					"ja": "神が言うには、彼の肉のストロークは彼らからです。私は羊飼いを打つならないときや、その後群れの羊は散乱されなければなりません。"
				},
				{
					"id": 18,
					"en": " Zechariah 13:7 He himself willed thus to suffer, for it was necessary that He should suffer on the tree.",
					"ja": "ゼカリヤ13：彼が木に苦しむことが必要であったために7彼自身が、苦しむことにこのように意志。"
				},
				{
					"id": 19,
					"en": " For says he who prophesies regarding Him, Spare my soul from the sword, fasten my flesh with nails; for the assemblies of the wicked have risen up against me.",
					"ja": "以下のための彼彼についての予言が、剣から私の魂をスペアと言い、釘と私の肉を留めます。邪悪のアセンブリのために私に逆らって上昇しています。"
				},
				{
					"id": 20,
					"en": " And again he says, Behold, I have given my back to scourges, and my cheeks to strokes, and I have set my countenance as a firm rock.",
					"ja": "そして再び彼は見よ、と言う、私はストロークに災いに背中、と私の頬を与えている、と私はしっかりと岩のように私の表情を設定しています。"
				},
				{
					"id": 21,
					"en": " Isaiah 50:6-7",
					"ja": "イザヤ50：6-7"
				}
			]
		}
	];

/***/ }
/******/ ]);