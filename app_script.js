// app_script.js (Updated with improvements from Untitled-2.js)

// --- Global Variables & Configuration ---
let currentQuizData = [];
let selectedAnswers = {};

const quizzes = {
    unit6_1_mcq: [
        {
            question: "What is the 'neighbour principle'?",
            chinese: "什么是'邻人原则'？",
            options: [
                "A rule that applies only to neighbours living next to each other",
                "A principle requiring individuals to take reasonable care to avoid harming those who are closely and directly affected by their actions",
                "A guideline for resolving property disputes",
                "A legal principle that applies only in contractual relationships"
            ],
            options_chinese: [
                "仅适用于相邻居住者的规则",
                "要求个人采取合理谨慎以避免伤害那些与其行为密切直接相关的人的原则",
                "解决财产纠纷的指导方针",
                "仅适用于合同关系的法律原则"
            ],
            correct: 1
        },
        {
            question: "Which case established the 'neighbour principle'?",
            chinese: "哪个案例确立了'邻人原则'？",
            options: [
                "Bolton v Stone",
                "Paris v Stepney Borough Council",
                "Donoghue v Stevenson",
                "Hedley Byrne & Co Ltd v Heller & Partners Ltd"
            ],
            options_chinese: [
                "Bolton诉Stone案",
                "Paris诉Stepney Borough Council案",
                "Donoghue诉Stevenson案",
                "Hedley Byrne & Co Ltd诉Heller & Partners Ltd案"
            ],
            correct: 2
        },
        {
            question: "Under the Civil Liability Act 2002 (NSW), which of the following is NOT a requirement to prove a breach of duty of care?",
            chinese: "根据2002年《民事责任法》(新南威尔士州)，以下哪项不是证明违反注意义务的要求？",
            options: [
                "The risk was foreseeable",
                "The risk was insignificant",
                "A reasonable person would have taken precautions",
                "The harm was caused by the breach"
            ],
            options_chinese: [
                "风险是可预见的",
                "风险是微不足道的",
                "一个合理的人会采取预防措施",
                "损害是由违约造成的"
            ],
            correct: 1
        },
        {
            question: "What is the 'but for' test used to establish?",
            chinese: "'若非'测试用于确立什么？",
            options: [
                "Breach of duty of care",
                "Remoteness of damage",
                "Causation",
                "The neighbour principle"
            ],
            options_chinese: [
                "违反注意义务",
                "损害的遥远性",
                "因果关系",
                "邻人原则"
            ],
            correct: 2
        },
        {
            question: "Which section of the Civil Liability Act 2002 (NSW) deals with factual causation?",
            chinese: "2002年《民事责任法》(新南威尔士州)的哪一条款处理事实因果关系？",
            options: [
                "Section 5B(1)",
                "Section 5B(2)",
                "Section 5D(1)(a)",
                "Section 5D(1)(b)"
            ],
            options_chinese: [
                "第5B(1)条",
                "第5B(2)条",
                "第5D(1)(a)条",
                "第5D(1)(b)条"
            ],
            correct: 2
        }
    ],
    unit6_2_mcq: [
        {
            question: "What kind of harm involves financial loss without any physical injury or property damage?",
            chinese: "什么样的伤害涉及在没有任何身体伤害或财产损失的情况下的经济损失？",
            options: [
                "Physical injury",
                "Property damage",
                "Economic loss",
                "Pure economic loss"
            ],
            options_chinese: [
                "身体伤害",
                "财产损失",
                "经济损失",
                "纯经济损失"
            ],
            correct: 3
        },
        {
            question: "What is required for a 'special relationship' in negligent misstatement?",
            chinese: "在疏忽性失实陈述中，建立'特殊关系'需要什么条件？",
            options: [
                "Assumption of responsibility",
                "Business nature of advice",
                "Intended reliance",
                "All of the above"
            ],
            options_chinese: [
                "责任承担",
                "建议的商业性质",
                "预期依赖",
                "以上所有"
            ],
            correct: 3
        },
        {
            question: "In which scenario is vicarious liability most likely to apply?",
            chinese: "在哪种情况下最有可能适用替代责任？",
            options: [
                "A friend gives bad investment advice",
                "An employee makes a mistake at work",
                "A neighbor damages your property",
                "A company CEO breaks the law personally"
            ],
            options_chinese: [
                "朋友给出糟糕的投资建议",
                "员工在工作中犯错",
                "邻居损坏你的财产",
                "公司CEO个人违法"
            ],
            correct: 1
        },
        {
            question: "What is contributory negligence?",
            chinese: "什么是共同过失？",
            options: [
                "A complete defense to negligence",
                "When the defendant's negligence is the sole cause of harm",
                "When the plaintiff's negligence contributed to their harm",
                "When the harm is too remote to be considered"
            ],
            options_chinese: [
                "对疏忽的完全抗辩",
                "当被告的疏忽是造成伤害的唯一原因时",
                "当原告的疏忽导致其伤害时",
                "当伤害太过遥远而无法考虑时"
            ],
            correct: 2
        },
        {
            question: "Which defense involves the plaintiff knowingly accepting a risk?",
            chinese: "哪种抗辩涉及原告明知并接受风险？",
            options: [
                "Contributory negligence",
                "Voluntary assumption of risk",
                "Disclaimer",
                "Vicarious liability"
            ],
            options_chinese: [
                "共同过失",
                "自愿承担风险",
                "免责声明",
                "替代责任"
            ],
            correct: 1
        }
    ],
    unit6_3_mcq: [
        {
            question: "Which principle establishes the duty of care in negligence cases?",
            chinese: "哪个原则确立了疏忽案件中的注意义务？",
            options: [
                "Volenti non fit injuria",
                "Neighbour principle",
                "Res ipsa loquitur",
                "Contributory negligence"
            ],
            options_chinese: [
                "自愿承担风险原则",
                "邻人原则",
                "事实自证原则",
                "共同过失"
            ],
            correct: 1
        },
        {
            question: "What does Section 5B(1) of the Civil Liability Act 2002 (NSW) require to prove negligence?",
            chinese: "2002年《民事责任法》(新南威尔士州)第5B(1)条要求证明疏忽需要什么？",
            options: [
                "The risk must be significant",
                "The risk must be foreseeable, not insignificant, and a reasonable person must have taken precautions",
                "The risk must be avoided at all costs",
                "The risk must be probable"
            ],
            options_chinese: [
                "风险必须是重大的",
                "风险必须是可预见的，不是微不足道的，且一个合理的人必须采取预防措施",
                "必须不惜一切代价避免风险",
                "风险必须是可能的"
            ],
            correct: 1
        },
        {
            question: "Which case is associated with the probability of harm in negligence?",
            chinese: "哪个案例与疏忽中的损害概率相关？",
            options: [
                "Donoghue v Stevenson",
                "Hedley Byrne v Heller",
                "Bolton v Stone",
                "Paris v Stepney Borough Council"
            ],
            options_chinese: [
                "Donoghue诉Stevenson案",
                "Hedley Byrne诉Heller案",
                "Bolton诉Stone案",
                "Paris诉Stepney Borough Council案"
            ],
            correct: 2
        },
        {
            question: "What does Section 5D(1)(b) of the Civil Liability Act 2002 (NSW) deal with?",
            chinese: "2002年《民事责任法》(新南威尔士州)第5D(1)(b)条涉及什么？",
            options: [
                "Factual causation",
                "Scope of liability",
                "Foreseeability",
                "Probability of harm"
            ],
            options_chinese: [
                "事实因果关系",
                "责任范围",
                "可预见性",
                "损害概率"
            ],
            correct: 1
        },
        {
            question: "Which type of loss was Mr. Lee's $50,000 house damage considered?",
            chinese: "李先生的5万美元房屋损失属于哪种损失类型？",
            options: [
                "Economic loss",
                "Pure economic loss",
                "Physical injury",
                "Property damage"
            ],
            options_chinese: [
                "经济损失",
                "纯经济损失",
                "人身伤害",
                "财产损失"
            ],
            correct: 3
        }
    ]
};

