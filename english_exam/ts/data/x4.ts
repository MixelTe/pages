import { DB } from "../docBuilder.js";
import { TestItem } from "../tester.js";
import { TestItemSelfCheck } from "../testerItems.js";

export const data: TestItem[] = [
	new TestItemSelfCheck(1,
		"How many generations of computers are there? What is the difference between them? Talk about each generation of computers in detail.",
		DB("There are five generations of computers. They differ mainly in the technology used.")
			.ul(
				"First Generation (1940–1956): Used vacuum tubes. Large, expensive, slow, produced much heat. Example: ENIAC.",
				"Second Generation (1956–1963): Used transistors instead of vacuum tubes. Smaller, faster, more reliable, less power consumption.",
				"Third Generation (1964–1971): Used integrated circuits (ICs). Increased speed, reduced size and cost.",
				"Fourth Generation (1971–Present): Uses microprocessors. Personal computers became common. Smaller, cheaper, and more powerful.",
				"Fifth Generation (Present and Future): Based on AI, parallel processing, and advanced technologies."
			)
	),

	new TestItemSelfCheck(2,
		"Talk about the contribution of Charles Babbage and John von Neumann to the development of computing technology.",
		DB()
			.ul(
				"Charles Babbage: Father of the Computer. Designed the Difference Engine and Analytical Engine.",
				"John von Neumann: Developed the stored-program concept and Von Neumann architecture used by modern computers."
			)
	),

	new TestItemSelfCheck(3,
		"What do you know about Moore’s Law?",
		DB("Moore’s Law states that the number of transistors on a microchip doubles approximately every two years, increasing performance and reducing cost.")
	),

	new TestItemSelfCheck(4,
		"What are the differences between the main types of computers (mainframes, supercomputers, desktop PCs, laptop PCs, tablet PCs, smartphones)?",
		DB()
			.ul(
				"Supercomputers: Fastest computers for scientific research.",
				"Mainframes: Process huge amounts of business data.",
				"Desktop PCs: Personal computers for fixed locations.",
				"Laptop PCs: Portable computers with batteries.",
				"Tablet PCs: Touchscreen portable devices.",
				"Smartphones: Handheld devices combining communication and computing."
			)
	),

	new TestItemSelfCheck(5,
		"Talk about the CPU (the three main parts, the factors affecting the performance of the CPU).",
		DB("CPU (Central Processing Unit) is the brain of the computer.")
			.ul(
				"Control Unit (CU): Directs operations.",
				"Arithmetic Logic Unit (ALU): Performs calculations and logic.",
				"Registers: High-speed temporary storage.",
				"Performance factors: Clock speed, cores, cache size, word size, architecture."
			)
	),

	new TestItemSelfCheck(6,
		"What is cache memory? What is ‘write-through’ cache and ‘write-back’ cache? What is cache hit?",
		DB()
			.ul(
				"Cache memory is high-speed memory between CPU and RAM.",
				"Write-through cache: Writes data to cache and RAM simultaneously.",
				"Write-back cache: Writes to cache first, RAM later.",
				"Cache hit: Requested data is found in cache."
			)
	),

	new TestItemSelfCheck(7,
		"What is ROM? What is stored in ROM? Talk about different types of ROM and their distinctive features.",
		DB("ROM is non-volatile memory storing permanent instructions.")
			.ul(
				"Stores firmware and BIOS.",
				"PROM: Programmable once.",
				"EPROM: Erased by ultraviolet light.",
				"EEPROM: Electrically erasable.",
				"Flash ROM: Fast EEPROM used in SSDs and USB drives."
			)
	),

	new TestItemSelfCheck(8,
		"What is RAM? What data is stored in RAM? Talk about the two types of RAM and their distinctive features.",
		DB("RAM is volatile memory storing currently used data and programs.")
			.ul(
				"SRAM: Faster, expensive, used for cache.",
				"DRAM: Slower, cheaper, used as main memory."
			)
	),

	new TestItemSelfCheck(9,
		"What are the differences between primary memory and secondary storage devices? Give examples of primary memory and secondary storage media.",
		DB()
			.ul(
				"Primary memory is faster and directly accessed by CPU.",
				"Secondary storage is slower and permanent.",
				"Primary memory examples: RAM, ROM, cache.",
				"Secondary storage examples: HDD, SSD, USB drive, DVD."
			)
	),

	new TestItemSelfCheck(10,
		"How can secondary storage be classified? Talk about each category of secondary storage devices you have named.",
		DB()
			.ul(
				"Magnetic storage: HDD, magnetic tape.",
				"Optical storage: CD, DVD, Blu-ray.",
				"Solid-state storage: SSD, USB flash drive, memory card."
			)
	),

	new TestItemSelfCheck(11,
		"Talk about the HDD. Describe the construction of a hard disk drive and the process of recording data on it. What is disk fragmentation/ defragmentation?",
		DB("An HDD is a magnetic storage device for permanent data storage.")
			.ul(
				"Components: Platters, spindle, read/write heads, actuator arm, controller.",
				"Data is stored as magnetic patterns representing 0s and 1s.",
				"Fragmentation: File pieces stored in different locations.",
				"Defragmentation: Reorganizes files into continuous blocks."
			)
	),

	new TestItemSelfCheck(12,
		"What types of optical storage devices do you know? Talk about each of them.",
		DB()
			.ul(
				"CD: About 700 MB.",
				"DVD: About 4.7–17 GB.",
				"Blu-ray Disc: About 25–100 GB.",
				"All use laser technology for reading and writing."
			)
	),

	new TestItemSelfCheck(13,
		"What are the two types of flash memory? How do they differ in functionality and use cases?",
		DB()
			.ul(
				"NOR Flash: Fast reading, used for firmware.",
				"NAND Flash: High density, used in SSDs, USB drives, and memory cards."
			)
	),

	new TestItemSelfCheck(14,
		"What is software? What is the difference between system software and application software? What types of system software can you name?",
		DB()
			.ul(
				"Software is a collection of programs and instructions.",
				"System software manages hardware and provides a platform for applications.",
				"Application software performs user tasks.",
				"System software types: Operating systems, drivers, utilities, translators."
			)
	),

	new TestItemSelfCheck(15,
		"What is an OS? What are its main functions? Name the main types of operating systems and provide the examples.",
		DB("An Operating System manages computer hardware and software resources.")
			.ul(
				"Functions: Process, memory, file, device, security, and user interface management.",
				"Single-user: Windows, macOS.",
				"Multi-user: Linux, UNIX.",
				"Real-time: QNX, VxWorks.",
				"Network OS: Windows Server, Linux Server.",
				"Mobile OS: Android, iOS."
			)
	),

	new TestItemSelfCheck(16,
		"What are the two types of multitasking mentioned in the text? What are the differences between the two?",
		DB()
			.ul(
				"Cooperative multitasking: Programs voluntarily release CPU control.",
				"Preemptive multitasking: OS controls CPU allocation and task switching."
			)
	),

	new TestItemSelfCheck(17,
		"What can be the criteria for network classification? Provide several classifications of networks.",
		DB()
			.ul(
				"By geographic area: PAN, LAN, MAN, WAN.",
				"By architecture: Client-Server, Peer-to-Peer.",
				"By transmission medium: Wired, Wireless."
			)
	),

	new TestItemSelfCheck(18,
		"What is a network topology? Describe different network topologies mentioning their benefits and downsides.",
		DB("A network topology is the arrangement of network devices.")
			.ul(
				"Bus: Simple but vulnerable to cable failure.",
				"Star: Easy management but depends on central device.",
				"Ring: Organized transmission but sensitive to failures.",
				"Mesh: Reliable but expensive.",
				"Tree: Scalable but depends on backbone."
			)
	),

	new TestItemSelfCheck(19,
		"Enumerate the main hardware components of a network and name their functions.",
		DB()
			.ul(
				"NIC: Connects a device to a network.",
				"Switch: Connects devices in a LAN.",
				"Hub: Broadcasts data to all devices.",
				"Router: Connects different networks.",
				"Modem: Converts signals.",
				"Access Point: Provides Wi-Fi.",
				"Cables and connectors: Physical transmission medium."
			)
	),

	new TestItemSelfCheck(20,
		"Talk about the OSI model. Name the layers, talk about their functions and the protocols used at different layers.",
		DB("The OSI model has seven layers.")
			.ul(
				"Physical: Bit transmission.",
				"Data Link: Frames, error detection. Ethernet, PPP.",
				"Network: Routing. IP, ICMP.",
				"Transport: Reliable delivery. TCP, UDP.",
				"Session: Session management.",
				"Presentation: Formatting, encryption. SSL/TLS.",
				"Application: User services. HTTP, HTTPS, FTP, SMTP, DNS."
			)
	),

	new TestItemSelfCheck(21, "What types of wired internet connections do you know? Talk about each of them in detail. (Unit 1_the Internet, text A)", "There are three main types of wired connections: DSL, which uses standard telephone lines to carry digital signals; Cable, which utilizes the infrastructure of cable TV networks via coaxial cables; and Fiber-optic, which uses light signals sent through glass fibers. DSL offers a dedicated line for consistent signals, Cable provides high reliability but shares bandwidth with neighbors, and Fiber-optic is the fastest, sending data over long distances with minimal distortion."),
	new TestItemSelfCheck(22, "What are the three types of DSL connections that you know? What is the difference between DSL and dial-up connection?", "The three types are ADSL, SDSL, and VDSL. ADSL (Asymmetric) is the most common for homes because download speeds are faster than upload speeds, while SDSL (Symmetric) offers equal speeds for both and is preferred by businesses. VDSL (Very High Bitrate) is the fastest form, often utilizing copper for short distances or fiber for longer ones to reach speeds much higher than standard ADSL.\n\nThe primary difference is that DSL uses higher frequency bands to carry digital signals, allowing users to use the phone and the internet simultaneously. In contrast, dial-up uses the same frequency for both voice and data, meaning only one service could be used at a time. Additionally, DSL is a high-speed broadband connection, whereas dial-up requires dialing a specific phone number to establish a connection."),
	new TestItemSelfCheck(23, "Talk about the three wireless internet access technologies mentioned in the text. (Unit 1_the Internet, text A).", "The text mentions Wi-Fi, Satellite, and Cellular as the primary wireless technologies. Wi-Fi uses radio waves for local area networking to connect devices to a router. Satellite internet provides access via geostationary satellites for areas where cable is unavailable, and Cellular networks use base stations to provide coverage over land areas called \"cells\" for voice and data."),
	new TestItemSelfCheck(24, "What is the difference between the Internet and the WWW?", "The World Wide Web is not synonymous with the Internet; the Internet pre-existed the Web and the Web is built upon it. The Web is an information system accessible through the Internet using a web browser, whereas the Internet is the underlying network of interconnected devices."),
	new TestItemSelfCheck(25, "Talk about the packet switching and circuit switching technologies", "Circuit switching reserves a dedicated channel for the duration of a session, potentially wasting bandwidth. Packet switching breaks data into units that travel via multiple routes to be reassembled at the destination, that is a more efficient method that doesn't require a constant, exclusive path"),
	new TestItemSelfCheck(26, "Talk about the three types of search engines and their distinctive features. What three steps do crawler-based search engines take before displaying results to the user?", "The three types are crawler-based search engines, which use automated programs to find and index content; human-powered directories, which depend on human editors to manually compile listings with descriptions; and meta-search engines, which do not have their own database but instead send user queries to several other search engines and compile the top results.\n\nThe three steps are crawling, indexing, and ranking. Crawling uses a special program called a crawler or spider to find new and updated content by following links. Indexing processes and stores that information in a massive database by identifying keywords that best describe each page. Ranking uses algorithms to order the search results from most to least relevant based on the user's query."),
	new TestItemSelfCheck(27, "How can programming languages be classified? Provide examples and talk about the distinctive features of each type you have named.", "Programming languages can be classified as low-level or high-level languages. Low-level languages are hardware-specific and complex, they include machine code (binary digits of 0 and 1) and assembly languages (using abbreviations for binary commands). High-level languages like C, Java, and Python are closer to human language, are portable across many computers, and must be translated into machine code by a compiler or interpreter."),
	new TestItemSelfCheck(28, "What is OOP? What are the three key features of OOP? Talk about each of them in detail. (Unit 3_Programming languages, text D)", "OOP (Object-Oriented Programming) is a programming paradigm that relies on the concept of classes and objects. The three key features are encapsulation (bundling data and instructions into objects), inheritance (ability of one class to use properties and behavior of another class), and polymorphism (ability to process objects differently depending on their data type or class)."),
	new TestItemSelfCheck(29, "What are the three main tools used in web design? Talk about each of them. What are the advantages and disadvantages of using website builders?", "The three main tools are HTML, CSS, and JavaScript. HTML (Hypertext Markup Language) defines the structure of the information on a webpage. CSS (Cascading Style Sheets) manages the visual style and layout. JavaScript adds interactivity and dynamic behavior, such as animations and clickable buttons.\n\nWebsite builders allow users to create professional sites quickly without coding knowledge by providing predesigned templates and WYSIWYG editors. A disadvantage is that they offer limited customization and poor scalability for growing businesses."),
	new TestItemSelfCheck(30, "What is the difference between frontend and backend web development? Talk about SEO. What is the difference between on-page SEO and off-page SEO?", "Frontend development is the development of the visible user interface and functions a user interacts with, using HTML, CSS, and JavaScript. Backend development is the development of the server-side part of web applications, which processes user requests and manage databases, using languages like Java, PHP, or Python.\n\nSEO stands for Search Engine Optimization, which is a set of improvements made to a website to help it rank higher in search engine results. Its main purpose is to increase the visibility of a site and gain more visitors without paying directly for advertising.\n\nOn-page SEO involves changes within your control on your own site, such as using the right keywords in titles, body text, and image descriptions. Off-page SEO primarily focused on getting other websites to link back to your content through \"backlinks.\""),
	new TestItemSelfCheck(31, "What is malware? Talk about the damaging effect of ransomware, spyware, adware, a Trojan, a miner.", "Malware, or malicious software, is any code developed by cybercriminals to damage devices, steal sensitive information, or disrupt networks. Common types include a virus (malicious code infecting host programs), a worm (standalone program spreading via email attachments), a Trojan (misleads users by disguising itself as legitimate and harmless software), ransomware (encrypts data and demands payment), spyware (collects user data), keyloggers (records keystrokes), adware (displays unwanted adverts), and a miner (use CPU/GPU to mine cryptocurrency)."),
	new TestItemSelfCheck(32, "What are the four routines of a virus? Talk about the function of each of them. What is the difference between a virus and a worm?", "The four routines of a virus are a misdirection routine (allows the virus to hide itself from detection), a reproduction routine (allows it to copy itself to other programs), a trigger (causes the payload to be activated at a particular time or event), and a payload (program that executes the actual malicious activity).\n\nThe main difference is that viruses must be triggered by the activation of their host, whereas worms are standalone malicious programs that can self-replicate and propagate independently. Worms do not require activation or human intervention to execute or spread their code, while viruses remain dormant until the infected host file is activated."),
	new TestItemSelfCheck(33, "What is cybercrime? Talk about the damaging effect of phishing, website defacement, piggybacking and salami shaving.", "Cybercrime is any illegal activity that uses computers, networks, or digital devices as a tool, target, or means to commit an offense. Types include phishing (stealing sensitive info by disguising as a legitimate source), website defacement (changing content of another person's web page), salami shaving (stealing small amounts of money from many accounts), piggybacking (obtaining unauthorized wireless access to a business's network), DDoS attacks aim to overwhelm and shut down online services."),
	new TestItemSelfCheck(34, "What is the difference between DoS and DDoS attack? How is DDoS attack performed?", "A DoS (Denial of Service) attack comes from just one source, while a DDoS (Distributed Denial of Service) attack comes from multiple sources all at once, overwhelming the server. To perform a DDoS, an attacker distributes malware to infect thousands of vulnerable computers, turning them into a coordinated army called a botnet. These computers are then commanded by a central control center to flood a server with traffic at a specific time, crashing the system."),
	new TestItemSelfCheck(35, "What is firewall? What can firewall filters be based on? (Unit 6_Data Security, video task 7)", "A firewall is a system that prevents unauthorized access and stops malicious activity from spreading into a network by inspecting data packets to deny or permit access based on filters. Filters can be based on domain names, IP addresses, or specific words/phrases."),
	new TestItemSelfCheck(36, "How does anti-virus software work? What is the difference between signature-based scanning and heuristic scanning? What is a signature?", "Anti-virus software works by scanning files, programs, and system activities on your device and comparing them to a database of known threats or suspicious behaviors so it can block or remove them.\n\nSignature-based scanning works by matching files against a database of known malware \"fingerprints\". Heuristic scanning uses rules and algorithms to look for suspicious commands or behaviors, allowing it to recognize new malware without an exact database match.\n\nA signature is a distinguishing feature or \"fingerprint\" contained within every virus that sets it apart from other programs. It serves as a unique identifier that makes a virus recognizable to antivirus software during a scan."),
	new TestItemSelfCheck(37, "What is encryption? Talk about the difference between its two main types. What two methods of breaking a cipher are there?", "Encryption is the process of scrambling readable information into an unreadable code so that only authorized people with the correct digital key can access it.\n\nThe two main types of encryption are symmetric and asymmetric encryption. In symmetric encryption, all parties use the same secret key for both encryption and decryption, whereas asymmetric encryption uses a pair of public and private keys – one for encryption, another for decryption.\n\nThe two methods are brute force and cryptanalysis. Brute force involves trying every possible random key until the correct one is found. Cryptanalysis, on the other hand, involves finding and exploiting a specific flaw or weakness within the cipher’s algorithm itself."),
	new TestItemSelfCheck(38, "What is an artificial neural network? What tasks can neural networks accomplish? What is the difference between classification and clustering?", "An artificial neural network is a computer simulation that copies the work of the biological brain using densely interconnected artificial neurons. Neural networks can accomplish many tasks, including face recognition, autonomous driving, machine translation, fraud detection, classification, clustering, and prediction.\n\nClassification involves organizing data sets into predefined classes, whereas clustering involves sorting data into undefined categories. Essentially, classification uses known labels, while clustering finds hidden patterns to group similar data without prior labeling."),
	new TestItemSelfCheck(39, "What is backpropagation? Why are neural networks compared to ‘black boxes’?", "Backpropagation is a feedback process used by neural networks to learn by comparing their actual output with the intended output. It works by comparing the network's actual output to the intended output and then using the difference to modify the weights of connections, working backward from output units through hidden units to input units.\n\nNeural networks are compared to ‘black boxes’ because the user feeds in data and receives answers but does not have access to the exact decision-making process. While answers can be fine-tuned, we cannot see precisely how the network arrived at its conclusions. This lack of transparency is considered one of the biggest technical challenges in AI research today."),
	new TestItemSelfCheck(40, "What is IoT? What are the major problems in using the IoT technology? (Unit 7_the Future of IT, text B)", "The Internet of Things (IoT) is a network of physical objects embedded with sensors and UIDs that transfer data without human intervention. Major problems include security risks from hackers, the difficulty of managing massive amounts of data, and the potential for a single system bug to corrupt all connected devices. Furthermore, there is a lack of international standards, making it hard for devices from different manufacturers to communicate."),
];