const tableData = [
   {
    id: "T0007",
    subject: "Ist paper: 1.5 Innovative Governance",
    title: "Innovation",
    caption: "Innovation Enhancement Action Plan",
    table: [
        ["", "क्र.सं.", "क्रियाकलाप", "कार्यान्वयन समय (मासिक)", "जिम्मेवार निकाय", "सहयोगी निकाय", "बजेट (रु. लाखमा)", "कैफियत", ""],
        ["", "---------", "------------", "------------------------", "----------------", "---------------", "----------------", "----------", ""],
        ["", "<b>१. नीतिगत तथा संस्थागत व्यवस्था</b>", ""],
        ["", "१.१", "नवप्रवर्तन नीति तर्जुमा", "बैशाख-जेठ", "सा.प्र.मन्त्रालय", "का.मन्त्रालय", "१०", "", ""],
        ["", "१.२", "कार्यविधि र मापदण्ड निर्माण", "जेठ-असार", "सा.प्र.मन्त्रालय", "कानून मन्त्रालय", "५", "", ""],
        ["", "१.३", "नवप्रवर्तन एकाई स्थापना", "असार", "सबै मन्त्रालय", "सा.प्र.मन्त्रालय", "२०", "", ""],
        ["", "<b>२. क्षमता विकास</b>", ""],
        ["", "२.१", "तालिम पाठ्यक्रम विकास", "श्रावण", "क.प्र.प्रतिष्ठान", "विज्ञ समूह", "१०", "", ""],
        ["", "२.२", "प्रशिक्षक प्रशिक्षण", "भदौ", "क.प्र.प्रतिष्ठान", "विज्ञ समूह", "१५", "", ""],
        ["", "२.३", "कर्मचारी तालिम", "असोज-कार्तिक", "क.प्र.प्रतिष्ठान", "सबै निकाय", "३०", "", ""],
        ["", "<b>३. प्रविधि विकास</b>", ""],
        ["", "३.१", "डिजिटल प्लेटफर्म निर्माण", "श्रावण-भदौ", "सू.प्र.विभाग", "विज्ञ समूह", "४०", "", ""],
        ["", "३.२", "सफ्टवेयर विकास", "भदौ-असोज", "सू.प्र.विभाग", "आई.टी. विज्ञ", "३०", "", ""],
        ["", "३.३", "हार्डवेयर व्यवस्थापन", "असोज-कार्तिक", "सू.प्र.विभाग", "सबै निकाय", "२०", "", ""],
        ["", "<b>४. कार्यान्वयन</b>", ""],
        ["", "४.१", "पाइलट प्रोजेक्ट सञ्चालन", "कार्तिक-मंसिर", "छनौट कार्यालय", "सा.प्र.मन्त्रालय", "४०", "", ""],
        ["", "४.२", "प्रक्रिया सरलीकरण", "मंसिर-पुष", "सबै निकाय", "सा.प्र.मन्त्रालय", "१०", "", ""],
        ["", "४.३", "अनलाइन सेवा विस्तार", "पुष-माघ", "सबै निकाय", "सू.प्र.विभाग", "२०", "", ""],
        ["", "<b>५. प्रोत्साहन</b>", ""],
        ["", "५.१", "नवप्रवर्तन कोष स्थापना", "माघ", "मन्त्रिपरिषद्", "अर्थ मन्त्रालय", "३०", "", ""],
        ["", "५.२", "पुरस्कार तथा प्रोत्साहन", "फागुन", "सा.प्र.मन्त्रालय", "सबै निकाय", "१५", "", ""],
        ["", "<b>६. मूल्यांकन तथा विस्तार</b>", ""],
        ["", "६.१", "प्रभाव मूल्यांकन", "चैत्र", "रा.यो.आयोग", "सबै निकाय", "१५", "", ""],
        ["", "६.२", "सफल अभ्यास संकलन", "चैत्र", "सा.प्र.मन्त्रालय", "सबै निकाय", "५", "", ""],
        ["", "६.३", "विस्तार योजना तयारी", "चैत्र", "सा.प्र.मन्त्रालय", "रा.यो.आयोग", "५", "", ""],
        ["", "<b>कुल बजेट</b>", "", "", "", "", "<b>३२०</b>", "", ""],
        [""],
        ["<b>कार्यान्वयन अनुगमन तालिका:</b>"],
        [""],
        ["", "अनुगमन विधि", "समय", "जिम्मेवार निकाय", ""],
        ["", "-------------", "------", "----------------", ""],
        ["", "मासिक प्रगति समीक्षा", "हरेक महिनाको ७ गते", "सम्बन्धित मन्त्रालय", ""],
        ["", "त्रैमासिक समीक्षा", "त्रैमासिक अन्त्यमा", "सा.प्र.मन्त्रालय", ""],
        ["", "अर्धवार्षिक मूल्यांकन", "पुष मसान्त", "रा.यो.आयोग", ""],
        ["", "वार्षिक मूल्यांकन", "चैत्र मसान्त", "मन्त्रिपरिषद्", ""],
        [""],
        ["", "क्रियाकलाप", "पहिलो त्रैमासिक", "दोस्रो त्रैमासिक", "तेस्रो त्रैमासिक", "चौथो त्रैमासिक", "जिम्मेवार निकाय", "बजेट (लाखमा)", ""],
        ["", "---", "---", "---", "---", "---", "---", "---", ""],
        ["", "<b>नीतिगत व्यवस्था</b>", "नीति तर्जुमा, कार्यविधि निर्माण", "कार्यान्वयन निर्देशिका", "अनुगमन र परिमार्जन", "मूल्यांकन", "सा.प्र.मन्त्रालय", "२०", ""],
        ["", "<b>संस्थागत संरचना</b>", "एकाई स्थापना, कार्यदल गठन", "जनशक्ति व्यवस्थापन", "क्षमता विकास", "प्रभावकारिता मूल्यांकन", "सबै मन्त्रालय", "३०", ""],
        ["", "<b>क्षमता विकास</b>", "आवश्यकता पहिचान", "तालिम सञ्चालन", "क्षमता परीक्षण", "प्रभाव मूल्यांकन", "क.प्र.प्रतिष्ठान", "४०", ""],
        ["", "<b>प्रविधि विकास</b>", "पूर्वाधार तयारी", "प्लेटफर्म विकास", "सफ्टवेयर निर्माण", "परीक्षण र सुधार", "सू.प्र.विभाग", "८०", ""],
        ["", "<b>कार्यान्वयन</b>", "पाइलट कार्यालय छनौट", "सेवा विस्तार", "प्रक्रिया सरलीकरण", "प्रभाव मूल्यांकन", "छनौट कार्यालय", "६०", ""],
        ["", "<b>प्रोत्साहन व्यवस्था</b>", "कार्यविधि निर्माण", "कोष स्थापना", "कार्यान्वयन", "पुरस्कार वितरण", "मन्त्रिपरिषद्", "५०", ""],
        ["", "<b>अनुगमन मूल्यांकन</b>", "सूचक निर्माण", "प्रगति समीक्षा", "मध्यावधि मूल्यांकन", "अन्तिम मूल्यांकन", "रा.यो.आयोग", "२०", ""],
        ["", "<b>विस्तार योजना</b>", "सम्भाव्यता अध्ययन", "कार्यविधि तयारी", "योजना निर्माण", "स्वीकृति र विस्तार", "सा.प्र.मन्त्रालय", "२०", ""],
        [""],
        ["<b>संक्षिप्त रूप:</b>"],
        ["- सा.प्र.मन्त्रालय = सामान्य प्रशासन मन्त्रालय"],
        ["- क.प्र.प्रतिष्ठान = कर्मचारी प्रशिक्षण प्रतिष्ठान"],
        ["- सू.प्र.विभाग = सूचना प्रविधि विभाग"],
        ["- रा.यो.आयोग = राष्ट्रिय योजना आयोग"],
        [""],
        ["<b>जम्मा बजेट:</b> रु. ३२० लाख"],
        [""],
        ["<b>अनुगमन तालिका:</b>"],
        ["", "अनुगमन विधि", "समय", "जिम्मेवार निकाय", ""],
        ["", "---", "---", "---", ""],
        ["", "<b>मासिक समीक्षा</b>", "हरेक महिनाको ७ गते", "सम्बन्धित मन्त्रालय", ""],
        ["", "<b>त्रैमासिक समीक्षा</b>", "त्रैमासिक अन्त्य", "सा.प्र.मन्त्रालय", ""],
        ["", "<b>वार्षिक मूल्यांकन</b>", "वर्षको अन्त्य", "मन्त्रिपरिषद्", ""]
    ],
    footnote: "compiled by:Shiva Prasad Acharya, Supreme Court",
    compiler: "AI generated",
    dateCreated: "2024-11-29"
},
    {
    id: "M0006",
    subject: "Matrix",
    title: "bureaucracy",
    caption: "Urgency - Importance Matrix",
    table: [
        ["--", "Low Urgency", "High Urgency"],
        ["<b>High Importance</b>", "Plan<br>• Strategic tasks<br>• Long-term goals<br>• Quality focus", "Do First<br>• Critical tasks<br>• Deadlines<br>• Crisis management"],
        ["<b>Low Importance</b>", "Eliminate<br>• Time wasters<br>• Low value<br>• No priority", "Delegate<br>• Quick wins<br>• Routine tasks<br>• Time sensitive"]
    ],
    footnote: "Complier: Shiva Prasad Acharya, Supreme Court",
    compiler: "generated by AI",
    dateCreated: "2024-11-28"
},
    {
    id: "M0005",
    subject: "Matrix",
    title: "bureaucracy",
    caption: "performance-potential relation",
    table: [
        ["--", "Low Performance", "High Performance"],
        ["<b>High Potential</b>", "Enigma<br>• Underutilized<br>• Needs direction<br>• Future leader", "Star<br>• Top talent<br>• Fast tracker<br>• Future executive"],
        ["<b>Low Potential</b>", "Risk<br>• Poor fit<br>• Needs change<br>• Consider exit", "Workhorse<br>• Reliable<br>• Consistent<br>• Limited growth"]
    ],
    footnote: "Complier: Shiva Prasad Acharya, Supreme Court",
    compiler: "generated by AI",
    dateCreated: "2024-11-28"
},
    {
    id: "M0004",
    subject: "public service",
    title: "bureaucracy",
    caption: "Maturity vs Experience Matrix:",
    table: [
        ["--", "Low Experience", "High Experience"],
        ["<b>High Maturity</b>", "Emerging Leader<br>• Quick learner<br>• Responsible<br>• Needs mentoring", "Seasoned Professional<br>• Strategic thinker<br>• Mentor to others<br>• Ready for top roles"],
        ["<b>Low Maturity</b>", "Entry Level<br>• Requires guidance<br>• Basic skills only<br>• Needs training", "Technical Expert<br>• Skilled but rigid<br>• Poor team player<br>• Needs soft skills"]
    ],
    footnote: "compiler: shiva prasad acharya, supreme court",
    compiler: "",
    dateCreated: "2024-11-28"
},
    {
    id: "T0003",
    subject: "federalism",
    title: "India-Pakistan-Nepal",
    caption: "Comparision table",
    table: [
        ["", "Aspect", "India", "Pakistan", "Nepal", ""],
        ["", " <b>Constitutional Basis</b>", "Constitution of India (1950)", "Constitution of Pakistan (1973)", "Constitution of Nepal (2015)", ""],
        ["", "<b>Nature of Federation</b>", "Quasi-federal with strong central tendencies", "Federal parliamentary system", "Federal democratic republic", ""],
        ["", "<b>Number of Units</b>", "28 States, 8 Union Territories", "4 Provinces, Islamabad Capital Territory, FATA integrated in 2018", "7 Provinces", ""],
        ["", "<b>Legislative Division</b>", "Three Lists: Union, State, Concurrent", "Two Lists: Federal and Provincial", "Five Lists: Federal, Provincial , Local, Federal-Province Concurrent, Concurrent", ""],
        ["", "<b>Residual Powers</b>", "Reside with the Union", "Reside with the Provinces", "Reside with the Federation", ""],
        ["", "<b>Local Government System</b>", "Panchayati Raj (rural) and Municipalities (urban)", "Weak and largely controlled by provinces", "Constitutionally mandated  local governments", ""],
        ["", "<b>Upper House Representation</b>", "Rajya Sabha, states have proportional representation", "Senate, equal representation for provinces", "National Assembly, provinces represented proportionally", ""],
        ["", "<b>Federal Body for Coordination</b>Key ", "Inter-State Council", "Council of Common Interests (CCI)", "Inter-Provincial Council  (Art.234)", ""],
        ["", "<b>Financial Resource Distribution</b>", "Finance Commission for central-state transfers", "National Finance Commission (NFC)", "National Natural Resources and Fiscal Commission (NNFRC)", ""],
        ["", "<b>Decentralization</b>", "Strong central control over key areas", "Strengthened provincial autonomy (18th Amendment)", "Strong emphasis on local governance and federal equality", ""],
        ["", "<b>Amendments Impacting Federalism</b>", "42nd Amendment (1976) increased central powers, later balanced by 73rd and 74th Amendments", "18th Amendment (2010) significantly enhanced provincial autonomy", "2015 Constitution established federal system", ""],
        ["", "<b>Ethnic and Cultural Considerations</b>", "Linguistic reorganization of states", "Ethnic and regional tensions in provinces like Balochistan", "Federal structure based on ethnic and geographic divisions", ""],
        ["", "<b>Judiciary’s Role</b>", "Supreme Court resolves federal disputes", "Supreme Court resolves federal disputes", "Constitutional Bench of the Supreme Court resolves federal unit disputes", ""],
        ["", "<b>Language Policy</b>", "Official language is Hindi; English as associate language", "Urdu as the national language; regional languages recognized", "Nepali as the official language; local languages recognized", ""],
        ["", "<b>Challenges</b>", "Regional autonomy demands (e.g., Kashmir, Northeast)", "Center-province tensions, ethnic conflicts, resource sharing issues", "Effective implementation, inter-province coordination", ""]
    ],
    footnote: "compiled by: Shiva Prasad Acharya, Supreme Court",
    compiler: "generated by AI",
    dateCreated: "2024-11-28"
},
    
    {
    id: "T0002",
    subject: "federalism",
    title: "India-Pakistan",
    caption: "India-Pak Federal Structure",
    table: [
        ["", "Feature", "India", "Pakistan", ""],
        ["", "Constitutional Framework", "Constitution of India (1950)", "Constitution of Pakistan (1973)", ""],
        ["", "System Type", "Federal parliamentary democracy", "Federal parliamentary republic", ""],
        ["", "Division of Powers", "Three lists: Union, State, and Concurrent", "Two lists: Federal and Residual (for provinces)", ""],
        ["", "Concurrent List", "Exists, shared subjects", "Abolished by the 18th Amendment in 2010", ""],
        ["", "Residual Powers", "Vested in the central government", "Vested in the provinces", ""],
        ["", "Number of Units", "28 States and 8 Union Territories", "4 Provinces and territories (e.g., Islamabad, FATA)", ""],
        ["", "Role of Local Governments", "Constitutionally mandated (73rd, 74th Amendments)", "Operates under provincial laws, weaker constitutional backing", ""],
        ["", "Representation in Upper House", "Unequal, based on population", "Equal for all provinces in the Senate", ""],
        ["", "Judiciary", "Integrated judiciary; Supreme Court is apex", "Integrated judiciary; Supreme Court is apex", ""],
        ["", "Amendment Process", "Parliament approval, sometimes state approval", "Parliament approval, provincial consultation required", ""],
        ["", "Autonomy of States/Provinces", "Limited; strong central influence", "Greater autonomy post-18th Amendment", ""],
        ["", "Crisis Management", "Central government can dismiss state governments (Article 356)", "Federal government has limited intervention powers", ""],
        ["", "Language Policy", "Multi-lingual; 22 scheduled languages, Hindi & English official", "Urdu national; provincial languages recognized (e.g., Sindhi)", ""],
        ["", "Financial Distribution", "Through Finance Commission, controlled by Union", "National Finance Commission (NFC) allocates resources", ""],
        ["", "Federalism in Practice", "More centralized; federal government dominant", "More decentralized post-18th Amendment", ""],
        ["", "Ethnic and Regional Issues", "Managed through linguistic states (e.g., Andhra Pradesh)", "Challenges from ethnic diversity (e.g., Balochistan)", ""]
    ],
    footnote: "compiled by: Shiva Prasad Acharya, Supreme Court",
    compiler: "AI generated",
    dateCreated: "2024-11-28"
},
{
    id: "M001",
    subject: "Matrix",
    title: "skill-will matrix",
    caption: "SKILL-WILL Matrix (सीप-इच्छा सम्बन्ध)",
    table: [
        ["--", "Low Skill", "High Skill"],
        ["<b>High Will </b>", "<u>सिकारू कर्मचारी</u><br>•Incompetent but committed <br>•enthusiastic <br>•revolutionary<br>• के गर्ने, कहिले गर्ने, कसरी गर्ने भन्ने जान्दैन तर गर्न चाहन्छ<br> •needs empowerment", "<u>उत्कृष्ट कर्मचारी </u><br>• peak performer <br> • role model,<br>• high achiever <br>•visionary<br>•गर्न जानेको छ र गरेको पनि छ<br> •needs recognition"],
        ["<b>Low Will</b>", "<u>निष्क्रिय कर्मचारी </u><br> • parasitic, <br>• doubtful, <br> shelter seeking <br>•गर्न पनि आउँदैन र गर्न पनि चाँहदैन <br>• needs intervention", "<u> निराश कर्मचारी </u><br> •capable but unmotivated <br>•compentent but discouraged <br>•गर्न आउँछ तर गर्न चाहँदैन<br>•need motivation"]
    ],
    footnote: "compiled by: Shiva Prasad Acharya, Supreme Court",
    compiler: "compiled by: Shiva Prasad Acharya, Supreme Court",
    dateCreated: "2024-11-28"
  }
  // Add more table objects here
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tableData;
}