const legalTerms = {
    'duty of care': 'A legal obligation to take reasonable care to prevent harm to others.',
    'breach of duty': 'Failure to meet the standard of care required by law.',
    'causation': 'The link between the breach of duty and the harm suffered.',
    'remoteness': 'The requirement that the harm was a reasonably foreseeable consequence.',
    'negligence': 'A failure to take reasonable care that results in damage or injury to another.',
    'contributory negligence': 'When the plaintiff\'s own negligence contributed to their harm.',
    'voluntary assumption of risk': 'When someone knowingly accepts the risk of injury.',
    'volenti non fit injuria': 'Latin for "to a willing person, injury is not done"; refers to voluntary assumption of risk.',
    'but for test': 'Would the harm have occurred "but for" the defendant\'s actions?',
    'reasonable foreseeability': 'Whether a reasonable person would have foreseen the harm.',
    'standard of care': 'The degree of care a reasonable person would exercise in the circumstances.',
    'neighbour principle': "Established in Donoghue v Stevenson, you must take reasonable care to avoid acts or omissions which you can reasonably foresee would be likely to injure your 'neighbour' – persons closely and directly affected by your act.",
    'civil liability act': 'Refers to legislation governing civil wrongs, such as the Civil Liability Act 2002 (NSW) in Australia, which modifies common law principles of negligence.',
    'pure economic loss': 'Financial loss that is not a result of direct physical injury to person or property.',
    'negligent misstatement': 'An incorrect statement made carelessly that causes financial loss to someone relying on it.',
    'vicarious liability': 'Legal responsibility of one person for the torts committed by another, typically an employer for an employee.',
    'disclaimer': 'A statement intended to limit or exclude liability.',
    'barwick test': 'A test from Mutual Life & Citizens\' Assurance Co Ltd v Evatt (1968) for establishing a duty of care in cases of negligent misstatement causing pure economic loss.'
};


// --- Core Systems ---

