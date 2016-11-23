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
					"en": "It therefore behooves us, who inquire much concerning events at hand, to search diligently into those things which are able to save us.",
					"ja": "したがって、私たちを救うことができますそれらの事に熱心に検索するために、手元にずっとに関するイベントを尋ねる人は、私たちに不可欠な時代。"
				},
				{
					"id": 2,
					"en": " Let us then utterly flee from all the works of iniquity, lest these should take hold of us; and let us hate the error of the present time, that we may set our love on the world to come: let us not give loose reins to our soul, that it should have power to run with sinners and the wicked, lest we become like them.",
					"ja": "これらは私たちのホールドを取る必要がないように、私たちはその後、全く、不義のすべての作品から逃げるましょう。そして私たちが来て、世界に私たちの愛を設定することが、現在の時刻の誤差を憎むみましょう：私たちはのようになるといけないので、それは罪人と邪悪で実行する力を持っている必要があることを、私たちは私たちの魂に緩い手綱を与えないようにしましょうそれら。"
				},
				{
					"id": 3,
					"en": " The final stumbling-block (or source of danger) approaches, concerning which it is written, as Enoch says, For for this end the Lord has cut short the times and the days, that His Beloved may hasten; and He will come to the inheritance.",
					"ja": "エノクが言うように、この終わりのために主は時間と日を短くカットしているための障害ブロック（または危険の源）最終的には彼の最愛のは早める可能性があること、それが書かれたに関する、近づきます。そして彼は、相続に来ます。"
				},
				{
					"id": 4,
					"en": " And the prophet also speaks thus: Ten kingdoms shall reign upon the earth, and a little king shall rise up after them, who shall subdue under one three of the kings.",
					"ja": "そして、預言者はまた、このように話す：10王国が地上に君臨しなければならない、と少しの王は王の1 3の下で討伐しなければならない人は、それらの後まで上昇しなければなりません。"
				},
				{
					"id": 5,
					"en": " In like manner Daniel says concerning the same, And I beheld the fourth beast, wicked and powerful, and more savage than all the beasts of the earth, and how from it sprang up ten horns, and out of them a little budding horn, and how it subdued under one three of the great horns.",
					"ja": "同様にダニエルは同じに関して言い、そして、私はそれは、十の角を跳び、それらのうちほとんど出芽ホーンから第四邪悪で強力な、と地のすべての獣よりも野蛮な獣、方法、およびbeholdの過去過去分詞、およびそれはどのように偉大なホーンの1 3の下で落ち着きました。"
				},
				{
					"id": 6,
					"en": " You ought therefore to understand.",
					"ja": "あなたが理解することべきです。"
				},
				{
					"id": 7,
					"en": " And this also I further beg of you, as being one of you, and loving you both individually and collectively more than my own soul, to take heed now to yourselves, and not to be like some, adding largely to your sins, and saying, The covenant is both theirs and ours.",
					"ja": "あなたの一つである、との両方の個別と総称し、私自身の魂よりもあなたを愛し、あなた自身に今注意を取るために、そしていくつかのようではないと、あなたの罪を大幅に追加し、言うように、これは私もさらにあなたのBEG、 、契約は彼らと私たちの両方です。"
				},
				{
					"id": 8,
					"en": " But they thus finally lost it, after Moses had already received it.",
					"ja": "モーセはすでにそれを受け取った後、しかし、彼らはこのように、最終的に、それを失いました。"
				},
				{
					"id": 9,
					"en": " For the Scripture says, And Moses was fasting in the mount forty days and forty nights, and received the covenant from the Lord, tables of stone written with the finger of the hand of the Lord; Exodus 31:18, Exodus 34:28 but turning away to idols, they lost it.",
					"ja": "聖書は言う、モーセはマウント40日四十夜断食し、主から契約を受け取ったために、主の手の指で書かれた石のテーブル。出エジプト記31:18、出エジプト記34:28しかし、偶像に背を向け、彼らはそれを失いました。"
				},
				{
					"id": 10,
					"en": " For the Lord speaks thus to Moses: Moses go down quickly; for the people whom you have brought out of the land of Egypt have transgressed.",
					"ja": "主のためにモーセにこのように話す：モーセはすぐにダウンしました。あなたがエジプトの地から持ってきた人のために犯してきました。"
				},
				{
					"id": 11,
					"en": " Exodus 32:7; Deuteronomy 9:12 And Moses understood [the meaning of God], and cast the two tables out of his hands; and their covenant was broken, in order that the covenant of the beloved Jesus might be sealed upon our heart, in the hope which flows from believing in Him.",
					"ja": "出エジプト記32：7;申命記9：12モーセは[神の意味]を理解し、彼の手のうち2つのテーブルをキャスト。そして、それらの契約は、最愛のイエスの契約が彼を信じから流れを期待して、私たちの心の時に密封されるかもしれないようにするために、壊れていました。"
				},
				{
					"id": 12,
					"en": " Now, being desirous to write many things to you, not as your teacher, but as becomes one who loves you, I have taken care not to fail to write to you from what I myself possess, with a view to your purification.",
					"ja": "さて、ではないあなたの教師として、あなたに多くのことを書くことを望んでいるが、あなたを愛して1になるように、私はあなたの精製を視野に、私自身が持っているものから、あなたへの書き込みに失敗しないように注意を払っております。"
				},
				{
					"id": 13,
					"en": " We take earnest heed in these last days; for the whole [past] time of your faith will profit you nothing, unless now in this wicked time we also withstand coming sources of danger, as becomes the sons of God.",
					"ja": "我々は、これらの最後の日に本格的な注意を払います。あなたがたの信仰の全体[過去]の時間のために神の子になるようになりましたこの邪悪な時に我々はまた、危険の来源に耐えていない限り、あなたに何も利益ません。"
				},
				{
					"id": 14,
					"en": " That the Black One may find no means of entrance, let us flee from every vanity, let us utterly hate the works of the way of wickedness.",
					"ja": "ブラック一つは入り口の手段を全く見つけないかもしれないことを、私たちは全く邪悪の道の作品を嫌いしましょう、私たちはすべての虚栄心から逃れるましょう。"
				},
				{
					"id": 15,
					"en": " Do not, by retiring apart, live a solitary life, as if you were already [fully] justified; but coming together in one place, make common inquiry concerning what tends to your general welfare.",
					"ja": "あなたは既に[完全]正当であるかのように、離れて引退することにより、孤独な人生を生きてはいけません。しかし、1つの場所に一緒に来て、あなたの一般的な福祉に傾向があるものについては共通の問い合わせを行います。"
				},
				{
					"id": 16,
					"en": " For the Scripture says, Woe to them who are wise to themselves, and prudent in their own sight!",
					"ja": "聖書が言うには、彼らに災い、自分の目の前で自分自身に滴下し、慎重な人！"
				},
				{
					"id": 17,
					"en": " Isaiah 5:21 Let us be spiritually-minded: let us be a perfect temple to God.",
					"ja": "イザヤ午前5時21分は、私たちは霊的な考えを持つことがしてみましょう：私たちは神に完璧な寺であるとします。"
				},
				{
					"id": 18,
					"en": " As much as in us lies, let us meditate upon the fear of God, and let us keep His commandments, that we may rejoice in His ordinances.",
					"ja": "限りある私たちのように、我々は彼の条例に喜ぶことが、私たちは神の恐れ黙想し、私たちが彼の戒めを守るせてみましょう。"
				},
				{
					"id": 19,
					"en": " The Lord will judge the world without respect of persons.",
					"ja": "主は人の尊敬のない世界を判断させていただきます。"
				},
				{
					"id": 20,
					"en": " Each will receive as he has done: if he is righteous, his righteousness will precede him; if he is wicked, the reward of wickedness is before him.",
					"ja": "彼が行っているように、それぞれが届きます：彼は正しい者であれば、その義は彼に先行します。彼は邪悪であれば、邪悪の報酬は、彼の前にあります。"
				},
				{
					"id": 21,
					"en": " Take heed, lest resting at our ease, as those who are the called [of God], we should fall asleep in our sins, and the wicked prince, acquiring power over us, should thrust us away from the kingdom of the Lord.",
					"ja": "注意を払う、[神の]と呼ばれている者として、私たちの安心して休んでないように、私たちは私たちの罪のうちに眠りに落ちるべきである、と邪悪な王子、私たちを支配する力を取得し、離れて主の王国から私たちを突きする必要があります。"
				},
				{
					"id": 22,
					"en": " And all the more attend to this, my brethren, when you reflect and behold, that after so great signs and wonders were wrought in Israel, they were thus [at length] abandoned.",
					"ja": "そして、すべてのより多くのあなたが反映するとき、この、私の兄弟に出席するので、大いなるしるしと不思議がイスラエルに細工された後、彼らは[長さで]このようにしていた放棄されたことを、見よ。"
				},
				{
					"id": 23,
					"en": " Let us beware lest we be found [fulfilling that saying], as it is written, Many are called, but few are chosen.",
					"ja": "我々は見つけることがないように私たちは用心しましょう、それが書かれているように、多くが呼ばれているが、いくつかは、選択され、[言っていることを満たします]。"
				}
			]
		}
	];

/***/ }
/******/ ]);