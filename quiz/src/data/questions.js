// src/data/questions.js
const questions = [
    // Cybersecurity
    { question: "What does a firewall do?", options: ["Blocks malware", "Deletes files", "Runs software", "Creates backups"], correct: "Blocks malware", category: "Cybersecurity" },
    { question: "Which of these is a strong password?", options: ["123456", "password", "P@ssw0rd!", "qwerty"], correct: "P@ssw0rd!", category: "Cybersecurity" },
    { question: "What is phishing?", options: ["A cyber attack", "A type of software", "A programming language", "An encryption method"], correct: "A cyber attack", category: "Cybersecurity" },
    { question: "What does SSL stand for?", options: ["Secure Sockets Layer", "System Security Lock", "Software Secure Login", "Safe Socket Limit"], correct: "Secure Sockets Layer", category: "Cybersecurity" },
    { question: "What is two-factor authentication?", options: ["A single password", "A security method with two steps", "An antivirus tool", "A network protocol"], correct: "A security method with two steps", category: "Cybersecurity" },
    { question: "Which protocol is used for secure web browsing?", options: ["HTTP", "FTP", "HTTPS", "TCP"], correct: "HTTPS", category: "Cybersecurity" },
    { question: "Which of the following is a type of malware?", options: ["Phishing", "Trojan horse", "Firewall", "Encryption"], correct: "Trojan horse", category: "Cybersecurity" },
    { question: "What does VPN stand for?", options: ["Virtual Protocol Network", "Virtual Private Network", "Verified Personal Network", "Variable Privacy Network"], correct: "Virtual Private Network", category: "Cybersecurity" },
    { question: "Which of these is NOT a strong security practice?", options: ["Using the same password everywhere", "Enabling 2FA", "Regularly updating software", "Using a password manager"], correct: "Using the same password everywhere", category: "Cybersecurity" },
    { question: "What is ransomware?", options: ["Software that hides in RAM", "Malware that demands payment", "A hardware issue", "An antivirus tool"], correct: "Malware that demands payment", category: "Cybersecurity" },
    { question: "Which is a common sign of a phishing email?", options: ["Perfect grammar", "Email from a known contact", "Urgent language asking for personal info", "No links"], correct: "Urgent language asking for personal info", category: "Cybersecurity" },
    { question: "What is the primary goal of encryption?", options: ["Speed", "Data compression", "Data protection", "Software development"], correct: "Data protection", category: "Cybersecurity" },
    { question: "What is the main purpose of an antivirus program?", options: ["Design websites", "Prevent data entry errors", "Detect and remove malware", "Improve internet speed"], correct: "Detect and remove malware", category: "Cybersecurity" },
    { question: "Which of these is a brute-force attack?", options: ["Sending phishing emails", "Trying every password combination", "Injecting malicious code", "Using spyware"], correct: "Trying every password combination", category: "Cybersecurity" },
    { question: "What is social engineering in cybersecurity?", options: ["Using AI to analyze data", "Manipulating people to gain confidential info", "Writing secure code", "Scanning networks"], correct: "Manipulating people to gain confidential info", category: "Cybersecurity" },
    { question: "What is the role of a cybersecurity analyst?", options: ["Design graphics", "Analyze threats and prevent breaches", "Develop mobile apps", "Test UI/UX designs"], correct: "Analyze threats and prevent breaches", category: "Cybersecurity" },

    // Software Development
    { question: "Which language is primarily used for Android development?", options: ["Swift", "Java", "C#", "Kotlin"], correct: "Kotlin", category: "Software Development" },
    { question: "What is an API?", options: ["Application Programming Interface", "Automated Process Integration", "Advanced Protocol Interface", "Artificial Program Integration"], correct: "Application Programming Interface", category: "Software Development" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Question Logic", "Software Query Logic", "System Quality Language"], correct: "Structured Query Language", category: "Software Development" },
    { question: "What is Git used for?", options: ["Version control", "Writing code", "Debugging", "Testing"], correct: "Version control", category: "Software Development" },
    { question: "Which framework is used for React development?", options: ["Django", "Express.js", "Redux", "Laravel"], correct: "Redux", category: "Software Development" },
    { question: "Which software methodology follows iterative development?", options: ["Waterfall", "Agile", "Spiral", "V-Model"], correct: "Agile", category: "Software Development" },
    { question: "What is the main purpose of a compiler?", options: ["Edit code", "Debug code", "Translate code into machine language", "Store files"], correct: "Translate code into machine language", category: "Software Development" },
    { question: "Which of these is a version control system?", options: ["Firebase", "MySQL", "Git", "Docker"], correct: "Git", category: "Software Development" },
    { question: "Which development model involves regular customer feedback?", options: ["Waterfall", "Agile", "V-Model", "RAD"], correct: "Agile", category: "Software Development" },
    { question: "What is the full form of SDLC?", options: ["Software Design Life Cycle", "System Development Logic Control", "Software Development Life Cycle", "System Design Life Cycle"], correct: "Software Development Life Cycle", category: "Software Development" },
    { question: "Which language is used for iOS development?", options: ["Swift", "Kotlin", "Java", "Python"], correct: "Swift", category: "Software Development" },
    { question: "Which of the following is a backend framework?", options: ["Angular", "React", "Laravel", "Bootstrap"], correct: "Laravel", category: "Software Development" },
    { question: "What does the term 'debugging' refer to?", options: ["Testing a UI", "Fixing errors in code", "Writing documentation", "Installing packages"], correct: "Fixing errors in code", category: "Software Development" },
    { question: "What is the purpose of unit testing?", options: ["Test entire app at once", "Test individual pieces of code", "Test design layout", "Check database structure"], correct: "Test individual pieces of code", category: "Software Development" },
    { question: "Which of these tools is used for containerization?", options: ["Postman", "Figma", "GitHub", "Docker"], correct: "Docker", category: "Software Development" },
    { question: "What does MVC stand for?", options: ["Model View Controller", "Main Version Control", "Multi View Config", "Model Validation Class"], correct: "Model View Controller", category: "Software Development" },
    

    // AI
    { question: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Innovation", "Augmented Integration"], correct: "Artificial Intelligence", category: "AI" },
    { question: "Which programming language is most used for AI?", options: ["C++", "Python", "JavaScript", "Swift"], correct: "Python", category: "AI" },
    { question: "What is Machine Learning?", options: ["A way to build robots", "A method for AI to learn from data", "A software testing method", "A type of database"], correct: "A method for AI to learn from data", category: "AI" },
    { question: "Which of these is a deep learning framework?", options: ["TensorFlow", "Bootstrap", "Spring", "Django"], correct: "TensorFlow", category: "AI" },
    { question: "What is a neural network?", options: ["A type of database", "A network of connected AI models", "A type of algorithm", "A program for making websites"], correct: "A type of algorithm", category: "AI" },
    { question: "Which company created ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Facebook"], correct: "OpenAI", category: "AI" },
    { question: "What is Natural Language Processing (NLP)?", options: ["Understanding human language by computers", "Programming websites", "Data encryption", "Networking method"], correct: "Understanding human language by computers", category: "AI" },
    { question: "What is supervised learning?", options: ["Learning without any data", "Learning using labeled data", "Learning through trial and error", "Learning from algorithms only"], correct: "Learning using labeled data", category: "AI" },
    { question: "Which of the following is an example of AI in daily life?", options: ["Smart assistants", "Mechanical clocks", "PDF readers", "Flash drives"], correct: "Smart assistants", category: "AI" },
    { question: "Which company developed TensorFlow?", options: ["Apple", "Facebook", "Google", "Microsoft"], correct: "Google", category: "AI" },
    { question: "What is the main goal of AI?", options: ["To store data", "To mimic human intelligence", "To replace hard drives", "To format documents"], correct: "To mimic human intelligence", category: "AI" },
    { question: "What is reinforcement learning?", options: ["Learning from rewards and punishments", "Learning from labeled data", "Learning from pre-recorded videos", "Learning from pictures"], correct: "Learning from rewards and punishments", category: "AI" },
    { question: "Which algorithm is commonly used in AI classification problems?", options: ["Bubble Sort", "Linear Regression", "K-Nearest Neighbors", "Binary Search"], correct: "K-Nearest Neighbors", category: "AI" },
    { question: "Which of these is an AI-powered tool for image recognition?", options: ["TensorFlow", "Excel", "Chrome", "PowerPoint"], correct: "TensorFlow", category: "AI" },
    { question: "Which of the following is used to train AI models?", options: ["CSS", "Data", "HTTP", "Photoshop"], correct: "Data", category: "AI" },
    { question: "What is an AI chatbot?", options: ["A robot that plays music", "A program that simulates human conversation", "An antivirus software", "A digital camera"], correct: "A program that simulates human conversation", category: "AI" },

    // Data Analysis
    { question: "What does SQL help with?", options: ["Data visualization", "Querying databases", "Web development", "Machine learning"], correct: "Querying databases", category: "Data Analysis" },
    { question: "What is a key tool for data visualization?", options: ["Pandas", "Matplotlib", "TensorFlow", "NumPy"], correct: "Matplotlib", category: "Data Analysis" },
    { question: "Which term means cleaning and organizing raw data?", options: ["Data Modeling", "Data Preprocessing", "Data Mining", "Data Collection"], correct: "Data Preprocessing", category: "Data Analysis" },
    { question: "Which software is widely used for spreadsheets?", options: ["Google Docs", "MS Excel", "Photoshop", "Slack"], correct: "MS Excel", category: "Data Analysis" },
    { question: "Which term means analyzing large datasets?", options: ["Big Data", "Small Data", "Medium Data", "Structured Data"], correct: "Big Data", category: "Data Analysis" },
    { question: "What does BI stand for?", options: ["Business Intelligence", "Big Information", "Binary Interface", "Blockchain Innovation"], correct: "Business Intelligence", category: "Data Analysis" },
    { question: "Which library is commonly used for data manipulation in Python?", options: ["TensorFlow", "Flask", "Pandas", "Scikit-learn"], correct: "Pandas", category: "Data Analysis" },
    { question: "What is a DataFrame?", options: ["A type of AI model", "A tabular data structure", "An image file format", "A web page"], correct: "A tabular data structure", category: "Data Analysis" },
    { question: "What is a null value in data?", options: ["A duplicated value", "An empty or missing value", "A large number", "A formatted number"], correct: "An empty or missing value", category: "Data Analysis" },
    { question: "Which of these is a database management system?", options: ["Photoshop", "MongoDB", "Visual Studio", "Illustrator"], correct: "MongoDB", category: "Data Analysis" },
    { question: "What does CSV stand for?", options: ["Centralized Server Value", "Comma Separated Values", "Cloud Storage Variable", "Common Script Version"], correct: "Comma Separated Values", category: "Data Analysis" },
    { question: "Which tool is often used for dashboard creation?", options: ["Jupyter", "Power BI", "Notepad++", "Trello"], correct: "Power BI", category: "Data Analysis" },
    { question: "What is data mining?", options: ["Finding trends in data", "Building websites", "Encrypting data", "Uploading files"], correct: "Finding trends in data", category: "Data Analysis" },
    { question: "Which type of chart is best for showing proportions?", options: ["Line chart", "Bar chart", "Pie chart", "Scatter plot"], correct: "Pie chart", category: "Data Analysis" },
    { question: "Which command is used to check the structure of a dataset in Pandas?", options: ["check()", "structure()", "info()", "shape()"], correct: "info()", category: "Data Analysis" },
    { question: "Which platform is commonly used to run data notebooks?", options: ["Jupyter", "Figma", "Visual Studio Code", "Xcode"], correct: "Jupyter", category: "Data Analysis" },


    // Web Development
    { question: "What does HTML stand for?", options: ["Hypertext Markup Language", "High-Level Text Machine Language", "Hyper Transfer Main Language", "Hyperlink and Text Markup Language"], correct: "Hypertext Markup Language", category: "Web Development" },
    { question: "What is CSS used for?", options: ["Styling web pages", "Programming logic", "Database management", "Cloud storage"], correct: "Styling web pages", category: "Web Development" },
    { question: "Which JavaScript framework is used for front-end?", options: ["Django", "Spring Boot", "React", "Flask"], correct: "React", category: "Web Development" },
    { question: "Which of these is a CSS framework?", options: ["Bootstrap", "Node.js", "Express.js", "Laravel"], correct: "Bootstrap", category: "Web Development" },
    { question: "What is the purpose of a CDN?", options: ["Hosting images", "Accelerating website content delivery", "Managing databases", "Creating APIs"], correct: "Accelerating website content delivery", category: "Web Development" },
    { question: "Which protocol is used for web communication?", options: ["HTTP", "FTP", "SMTP", "POP3"], correct: "HTTP", category: "Web Development" },
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<url>"], correct: "<a>", category: "Web Development" },
    { question: "Which HTTP status code means 'Not Found'?", options: ["200", "301", "404", "500"], correct: "404", category: "Web Development" },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Output Method", "Display Order Model", "Dynamic Object Module"], correct: "Document Object Model", category: "Web Development" },
    { question: "Which tag is used for inserting an image in HTML?", options: ["<img>", "<image>", "<src>", "<media>"], correct: "<img>", category: "Web Development" },
    { question: "Which CSS property is used to change text color?", options: ["background-color", "color", "font-color", "text-style"], correct: "color", category: "Web Development" },
    { question: "Which JavaScript method is used to select an element by ID?", options: ["querySelector()", "getElementById()", "getElementByClass()", "selectById()"], correct: "getElementById()", category: "Web Development" },
    { question: "Which one is a backend language?", options: ["HTML", "CSS", "JavaScript", "PHP"], correct: "PHP", category: "Web Development" },
    { question: "Which attribute in a form tag specifies where to send the form data?", options: ["method", "action", "submit", "target"], correct: "action", category: "Web Development" },
    { question: "Which of these is used to make responsive websites?", options: ["Bootstrap", "PHP", "Flask", "MongoDB"], correct: "Bootstrap", category: "Web Development" },
    { question: "Which tool helps in version control for web projects?", options: ["NPM", "Git", "Webpack", "Firebase"], correct: "Git", category: "Web Development" },

];

export default questions;