// Flashcard System with Spaced Repetition
const flashcardSystem = {
    cards: [
        { front: "Neighbour Principle", back: "🤝 A duty to take reasonable care to avoid acts or omissions that would likely injure your 'neighbour'", emoji: "⚖️", tags: ["duty", "core"] },
        { front: "Elements of Negligence", back: "1️⃣ Duty of Care\n2️⃣ Breach of Duty\n3️⃣ Causation\n4️⃣ Remoteness", emoji: "📝", tags: ["core"] },
        { front: "Pure Economic Loss", back: "💸 Financial loss without any physical injury or property damage", emoji: "💰", tags: ["damages"] },
        { front: "Contributory Negligence", back: "🤔 When the plaintiff's own negligence contributed to their harm", emoji: "⚠️", tags: ["defense"] },
        { front: "But For Test", back: "🤔 Would the harm have occurred 'but for' the defendant's actions?", emoji: "🔍", tags: ["causation"] }
    ],
    lastReviewed: {},
    streaks: {},
    currentCardIndex: -1,

    initialize() {
        this.loadProgress();
        this.renderFlashcardUI();
        this.setupKeyboardShortcuts();
        this.showNextCard();
        console.log("Flashcard system initialized.");
    },

    loadProgress() {
        try {
            const saved = localStorage.getItem('flashcardProgress_tort_law');
            if (saved) {
                const data = JSON.parse(saved);
                this.lastReviewed = data.lastReviewed || {};
                this.streaks = data.streaks || {};
            }
        } catch (e) {
            console.error("Error loading flashcard progress from localStorage:", e);
            this.lastReviewed = {};
            this.streaks = {};
        }
    },

    saveProgress() {
        try {
            localStorage.setItem('flashcardProgress_tort_law', JSON.stringify({
                lastReviewed: this.lastReviewed,
                streaks: this.streaks
            }));
        } catch (e) {
            console.error("Error saving flashcard progress to localStorage:", e);
        }
    },

    getNextCard() {
        this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length;
        return this.cards[this.currentCardIndex];
    },

    renderFlashcardUI() {
        const existingContainer = document.getElementById('flashcard-container-main');
        if (existingContainer) existingContainer.remove();

        const container = document.createElement('div');
        container.id = 'flashcard-container-main';
        container.className = 'my-8 mx-auto max-w-2xl';

        container.innerHTML = `
            <div class="flashcard-box bg-white rounded-xl shadow-lg p-6 relative transition-transform duration-300 hover:-translate-y-0.5">
                <div class="flashcard-header flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-[var(--primary-color)]">Flashcard Review</h3>
                    <div class="streak-display text-sm text-[var(--warning-color)] font-bold">🔥 Streak: <span id="current-streak-value">0</span></div>
                </div>
                <div class="flashcard-progress mb-4 flex items-center justify-between">
                    <span class="text-sm text-gray-600">Card <span id="current-card-num">1</span> of <span id="total-cards">${this.cards.length}</span></span>
                    <div class="progress-bar w-2/3 bg-gray-200 rounded-full h-2.5">
                        <div id="flashcard-progress-fill" class="bg-[var(--secondary-color)] h-2.5 rounded-full" style="width: 0%"></div>
                    </div>
                </div>
                <div class="card-content relative min-h-[220px] flex items-center justify-center text-center p-4 my-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div class="card-front absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 bg-[var(--light-bg)] rounded-lg">
                        <span class="emoji text-4xl mb-4"></span>
                        <h3 class="question text-xl font-semibold text-[var(--primary-color)]"></h3>
                        <p class="text-sm mt-4 text-gray-500">Press Space or click "Flip" to see answer</p>
                    </div>
                    <div class="card-back absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 bg-[var(--light-bg)] rounded-lg">
                        <p class="answer text-lg leading-relaxed text-[var(--secondary-color)]"></p>
                    </div>
                </div>
                <div class="card-controls mt-4 flex flex-col gap-4">
                    <button id="flashcardFlipBtn" class="btn btn-primary w-full inline-block px-5 py-2.5 bg-[var(--primary-color)] text-white no-underline rounded-lg transition-all duration-300 ease-linear border-none cursor-pointer text-[0.9rem] hover:bg-[var(--secondary-color)] hover:-translate-y-0.5 hover:shadow-md">Flip Card (Space)</button>
                    <div id="flashcardReviewBtns" class="review-btns mt-2 grid grid-cols-3 gap-2" style="display: none;">
                        <button class="btn again-btn p-2 border-none rounded-md cursor-pointer transition-all duration-300 text-white bg-[#ff7675] hover:opacity-80">Again (1)</button>
                        <button class="btn good-btn p-2 border-none rounded-md cursor-pointer transition-all duration-300 text-white bg-[#00b894] hover:opacity-80">Good (2)</button>
                        <button class="btn easy-btn p-2 border-none rounded-md cursor-pointer transition-all duration-300 text-white bg-[#0984e3] hover:opacity-80">Easy (3)</button>
                    </div>
                </div>
                <div class="flashcard-keyboard-shortcuts mt-4 text-center text-xs text-gray-500">
                    <p>Keyboard shortcuts: Space (flip), 1 (Again), 2 (Good), 3 (Easy)</p>
                </div>
            </div>
        `;

        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.prepend(container);
        } else {
            console.error("Main element not found for flashcard UI.");
            return;
        }

        document.getElementById('flashcardFlipBtn')?.addEventListener('click', () => this.flipCard());

        const reviewBtnsContainer = document.getElementById('flashcardReviewBtns');
        reviewBtnsContainer?.querySelector('.again-btn')?.addEventListener('click', () => this.handleReview('again'));
        reviewBtnsContainer?.querySelector('.good-btn')?.addEventListener('click', () => this.handleReview('good'));
        reviewBtnsContainer?.querySelector('.easy-btn')?.addEventListener('click', () => this.handleReview('easy'));
    },

    showNextCard() {
        const card = this.getNextCard();
        if (!card) {
            const cardContentEl = document.querySelector('#flashcard-container-main .card-content');
            if (cardContentEl) cardContentEl.innerHTML = '<div class="p-4 text-center">🎉 All cards reviewed! Great job!</div>';
            return;
        }

        const frontEl = document.querySelector('#flashcard-container-main .card-front');
        const backEl = document.querySelector('#flashcard-container-main .card-back');
        const streakEl = document.getElementById('current-streak-value');
        const currentCardNumEl = document.getElementById('current-card-num');
        const progressFillEl = document.getElementById('flashcard-progress-fill');

        if (frontEl && backEl && streakEl && currentCardNumEl && progressFillEl) {
            frontEl.querySelector('.emoji').textContent = card.emoji;
            frontEl.querySelector('.question').textContent = card.front;
            backEl.querySelector('.answer').textContent = card.back;
            streakEl.textContent = this.streaks[card.front] || 0;
            currentCardNumEl.textContent = this.currentCardIndex + 1;
            progressFillEl.style.width = `${((this.currentCardIndex + 1) / this.cards.length) * 100}%`;

            const cardContentEl = document.querySelector('#flashcard-container-main .card-content');
            const reviewBtnsEl = document.getElementById('flashcardReviewBtns');
            const flipBtnEl = document.getElementById('flashcardFlipBtn');

            if (cardContentEl) cardContentEl.classList.remove('flipped');
            if (reviewBtnsEl) reviewBtnsEl.style.display = 'none';
            if (flipBtnEl) flipBtnEl.textContent = 'Flip Card (Space)';

        } else {
            console.error("Flashcard UI elements not found for showing next card.");
        }
    },

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
                return;
            }

            if (e.code === 'Space') {
                e.preventDefault();
                this.flipCard();
            } else if (document.getElementById('flashcardReviewBtns')?.style.display !== 'none') {
                if (e.key === '1') {
                    document.querySelector('#flashcardReviewBtns .again-btn')?.click();
                } else if (e.key === '2') {
                    document.querySelector('#flashcardReviewBtns .good-btn')?.click();
                } else if (e.key === '3') {
                    document.querySelector('#flashcardReviewBtns .easy-btn')?.click();
                }
            }
        });
    },

    flipCard() {
        const cardContentEl = document.querySelector('#flashcard-container-main .card-content');
        const reviewBtnsEl = document.getElementById('flashcardReviewBtns');
        const flipBtnEl = document.getElementById('flashcardFlipBtn');

        if (!cardContentEl || !reviewBtnsEl || !flipBtnEl) {
            console.error("Cannot flip card: UI elements missing.");
            return;
        }

        cardContentEl.classList.toggle('flipped');

        if (cardContentEl.classList.contains('flipped')) {
            reviewBtnsEl.style.display = 'grid';
            flipBtnEl.textContent = 'Back to Question (Space)';
        } else {
            reviewBtnsEl.style.display = 'none';
            flipBtnEl.textContent = 'Flip Card (Space)';
        }
    },

    handleReview(difficulty) {
        const card = this.cards[this.currentCardIndex];
        if (!card) return;

        if (difficulty === 'again') {
            this.streaks[card.front] = 0;
        } else {
            this.streaks[card.front] = (this.streaks[card.front] || 0) + 1;
        }

        this.lastReviewed[card.front] = Date.now();
        this.saveProgress();
        achievementSystem.checkFlashcardAchievements(Object.keys(this.lastReviewed).length);
        updateProgressStats();

        this.showNextCard();
    }
};

