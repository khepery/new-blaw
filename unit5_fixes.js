document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('currentYearChinese').textContent = currentYear;

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Progress bar
    const progressBar = document.getElementById('progressBar');

    // Scroll up button
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const frogSound = document.getElementById('frog-sound');

    // Update nav active state and progress bar on scroll
    window.addEventListener('scroll', function () {
        updateActiveNavLink();
        updateProgressBar();
        toggleScrollUpButton();
    });

    function updateActiveNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    function updateProgressBar() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        progressBar.style.width = scrollPercentRounded + "%";
    }

    function toggleScrollUpButton() {
        if (window.pageYOffset > 300) {
            scrollUpBtn.classList.add('visible');
            scrollUpBtn.classList.remove('hidden');
        } else {
            scrollUpBtn.classList.remove('visible');
            scrollUpBtn.classList.add('hidden');
        }
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Scroll up button
    scrollUpBtn.addEventListener('click', function () {
        frogSound.play().catch(e => console.log('Audio play failed:', e));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Knowledge check functionality
    function setupKnowledgeCheck(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const checkAnswersBtn = document.getElementById(`checkAnswersBtn_${sectionId}`);
        const revealAnswersBtn = document.getElementById(`revealAnswersBtn_${sectionId}`);
        const inputFields = section.querySelectorAll('.blank-input');

        if (checkAnswersBtn) {
            checkAnswersBtn.addEventListener('click', function () {
                inputFields.forEach(input => {
                    const userAnswer = input.value.trim().toLowerCase();
                    const correctAnswer = input.dataset.answer.toLowerCase();

                    // Remove previous classes
                    input.classList.remove('correct', 'incorrect');

                    if (userAnswer === correctAnswer) {
                        input.classList.add('correct');
                    } else if (userAnswer !== '') {
                        input.classList.add('incorrect');
                    }
                });
            });
        }

        if (revealAnswersBtn) {
            revealAnswersBtn.addEventListener('click', function () {
                inputFields.forEach(input => {
                    input.value = input.dataset.answer;
                    input.classList.remove('incorrect');
                    input.classList.add('correct');
                });
            });
        }
    }

    // Setup all knowledge checks
    setupKnowledgeCheck('kc_misleading_conduct');
    setupKnowledgeCheck('kc_consumer_guarantees');

    // Toggle knowledge check sections
    const knowledgeCheckBtn_misleading_conduct = document.getElementById('knowledgeCheckBtn_misleading_conduct');
    const knowledgeCheckBtn_consumer_guarantees = document.getElementById('knowledgeCheckBtn_consumer_guarantees');

    if (knowledgeCheckBtn_misleading_conduct) {
        knowledgeCheckBtn_misleading_conduct.addEventListener('click', function () {
            const kc = document.getElementById('kc_misleading_conduct');
            if (kc) kc.classList.toggle('hidden');
        });
    }

    if (knowledgeCheckBtn_consumer_guarantees) {
        knowledgeCheckBtn_consumer_guarantees.addEventListener('click', function () {
            const kc = document.getElementById('kc_consumer_guarantees');
            if (kc) kc.classList.toggle('hidden');
        });
    }

    // Enhanced Misleading Ad Analyzer
// Enhanced Misleading Ad Analyzer
    const misleadingAdScenarios = {
        1: {
            title: "Tech Store: 'Limited Time Only' Sale",
            title_zh: "科技商店：“限时特卖”",
            description: "ElectroWorld has been advertising a '48-hour flash sale' on laptops for the past 3 months, with countdown timers that reset every 2 days.",
            description_zh: "ElectroWorld在过去3个月里一直在为笔记本电脑进行“48小时闪购”广告，倒计时器每2天重置一次。",
            details: "Investigation shows the 'sale price' has been the regular price for 6 months.",
            details_zh: "调查显示，“促销价”实际上已经是6个月来的常规价格。",
            breaches: true,
            analysis: "This clearly breaches Section 18. The claim of a 'limited time' sale is misleading when it has been running continuously for months. The resetting countdown timer creates false urgency.",
            analysis_zh: "这明显违反了第18条。当“限时”促销持续数月时，该声明具有误导性。重置的倒计时器制造了虚假的紧迫感。",
            keyPoints: [
                "False urgency is a form of misleading conduct",
                "Sale claims must be genuine and time-limited",
                "Continuous 'sales' can mislead consumers about value"
            ],
            keyPoints_zh: [
                "虚假的紧迫感是一种误导性行为",
                "促销声明必须是真实且有时间限制的",
                "持续的“促销”可能会误导消费者对价值的判断"
            ]
        },
        2: {
            title: "Health Product: 'Doctor Recommended'",
            title_zh: "保健品：“医生推荐”",
            description: "VitaBoost supplements claim to be 'recommended by doctors' and display images of people in white coats.",
            description_zh: "VitaBoost补充剂声称“经医生推荐”，并展示了穿着白大褂的人的图片。",
            details: "The 'doctors' are paid actors, and no medical professionals have endorsed the product.",
            details_zh: "所谓的“医生”是付费演员，没有任何医疗专业人士为该产品背书。",
            breaches: true,
            analysis: "This breaches Section 18. Using actors dressed as doctors and false endorsement claims misleads consumers about the product's credibility and medical backing.",
            analysis_zh: "这违反了第18条。使用穿着医生服装的演员和虚假的代言声明误导了消费者对产品信誉和医疗支持的判断。",
            keyPoints: [
                "False professional endorsements are highly misleading",
                "Visual representations (actors as doctors) can mislead",
                "Health claims require genuine medical support"
            ],
            keyPoints_zh: [
                "虚假的专业背书具有高度误导性",
                "视觉表现（演员扮演医生）可能会产生误导",
                "健康声明需要真实的医疗支持"
            ]
        },
        3: {
            title: "Car Dealership: 'No Deposit' Offer",
            title_zh: "汽车经销商：“零首付”优惠",
            description: "AutoMax advertises 'No Deposit Car Loans!' in large text, with small print stating 'for approved customers with credit score above 850'.",
            description_zh: "AutoMax用大号字体宣传“零首付车贷！”，但小字注明“适用于信用评分850以上的获批客户”。",
            details: "Credit scores above 850 are extremely rare (less than 1% of population).",
            details_zh: "850以上的信用评分极为罕见（不到人口的1%）。",
            breaches: true,
            analysis: "This likely breaches Section 18. While technically accurate, the prominent 'No Deposit' claim is misleading when virtually no customers qualify. The conditions make the offer practically meaningless.",
            analysis_zh: "这很可能违反了第18条。虽然技术上准确，但当几乎没有客户符合条件时，突出的“零首付”声明具有误导性。这些条件使该优惠几乎毫无意义。",
            keyPoints: [
                "Headline claims must not mislead about availability",
                "Fine print doesn't cure misleading headlines",
                "Offers must be realistically available"
            ],
            keyPoints_zh: [
                "头条声明不得误导可获得性",
                "小字条款不能弥补误导性的标题",
                "优惠必须是实际可行的"
            ]
        },
        4: {
            title: "Online Course: 'Guaranteed Success'",
            title_zh: "在线课程：“保证成功”",
            description: "LearnFast coding bootcamp claims 'We guarantee you'll land a $100k job or your money back!'",
            description_zh: "LearnFast编程训练营声称“我们保证你能找到一份10万美元的工作，否则退款！”",
            details: "The guarantee requires completing 500 job applications, 20 hours/week study for 12 months, and relocation anywhere in the world.",
            details_zh: "该保证要求完成500份工作申请，每周学习20小时，持续12个月，并愿意搬到世界任何地方。",
            breaches: false,
            analysis: "This may not breach Section 18 if all conditions are clearly disclosed upfront. While the conditions are onerous, if they're prominently displayed (not hidden), the guarantee claim may be acceptable.",
            analysis_zh: "如果所有条件都已预先明确披露，这可能不违反第18条。虽然条件苛刻，但如果它们被显著展示（而不是隐藏），该保证声明可能是可接受的。",
            keyPoints: [
                "Conditional guarantees are allowed if conditions are clear",
                "Disclosure must be prominent, not hidden",
                "Unrealistic conditions may still be problematic"
            ],
            keyPoints_zh: [
                "如果条件明确，有条件的保证是允许的",
                "披露必须显著，不能隐藏",
                "不切实际的条件可能仍有问题"
            ]
        }
    };

    // Setup Misleading Ad Analyzer
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    const scenarioDisplay = document.getElementById('scenarioDisplay');
    const yesBreachBtn = document.getElementById('yesBreachBtn');
    const noBreachBtn = document.getElementById('noBreachBtn');
    const checkAnalysisBtn = document.getElementById('checkAnalysisBtn');
    const analysisResult = document.getElementById('analysisResult');
    
    let currentScenario = null;
    let studentChoice = null;

    scenarioButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const scenarioId = this.dataset.scenario;
            currentScenario = misleadingAdScenarios[scenarioId];
            
            // Reset display
            scenarioDisplay.classList.remove('hidden');
            analysisResult.classList.add('hidden');
            studentChoice = null;
            document.getElementById('studentReasoning').value = '';
            
            // Update scenario content with both English and Chinese
            document.getElementById('scenarioTitle').innerHTML = `${currentScenario.title} <span class="chinese-text-body text-sm">${currentScenario.title_zh}</span>`;
            document.getElementById('scenarioDescription').innerHTML = `${currentScenario.description} <span class="chinese-text-body text-sm">${currentScenario.description_zh}</span>`;
            document.getElementById('scenarioDetails').innerHTML = `${currentScenario.details} <span class="chinese-text-body text-sm">${currentScenario.details_zh}</span>`;
            
            // Reset button states
            yesBreachBtn.classList.remove('bg-red-300', 'ring-2', 'ring-red-500');
            noBreachBtn.classList.remove('bg-green-300', 'ring-2', 'ring-green-500');
        });
    });

    if (yesBreachBtn) {
        yesBreachBtn.addEventListener('click', function() {
            studentChoice = true;
            this.classList.add('bg-red-300', 'ring-2', 'ring-red-500');
            noBreachBtn.classList.remove('bg-green-300', 'ring-2', 'ring-green-500');
        });
    }

    if (noBreachBtn) {
        noBreachBtn.addEventListener('click', function() {
            studentChoice = false;
            this.classList.remove('bg-red-300', 'ring-2', 'ring-red-500');
            yesBreachBtn.classList.remove('bg-red-300', 'ring-2', 'ring-red-500');
            this.classList.add('bg-green-300', 'ring-2', 'ring-green-500');
        });
    }

    if (checkAnalysisBtn) {
        checkAnalysisBtn.addEventListener('click', function() {
            if (studentChoice === null) {
                alert('Please select whether this breaches Section 18');
                return;
            }
            
            analysisResult.classList.remove('hidden');
            
            const isCorrect = studentChoice === currentScenario.breaches;
            const resultText = isCorrect ? '✅ Correct! (正确!)' : '❌ Incorrect (不正确)';
            
            document.getElementById('expertAnalysis').innerHTML = `
                <p class="mb-2 font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}">${resultText}</p>
                <p class="mb-2">${currentScenario.analysis} <span class="chinese-text-body text-sm">${currentScenario.analysis_zh}</span></p>
            `;
            
            const keyPointsHTML = currentScenario.keyPoints.map((point, index) => 
                `<li>${point} <span class="chinese-text-body text-sm">${currentScenario.keyPoints_zh[index]}</span></li>`
            ).join('');

            document.getElementById('keyLearningPoints').innerHTML = `
                <h6 class="font-semibold mb-2">Key Learning Points: <span class="chinese-text-body text-sm">关键学习点：</span></h6>
                <ul class="list-disc ml-5 text-sm">
                    ${keyPointsHTML}
                </ul>
            `;
        });
    }

    // Consumer Guarantees Match Game
