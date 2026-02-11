const questions = [
     { 
        question: "Which of the following statements is true? Under the doctrine of the separation of powers the members of parliaments:", 
        translation: "以下哪项陈述是正确的？根据权力分立原则，议会成员：",
        options: [
            { text: "has the power to interpret laws on education.", translation: "有权解释有关教育的法律。" },
            { text: "has to follow the precedent set by the High Court of Australia.", translation: "必须遵循澳大利亚高等法院设定的先例。" },
            { text: "has the power to prevail over state law under s 109 of the Australia Constitution.", translation: "根据澳大利亚宪法第109条有权凌驾于州法律之上。" },
            { text: "has the power to make and amend laws.", translation: "有权制定和修改法律。" }
        ], 
        correct: 3,
        category: "Australian Law"
    },
    { 
        question: "Which of the following CANNOT be referred to as \"Common Law\"?", 
        translation: "以下哪项不能被称为"普通法"？",
        options: [
            { text: "Precedent.", translation: "先例。" },
            { text: "Case law.", translation: "判例法。" },
            { text: "Enacted law.", translation: "成文法。" },
            { text: "Judges' decisions.", translation: "法官的决定。" }
        ], 
        correct: 2,
        category: "Australian Law"
    },
    { 
        question: "Which of the following statements involving criminal law is NOT correct?", 
        translation: "以下关于刑法的说法哪项不正确？",
        options: [
            { text: "Examples of criminal law are the charges of murder, or fraud.", translation: "刑法的例子包括谋杀或欺诈指控。" },
            { text: "It is a dispute between an individual and another legal entity.", translation: "它是个人与另一法律实体之间的争议。" },
            { text: "The Crown (or prosecution) must prove its case beyond reasonable doubt.", translation: "王室（或检方）必须证明其案件确实无疑。" },
            { text: "The offender can be punished either by fine or imprisonment.", translation: "罪犯可以通过罚款或监禁来惩罚。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "What is the name used for a person who commences a civil action?", 
        translation: "对提起民事诉讼的人使用什么名称？",
        options: [
            { text: "Accused.", translation: "被告人。" },
            { text: "Defendant.", translation: "被告。" },
            { text: "Plaintiff.", translation: "原告。" },
            { text: "Respondent.", translation: "答辩人。" }
        ], 
        correct: 2,
        category: "Australian Law"
    },
    { 
        question: "Section 109 of the Australian Constitution provides that if a statute made by a state legislature is inconsistent with a statute made by the federal legislature:", 
        translation: "澳大利亚宪法第109条规定，如果州立法机构制定的法规与联邦立法机构制定的法规不一致：",
        options: [
            { text: "both the federal law and state law will be made invalid to the extent of the inconsistency.", translation: "联邦法律和州法律在不一致的范围内均无效。" },
            { text: "both the federal law and state law will be valid.", translation: "联邦法律和州法律均有效。" },
            { text: "the federal law shall prevail, and the state law will be invalid to the extent of the inconsistency.", translation: "联邦法律应当优先，州法律在不一致的范围内无效。" },
            { text: "the state law shall prevail, and the federal law will be invalid to the extent of the inconsistency.", translation: "州法律应当优先，联邦法律在不一致的范围内无效。" }
        ], 
        correct: 2,
        category: "Australian Law"
    },
    { 
        question: "A decision by the Supreme Court of NSW is binding on the:", 
        translation: "新南威尔士州最高法院的决定对以下哪一项有约束力：",
        options: [
            { text: "Federal Court of Australia.", translation: "澳大利亚联邦法院。" },
            { text: "High Court of Australia.", translation: "澳大利亚高等法院。" },
            { text: "Lower Courts of Queensland.", translation: "昆士兰州的下级法院。" },
            { text: "District Courts of NSW.", translation: "新南威尔士州的地区法院。" }
        ], 
        correct: 3,
        category: "Australian Law"
    },
    { 
        question: "Establishing laws regarding education, health, and local government are examples under which power?", 
        translation: "制定关于教育、健康和地方政府的法律是哪种权力的例子？",
        options: [
            { text: "Executive power.", translation: "行政权力。" },
            { text: "Residual power.", translation: "剩余权力。" },
            { text: "Exclusive power.", translation: "专属权力。" },
            { text: "Legislature power.", translation: "立法权力。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "The term 'civil law' can refer to those legal systems whose laws are based on Roman law. It can also refer to the body of laws:", 
        translation: "'民法'一词可以指基于罗马法的法律体系。它也可以指：",
        options: [
            { text: "that is created by judges", translation: "由法官创建的法律" },
            { text: "that does not relate to criminal offences.", translation: "与刑事犯罪无关的法律。" },
            { text: "that establish what conduct is criminal and the punishments for engaging in such conduct", translation: "确立哪些行为是犯罪以及从事此类行为的惩罚的法律" },
            { text: "that is based on fairness and justice", translation: "基于公平和正义的法律" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "Which of the following statements is NOT the purpose of the law?", 
        translation: "以下哪项陈述不是法律的目的？",
        options: [
            { text: "The purpose of the law is to regulate the conduct of the individuals.", translation: "法律的目的是规范个人的行为。" },
            { text: "To grant arbitrary power to a particular government body.", translation: "向特定政府机构授予任意权力。" },
            { text: "Providing a legal system to hear and settle disputes by an independent and impartial process.", translation: "提供通过独立和公正程序听取和解决纠纷的法律制度。" },
            { text: "Determining the rights, duties and obligation of people who are engaged in everyday transactions.", translation: "确定从事日常交易的人的权利、责任和义务。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "The ability to create different laws for Australian states, territories and the Commonwealth occurs because of the:", 
        translation: "为澳大利亚各州、领地和联邦创建不同法律的能力是由于：",
        options: [
            { text: "court system of hierarchy.", translation: "法院等级制度。" },
            { text: "separation of power.", translation: "权力分立。" },
            { text: "division of power.", translation: "权力划分。" },
            { text: "case law from common law courts.", translation: "普通法法院的判例法。" }
        ], 
        correct: 2,
        category: "Australian Law"
    },
    { 
        question: "Civil law involves the disputes:", 
        translation: "民法涉及的纠纷：",
        options: [
            { text: "Between individuals and the Crown.", translation: "个人与王室之间。" },
            { text: "Between corporations only.", translation: "仅在公司之间。" },
            { text: "Between legal entities including persons, corporations or government.", translation: "在包括个人、公司或政府在内的法律实体之间。" },
            { text: "Between government only.", translation: "仅在政府之间。" }
        ], 
        correct: 2,
        category: "Australian Law"
    },
    { 
        question: "Under Australian democracy, 'unelected' judges make laws that determine the way people live. Parliaments, on the other hand, are elected by voters so in this indirect way the electors can determine the laws that people live by. In consideration to the above statement which of the following would be classed as the supreme law?", 
        translation: "在澳大利亚民主制下，"未经选举"的法官制定决定人们生活方式的法律。另一方面，议会由选民选举产生，因此选民可以间接决定人们生活的法律。考虑到上述说法，以下哪一项会被归类为最高法律？",
        options: [
            { text: "Common law", translation: "普通法" },
            { text: "Acts of legislation", translation: "立法法案" },
            { text: "Equity law", translation: "衡平法" },
            { text: "Doctrine of precedent", translation: "先例原则" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "Which of the following statements of doctrine of precedent is NOT correct?", 
        translation: "以下关于先例原则的说法哪项不正确？",
        options: [
            { text: "The basis of doctrine of precedent is: like case should be decided alike.", translation: "先例原则的基础是：相似案件应相似裁决。" },
            { text: "The reasons given for deciding a case is called \"obiter dicta\" which constitutes a binding precedent.", translation: "判决案件的理由被称为"附带意见"，构成有约束力的先例。" },
            { text: "The cases with similar facts should be decided in the same way as the higher court in the same judiciary hierarchy.", translation: "具有相似事实的案件应当以与同一司法等级中更高法院相同的方式裁决。" },
            { text: "In Australia, both the commonwealth and the states have adopted a hierarchical court system.", translation: "在澳大利亚，联邦和各州都采用了分层次的法院系统。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "Under the concept of 'separation of powers' the function of the executive is to:", 
        translation: "在"权力分立"概念下，行政部门的职能是：",
        options: [
            { text: "administer the law.", translation: "执行法律。" },
            { text: "evaluate the law.", translation: "评估法律。" },
            { text: "interpret the law.", translation: "解释法律。" },
            { text: "make and amend the law.", translation: "制定和修改法律。" }
        ], 
        correct: 0,
        category: "Australian Law"
    },
    { 
        question: "Which of the following statements of federation is correct:", 
        translation: "以下关于联邦制的说法哪项是正确的：",
        options: [
            { text: "Each colony was granted more power to make their own laws.", translation: "每个殖民地获得了更多制定自己法律的权力。" },
            { text: "Each colony became a state with its own parliament that enacted law for the state.", translation: "每个殖民地成为一个州，拥有自己的议会，为该州制定法律。" },
            { text: "Each colony was able to retain its law-making powers upon federation.", translation: "每个殖民地在联邦制下能够保留其立法权。" },
            { text: "Federation is a process of uniting six British colonies during the meeting in 1890s.", translation: "联邦制是在1890年代的会议中统一六个英国殖民地的过程。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "An example of a State court is the:", 
        translation: "州法院的例子是：",
        options: [
            { text: "Family Court.", translation: "家庭法院。" },
            { text: "Federal Circuit Court.", translation: "联邦巡回法院。" },
            { text: "High Court.", translation: "高等法院。" },
            { text: "Local Court.", translation: "地方法院。" }
        ], 
        correct: 3,
        category: "Australian Law"
    },
    { 
        question: "Which of the following statement is the appropriate description of residual powers?", 
        translation: "以下哪项说法是对剩余权力的恰当描述？",
        options: [
            { text: "Residual power is when the states agreed to federate, they decided that some laws should exclusively made by commonwealth.", translation: "剩余权力是指当各州同意联合时，它们决定某些法律应由联邦专属制定。" },
            { text: "Residual power is if the Constitution has not given the Commonwealth specific powers to make laws in a certain area, only the states can enact valid laws.", translation: "剩余权力是指如果宪法没有赋予联邦在某个领域制定法律的特定权力，则只有各州可以制定有效法律。" },
            { text: "Residual powers allow states to make valid laws in the areas of customs and excise, military forces, currencies, etc.", translation: "剩余权力允许各州在海关和消费税、军事力量、货币等领域制定有效法律。" },
            { text: "Commonwealth and states parliament cannot exercise their law-making power on the same matter.", translation: "联邦和州议会不能对同一事项行使其立法权。" }
        ], 
        correct: 1,
        category: "Australian Law"
    },
    { 
        question: "Unenacted law is also known as?", 
        translation: "未制定法也被称为？",
        options: [
            { text: "Precedent.", translation: "先例。" },
            { text: "Statute law.", translation: "成文法。" },
            { text: "Acts of parliament.", translation: "议会法案。" },
            { text: "Legislation", translation: "立法" }
        ], 
        correct: 0,
        category: "Australian Law"
    },
    { 
        question: "Under the doctrine of precedent, a decision by the Supreme Court of Queensland is binding on the:", 
        translation: "根据先例原则，昆士兰州最高法院的决定对以下哪一项有约束力：",
        options: [
            { text: "Supreme Court of Queensland.", translation: "昆士兰州最高法院。" },
            { text: "High Court of Australia.", translation: "澳大利亚高等法院。" },
            { text: "District Courts of NSW.", translation: "新南威尔士州的地区法院。" },
            { text: "Local Courts of Queensland.", translation: "昆士兰州的地方法院。" }
        ], 
        correct: 3,
        category: "Australian Law"
    },
    { 
        question: "As a result of the injustices that sometimes occurred with the application of the common law in the early UK court system, which system was developed to provide more flexible remedies that were inadequate within common law system?", 
        translation: "由于英国早期法院系统中普通法的应用有时会出现不公正现象，为提供普通法体系中不足的更灵活补救措施，发展了哪种系统？",
        options: [
            { text: "Court system of hierarchy.", translation: "分级法院系统。" },
            { text: "Separation of power.", translation: "权力分立。" },
            { text: "Equity.", translation: "衡平法。" },
            { text: "Case law from common law courts.", translation: "普通法法院的判例法。" }
        ], 
        correct: 2,
        category: "Australian Law"
    }
];

];