// Achievement System
const achievementSystem = {
    achievements: [
        { id: 'first_quiz', title: '🎯 First Quiz Attempted', description: 'Completed your first quiz section.', unlocked: false, icon: '🎯' },
        { id: 'perfect_quiz', title: '🏆 Perfect Score', description: 'Got 100% on a quiz section.', unlocked: false, icon: '🏆' },
        { id: 'flash_beginner', title: '🧠 Flash Beginner', description: 'Reviewed 5 flashcards.', unlocked: false, icon: '🧠' },
        { id: 'flash_master', title: '💡 Flash Master', description: 'Reviewed all flashcards.', unlocked: false, icon: '💡' },
        { id: 'knowledge_checked', title: '✅ Knowledge Checked', description: 'Completed a knowledge check.', unlocked: false, icon: '✅' },
        { id: 'legal_eagle', title: '⚖️ Legal Eagle', description: 'Correctly answered all fill-in-the-blanks in one section.', unlocked: false, icon: '⚖️' }
    ],

    initialize() {
        this.loadProgress();
        this.createAchievementPanel();
        console.log("Achievement system initialized.");
    },

    loadProgress() {
        try {
            const saved = localStorage.getItem('achievements_tort_law');
            if (saved) {
                const unlockedIds = JSON.parse(saved);
                this.achievements.forEach(ach => {
                    if (unlockedIds.includes(ach.id)) {
                        ach.unlocked = true;
                    }
                });
            }
        } catch (e) {
            console.error("Error loading achievements from localStorage:", e);
        }
    },

    saveProgress() {
        try {
            const unlockedIds = this.achievements.filter(ach => ach.unlocked).map(ach => ach.id);
            localStorage.setItem('achievements_tort_law', JSON.stringify(unlockedIds));
        } catch (e) {
            console.error("Error saving achievements to localStorage:", e);
        }
    },

    unlock(achievementId) {
        const achievement = this.achievements.find(a => a.id === achievementId);
        if (achievement && !achievement.unlocked) {
            achievement.unlocked = true;
            this.saveProgress();
            this.showUnlockNotification(achievement);
            this.updateAchievementPanel();
            updateProgressStats();
        }
    },

    showUnlockNotification(achievement) {
        const existingNotification = document.querySelector('.achievement-notification');
        if (existingNotification) existingNotification.remove();

        const notification = document.createElement('div');
        // Apply Tailwind classes for notification
        notification.className = 'achievement-notification fixed bottom-8 right-8 bg-white rounded-lg p-4 shadow-xl flex items-center gap-4 z-[3000]';
        notification.innerHTML = `
            <div class="achievement-icon text-2xl text-[var(--success-color)]">${achievement.icon}</div>
            <div class="achievement-details">
                <h4 class="font-bold text-base text-[var(--dark-text)]">${achievement.title}</h4>
                <p class="text-sm text-[var(--dark-text)]">${achievement.description}</p>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    },

    createAchievementPanel() {
        const existingPanel = document.getElementById('achievement-panel-main');
        if (existingPanel) existingPanel.remove();

        const panel = document.createElement('div');
        panel.id = 'achievement-panel-main';
        // Apply Tailwind classes for panel
        panel.className = 'achievement-panel bg-white rounded-xl p-6 my-8 shadow-[var(--card-shadow)]';
        document.querySelector('main')?.appendChild(panel);
        this.updateAchievementPanel();
    },

    updateAchievementPanel() {
        const panel = document.getElementById('achievement-panel-main');
        if (!panel) return;

        panel.innerHTML = `
            <h3 class="text-[var(--primary-color)] mb-4 text-center text-2xl font-semibold">🏆 Achievements</h3>
            <div class="achievements-grid grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                ${this.achievements.map(a => `
                    <div class="achievement-card bg-gray-50 rounded-lg p-4 text-center transition-transform duration-300 hover:-translate-y-0.5 ${a.unlocked ? 'unlocked' : 'locked opacity-50 grayscale'}">
                        <div class="achievement-icon text-3xl mb-2">${a.icon}</div>
                        <h4 class="text-base font-semibold text-[var(--dark-text)] mb-1">${a.title}</h4>
                        <p class="text-sm text-gray-600">${a.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    },

    checkFlashcardAchievements(reviewedCount) {
        if (reviewedCount >= 1) this.unlock('flash_beginner');
        if (reviewedCount >= flashcardSystem.cards.length) this.unlock('flash_master');
    }
};

// --- UI & Interaction Functions ---

// Dark Mode System
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const body = document.body;

    const setTheme = (isDark) => {
        body.classList.toggle('dark-mode', isDark);
        if (sunIcon) sunIcon.classList.toggle('hidden', isDark);
        if (moonIcon) moonIcon.classList.toggle('hidden', !isDark);
        localStorage.setItem('theme_tort_law', isDark ? 'dark' : 'light');
    };

    darkModeToggle.addEventListener('click', () => {
        setTheme(!body.classList.contains('dark-mode'));
    });

    // Check for saved theme on load
    const savedTheme = localStorage.getItem('theme_tort_law');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        // Default to user's OS preference
        setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
}

// Navigation active state
function changeNavActiveState() {
    const navLinks = document.querySelectorAll('nav .nav-link');
    const sections = document.querySelectorAll('main section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // This class can be defined in app_styles.css if needed for specific active state beyond hover
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active'); // Or use Tailwind's `aria-current="page"` and style based on that
        }
    });
}

// Accordion handler
function initializeAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            if (!item) return;

            const content = item.querySelector('.accordion-content');
            const currentlyActive = item.classList.contains('active');

            if (!currentlyActive) {
                item.classList.add('active');
                content.classList.remove('hidden'); // Use Tailwind hidden
            } else {
                item.classList.remove('active');
                content.classList.add('hidden'); // Use Tailwind hidden
            }
        });
    });
}

// Force visible text in accordions
function fixAccordionTextVisibility() {
    // Apply to all accordion content
    document.querySelectorAll('.accordion-content p, .accordion-content li, .accordion-content span, .accordion-content div').forEach(el => {
        el.style.color = '#2c3e50';
    });
    
    // Special focus on the "Voluntary Assumption of Risk" accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        if (header.textContent.includes('Voluntary Assumption of Risk') || 
            header.textContent.includes('自愿承担风险')) {
            const content = header.nextElementSibling;
            if (content && content.classList.contains('accordion-content')) {
                content.querySelectorAll('p, span, div, li').forEach(el => {
                    el.style.color = '#2c3e50';
                });
            }
        }
    });
}

// Call this after initializing accordions
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode(); // <-- ADD THIS LINE
    // Existing initialization...
    
    // Fix accordion text visibility
    fixAccordionTextVisibility();
    
    // Also fix when accordions are toggled
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            setTimeout(fixAccordionTextVisibility, 100);
        });
    });
});

// Quiz Modal Functions
function showQuiz(quizKey) {
    const quizModal = document.getElementById('quizModal');
    const quizContentContainerEl = document.getElementById('quizContentContainer');
    const quizTitleEl = document.getElementById('quizModalTitle');
    const checkAnswersBtn = document.getElementById('checkAnswersBtn');

    if (!quizModal || !quizContentContainerEl || !quizTitleEl || !checkAnswersBtn) {
        console.error("Quiz modal elements not found.");
        return;
    }

    currentQuizData = quizzes[quizKey] || [];
    selectedAnswers = {};
    quizContentContainerEl.innerHTML = '';

    if (currentQuizData.length === 0) {
        quizContentContainerEl.innerHTML = "<p class='text-center p-4'>Quiz not available for this section yet. <span class='chinese-text-body'>此部分测验暂未开放。</span></p>";
        checkAnswersBtn.classList.add('hidden'); // Use Tailwind hidden
    } else {
        currentQuizData.forEach((q, index) => {
            const questionCard = document.createElement('div');
            // Apply Tailwind classes to questionCard
            questionCard.className = 'quiz-question-card bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6 shadow-sm';
            questionCard.dataset.questionIndex = index;

            let optionsHtml = '<div class="quiz-options-grid grid grid-cols-1 sm:grid-cols-2 gap-3">'; // Responsive grid for options
            q.options.forEach((opt, i) => {
                optionsHtml += `
                    <button type="button" class="quiz-option-btn bg-[var(--quiz-option-bg)] border-2 border-transparent rounded-lg px-4 py-3 text-left cursor-pointer transition-all duration-200 ease-in-out w-full text-[0.95rem] hover:bg-[var(--quiz-option-hover-bg)] hover:border-[var(--secondary-color)] hover:-translate-y-0.5" data-option-index="${i}">
                        ${opt}
                        ${q.options_chinese && q.options_chinese[i] ? `<br><span class="chinese-text-body text-sm">${q.options_chinese[i]}</span>` : ''}
                    </button>`;
            });
            optionsHtml += '</div>';

            questionCard.innerHTML = `
                <h4 class="font-semibold text-lg text-[var(--dark-text)] mb-2">Question ${index + 1}: ${q.question}</h4>
                <p class="chinese-text-body text-sm mb-4">${q.chinese || ''}</p>
                ${optionsHtml}
                <div class="quiz-feedback mt-2 text-sm font-bold"></div>
            `;
            quizContentContainerEl.appendChild(questionCard);

            questionCard.querySelectorAll('.quiz-option-btn').forEach(button => {
                button.addEventListener('click', () => {
                    selectQuizAnswer(button, index, parseInt(button.dataset.optionIndex));
                });
            });
        });
        checkAnswersBtn.classList.remove('hidden'); // Use Tailwind hidden
    }

    const quizName = quizKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    quizTitleEl.innerHTML = `Quiz: ${quizName} <span class="text-xl opacity-90 italic">测验：${quizName.replace('Mcq', '选择题')}</span>`;
    quizModal.classList.remove('hidden'); // Use Tailwind hidden
    // quizModal.classList.add('active'); // 'active' class might be redundant if 'hidden' is the primary controller
}

