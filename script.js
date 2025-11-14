
        let currentLang = 'en';

        const questions_en = [
            {
                question: "How do you typically react to unexpected change?",
                choices: [
                    { text: "I embrace it immediately, viewing it as an exciting new opportunity.", points: 4 },
                    { text: "I approach it with caution and take time to adapt.", points: 1 },
                    { text: "I welcome it, but only after careful planning and thought.", points: 3 },
                    { text: "I usually go with the flow and try to find the bright side.", points: 2 }
                ]
            },
            {
                question: "What is your ideal Friday night?",
                choices: [
                    { text: "Hosting a lively party for all my friends.", points: 3 },
                    { text: "A quiet evening at home with a good book or movie.", points: 1 },
                    { text: "Attending a sophisticated cultural event or gala.", points: 4 },
                    { text: "A casual, cozy dinner with a few close loved ones.", points: 2 }
                ]
            },
            {
                question: "What is your signature style or fashion choice?",
                choices: [
                    { text: "Bold colors and eye-catching accessories.", points: 4 },
                    { text: "Simple, comfortable, and timeless classics.", points: 1 },
                    { text: "Modern, unique pieces that stand out.", points: 3 },
                    { text: "Bright, cheerful patterns that lift the mood.", points: 2 }
                ]
            },
            {
                question: "How do you handle conflict or stress?",
                choices: [
                    { text: "I face it head-on with strong, direct communication.", points: 4 },
                    { text: "I take a step back to breathe and find a peaceful solution.", points: 1 },
                    { text: "I express my feelings honestly and passionately.", points: 3 },
                    { text: "I try to find the humor or positivity in the situation.", points: 2 }
                ]
            },
            {
                question: "Which word best describes your inner world?",
                choices: [
                    { text: "Ambitious", points: 4 },
                    { text: "Content", points: 1 },
                    { text: "Introspective", points: 3 },
                    { text: "Harmonious", points: 2 }
                ]
            },
            {
                question: "What kind of compliment means the most to you?",
                choices: [
                    { text: "That you are unique and intriguing.", points: 4 },
                    { text: "That you are kind and easy to be around.", points: 1 },
                    { text: "That you are powerful or commanding.", points: 3 },
                    { text: "That you are lively and make others smile.", points: 2 }
                ]
            },
            {
                question: "Which role do you most often take in a group?",
                choices: [
                    { text: "The Leader/Visionary.", points: 4 },
                    { text: "The Peacemaker/Supporter.", points: 1 },
                    { text: "The Passionate Advocate.", points: 3 },
                    { text: "The Enthusiastic Motivator.", points: 2 }
                ]
            },
            {
                question: "What natural scent appeals most to you?",
                choices: [
                    { text: "Spicy and woody notes.", points: 4 },
                    { text: "Fresh, grassy, and subtle scents.", points: 1 },
                    { text: "Deep, rich, and earthy tones.", points: 3 },
                    { text: "Sweet, sunny, and fruity aromas.", points: 2 }
                ]
            },
            {
                question: "Which artistic pursuit are you most drawn to?",
                choices: [
                    { text: "Dramatic performance or sculpture.", points: 4 },
                    { text: "Simple sketching or folk music.", points: 1 },
                    { text: "Poetry or passionate painting.", points: 3 },
                    { text: "Cheerful crafts or photography.", points: 2 }
                ]
            },
            {
                question: "What is your primary motivation in life?",
                choices: [
                    { text: "To achieve great things and be unforgettable.", points: 4 },
                    { text: "To maintain peace and inner tranquility.", points: 1 },
                    { text: "To experience deep love and powerful connections.", points: 3 },
                    { text: "To spread happiness and optimism wherever I go.", points: 2 }
                ]
            }
        ];

        const questions_th = [
            {
                question: "โดยปกติแล้ว คุณตอบสนองต่อการเปลี่ยนแปลงที่ไม่คาดคิดอย่างไร?",
                choices: [
                    { text: "ฉันยอมรับมันทันที มองว่ามันเป็นโอกาสที่น่าตื่นเต้นและควรคว้าเอาไว้", points: 4 },
                    { text: "ฉันรับมือกับมันด้วยความระมัดระวัง และใช้เวลาสักพักในการปรับตัว", points: 1 },
                    { text: "ฉันจะยอมรับมัน แต่หลังจากที่ผ่านการคิดและไตร่ตรองมาแล้ว", points: 3 },
                    { text: "ส่วนใหญ่ฉันมักจะชอบตามน้ำไปและพยายามคิดในแง่ดี", points: 2 }
                ]
            },
            {
                question: "คืนวันศุกร์แบบไหนคือคืนในอุดมคติของคุณ?",
                choices: [
                    { text: "จัดปาร์ตี้สนุกสุดเหวี่ยงให้กับเพื่อน ๆ ของคุณ", points: 3 },
                    { text: "อยู่ที่บ้านเงียบ ๆ ในค่ำคืนที่เงียบสงบ พร้อมหนังสือไม่ก็ภาพยนตร์ดี ๆ สักเรื่อง", points: 1 },
                    { text: "เข้าร่วมงานเลี้ยงแสนหรูหราและยิ่งใหญ่", points: 4 },
                    { text: "มื้อค่ำแสนอบอุ่นกับคนที่คุณรัก", points: 2 }
                ]
            },
            {
                question: "สไตล์แฟชั่นประจำตัวของคุณคืออะไร?",
                choices: [
                    { text: "สีสันที่โดดเด่นและเครื่องประดับสะดุดตา", points: 4 },
                    { text: "เรียบง่าย สบาย ๆ ตามแบบดั้งเดิม", points: 1 },
                    { text: "ทันสมัย มีเอกลักษณ์ที่โดดเด่น", points: 3 },
                    { text: "สดใส ลวดลายมีชีวิตชีวา สร้างความรู้สึกดี ๆ", points: 2 }
                ]
            },
            {
                question: "คุณจัดการกับความขัดแย้งหรือความเครียดอย่างไร?",
                choices: [
                    { text: "ฉันเผชิญหน้ากับมันอย่างตรงไปตรงมาด้วยคำพูดที่หนักแน่น", points: 4 },
                    { text: "ฉันถอยห่างจากมัน หายใจเข้าออกให้สงบ และหาทางออกที่สงบสุขที่สุด", points: 1 },
                    { text: "ฉันแสดงความรู้สึกและความคิดของฉันอย่างตรงไปตรงมาด้วยความจริงใจ", points: 3 },
                    { text: "ฉันพยายามมองหาเรื่องขำขันหรือเรื่องดีๆในสถานการณ์นั้น", points: 2 }
                ]
            },
            {
                question: "คำใดอธิบายโลกของคุณได้ดีที่สุด?",
                choices: [
                    { text: "ความทะเยอทะยาน", points: 4 },
                    { text: "ความพึงพอใจ", points: 1 },
                    { text: "การมองโลกในแง่ดี", points: 3 },
                    { text: "ความสามัคคี", points: 2 }
                ]
            },
            {
                question: "คำชมแบบไหนที่มีความหมายกับคุณมากที่สุด?",
                choices: [
                    { text: "คุณเป็นคนที่มีเอกลักษณ์ในแบบของตัวเอง ทั้งน่าสนใจและโดดเด่น", points: 4 },
                    { text: "คุณเป็นคนที่ใจดี อยู่ด้วยแล้วรู้สึกสบายใจ เข้ากับคนได้ง่าย", points: 1 },
                    { text: "คุณเป็นคนที่แข็งแกร่งและมีอำนาจมาก", points: 3 },
                    { text: "คุณเป็นคนที่สดใสมีชีวิตชีวา นำพารอยยิ้มมาให้คนรอบตัวเสมอ", points: 2 }
                ]
            },
            {
                question: "ในกลุ่ม คุณมักจะได้รับบทบาทอะไร?",
                choices: [
                    { text: "ผู้นำที่มีวิสัยทัศน์", points: 4 },
                    { text: "ผู้นำพาสันติที่พร้อมสนับสนุนทุกคน", points: 1 },
                    { text: "ผู้สนับสนุนผู้เป็นที่รัก", points: 3 },
                    { text: "ผู้สร้างแรงบัลดาลใจที่แสนกระตือรือร้น", points: 2 }
                ]
            },
            {
                question: "กลิ่นหอมของธรรมชาติใดที่ดึงดูดคุณได้มากที่สุด?",
                choices: [
                    { text: "กลิ่นที่ผสมเครื่องเทศกับกลิ่นไม้ที่ตัดกันได้อย่างน่าสนใจ", points: 4 },
                    { text: "กลิ่นที่หอมสดชื่นของอากาศ และหญ้าอ่อน ๆ", points: 1 },
                    { text: "กลิ่นที่ลุ่มลึก เข้มข้น คล้ายกลิ่นของดิน", points: 3 },
                    { text: "กลิ่นที่หอมหวานและสดใสดั่งผลไม้", points: 2 }
                ]
            },
            {
                question: "คุณสนใจในงานศิลปะประเภทใดมากที่สุด?",
                choices: [
                    { text: "การแสดงละครหรือประติมากรรม", points: 4 },
                    { text: "ภาพร่างที่เรียบง่ายหรือดนตรีพื้นบ้าน", points: 1 },
                    { text: "บทกวีหรือภาพวาดที่เปี่ยมด้วยความรัก", points: 3 },
                    { text: "งานฝีมือหรือภาพถ่ายที่น่าสนุกสนาน", points: 2 }
                ]
            },
            {
                question: "แรงจูงใจหลักในชีวิตของคุณคืออะไร?",
                choices: [
                    { text: "ประสบความสำเร็จในเรื่องที่ยิ่งใหญ่และเป็นที่น่าจดจำ", points: 4 },
                    { text: "รักษาความสงบไว้ ทั้งกายและใจ", points: 1 },
                    { text: "ได้สัมผัสความรักหวานชื่นและความสัมพันธ์อันแน่นแฟ้น", points: 3 },
                    { text: "ส่งต่อความสุข และความหวังดีในทุก ๆ ที่ที่ฉันไป", points: 2 }
                ]
            }
        ];

        const results = [
            {
                name: { en: "Lavender", th: "ลาเวนเดอร์" },
                subtitle: { en: "The Serene Healer", th: "ผู้เยียวยาที่สงบเสงี่ยม" },
                minScore: 10,
                maxScore: 13,
                image: "lavender.jpg", 
                description: { 
                    en: "You are Lavender! Your defining traits are calmness, serenity, and a deeply comforting nature. You are a steady, grounding presence in a chaotic world. You possess a quiet wisdom and an inner peace that others are instantly drawn to. You are introspective and nurturing, often offering thoughtful advice and a safe space for people to rest. You prioritize well-being and harmony, finding strength in stillness and tranquility.",
                    th: "คุณคือดอกลาเวนเดอร์! ลักษณะเด่นของคุณคือ ความสงบ ความเยือกเย็น และความเป็นธรรมชาติที่ช่วยปลอบประโลมจิตใจได้อย่างลึกซึ้ง คุณคือความมั่นคงและที่พึ่งพิงในโลกที่วุ่นวาย คุณมีปัญญาที่เงียบสงบและความสงบภายในที่ดึงดูดผู้คนเข้ามาหา คุณชอบการใคร่ครวญและเป็นผู้เลี้ยงดู มักจะให้คำแนะนำที่ผ่านการคิดอย่างถี่ถ้วนและเป็นพื้นที่ปลอดภัยให้คนอื่นได้พักพิง คุณให้ความสำคัญกับความเป็นอยู่ที่ดีและความกลมกลืน โดยค้นพบความเข้มแข็งในความนิ่งและความสงบ"
                }
            },
            {
                name: { en: "Daisy", th: "เดซี่" },
                subtitle: { en: "The Friendly Companion", th: "เพื่อนผู้เป็นมิตร" },
                minScore: 14,
                maxScore: 17,
                image: "daisy.jpg",
                description: { 
                    en: "You are a Daisy! You embody innocence, simplicity, and gentle joy. You are the definition of a true friend—loyal, honest, and easy to be around. You are effortlessly cheerful, seeing the good in people and life's simple pleasures. You don't need grand gestures; you find happiness in a sunny day, a good laugh, and the company of those you love. Your presence is like a breath of fresh air, offering comfort and a sweet, unwavering optimism to everyone you meet.",
                    th: "คุณคือดอกเดซี่! คุณเป็นตัวแทนของ ความบริสุทธิ์ ความเรียบง่าย และความสุขที่อ่อนโยน คุณคือคำจำกัดความของเพื่อนแท้—ซื่อสัตย์ จริงใจ และเข้าถึงง่าย คุณมีความร่าเริงอย่างเป็นธรรมชาติ มองเห็นสิ่งดีงามในผู้คนและความสุขในชีวิตที่เรียบง่าย คุณไม่ต้องการการแสดงออกที่ยิ่งใหญ่ แต่ค้นพบความสุขในวันที่แดดจ้า การหัวเราะที่ดี และการอยู่ร่วมกับคนที่คุณรัก การปรากฏตัวของคุณเหมือนสายลมที่บริสุทธิ์ มอบความสบายใจและการมองโลกในแง่ดีที่ไม่เปลี่ยนแปลงให้กับทุกคนที่คุณพบเจอ"
                }
            },
            {
                name: { en: "Tulip", th: "ทิวลิป" },
                subtitle: { en: "The Cheerful Adaptor", th: "นักปรับตัวผู้ร่าเริง" },
                minScore: 18,
                maxScore: 20,
                image: "tulip.jpg",
                description: { 
                    en: "You are a Tulip! You are cheerful, vibrant, and incredibly adaptable. You represent the fresh start of spring, always ready to embrace change and new beginnings with a smile. You are thoughtful and easygoing, able to fit into many situations and social circles effortlessly. Your colorful energy and pleasant disposition make you a lovely presence, symbolizing hope and simple, pure joy.",
                    th: "คุณคือดอกทิวลิป! คุณเป็นคน ร่าเริง สดใส และสามารถปรับตัวได้ดีอย่างไม่น่าเชื่อ คุณเป็นสัญลักษณ์ของการเริ่มต้นใหม่ในฤดูใบไม้ผลิ พร้อมเสมอที่จะยอมรับการเปลี่ยนแปลงและการเริ่มต้นใหม่ด้วยรอยยิ้ม คุณเป็นคนมีน้ำใจและสบายๆ สามารถเข้ากับสถานการณ์และวงสังคมต่างๆ ได้อย่างง่ายดาย พลังงานที่เต็มไปด้วยสีสันและอุปนิสัยที่น่ารักของคุณทำให้คุณเป็นที่รัก แสดงถึงความหวังและความสุขที่บริสุทธิ์และเรียบง่าย"
                }
            },
            {
                name: { en: "Sunflower", th: "ทานตะวัน" },
                subtitle: { en: "The Joyful Optimist", th: "นักมองโลกในแง่ดีผู้เปี่ยมสุข" },
                minScore: 21,
                maxScore: 23,
                image: "sunflower.jpg",
                description: { 
                    en: "You are a Sunflower! You are bright, bold, and unapologetically optimistic. You radiate warmth and positivity, drawing people in like the sun draws the flower. You are enthusiastic, full of energy, and have an infectious zest for life. You are a natural-born loyalist, always facing the light and guiding others toward the brighter side of things. When you enter a room, you bring happiness and become the vibrant center of attention.",
                    th: "คุณคือดอกทานตะวัน! คุณเป็นคน สดใส โดดเด่น และมองโลกในแง่ดีอย่างเปิดเผย คุณแผ่รังสีแห่งความอบอุ่นและพลังบวก ดึงดูดผู้คนเข้ามาเหมือนดวงอาทิตย์ดึงดูดดอกไม้ คุณกระตือรือร้น เต็มเปี่ยมไปด้วยพลังงาน และมีชีวิตชีวาที่แพร่เชื้อได้ คุณเป็นคนซื่อสัตย์โดยธรรมชาติ มักจะเผชิญหน้ากับแสงสว่างและนำทางผู้อื่นไปสู่ด้านที่สดใสกว่า เมื่อคุณก้าวเข้าสู่ห้องใด คุณจะนำความสุขมาให้และกลายเป็นจุดศูนย์กลางที่สดใส"
                }
            },
            {
                name: { en: "Carnation", th: "คาร์เนชั่น" },
                subtitle: { en: "The Energetic Versatile", th: "ผู้เปี่ยมพลังที่ปรับเปลี่ยนได้" },
                minScore: 24,
                maxScore: 26,
                image: "carnation.jpg",
                description: { 
                    en: "You are a Carnation! You are energetic, versatile, and bold in your expressions. You are known for your resilience and ability to thrive in various forms and settings. You have a lively, spirited personality and a strong sense of distinction—you are not afraid to be loud, colorful, and completely yourself. Your dynamism and complexity make you fascinating and enduring.",
                    th: "คุณคือดอกคาร์เนชั่น! คุณเป็นคน เปี่ยมพลัง ปรับเปลี่ยนได้หลากหลาย และกล้าหาญในการแสดงออก คุณเป็นที่รู้จักในเรื่องความยืดหยุ่นและความสามารถในการเจริญเติบโตในรูปแบบและสภาพแวดล้อมที่หลากหลาย คุณมีบุคลิกที่สดใส มีชีวิตชีวา และมีความโดดเด่นอย่างชัดเจน คุณไม่กลัวที่จะเป็นคนเสียงดัง มีสีสัน และเป็นตัวของตัวเองอย่างเต็มที่ พลวัตและความซับซ้อนของคุณทำให้คุณเป็นคนที่น่าสนใจและยืนยง"
                }
            },
            {
                name: { en: "Rose", th: "กุหลาบ" },
                subtitle: { en: "The Passionate Romantic", th: "ผู้อ่อนไหวที่เปี่ยมรัก" },
                minScore: 27,
                maxScore: 29,
                image: "rose.jpg",
                description: { 
                    en: "You are a Rose! You are defined by passion, classic beauty, and deep, powerful emotion. You are a romantic at heart, valuing deep connections, loyalty, and tradition. You carry yourself with timeless elegance and have an intense charisma that captivates others. While you may have a protective side (your 'thorns'), your inner core is soft, expressive, and ready to give and receive profound love.",
                    th: "คุณคือดอกกุหลาบ! คุณถูกนิยามด้วย ความหลงใหล ความงามแบบคลาสสิก และอารมณ์ที่ลึกซึ้งและทรงพลัง คุณเป็นคนโรแมนติกโดยเนื้อแท้ ให้ความสำคัญกับความสัมพันธ์ที่ลึกซึ้ง ความภักดี และขนบธรรมเนียม คุณวางตัวด้วยความสง่างามเหนือกาลเวลาและมีเสน่ห์ที่เข้มข้นที่สะกดใจผู้อื่น แม้ว่าคุณอาจมีหนามที่พร้อมทิ่มแทง แต่แก่นแท้ภายในของคุณนั้นอ่อนโยน เปิดเผย และพร้อมที่จะมอบและรับความรักอันลึกซึ้ง"
                }
            },
            {
                name: { en: "Lily", th: "ลิลลี่" },
                subtitle: { en: "The Elegant Dignitary", th: "ผู้มีเกียรติที่สง่างาม" },
                minScore: 30,
                maxScore: 33,
                image: "lily.jpg",
                description: { 
                    en: "You are a Lily! Your essence is elegance, dignity, and quiet nobility. You possess a refined grace and carry yourself with poise and confidence. You value purity, respect, and are often seen as a symbol of renewal and high honor. You may be reserved, but your presence is powerful and soothing, exuding a calming wisdom and sophisticated beauty that commands respect.",
                    th: "คุณคือดอกลิลลี่! แก่นแท้ของคุณคือ ความสง่างาม เกียรติยศ และความสูงส่งที่เงียบสงบ คุณมีความงามที่ประณีตและวางตัวด้วยความสงบและความมั่นใจ คุณให้ความสำคัญกับความบริสุทธิ์ ความเคารพ และมักถูกมองว่าเป็นสัญลักษณ์ของการเริ่มต้นใหม่และเกียรติยศชั้นสูง คุณอาจจะเก็บตัว แต่การปรากฏตัวของคุณทรงพลังและผ่อนคลาย แสดงออกถึงปัญญาที่สงบเงียบและความงามที่ซับซ้อนที่น่าเคารพ"
                }
            },
            {
                name: { en: "Orchid", th: "กล้วยไม้" },
                subtitle: { en: "The Mysterious Sophisticate", th: "ผู้ลึกลับที่ซับซ้อน" },
                minScore: 34,
                maxScore: 40,
                image: "orchid.jpg",
                description: { 
                    en: "You are an Orchid! You are mysterious, unique, and highly sophisticated. You are rare and complex, possessing an exotic beauty and a flair for the uncommon. You value individuality and introspection, often being a deep thinker and visionary. You don't follow trends; you set them. Your creative, alluring, and slightly enigmatic nature means you stand out wherever you go, always leaving others wanting to learn more about your depths.",
                    th: "คุณคือกล้วยไม้! คุณเป็นคน ลึกลับ มีเอกลักษณ์ และมีความซับซ้อนสูง คุณเป็นของหายากและซับซ้อน มีความงามที่แปลกใหม่และมีสไตล์ที่ไม่เหมือนใคร คุณให้ความสำคัญกับความเป็นปัจเจกชนและการใคร่ครวญ มักเป็นนักคิดที่ลึกซึ้งและมีวิสัยทัศน์ คุณไม่ตามเทรนด์ แต่คุณเป็นคนกำหนดเทรนด์ ธรรมชาติที่สร้างสรรค์ มีเสน่ห์ และลึกลับเล็กน้อยของคุณหมายความว่าคุณโดดเด่นในทุกที่ที่คุณไป และทำให้คนอื่นอยากเรียนรู้เพิ่มเติมเกี่ยวกับความลึกซึ้งในตัวคุณอยู่เสมอ"
                }
            }
        ];

        let currentQuestion = 0;
        let userAnswers = [];
        let totalScore = 0;

        function getQuestions() {
            return currentLang === 'en' ? questions_en : questions_th;
        }
        
        function updateContent() {
            document.querySelectorAll('[data-en]').forEach(el => {
                const text = el.getAttribute(`data-${currentLang}`);
                if (text) {
                    el.textContent = text;
                }
            });

            document.title = document.querySelector('title').getAttribute(`data-${currentLang}`);

            if (document.getElementById('quizPage').classList.contains('active')) {
                displayQuestion();
            }
            
            if (document.getElementById('resultPage').classList.contains('active')) {
                const result = results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);
                if (result) displayResult(result);
            }
        }

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'th' : 'en';
            document.documentElement.lang = currentLang;
            updateContent();
        }


        function startQuiz() {
            document.getElementById('startPage').classList.remove('active');
            document.getElementById('quizPage').classList.add('active');
            displayQuestion();
            updateContent();
        }

        function displayQuestion() {
            const questions = getQuestions();
            const question = questions[currentQuestion];
            const container = document.getElementById('questionContainer');
            const lang = currentLang;
            
            const questionNumberText = lang === 'en' 
                ? `Question ${currentQuestion + 1} of ${questions.length}` 
                : `คำถามที่ ${currentQuestion + 1} จาก ${questions.length}`;

            container.innerHTML = `
                <div class="question-number">${questionNumberText}</div>
                <div class="question-text">${question.question}</div>
                <div class="choices">
                    ${question.choices.map((choice, index) => `
                        <div class="choice" onclick="selectChoice(${index})" data-index="${index}">
                            ${choice.text}
                        </div>
                    `).join('')}
                </div>
            `;

            if (userAnswers[currentQuestion] !== undefined) {
                const choices = container.querySelectorAll('.choice');
                choices[userAnswers[currentQuestion]].classList.add('selected');
            }

            updateProgress();
            updateButtons();
        }

        function selectChoice(index) {
            const choices = document.querySelectorAll('.choice');
            choices.forEach(choice => choice.classList.remove('selected'));
            choices[index].classList.add('selected');
            userAnswers[currentQuestion] = index;
        }

        function updateProgress() {
            const progress = ((currentQuestion + 1) / questions_en.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
        }

        function updateButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const lang = currentLang;

            prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
            
            if (currentQuestion === questions_en.length - 1) {
                nextBtn.textContent = lang === 'en' ? 'Submit' : 'ยืนยันคำตอบ';
            } else {
                nextBtn.textContent = lang === 'en' ? 'Next' : 'ถัดไป';
            }
        }

        function nextQuestion() {
            if (userAnswers[currentQuestion] === undefined) {
                alert(currentLang === 'en' ? 'Please select an answer before continuing' : 'โปรดเลือกคำตอบก่อนดำเนินการต่อ');
                return;
            }

            if (currentQuestion < questions_en.length - 1) {
                currentQuestion++;
                displayQuestion();
            } else {
                calculateResult();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                displayQuestion();
            }
        }

        function calculateResult() {
            totalScore = 0;
            const questions_data = questions_en;
            
            userAnswers.forEach((answerIndex, questionIndex) => {
                totalScore += questions_data[questionIndex].choices[answerIndex].points;
            });

            const result = results.find(r => totalScore >= r.minScore && totalScore <= r.maxScore);

            displayResult(result);

            document.getElementById('quizPage').classList.remove('active');
            document.getElementById('resultPage').classList.add('active');
        }

        function displayResult(result) {
             const lang = currentLang;

             document.getElementById('scoreDisplay').textContent = `${lang === 'en' ? 'Your Score' : 'คะแนนของคุณ'}: ${totalScore} ${lang === 'en' ? 'points' : 'คะแนน'}`;
            
             const resultImageContainer = document.getElementById('resultImage');
            resultImageContainer.innerHTML = `<img src="images/${result.image}" alt="${result.name.en}" class="result-flower-image">`;

             document.getElementById('resultTitle').textContent = result.name[lang];
             document.getElementById('resultSubtitle').textContent = result.subtitle[lang];
             document.getElementById('resultDescription').textContent = result.description[lang];
        }

        function restartQuiz() {
            currentQuestion = 0;
            userAnswers = [];
            totalScore = 0;
            document.getElementById('resultPage').classList.remove('active');
            document.getElementById('startPage').classList.add('active');
            updateContent(); 
        }

        window.onload = updateContent;