// Consumer Guarantees Match Game
    const gameScenarios = [
        {
            text: "A new phone stops working after 2 weeks of normal use",
            text_zh: "一部新手机在正常使用2周后停止工作",
            correctSection: "54",
            explanation: "This relates to acceptable quality - goods must be durable",
            explanation_zh: "这与可接受的质量有关 - 商品必须耐用"
        },
        {
            text: "Customer asks for hiking boots for mountain climbing, but they fall apart on the first hike",
            text_zh: "顾客要求购买用于登山的徒步靴，但第一次远足时靴子就散架了",
            correctSection: "55",
            explanation: "The customer disclosed a specific purpose and the goods weren't fit for it",
            explanation_zh: "顾客披露了特定目的，而商品不适合该目的"
        },
        {
            text: "Online listing says 'genuine leather jacket' but it's actually synthetic",
            text_zh: "在线列表称“真皮夹克”，但实际上是合成材料",
            correctSection: "56",
            explanation: "The goods don't match their description",
            explanation_zh: "商品与其描述不符"
        },
        {
            text: "Furniture fabric feels rough compared to the smooth sample shown in store",
            text_zh: "家具面料与商店展示的光滑样品相比感觉粗糙",
            correctSection: "57",
            explanation: "The delivered goods don't match the sample quality",
            explanation_zh: "交付的商品与样品质量不符"
        },
        {
            text: "A toaster has exposed wires that could cause electric shock",
            text_zh: "一个烤面包机有裸露的电线，可能导致触电",
            correctSection: "54",
            explanation: "Safety is a key aspect of acceptable quality",
            explanation_zh: "安全是可接受质量的一个关键方面"
        },
        {
            text: "Customer tells staff they need waterproof paint for outdoors, but the paint washes off in rain",
            text_zh: "顾客告诉员工他们需要用于户外的防水涂料，但涂料在雨中被冲掉了",
            correctSection: "55",
            explanation: "The paint wasn't fit for the disclosed outdoor purpose",
            explanation_zh: "该涂料不适合所披露的户外用途"
        },
        {
            text: "Box says '12 items' but only contains 10",
            text_zh: "包装盒上说有“12件”，但实际上只有10件",
            correctSection: "56",
            explanation: "The goods don't correspond with the description on packaging",
            explanation_zh: "商品与包装上的描述不符"
        },
        {
            text: "Carpet delivered is a different shade of blue than the sample",
            text_zh: "交付的地毯颜色与样品中的蓝色色调不同",
            correctSection: "57",
            explanation: "The goods must match the sample in appearance",
            explanation_zh: "商品外观必须与样品一致"
        }
    ];

    let currentGameScenarioIndex = 0;
    let gameScore = 0;
    let gameActive = false;

    const startGameBtn = document.getElementById('startGameBtn');
    const gameContent = document.getElementById('gameContent');
    const scenarioText = document.getElementById('scenarioText');
    const scenarioNumber = document.getElementById('scenarioNumber');
    const gameScoreDisplay = document.getElementById('gameScore');
    const totalScenariosDisplay = document.getElementById('totalScenarios');
    const guaranteeBtns = document.querySelectorAll('.guarantee-btn');
    const gameFeedback = document.getElementById('gameFeedback');
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    const nextScenarioBtn = document.getElementById('nextScenarioBtn');
    const gameComplete = document.getElementById('gameComplete');
    const finalScore = document.getElementById('finalScore');
    const resetGameBtn = document.getElementById('resetGameBtn');

    if (startGameBtn) {
        startGameBtn.addEventListener('click', function() {
            startGame();
        });
    }

    function startGame() {
        gameActive = true;
        gameScore = 0;
        currentGameScenarioIndex = 0;
        
        startGameBtn.classList.add('hidden');
        gameContent.classList.remove('hidden');
        gameComplete.classList.add('hidden');
        document.getElementById('currentScenario').classList.remove('hidden');

        if (totalScenariosDisplay) totalScenariosDisplay.textContent = gameScenarios.length;
        
        showScenario();
    }

    function showScenario() {
        const scenario = gameScenarios[currentGameScenarioIndex];
        
        if (scenarioNumber) scenarioNumber.innerHTML = `Scenario <span class="chinese-text-body text-sm">情景</span> ${currentGameScenarioIndex + 1}:`;
        if (scenarioText) scenarioText.innerHTML = `${scenario.text} <span class="chinese-text-body">${scenario.text_zh}</span>`;
        if (gameScoreDisplay) gameScoreDisplay.textContent = gameScore;
        
        gameFeedback.classList.add('hidden');
        
        // Enable all buttons
        guaranteeBtns.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('opacity-50');
        });
    }

    guaranteeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!gameActive) return;
            
            const selectedSection = this.dataset.section;
            const scenario = gameScenarios[currentGameScenarioIndex];
            const isCorrect = selectedSection === scenario.correctSection;
            
            // Disable all buttons
            guaranteeBtns.forEach(b => {
                b.disabled = true;
                b.classList.add('opacity-50');
            });
            
            // Show feedback
            gameFeedback.classList.remove('hidden');
            
            if (isCorrect) {
                gameScore++;
                feedbackBox.className = 'p-4 rounded-lg mb-4 bg-green-100';
                feedbackTitle.innerHTML = '✅ Correct! <span class="chinese-text-body text-sm">正确!</span>';
                feedbackTitle.className = 'font-bold mb-2 text-green-700';
            } else {
                feedbackBox.className = 'p-4 rounded-lg mb-4 bg-red-100';
                feedbackTitle.innerHTML = '❌ Incorrect <span class="chinese-text-body text-sm">错误</span>';
                feedbackTitle.className = 'font-bold mb-2 text-red-700';
            }
            
            feedbackText.innerHTML = `${scenario.explanation} <span class="chinese-text-body text-sm">${scenario.explanation_zh}</span>`;
            if (nextScenarioBtn) nextScenarioBtn.innerHTML = 'Next Scenario → <span class="chinese-text-body text-sm">下一个情景 →</span>'
        });
    });

    if (nextScenarioBtn) {
        nextScenarioBtn.addEventListener('click', function() {
            currentGameScenarioIndex++;
            
            if (currentGameScenarioIndex >= gameScenarios.length) {
                endGame();
            } else {
                showScenario();
            }
        });
    }

    function endGame() {
        gameActive = false;
        document.getElementById('currentScenario').classList.add('hidden');
        gameFeedback.classList.add('hidden');
        gameComplete.classList.remove('hidden');
        
        const percentage = Math.round((gameScore / gameScenarios.length) * 100);
        
        if(finalScore) finalScore.textContent = `${gameScore} / ${gameScenarios.length} (${percentage}%)`;
        if(gameComplete.querySelector('h4')) gameComplete.querySelector('h4').innerHTML = `Game Complete! <span class="chinese-text-body text-sm">游戏完成!</span>`;
        if(gameComplete.querySelector('p')) gameComplete.querySelector('p').innerHTML = `Your final score: <span id="finalScore">${gameScore} / ${gameScenarios.length} (${percentage}%)</span> <span class="chinese-text-body text-sm">你的最终得分：</span>`;
        
        const performanceFeedback = document.getElementById('performanceFeedback');
        if (percentage >= 80) {
            performanceFeedback.innerHTML = '<p class="text-green-600 font-semibold">Excellent work! You have a strong understanding of consumer guarantees. <span class="chinese-text-body text-sm">干得漂亮！你对消费者保证有深刻的理解。</span></p>';
        } else if (percentage >= 60) {
            performanceFeedback.innerHTML = '<p class="text-yellow-600 font-semibold">Good effort! Review the sections you found challenging. <span class="chinese-text-body text-sm">做得不错！复习一下你觉得有挑战性的部分。</span></p>';
        } else {
            performanceFeedback.innerHTML = '<p class="text-red-600 font-semibold">Keep practicing! Review the consumer guarantees section again. <span class="chinese-text-body text-sm">继续练习！再次复习消费者保证部分。</span></p>';
        }
    }

    if (resetGameBtn) {
        resetGameBtn.addEventListener('click', function() {
            startGame();
        });
    }

    // Quiz functionality
    const quizzes = {
        'acl_overview': [
            {
                question: "Where is the Australian Consumer Law (ACL) contained?",
                options: [
                    "Competition and Consumer Act 2010 (Cth), Schedule 1",
                    "Competition and Consumer Act 2010 (Cth), Schedule 2",
                    "Competition and Consumer Act 2010 (Cth), Schedule 3",
                    "Fair Trading Act 2010, Schedule 1"
                ],
                correctAnswer: 1,
                explanation: "The Australian Consumer Law is contained in Schedule 2 of the Competition and Consumer Act 2010 (Cth)."
            },
            {
                question: "Which of the following is NOT a key feature of the ACL?",
                options: [
                    "It applies nationally and in all states and territories",
                    "It only protects consumers who spend more than $1,000",
                    "It covers all businesses and consumers in Australia",
                    "It ensures businesses compete fairly"
                ],
                correctAnswer: 1,
                explanation: "The ACL protects all consumers regardless of how much they spend. It does not have a minimum spending threshold."
            },
            {
                question: "Who enforces the ACL at the federal level?",
                options: [
                    "Federal Police",
                    "Department of Justice",
                    "Australian Competition and Consumer Commission (ACCC)",
                    "Fair Work Commission"
                ],
                correctAnswer: 2,
                explanation: "The ACCC (Australian Competition and Consumer Commission) enforces the ACL at the federal level."
            }
        ],
        'misleading_conduct': [
            {
                question: "What does Section 18 of the ACL prohibit?",
                options: [
                    "Unfair dismissal",
                    "Misleading or deceptive conduct",
                    "Unsolicited sales",
                    "Price fixing"
                ],
                correctAnswer: 1,
                explanation: "Section 18 of the ACL prohibits misleading or deceptive conduct, or conduct that is likely to mislead or deceive."
            },
            {
                question: "Which of the following is NOT an element of s 18 of the ACL?",
                options: [
                    "A person",
                    "In trade or commerce",
                    "Engage in conduct",
                    "Intent to deceive"
                ],
                correctAnswer: 3,
                explanation: "Intent to deceive is not an element of s 18. It doesn't matter if the business intended to mislead; what matters is whether the conduct is likely to mislead or deceive."
            },
            {
                question: "What is 'puffery' in advertising?",
                options: [
                    "False claims meant to deceive consumers",
                    "Objective statements of fact",
                    "Exaggerated statements not meant to be taken literally",
                    "Legally binding promises"
                ],
                correctAnswer: 2,
                explanation: "Puffery refers to exaggerated statements or claims that no reasonable person would take literally. These are generally not considered misleading under s 18."
            }
        ],
        'consumer_guarantees': [
            {
                question: "What does Section 54 of the ACL guarantee?",
                options: [
                    "The lowest price",
                    "Goods are of acceptable quality",
                    "Free shipping",
                    "Lifetime warranty"
                ],
                correctAnswer: 1,
                explanation: "Section 54 guarantees that goods must be of acceptable quality, which means they must be fit for purpose, acceptable in appearance and finish, free from defects, and safe and durable."
            },
            {
                question: "Under Section 55 of the ACL, goods must be:",
                options: [
                    "The cheapest option available",
                    "Fit for the disclosed purpose",
                    "On sale",
                    "Non-returnable"
                ],
                correctAnswer: 1,
                explanation: "Section 55 guarantees that goods must be reasonably fit for any disclosed purpose for which the supplier supplied the goods."
            },
            {
                question: "Which section guarantees goods will match their description?",
                options: [
                    "Section 54",
                    "Section 55",
                    "Section 56",
                    "Section 57"
                ],
                correctAnswer: 2,
                explanation: "Section 56 guarantees that goods must correspond with their description if they are supplied by description."
            },
            {
                question: "What does Section 57 guarantee?",
                options: [
                    "Goods are safe",
                    "Goods are durable",
                    "Goods match any sample or demonstration model",
                    "Goods are fit for purpose"
                ],
                correctAnswer: 2,
                explanation: "Section 57 guarantees that goods must correspond with any sample or demonstration model in quality, state, or condition."
            }
        ],
        'application': [
            {
                question: "In the South Face Jacket case, which guarantee was breached when the filling was duck feathers and cotton instead of 100% duck feathers?",
                options: [
                    "Section 54: Acceptable Quality",
                    "Section 55: Fitness for Purpose",
                    "Section 56: Supply by Description",
                    "Section 57: Supply by Sample"
                ],
                correctAnswer: 2,
                explanation: "Section 56 was breached because the jacket was described as being filled with '100% high quality duck feathers' but actually contained a mix of duck feathers and cotton."
            },
            {
                question: "What is the correct order of steps in the IPAC method?",
                options: [
                    "Issue, Principle, Application, Conclusion",
                    "Introduction, Problem, Analysis, Conclusion",
                    "Inspection, Preparation, Action, Completion",
                    "Identification, Purpose, Analysis, Consideration"
                ],
                correctAnswer: 0,
                explanation: "The IPAC method stands for Issue, Principle, Application, Conclusion. It is a structured approach to legal problem-solving."
            },
            {
                question: "In consumer law cases, what remedies are typically available for breach of consumer guarantees?",
                options: [
                    "Criminal prosecution only",
                    "Public apology only",
                    "Repair, replacement, or refund",
                    "Store credit only"
                ],
                correctAnswer: 2,
                explanation: "For breaches of consumer guarantees, consumers are typically entitled to repair, replacement, or refund depending on the severity of the breach."
            }
        ],
        'final_review': [
            {
                question: "The ACL is contained in which legislation?",
                options: [
                    "Fair Trading Act 2010",
                    "Consumer Protection Act 2010",
                    "Competition and Consumer Act 2010, Schedule 2",
                    "Trade Practices Act 1974"
                ],
                correctAnswer: 2,
                explanation: "The Australian Consumer Law is contained in Schedule 2 of the Competition and Consumer Act 2010 (Cth)."
            },
            {
                question: "Which element is NOT required to prove a breach of Section 18?",
                options: [
                    "A person",
                    "In trade or commerce",
                    "Intent to mislead",
                    "Misleading or deceptive conduct"
                ],
                correctAnswer: 2,
                explanation: "Intent is not required for Section 18. What matters is whether the conduct is misleading or deceptive, not whether there was intent."
            },
            {
                question: "Puffery is best described as:",
                options: [
                    "Deliberate lies to deceive consumers",
                    "Obvious exaggeration not taken literally",
                    "Hidden terms and conditions",
                    "False testimonials"
                ],
                correctAnswer: 1,
                explanation: "Puffery refers to obvious exaggeration or boastful statements that reasonable consumers would not take literally."
            },
            {
                question: "Section 54 requires goods to be:",
                options: [
                    "The cheapest available",
                    "Of acceptable quality",
                    "Imported from overseas",
                    "Sold at a discount"
                ],
                correctAnswer: 1,
                explanation: "Section 54 requires goods to be of acceptable quality, meaning safe, durable, free from defects, and fit for common purposes."
            },
            {
                question: "When does Section 55 apply?",
                options: [
                    "When goods are on sale",
                    "When the consumer discloses a specific purpose",
                    "When goods are expensive",
                    "When goods are imported"
                ],
                correctAnswer: 1,
                explanation: "Section 55 applies when a consumer discloses a specific purpose for the goods and relies on the supplier's skill or judgment."
            },
            {
                question: "The ACCC v Coles 'freshly baked' bread case involved breach of:",
                options: [
                    "Section 54 only",
                    "Section 55 only",
                    "Section 18 - misleading conduct",
                    "Section 57 only"
                ],
                correctAnswer: 2,
                explanation: "The Coles case involved breach of Section 18 for misleading conduct regarding 'freshly baked' bread claims."
            },
            {
                question: "Consumer guarantees under the ACL:",
                options: [
                    "Can be excluded by agreement",
                    "Only apply to expensive items",
                    "Cannot be excluded even by agreement",
                    "Only apply to Australian-made goods"
                ],
                correctAnswer: 2,
                explanation: "Consumer guarantees under the ACL are automatic rights that cannot be excluded, even by agreement between parties."
            },
            {
                question: "The IPAC method stands for:",
                options: [
                    "Introduction, Problem, Analysis, Conclusion",
                    "Issue, Principle, Application, Conclusion",
                    "Identify, Prosecute, Apply, Conclude",
                    "Investigate, Prove, Analyze, Complete"
                ],
                correctAnswer: 1,
                explanation: "IPAC stands for Issue, Principle, Application, Conclusion - a structured method for legal analysis."
            }
        ]
    };

    // Quiz modal elements
    const quizModal = document.getElementById('quizModal');
    const quizContentContainer = document.getElementById('quizContentContainer');
    const checkAnswersBtn = document.getElementById('checkAnswersBtn');
    const closeQuizModalBtn = document.getElementById('closeQuizModalBtn');

    // Quiz buttons
    const quizButtons = {
        'quizBtn_acl_overview': 'acl_overview',
        'quizBtn_misleading_conduct': 'misleading_conduct',
        'quizBtn_consumer_guarantees': 'consumer_guarantees',
        'quizBtn_application': 'application',
        'quizBtn_final_review': 'final_review'
    };

    // Setup quiz buttons
    Object.keys(quizButtons).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => openQuizModal(quizButtons[btnId]));
        }
    });

    function openQuizModal(quizType) {
        const quiz = quizzes[quizType];
        if (!quiz) return;

        let quizContent = '';

        // Step 1: Build the HTML for the quiz questions and options
        quiz.forEach((q, index) => {
            quizContent += `
                <div class="quiz-question mb-6" data-correct="${q.correctAnswer}">
                    <h3 class="font-semibold text-lg mb-2">Question ${index + 1}:</h3>
                    <p class="mb-3">${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map((option, i) => `
                            <label class="quiz-option block rounded-lg mb-2 cursor-pointer">
                                <input type="radio" name="q${index}" value="${i}">
                                <span class="checkmark"></span>
                                <span class="option-text">${option}</span>
                            </label>
                        `).join('')}
                    </div>
                    <div class="quiz-result mt-2 hidden"></div>
                    <div class="quiz-explanation mt-2 hidden text-sm italic text-gray-600">${q.explanation}</div>
                </div>
            `;
        });

        // Step 2: Put the generated HTML into the quiz modal and show it
        quizContentContainer.innerHTML = quizContent;
        quizModal.classList.remove('hidden');

        // --- NEW JAVASCRIPT LOGIC STARTS HERE ---
        // This is the direct click-handling logic that adds the visual selection class.

        // Step 3: Find all the question blocks we just created
        const allQuestions = quizContentContainer.querySelectorAll('.quiz-question');

        // Step 4: For each question block, set up its own click listeners
        allQuestions.forEach(question => {
            const optionsInQuestion = question.querySelectorAll('.quiz-option');

            optionsInQuestion.forEach(option => {
                option.addEventListener('click', function (e) {
                    // Find the hidden radio button inside the clicked label and check it
                    const radioButton = this.querySelector('input[type="radio"]');
                    if (radioButton) {
                        radioButton.checked = true;
                    }

                    // Remove 'is-selected' from all other options IN THIS QUESTION
                    optionsInQuestion.forEach(opt => opt.classList.remove('is-selected'));

                    // Add 'is-selected' to the one that was just clicked
                    this.classList.add('is-selected');
                });
            });
        });
        // --- NEW JAVASCRIPT LOGIC ENDS HERE ---
    }

    if (closeQuizModalBtn) {
        closeQuizModalBtn.addEventListener('click', () => {
            quizModal.classList.add('hidden');
        });
    }

    if (checkAnswersBtn) {
        checkAnswersBtn.addEventListener('click', () => {
            const quizQuestions = document.querySelectorAll('.quiz-question');
            let correctCount = 0;

            quizQuestions.forEach(question => {
                const selectedOption = question.querySelector('input[type="radio"]:checked');
                const correctAnswer = parseInt(question.dataset.correct);
                const resultDiv = question.querySelector('.quiz-result');
                const explanationDiv = question.querySelector('.quiz-explanation');

                resultDiv.classList.remove('hidden');
                explanationDiv.classList.remove('hidden');

                if (selectedOption) {
                    if (parseInt(selectedOption.value) === correctAnswer) {
                        resultDiv.textContent = '✓ Correct!';
                        resultDiv.className = 'quiz-result mt-2 quiz-result-correct';
                        correctCount++;
                    } else {
                        resultDiv.textContent = '✗ Incorrect';
                        resultDiv.className = 'quiz-result mt-2 quiz-result-incorrect';
                    }
                } else {
                    resultDiv.textContent = 'Not answered';
                    resultDiv.className = 'quiz-result mt-2 quiz-result-incorrect';
                }
            });

            // Display score
            const scoreMessage = `Your score: ${correctCount}/${quizQuestions.length}`;
            let scoreElement = document.getElementById('quizScore');

            if (!scoreElement) {
                scoreElement = document.createElement('div');
                scoreElement.id = 'quizScore';
                scoreElement.className = 'text-center font-bold text-lg mt-4 p-4 bg-gray-100 rounded-lg';
                const buttonsDiv = checkAnswersBtn.parentElement;
                buttonsDiv.parentNode.insertBefore(scoreElement, buttonsDiv);
            }

            scoreElement.textContent = scoreMessage;
        });
    }

    // Close quiz modal when clicking outside
    quizModal.addEventListener('click', function (e) {
        if (e.target === quizModal) {
            quizModal.classList.add('hidden');
        }
    });

    // Dark Mode Toggle Functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const body = document.body;

    // Function to set theme
    const setTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark-mode');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            localStorage.setItem('theme', 'light');
        }
    };

    // Event listener for the toggle button
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        setTheme(!isDarkMode);
    });

    // Check for saved theme in local storage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // Optional: Check user's OS preference if no theme is saved
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }

    // Initialize
    updateActiveNavLink();
    updateProgressBar();
    toggleScrollUpButton();
});