function hideQuiz() {
    const quizModal = document.getElementById('quizModal');
    if (quizModal) {
        quizModal.classList.add('hidden'); // Use Tailwind hidden
        // quizModal.classList.remove('active');
    }
}

function selectQuizAnswer(optionElement, questionIndex, optionIndex) {
    selectedAnswers[questionIndex] = optionIndex;
    const questionCard = optionElement.closest('.quiz-question-card');
    if (!questionCard) return;

    questionCard.querySelectorAll('.quiz-option-btn').forEach(btn => btn.classList.remove('selected', 'border-[var(--quiz-option-selected-border)]', 'bg-[var(--quiz-option-selected-bg)]', 'font-semibold', 'text-[var(--primary-color)]')); // Clear previous selection styles
    // Apply Tailwind classes for selected state
    optionElement.classList.add('selected', 'border-[var(--quiz-option-selected-border)]', 'bg-[var(--quiz-option-selected-bg)]', 'font-semibold', 'text-[var(--primary-color)]');

    const feedbackEl = questionCard.querySelector('.quiz-feedback');
    if (feedbackEl) feedbackEl.innerHTML = '';
    questionCard.querySelectorAll('.quiz-option-btn').forEach(btn => {
        // .correct and .incorrect classes will handle specific feedback styling from app_styles.css
        btn.classList.remove('correct', 'incorrect');
    });
}

function checkQuizAnswers() {
    let correctCount = 0;
    let answeredCount = 0;

    currentQuizData.forEach((q, questionIndex) => {
        const questionCard = document.querySelector(`.quiz-question-card[data-question-index="${questionIndex}"]`);
        if (!questionCard) return;

        const feedbackEl = questionCard.querySelector('.quiz-feedback');
        const selectedOptionIndex = selectedAnswers[questionIndex];

        if (selectedOptionIndex !== undefined) {
            answeredCount++;
            const selectedBtn = questionCard.querySelector(`.quiz-option-btn[data-option-index="${selectedOptionIndex}"]`);
            if (selectedBtn) {
                if (selectedOptionIndex === q.correct) {
                    selectedBtn.classList.add('correct'); // CSS will style this
                    if (feedbackEl) feedbackEl.textContent = 'Correct!';
                    feedbackEl?.classList.add('text-[var(--success-color)]'); // Tailwind for text color
                    feedbackEl?.classList.remove('text-[var(--accent-color)]');
                    correctCount++;
                } else {
                    selectedBtn.classList.add('incorrect'); // CSS will style this
                    if (feedbackEl) feedbackEl.textContent = `Incorrect. Correct answer: ${q.options[q.correct]}`;
                    feedbackEl?.classList.add('text-[var(--accent-color)]'); // Tailwind for text color
                    feedbackEl?.classList.remove('text-[var(--success-color)]');
                    const correctBtn = questionCard.querySelector(`.quiz-option-btn[data-option-index="${q.correct}"]`);
                    if (correctBtn) correctBtn.classList.add('correct'); // Highlight correct answer
                }
            }
        } else {
            if (feedbackEl) feedbackEl.textContent = 'Not answered.';
            feedbackEl?.classList.remove('text-[var(--success-color)]', 'text-[var(--accent-color)]');
        }
    });

    if (answeredCount > 0) {
        achievementSystem.unlock('first_quiz');
        if (correctCount === currentQuizData.length && answeredCount === currentQuizData.length) {
            achievementSystem.unlock('perfect_quiz');
        }
    }
    updateProgressStats();
}


// Knowledge Check Fill-in-the-blanks Functions
function toggleKnowledgeCheck(kcId) {
    const kcBox = document.getElementById(kcId);
    if (!kcBox) return;

    kcBox.classList.toggle('hidden'); // Use Tailwind hidden

    if (!kcBox.classList.contains('hidden')) {
        kcBox.querySelectorAll('.blank-input').forEach(input => {
            input.value = '';
            input.classList.remove('correct', 'incorrect', 'border-[var(--success-color)]', 'border-[var(--accent-color)]', 'bg-green-100/50', 'bg-red-100/50'); // Clear Tailwind feedback classes
            input.style.borderColor = ''; // Reset explicit border color if any
            input.classList.remove('hidden'); // Ensure input is visible
        });
        kcBox.querySelectorAll('.answer-reveal').forEach(reveal => reveal.remove());

        // Remove any existing feedback elements
        const existingFeedback = kcBox.querySelector('.knowledge-check-feedback');
        if (existingFeedback) existingFeedback.remove();

        kcBox.querySelectorAll('.answer-feedback').forEach(feedback => feedback.remove());
    }
}

function checkKnowledgeFillIn(kcId) {
    const kcBox = document.getElementById(kcId);
    if (!kcBox) return;
    let allCorrectInBox = true;
    let answeredCount = 0;

    kcBox.querySelectorAll('.blank-input').forEach(input => {
        // Reset previous feedback
        input.classList.remove('correct', 'incorrect', 'border-[var(--success-color)]', 'border-[var(--accent-color)]', 'bg-green-100/50', 'bg-red-100/50');

        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswerData = input.dataset.answer.toLowerCase();
        const correctAnswersArray = correctAnswerData.split('/').map(ans => ans.trim());

        if (userAnswer !== '') {
            answeredCount++;
            if (correctAnswersArray.includes(userAnswer)) {
                // Apply correct styling with Tailwind classes
                input.classList.add('correct', 'border-[var(--success-color)]', 'bg-green-100/50');

                // Add checkmark feedback
                let feedbackSpan = input.parentNode.querySelector('.answer-feedback');
                if (!feedbackSpan) {
                    feedbackSpan = document.createElement('span');
                    feedbackSpan.className = 'answer-feedback ml-2 text-[var(--success-color)]';
                    input.parentNode.appendChild(feedbackSpan);
                }
                feedbackSpan.textContent = '✓';
                feedbackSpan.className = 'answer-feedback ml-2 text-[var(--success-color)]';
            } else {
                // Apply incorrect styling with Tailwind classes
                input.classList.add('incorrect', 'border-[var(--accent-color)]', 'bg-red-100/50');

                // Add X feedback
                let feedbackSpan = input.parentNode.querySelector('.answer-feedback');
                if (!feedbackSpan) {
                    feedbackSpan = document.createElement('span');
                    feedbackSpan.className = 'answer-feedback ml-2 text-[var(--accent-color)]';
                    input.parentNode.appendChild(feedbackSpan);
                }
                feedbackSpan.textContent = '✗';
                feedbackSpan.className = 'answer-feedback ml-2 text-[var(--accent-color)]';

                allCorrectInBox = false;
            }
        } else {
            allCorrectInBox = false;
        }
    });

    // Show feedback message at the top of the knowledge check box
    let feedbackContainer = kcBox.querySelector('.knowledge-check-feedback');
    if (!feedbackContainer) {
        feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'knowledge-check-feedback mt-2 mb-4 p-3 rounded-lg text-center font-bold';
        kcBox.insertBefore(feedbackContainer, kcBox.firstChild.nextSibling);
    }

    if (allCorrectInBox && answeredCount === kcBox.querySelectorAll('.blank-input').length) {
        feedbackContainer.textContent = '🎉 Great job! All answers are correct!';
        feedbackContainer.className = 'knowledge-check-feedback mt-2 mb-4 p-3 rounded-lg text-center font-bold bg-green-100 text-green-800';
        achievementSystem.unlock('knowledge_checked');
        achievementSystem.unlock('legal_eagle');
    } else if (answeredCount > 0) {
        feedbackContainer.textContent = '⚠️ Some answers need correction. Try again!';
        feedbackContainer.className = 'knowledge-check-feedback mt-2 mb-4 p-3 rounded-lg text-center font-bold bg-yellow-100 text-yellow-800';
        achievementSystem.unlock('knowledge_checked');
    } else {
        feedbackContainer.textContent = '❓ Please fill in the blanks to check your knowledge.';
        feedbackContainer.className = 'knowledge-check-feedback mt-2 mb-4 p-3 rounded-lg text-center font-bold bg-blue-100 text-blue-800';
    }

    updateProgressStats();
}

function revealKnowledgeFillIn(kcId) {
    const kcBox = document.getElementById(kcId);
    if (!kcBox) return;

    kcBox.querySelectorAll('.blank-input').forEach(input => {
        input.classList.remove('correct', 'incorrect', 'border-[var(--success-color)]', 'border-[var(--accent-color)]', 'bg-green-100/50', 'bg-red-100/50');
        input.classList.add('hidden');

        const container = input.closest('.blank-container');
        const existingReveal = container.querySelector('.answer-reveal');
        if (existingReveal) existingReveal.remove();

        const answerSpan = document.createElement('span');
        // Apply Tailwind classes to answer-reveal
        answerSpan.className = 'answer-reveal inline-block text-[var(--success-color)] font-bold py-1 px-2 bg-emerald-50 rounded-sm';
        answerSpan.textContent = input.dataset.answer.split('/')[0];
        container.appendChild(answerSpan);
    });
}

function addLegalTermTooltips() {
    // Add Chinese translations to legal terms
    const legalTermsChinese = {
        'duty of care': '注意义务：对他人采取合理谨慎的法律义务。',
        'breach of duty': '违反义务：未能满足法律要求的注意标准。',
        'causation': '因果关系：违反义务与所受伤害之间的联系。',
        'remoteness': '遥远性：要求损害是合理可预见的后果。',
        'negligence': '疏忽：未能采取合理谨慎导致他人损害或伤害。',
        'contributory negligence': '共同过失：原告自身的疏忽导致其损害。',
        'voluntary assumption of risk': '自愿承担风险：当某人明知并接受受伤风险时。',
        'volenti non fit injuria': '自愿冒险原则：意为"对自愿者，无伤害"；指自愿承担风险。',
        'but for test': '"若非"测试：若非被告行为，损害是否会发生？',
        'reasonable foreseeability': '合理可预见性：合理人是否能预见所造成的损害。',
        'standard of care': '注意标准：合理人在特定情况下会采取的谨慎程度。',
        'neighbour principle': '邻人原则：在Donoghue v Stevenson案中确立，你必须采取合理谨慎避免可能伤害你"邻人"的作为或不作为。',
        'civil liability act': '《民事责任法》：指管理民事侵权的立法，如澳大利亚《2002年民事责任法》（新南威尔士州）。',
        'pure economic loss': '纯粹经济损失：非直接人身或财产损害导致的财务损失。',
        'negligent misstatement': '疏忽性失实陈述：做出不正确陈述导致依赖者财务损失。',
        'vicarious liability': '替代责任：一人对另一人的侵权行为承担法律责任，通常指雇主对雇员的责任。',
        'disclaimer': '免责声明：旨在限制或排除责任的声明。',
        'barwick test': '巴威克测试：用于确定因疏忽性失实陈述导致纯粹经济损失的注意义务的测试。'
    };

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    // Remove existing tooltips and styles
    document.querySelectorAll('.tooltip-custom').forEach(tooltip => tooltip.remove());
    document.getElementById('tooltip-styles')?.remove();
    
    // Clear existing legal term spans
    document.querySelectorAll('.legal-term').forEach(el => {
        el.outerHTML = el.textContent;
    });
    
    // Create a dedicated style element for tooltips
    const styleEl = document.createElement('style');
    styleEl.id = 'tooltip-styles';
    styleEl.textContent = `
        .tooltip-custom {
            position: fixed;
            background-color: #2c3e50;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            max-width: 300px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            pointer-events: none;
            /* Remove animation to make it instant */
        }
        
        .tooltip-custom::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 15px;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #2c3e50;
        }
        
        .tooltip-english {
            font-weight: 500;
            margin-bottom: 4px;
        }
        
        .tooltip-chinese {
            font-style: italic;
            opacity: 0.9;
            font-size: 0.9em;
        }
        
        /* Highlight state for legal terms */
        .legal-term-highlight {
            background-color: rgba(52, 152, 219, 0.1);
            border-bottom-color: #3498db !important;
            color: #3498db !important;
        }
        
        /* White underlines in accordion headers */
        .accordion-header .legal-term {
            color: white !important;
            border-bottom-color: white !important;
        }
    `;
    document.head.appendChild(styleEl);
    
    // Track processed terms
    const processedTerms = new Set();
    
    // Get all legal terms
    const termsList = Object.keys(legalTerms).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`\\b(${termsList.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');
    
    // Find all text nodes
    const textNodes = [];
    function getTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (!/SCRIPT|STYLE|BUTTON/i.test(node.parentNode.tagName) && 
                node.textContent.trim().length > 0 && 
                !node.parentNode.classList.contains('legal-term')) {
                textNodes.push(node);
            }
        } else {
            for (let i = 0; i < node.childNodes.length; i++) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }
    
    getTextNodes(mainContent);
    
    // Create a global tooltip element to reuse
    const globalTooltip = document.createElement('div');
    globalTooltip.className = 'tooltip-custom';
    globalTooltip.style.display = 'none';
    document.body.appendChild(globalTooltip);
    
    // Process each text node
    textNodes.forEach(textNode => {
        const parent = textNode.parentNode;
        if (parent.classList && parent.classList.contains('legal-term')) return;
        
        const text = textNode.textContent;
        let lastIndex = 0;
        let foundMatch = false;
        const fragment = document.createDocumentFragment();
        
        const tempDiv = document.createElement('div');
        tempDiv.textContent = text;
        const tempText = tempDiv.innerHTML;
        
        const newText = tempText.replace(pattern, (match, p1, offset) => {
            const lowerMatch = match.toLowerCase();
            
            if (processedTerms.has(lowerMatch)) {
                return match;
            }
            
            processedTerms.add(lowerMatch);
            
            foundMatch = true;
            const beforeMatch = tempText.substring(lastIndex, offset);
            if (beforeMatch) {
                fragment.appendChild(document.createTextNode(beforeMatch));
            }
            
            const span = document.createElement('span');
            span.className = 'legal-term text-[var(--primary-color)] border-b border-dashed border-[var(--primary-color)] cursor-help relative inline-block transition-all duration-200 ease-linear hover:text-[var(--secondary-color)] hover:border-[var(--secondary-color)] hover:bg-sky-100/50';
            span.dataset.term = lowerMatch;
            span.textContent = match;
            
            // Check if in accordion header and style accordingly
            let isInAccordionHeader = false;
            let currentParent = textNode.parentNode;
            while (currentParent && !isInAccordionHeader) {
                if (currentParent.classList && currentParent.classList.contains('accordion-header')) {
                    isInAccordionHeader = true;
                    span.style.color = 'white';
                    span.style.borderBottomColor = 'white';
                }
                currentParent = currentParent.parentNode;
            }
            
            // Multiple event listeners for better responsiveness
            const showTooltip = (e) => {
                // Remove highlight from all terms
                document.querySelectorAll('.legal-term-highlight').forEach(el => {
                    el.classList.remove('legal-term-highlight');
                });
                
                // Add highlight to current term
                span.classList.add('legal-term-highlight');
                
                // Get content
                const englishText = legalTerms[lowerMatch] || "Definition not available";
                const chineseText = legalTermsChinese[lowerMatch] || "无定义";
                
                // Update global tooltip
                globalTooltip.innerHTML = `
                    <div class="tooltip-english">${englishText}</div>
                    <div class="tooltip-chinese">${chineseText}</div>
                `;
                
                // Position and show
                const rect = e.target.getBoundingClientRect();
                globalTooltip.style.bottom = (window.innerHeight - rect.top + 15) + 'px';
                globalTooltip.style.left = rect.left + 'px';
                globalTooltip.style.display = 'block';
            };
            
            const hideTooltip = () => {
                span.classList.remove('legal-term-highlight');
                globalTooltip.style.display = 'none';
            };
            
            // Add multiple event listeners for better detection
            span.addEventListener('mouseenter', showTooltip);
            span.addEventListener('mouseover', showTooltip); // Backup
            span.addEventListener('mousemove', (e) => {
                // Update position on mouse move for better tracking
                if (globalTooltip.style.display === 'block') {
                    const rect = e.target.getBoundingClientRect();
                    globalTooltip.style.bottom = (window.innerHeight - rect.top + 15) + 'px';
                    globalTooltip.style.left = rect.left + 'px';
                }
            });
            
            span.addEventListener('mouseleave', hideTooltip);
            span.addEventListener('mouseout', hideTooltip); // Backup
            
            fragment.appendChild(span);
            lastIndex = offset + match.length;
            return match;
        });
        
        if (foundMatch) {
            if (lastIndex < tempText.length) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
            }
            parent.replaceChild(fragment, textNode);
        }
    });

    // Add document-wide listener to clean up any orphaned tooltips
    document.addEventListener('scroll', () => {
        globalTooltip.style.display = 'none';
        document.querySelectorAll('.legal-term-highlight').forEach(el => {
            el.classList.remove('legal-term-highlight');
        });
    }, { passive: true });
    
    // Hide tooltip when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('legal-term')) {
            globalTooltip.style.display = 'none';
            document.querySelectorAll('.legal-term-highlight').forEach(el => {
                el.classList.remove('legal-term-highlight');
            });
        }
    });
}

// Progress Visualization System
function createProgressVisualization() {
    const existingContainer = document.querySelector('.progress-visualization-container');
    if (existingContainer) existingContainer.remove();

    const progressContainer = document.createElement('div');
    // Apply Tailwind classes
    progressContainer.className = 'progress-visualization-container bg-white rounded-xl p-6 my-8 mx-auto max-w-3xl shadow-[var(--card-shadow)]';
    progressContainer.innerHTML = `
        <div class="progress-visualization-header mb-4">
            <h3 class="text-[var(--primary-color)] mb-4 text-center text-2xl font-semibold">📊 Learning Progress</h3>
            <div class="progress-stats grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4 mb-4">
                <div class="stat text-center p-2 bg-[var(--light-bg)] rounded-lg">
                    <span class="stat-value block text-xl font-bold text-[var(--primary-color)]" id="progressStatQuizzes">0/0</span>
                    <span class="stat-label text-sm text-[var(--secondary-color)]">Quizzes Attempted</span>
                </div>
                <div class="stat text-center p-2 bg-[var(--light-bg)] rounded-lg">
                    <span class="stat-value block text-xl font-bold text-[var(--primary-color)]" id="progressStatFlashcards">0/0</span>
                    <span class="stat-label text-sm text-[var(--secondary-color)]">Flashcards Reviewed</span>
                </div>
                <div class="stat text-center p-2 bg-[var(--light-bg)] rounded-lg">
                    <span class="stat-value block text-xl font-bold text-[var(--primary-color)]" id="progressStatKnowledgeChecks">0/0</span>
                    <span class="stat-label text-sm text-[var(--secondary-color)]">Knowledge Checks</span>
                </div>
            </div>
        </div>
        <div class="overall-progress-bar-container bg-[var(--light-bg)] rounded-full h-5 overflow-hidden mt-4 relative">
            <div class="overall-progress-bar h-full bg-gradient-to-r from-[var(--success-color)] to-[var(--secondary-color)] transition-width duration-500 ease-linear flex items-center justify-center text-white text-xs font-bold" id="overallProgressBarFill" style="width: 0%;">0%</div>
        </div>
    `;

    const mainElement = document.querySelector('main');
    if (mainElement) {
        const introSection = document.getElementById('intro');
        if (introSection && introSection.nextSibling) {
            mainElement.insertBefore(progressContainer, introSection.nextSibling);
        } else {
            mainElement.prepend(progressContainer);
        }
    } else {
        console.error("Main element not found for progress visualization.");
    }
    updateProgressStats();
}

function updateProgressStats() {
    const totalQuizzes = Object.keys(quizzes).length;
    const quizzesAttempted = achievementSystem.achievements.find(a => a.id === 'first_quiz')?.unlocked ? 1 : 0;
    const quizzesAttemptedEl = document.getElementById('progressStatQuizzes');
    if (quizzesAttemptedEl) quizzesAttemptedEl.textContent = `${quizzesAttempted}/${totalQuizzes}`;

    const totalFlashcards = flashcardSystem.cards.length;
    const reviewedFlashcards = Object.keys(flashcardSystem.lastReviewed).length;
    const flashcardsReviewedEl = document.getElementById('progressStatFlashcards');
    if (flashcardsReviewedEl) flashcardsReviewedEl.textContent = `${reviewedFlashcards}/${totalFlashcards}`;

    const totalKnowledgeChecks = document.querySelectorAll('.knowledge-check-box').length;
    const knowledgeChecksCompleted = achievementSystem.achievements.find(a => a.id === 'knowledge_checked')?.unlocked ? 1 : 0;
    const knowledgeChecksCompletedEl = document.getElementById('progressStatKnowledgeChecks');
    if (knowledgeChecksCompletedEl) knowledgeChecksCompletedEl.textContent = `${knowledgeChecksCompleted}/${totalKnowledgeChecks}`;

    let overallPercentage = 0;
    let components = 0;
    if (totalQuizzes > 0) { overallPercentage += (quizzesAttempted / totalQuizzes); components++; }
    if (totalFlashcards > 0) { overallPercentage += (reviewedFlashcards / totalFlashcards); components++; }
    if (totalKnowledgeChecks > 0) { overallPercentage += (knowledgeChecksCompleted / totalKnowledgeChecks); components++; }

    overallPercentage = components > 0 ? (overallPercentage / components) * 100 : 0;

    const progressBarFill = document.getElementById('overallProgressBarFill');
    if (progressBarFill) {
        progressBarFill.style.width = `${Math.round(overallPercentage)}%`;
        progressBarFill.textContent = `${Math.round(overallPercentage)}%`;
    }
}


// --- Event Listeners & Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Reset all progress data on page load
    localStorage.removeItem('flashcardProgress_tort_law');
    localStorage.removeItem('achievements_tort_law');
    const quizModal = document.getElementById('quizModal');
    if (quizModal) {
        // Ensure modal is hidden by default by script, supplementing Tailwind's 'hidden' class
        quizModal.classList.add('hidden');
        quizModal.classList.remove('active'); // Remove 'active' if it was unintentionally added
    }
    // Also hide knowledge check boxes by default using JS toggle, to supplement Tailwind's 'hidden'
    document.querySelectorAll('.knowledge-check-box').forEach(kcBox => {
        if (!kcBox.classList.contains('hidden')) { // Only toggle if not already hidden by HTML class
            toggleKnowledgeCheck(kcBox.id); // This will add 'hidden'
        }
    });


    const currentYear = new Date().getFullYear();
    const currentYearEl = document.getElementById('currentYear');
    const currentYearChineseEl = document.getElementById('currentYearChinese');
    if (currentYearEl) currentYearEl.textContent = currentYear;
    if (currentYearChineseEl) currentYearChineseEl.textContent = currentYear;

    flashcardSystem.initialize();
    achievementSystem.initialize();
    createProgressVisualization();

    initializeAccordions();
    addLegalTermTooltips();

    changeNavActiveState();
    window.addEventListener('scroll', changeNavActiveState);

    const modalInternalCloseBtn = document.querySelector('#quizModal .quiz-close-btn');
    if (modalInternalCloseBtn) {
        modalInternalCloseBtn.addEventListener('click', hideQuiz);
    }
    document.getElementById('closeQuizModalBtn')?.addEventListener('click', hideQuiz);
    document.getElementById('checkAnswersBtn')?.addEventListener('click', checkQuizAnswers);

    document.querySelectorAll('button[id^="quizBtn_"]').forEach(button => {
        const quizKey = button.id.replace('quizBtn_', '');
        button.addEventListener('click', () => showQuiz(quizKey));
    });

    document.querySelectorAll('button[id^="knowledgeCheckBtn_"]').forEach(button => {
        const kcId = button.id.replace('knowledgeCheckBtn_', '');
        button.addEventListener('click', () => toggleKnowledgeCheck(kcId));
    });
    document.querySelectorAll('button[id^="checkAnswersBtn_kc_"]').forEach(button => {
        const kcId = button.id.replace('checkAnswersBtn_', '');
        button.addEventListener('click', () => checkKnowledgeFillIn(kcId));
    });
    document.querySelectorAll('button[id^="revealAnswersBtn_kc_"]').forEach(button => {
        const kcId = button.id.replace('revealAnswersBtn_', '');
        button.addEventListener('click', () => revealKnowledgeFillIn(kcId));
    });

    console.log("Interactive Learning Hub Initialized.");
    // Add duck scroll button
    addScrollToTopButton();
});
// Function to add a fun scroll-to-top button
// Function to add a duck scroll-to-top button
function addScrollToTopButton() {
    // Remove any existing button first
    const existingButton = document.querySelector('.scroll-top-btn');
    if (existingButton) {
        existingButton.remove();
    }
    
    // Create the button
    const button = document.createElement('button');
    button.className = 'scroll-top-btn fixed bottom-8 right-8 bg-white hover:bg-yellow-100 text-white text-3xl w-16 h-16 rounded-full shadow-lg z-50 transition-all duration-300 flex items-center justify-center hidden';
    button.style.cssText = 'border: 2px solid #f39c12; transition: transform 0.3s ease; transform-origin: center;';
    
    // Duck emoji
    button.innerHTML = '🦆';
    button.title = 'Quack! Click me to go to the top!';
    
    // Create audio element for duck quack
    const quackSound = document.createElement('audio');
    quackSound.id = 'quack-sound';
    // This will need to be updated with the actual path to your sound file
    quackSound.src = 'quack.mp3'; 
    quackSound.preload = 'auto';
    document.body.appendChild(quackSound);
    
    // Add hover animation
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1) rotate(10deg)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1) rotate(0)';
    });
    
    // Add click event
    button.addEventListener('click', () => {
        // Play quack sound
        const sound = document.getElementById('quack-sound');
        if (sound) {
            sound.currentTime = 0; // Reset to start
            sound.play().catch(err => console.log('Audio playback error:', err));
        }
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add a waddle animation
        button.classList.add('waddle-animation');
        setTimeout(() => {
            button.classList.remove('waddle-animation');
        }, 1000);
    });
    
    // Show/hide based on scroll position
    function toggleButtonVisibility() {
        if (window.scrollY > 300) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    }
    
    // Initial check
    toggleButtonVisibility();
    
    // Listen for scroll events
    window.addEventListener('scroll', toggleButtonVisibility, { passive: true });
    
    // Add to document
    document.body.appendChild(button);
}
// Add this function to your app_script.js
// Add this to your fixInvisibleAccordionText function
function fixInvisibleAccordionText() {
    // Target all accordion headers
    document.querySelectorAll('.accordion-header').forEach(header => {
        // Force all text inside headers to be white
        const allTextElements = header.querySelectorAll('span, p, div');
        allTextElements.forEach(el => {
            el.style.color = 'white';
        });
        
        // Find any legal terms inside accordion headers and make their underlines white
        header.querySelectorAll('.legal-term').forEach(term => {
            term.style.color = 'white';
            term.style.borderBottomColor = 'white';
        });
        
        // Special check for the problematic Voluntary Assumption of Risk section
        if (header.textContent.includes('Voluntary Assumption of Risk') || 
            header.textContent.includes('自愿承担风险')) {
            // Direct style override for this specific header
            header.style.color = 'white';
            
            // Find all spans and force white text and borders
            header.querySelectorAll('span').forEach(span => {
                span.style.color = 'white';
                if (span.classList.contains('legal-term')) {
                    span.style.borderBottomColor = 'white';
                }
            });
        }
    });
}

// Call this function when the page loads and whenever accordions are clicked
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
    
    fixInvisibleAccordionText();
    
    // Run again whenever accordion headers are clicked
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', fixInvisibleAccordionText);
    });
});