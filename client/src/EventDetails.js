import { RiPresentationFill,RiSwordFill  } from "react-icons/ri";
import { FaDatabase, FaCrown, FaCamera, FaMusic, FaRedhat,FaCodeCompare } from "react-icons/fa6";
import { LuCircuitBoard } from "react-icons/lu";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaPenNib, FaFlag, FaChartLine  } from "react-icons/fa";
import { GiCardRandom, GiGoalKeeper, GiSoccerBall, GiRobber, GiPhotoCamera  } from "react-icons/gi";
import { PiTelevisionSimpleFill, PiMicrophoneStageFill } from "react-icons/pi";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdMovieEdit, MdSportsCricket } from "react-icons/md";
import { SiValorant, SiPubg } from "react-icons/si";



const eventData = {
    "Technical Events": {
        "Paper Presentation": { 
            "desc": "Presenting the paper in IEEE format and sharing unique ideas in the technical domain.", 
            "team_size": 5,
            "price": "250", 
            icon : <RiPresentationFill />, 
            rules: [
                "Topics from all technical domains are accepted.",
                "Presentation should contain 12 to 15 slides.",
                "Abstract and presentation should be submitted prior to the event.",
                "Based on the abstract, teams will be selected to present their paper.",
                "Selected teams will be given further details about payment and presentation.",
                "Paper must be in IEEE format.",
                "Viva voce will be conducted.",
                "Team size should be from 3 to 5 members",
                "The abstract should be submitted before the deadline",
                "Abstract and presentation should be submitted in a Google form (website or Instagram page).",
                "The judges' decision will be final."
            ], 
            prizes: ["500", "300"], max_reg : 50},
        "Sql Code Off": { 
            "desc": "SQL Code-off is an online quiz and query writing event in which participants are required to put their knowledge on SQL to clear each round and move on to the next tasks.", 
            "team_size": 2, 
            "price": "100",
            icon : <FaDatabase />,
            rules: {
                "round1": [
                  "It contains MCQ questions based on basic SQL and DBMS concepts and it will be created using Quizizz (https://quizizz.com/).",
                  "Based on the score, shortlisted teams are forwarded to the next round."
                ],
                "round2": [
                  "It will be based on solving challenges from HackerRank that we are going to create.",
                  "Team members will be swapped; after member 1 completes challenge 1, member 2 will write queries for challenge 2.",
                  "The first team to complete all problems or solve the maximum number of problems within the given time will proceed to the final round."
                ],
                "round3": [
                  "The final round is the real challenge where teams must create a database based on the problem statement they pick from a bowl of folded papers.",
                  "Teammates will decide who creates and inserts the data and who writes the queries for the data.",
                  "Based on both teammates' performances, winners will be announced."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50 },
        "Bid for Code Wars": { 
            "desc": "Bid for Code Wars is a thrilling coding event where teams of two — a bidder and a coder — compete in a unique challenge. The bidder sets the stage by choosing or bidding on coding problems, while the coder races against time to solve them. Each round tests both strategy and coding skills in a dynamic, fast-paced environment.", 
            "team_size": 2, 
            "price": "150", 
            icon : <RiSwordFill />, 
            rules: {
                "Round 1": [
                    "Each team consists of two members — a bidder and a coder.",
                    "The bidder will be separated from the coder. Problem questions will be shown only to the bidder with a maximum time limit.",
                    "The bidder sets a time limit within the given maximum for the coder to solve the problem. They cannot communicate during this phase.",
                    "The coder must solve the problem within the time limit set by the bidder.",
                    "The shorter the time set by the bidder, the higher the points.",
                    "Problems will be of easy difficulty level."
                ],
                "Round 2": [
                    "In this round, roles switch — the bidder from Round 1 becomes the coder, and the coder becomes the bidder.",
                    "The bidder's task is to select the appropriate problem for the coder.",
                    "The organizer will set the maximum time limit.",
                    "A set of 5-10 problems will be shown to the bidder, and they must choose 2 problems they believe the coder can solve.",
                    "The coder must solve the chosen problem within the organizer-set time limit.",
                    "The problem set will include a mix of easy and medium-level problems."
                ],
                "Round 3": [
                    "Teams can choose who will be the bidder and who will be the coder in this final round.",
                    "There will be only one problem in this round.",
                    "The problems will be selected via a lottery. The bidder selects the problem, and the coder must solve it within the time limit.",
                    "The first team to solve both problems wins."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50  },
        "Logic break": { 
            "desc": "Logic Break is a coding and puzzle challenge for teams of 1-2 members. Starting with 15 teams, players solve binary, debugging, and clue-based puzzles across three rounds. Success depends on speed and problem-solving skills.", 
            "team_size": 2, 
            "price": "100",
            icon : <LuCircuitBoard />, 
            rules: {
                "Round 1": [
                  "All 15 teams will participate.",
                  "Teams will be awarded marks based on how quickly they decode the binary message after debugging a program.",
                  "They will receive a physical clue in this round which will be used in the next round. Top 7 teams will advance to Round 2."
                ],
                "Round 2": [
                  "Code must be debugged. The next clue will be present anywhere, either in the program itself or in the MySQL database. Using the clue found, the teams must solve the hangman round.",
                  "Two lifelines for each team for solving hangman.",
                  "The first 5 teams to successfully crack this round will receive the clue for Round 3 and will proceed."
                ],
                "Round 3": [
                  "Teams must use the clues gathered from the previous rounds to complete a final challenge.",
                  "The team that finishes first will be declared the winner."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50  },
        "Technical Fued": { 
            "desc": "Tech Feud is a team competition with each team consisting a maximum of 3 members. It is a game where the teams are asked technical questions for which they have to rebut with the answer that has the maximum points. The team that gets the answer with highest points will have a chance to guess another answer. The team with highest points win.", 
            "team_size": 3, 
            "price": "100", 
            icon: <BsFillLightningChargeFill />, 
            rules: {
                "Round 1": [
                    "Each team consists of maximum of three members.",
                    "In this round , the team that raises their placard will have to answer the question with 60 seconds. If they fail to answer the question passes, else when they answer the question wrong they get three chance (all within 60 secs) after which the question is passed.",
                    "Chances will be given to first three teams raising their placards, after which the answers will be revealed.",
                    "This round consists of 30 questions and the teams selected for next round will depend on teams registered."
                    ],
                  "Round 2": [
                    "In this round, 20 questions are used." ,
                    "Each team will be given 30 secs to answer a question of medium difficulty.",
                    "The first two teams to raise their placards will have the chances but the number of teams allowed to answer depend on the teams selected"                    
                  ],
                  "Round 3": [
                    "In this round, 15 questions are used." ,
                    "Each team will be given 15 secs to answer a question of medium difficulty.",
                    "The first two teams to raise their placards will have the chances but the number of teams allowed to answer depend on the teams selected."                    
                  ]

            }, 
            prizes: ["500", "300"], max_reg : 50  },
        "UI UX Design Battle": { 
            "desc": "UIUX Design Battle is a fun-filled designing event where the event will be structured in two competitive rounds, offering participants the opportunity to showcase their knowledge and design skills. The first round will test participants' understanding of Figma and UI/UX principles through a series of multiple-choice questions. In the second round, selected participants will be given a problem statement and tasked with designing a functional application using Figma.", 
            "team_size": 2, 
            "price": "100",
            icon : <FaPenNib />, 
            rules: {
                "Round 1": [
                  "Each team consists of a maximum of two members.",
                  "A total of 20 questions will be given with choices.",
                  "Team members can choose the options wisely by discussing with their team members.",
                  "A time limit of 30 minutes will be given to select the right option.",
                  "Questions will be of easy and intermediate level."
                ],
                "Round 2": [
                  "In this round, a common problem statement will be given to all the teams.",
                  "Design only in Figma.",
                  "A duration of 5-10 minutes will be given to recollect ideas or designs.",
                  "The organizer will set the maximum time limit.",
                  "Evaluation will be based on the correctness of solving a problem through a mobile app or website.",
                  "Judges' decision is final."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50  },
        "Code Relay": { 
            "desc": "Code Relay is a team competition with each team consisting of 3 members. Each team will be provided with a problem statement and must work together to solve it. Only one team member can code at a time, and after a short, fixed interval, the next teammate will take over, continuing from where the previous coder left off. This process continues till the timer runs out. Teams will be evaluated based on their progress, and those who complete the task or come closest to completing it will advance to the next round. The number of teams progressing will depend on the total number of participants. Effective communication and smooth transitions between teammates are essential for success.", 
            "team_size": 3, 
            "price": "150",
            icon : <FaCodeCompare />, 
            rules: {
                "round1": [
                  "Each team consists of a maximum of three members.",
                  "A programming question will be provided to each team.",
                  "Team members will have 5 minutes to look at the problem and discuss how to solve it.",
                  "A total of 10 minutes will be given to each team to solve it.",
                  "Every 1 minute, the teammate at the computer will switch with another teammate."
                ],
                "round2": [
                  "In this round, the number of questions used will vary depending on the total number of teams.",
                  "Each team will be given 20 minutes to solve a problem of medium difficulty.",
                  "Team members will have 5 minutes to look at the problem and discuss how to solve it.",
                  "Every 1 minute, the teammate at the computer will switch with another teammate."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50  },
        "Bid to Predict": { 
            "desc": "Welcome to an exhilarating mix of technical and non-technical challenges, designed for participants with varying levels of coding knowledge! This two-round event offers a chance for teams to solve fun, interactive tasks that blend problem-solving with machine learning. (NOTE: cheat sheets will be provided for beginners)", 
            "team_size": 3, 
            "price": "50", 
            icon: <FaChartLine />, 
            rules: {
                    "round1":[
                        "Connections Puzzle: Teams will receive three folders to work with. In Folder 1, you'll find 10 puzzles where solving each will reveal the name of a dataset.",
                        "Dataset Search: In Folder 2, there are hundreds of datasets. Using the name you uncovered from the puzzles, find the corresponding dataset folder. Inside, you’ll find training and test data, along with a partially completed machine learning code.",
                        "Code Completion: Use the provided cheat sheet to complete the ML code and make predictions.",
                        "Star Plotting: Once predictions are made, go to Folder 3, which contains a CSV file with thousands of records, including model outputs and star coordinates. Use the output to locate the star’s coordinates and plot them on a given interface.",
                        "The teams that plot the most stars accurately will advance to the next round."],
                    "round2":[
                        "In this round, teams will have a fixed amount of time (e.g., 1 hour) to participate in a Dataset Auction. Teams will bet their time to secure a dataset.",
                        "Once a dataset is chosen, a problem statement will be provided on the spot, specific to that dataset.",
                        "Teams must complete the task within their remaining time. The winner will be decided based on completion within the time limit, model accuracy, and the approach taken."
                    ]}, 
            prizes: ["500", "300"], max_reg : 50},
        "The Code Gambit": { 
            "desc": "Welcome to the ultimate test of strategic thinking and coding! In this challenge, you will design and develop a bot that competes against other bots in a series of decision-making rounds. Your objective? Maximize your score by making the right choices over time.", 
            "team_size": 3, 
            "price": "50",
            icon : <GiCardRandom />, 
            rules: [
                "Input:  Each round, your bot will receive the opponent's previous move—either \"c\" (cooperate) or \"d\" (defect).",
                "Output: Your bot must respond with either \"c\" or \"d\" for the current round.",
                "Points System:",
                "Both cooperate : +3 points each.",
                "One cooperates, the other defects: Defector gets +5, cooperator gets 0.",
                "Both defect: +1 point each.",
                "Rounds (for the bots to compete against each other):",
                "The game runs for 50-200 rounds, simulating long-term strategies. The bot with the highest cumulative score at the end of all matches wins the competition.",
                "Now, it's time to create a bot that can adapt, outthink, and outscore the competition!"], 
            prizes: ["500", "300"], max_reg : 50},
        "Cyber Heist": { 
            "desc": "CYBER HEIST is an exciting team-based event where participants take on the role of detectives to track down a mystery bag hidden by hackers. Teams of two will navigate through four thrilling rounds, starting with investigating a data breach, tracing a hacker’s IP, and uncovering critical clues using tools like Wireshark. The challenge intensifies as participants tackle phishing scams, decode multi-layered ciphers, and solve complex puzzles to reveal the final vault location. The fastest team to solve all the clues and retrieve the mystery bag wins the grand prize.", 
            "team_size": 2, 
            "price": "100",
            icon : <GiRobber />, 
            rules: {
                "round1": [
                    "Teams receive logs (records) of the hacker's activities and need to figure out:",
                    "The hacker's IP address (their digital identity).",
                    "How they broke in.",
                    "What files they accessed.",
                    "Hidden within this information is a clue about the location of the mystery bag.",
                    "They will also have to decode some secret messages and use tools like a network tracker (like Wireshark) to trace where the hacker came from and find the first clue."
                ],
                "round2": [
                    "Participants receive a set of phishing emails along with scenarios involving fake phone calls, text messages, or social media posts.",
                    "They must analyze the emails for authenticity by checking headers, URLs, and content.",
                    "Participants will also evaluate the scenarios to determine which messages are legitimate and which are phishing attempts or scams.",
                    "They need to identify the real email and the genuine messages while avoiding traps.",
                    "Opening too many fake clues or making wrong decisions will lead to penalties. Participants must test their instincts and knowledge of social engineering tactics to extract the information that leads to the next clue."
                ],
                "round3": [
                    "Ciphered Message: Participants receive a complex ciphered message that includes multiple layers of encryption.",
                    "Clue Gathering: As they decode the message, they will uncover several hints that may point to different locations or clues about the mystery bag's whereabouts.",
                    "Analyze the Cipher: Identify the types of ciphers used in the message.",
                    "Decrypt the Message: Work through the layers of encryption, breaking down the message step-by-step.",
                    "Coordinate Confirmation: Input the decoded information into a confirmation system to validate their findings.",
                    "Final Puzzle: After decoding, assemble the decoded pieces of information into a coherent answer (like a riddle or a map that needs to be pieced together). This will give the vault number where the mystery bag is in.",
                    "Incorrect attempts to decode or input the information will result in significant penalties (like time deductions or loss of points).",
                    "The winner would locate where the mystery bag is at, and one of our members would be there at the location. The participants should report to them with the correct vault number and collect the mystery bag (inside the bag there would be a KRATOS flag)."
                ]
              }, 
            prizes: ["500", "300"], max_reg : 50}

    },
    "Non-Technical Events": {
        "Channel Surfing": { 
            "desc": "Channel Surfing is an engaging and dynamic event where participants are challenged to quickly adapt to various scenarios, similar to switching between TV channels. Each team will be given random channels, and they must improvise, entertain, or respond on the spot, as if they were jumping from one TV show to another.", 
            "team_size": 5, 
            "price": "250",
            icon: <PiTelevisionSimpleFill />, 
            rules: [
                "A team can consist of 4-5 members.",
                "Participants must act out the channel given by the judges and should be able to simultaneously switch to a different channel.",
                "Avoid using sensitive content. The team will be disqualified if the rule is violated.",
                "No time will be allotted for preparation.",
                "Participants are given a time duration of 5-6 minutes.",
                "Judges decision is final."
            ], 
            prizes: ["1000", "750"], max_reg : 50 },
        "Title Event": { 
            "desc": "Compete in a thrilling multi-round challenge testing strength, strategy, and resilience. Each round will eliminate contenders until one emerges victorious, claiming the title of Mr/Ms. Kratos—a symbol of ultimate power and skill! Let the best rise to glory!",
            "team_size": 1,
            "price": "50",
            icon: <FaCrown />,
            rules: ["IT IS A SOLO EVENT.",
                    "EVERY ROUND AND SET WILL HAVE AN ELIMINATION.",
                    "THE ROUNDS AND TOPICS WILL BE DECIDED BY THE JUDGES, ON SPOT.",
                    "VULGARITY OF ANY SORT WILL LEAD TO IMMEDIATE DISQUALIFICATION.",
                    "JUDGES DECISION IS FINAL.",
                    "THE WINNER WILL BE AWARDED THE TITLE OF MR/MS.KRATOS"],
            prizes: ["Winner Trophy", "Runner Trophy"] },
        "Fem Screen": { 
            "desc": "Screening a short film/ documentary to create awareness about women's empowerment/feminism and asking their thoughts on it followed by a fun event:",
            "team_size": 3,
            "price": "150",
            icon : <PiMicrophoneStageFill />,
            rules: [
                "IT IS A TEAM EVENT OF THREE MEMBERS.",
                "ONE TEAM MEMBER WILL ACT OUT A WOMAN'S NAME SILENTLY.",
                "THE OTHER TWO TEAM MEMBERS WILL GUESS THE NAME AND SCORE POINTS.",
                "NO SPEAKING OR PROPS ARE ALLOWED DURING THE GAME.",
                "THE TEAM WITH THE MOST CORRECT GUESSES WITHIN THE ALLOWED TIME WILL WIN.",
                "JUDGES' DECISION WILL BE FINAL."],
            prizes: ["500", "250"], max_reg : 50 },
        "Green Screen": { 
            "desc": "In this exciting solo event, participants will be blindfolded and asked to select a random number, which will determine a 3-minute muted movie clip. The twist? The clip will be projected behind them on a green screen, immersing them in the scene without their sight! As the muted clip plays, a judge will offer subtle clues, encouraging the participant to interact and piece together details of the scene using only their intuition and the judge's hints. After the full 3 minutes, the participant must make their best guess, identifying the movie and the exact scene they were part of. Can they solve the mystery without seeing the action unfold? Let the challenge begin!",
            "team_size": 1, 
            "price": "50", 
            "icon": <MdMovieEdit />,
            "rules": [
                "It is a solo event.",
                "Time limit for each participant will be 3 minutes.",
                "Removing the blindfold before the clip ends leads to disqualification.",
                "Participant must stay on stage throughout their performance.",
                "Participants cannot ask for the name of the hero or characters directly.",
                "Judging is based on interaction with the judge and correctly guessing the movie and scene.",
                "Vulgarity of any form will lead to disqualification.",
                "The judge's decision will be final and up to no discussion."
            ], 
            "prizes": ["500", "250"],
            max_reg : 50
        },
        "FIFA": { 
            "desc": "Calling all football fanatics! Brace yourselves for the ultimate FIFA event that's set to take the gaming world by storm. Our electrifying FIFA tournament brings together the finest teams for a heart-pounding series of matches, where skills, strategy, and sheer passion collide. Who will rise as the undisputed champions of the virtual pitch? This is not just a tournament, it's an epic battle, a chance to prove your gaming prowess, and a celebration of the beautiful game. Get ready to unleash your inner football legend and seize the glory on the digital field!",
            "team_size": 2, 
            "price": "150", 
            "icon": <GiSoccerBall />,
            "rules": [
                "2-member team.",
                "The tournament features a knockout format for matches.",
                "Top teams are grouped and compete in a round-robin format during the group stage.",
                "Team selection is determined by a coin toss.",
                "Matches will include penalty shootouts to determine a winner and eliminate draws.",
                "Teams must adhere to their allotted time slots; failure to do so may result in the opposing team advancing.",
                "Toxicity is strictly not entertained and will result in elimination of the team."
            ],
            "prizes": ["500", "250"],
            max_reg : 50
        }
    },
    "Pre Events": {
        "Photography": { 
            "desc": "Are you passionate about photography and ready to showcase your skills? Participate in our \"Retro Revival \" photography contest! This is your chance to express your creativity and submit stunning pictures that perfectly align with the assigned theme. ",
            "team_size": 1,
            "price": "50",
            icon : <GiPhotoCamera />,
            rules: [ 
                "PARTICIPANTS ARE ALLOWED TO SUBMIT ONLY ONE PHOTOGRAPH.",
                "BASIC ADJUSTMENTS ARE ALLOWED; EXCESSIVE MANIPULATION OR MODERN FILTERS THAT COMPROMISE THE VINTAGE ESSENCE ARE NOT.",
                "PARTICIPANTS CAN USE EITHER A PHONE OR CAMERA FOR CAPTURING PICTURES.",
                "ENTRIES WILL BE JUDGED BASED ON RELEVANCE TO THEME AND ORIGINALITY.",
                "REGISTRATION FORM OPENS ON 14TH OCTOBER.",
                "DEADLINE FOR SUBMISSION OF YOUR PHOTOGRAPH IS 22ND OCTOBER, 6:00 PM.",
                "YOUR SUBMISSIONS WILL BE POSTED ON OFFICIAL KRATOS ACCOUNT AS A COLLABORATION.",
                "MALPRACTICE IN ANY FORM IS STRICTLY PROHIBITED.",
                "JUDGES' DECISION WILL BE FINAL."],
            prizes: ["Cash Prize for the Winners"],
            max_reg : 100
        },
        "Reel Song": { 
            "desc": "Solo Singing is an exhilarating event where participants showcase their vocal prowess and creativity through a 2-minute long video. Each performer will have the freedom to sing in any genre of their choice. Each participant will be judged on their ability to captivate with their voice, pitch perfection and dynamics. Be ready to belt out your best tunes and win over with your talent.",
            "team_size": 1,
            "price": "50",
            icon:<FaMusic />,
            rules: [ 
                "VIDEO DURATION MAX 2 MINS.",
                "LANGUAGE – TAMIL, MALAYALAM, TELUGU, HINDI.",
                "PARTICIPANTS CAN ADD KARAOKE IF NEEDED.",
                "JUDGES' DECISION WILL BE FINAL.",
                "MAKE SURE THE KARAOKE DOESN'T DOMINATE YOUR VOICE AND THE VOICE MUST BE AUDIBLE.",
                "VIDEO IS A MUST, AUDIO WITHOUT VIDEO WILL BE DISQUALIFIED."],
            prizes: ["400","200"],
            max_reg : 50
        },
        "Reel Dance": {
            "desc": "Here is your chance to show off your dancing talent and shake the world with your creativity and passion. Just get ready for the Energetic Challenge.",
            "team_size": 1,
            "price": "50",
            icon : <FaRedhat />,
            rules: [
                "ALL PARTICIPANTS SHOULD SUBMIT THEIR DANCE REELS THROUGH THIS MAIL ID: kratosdancecontest@gmail.com.",
                "YOUR SUBMISSION SHOULD NOT EXCEED 1:30 MINUTES.",
                "JUDGING WILL BE DONE BASED ON THE STEPS CLARITY AND FACIAL EXPRESSIONS.",
                "VULGARITIES WILL LEAD TO DISQUALIFICATION.",
                "THE JUDGES' DECISION WILL BE FINAL."],
            prizes: ["400","200"], max_reg : 50 },
        "Valorant": { 
            "desc": "Join us for an intense online Valorant tournament where teams battle it out for ultimate glory! Assemble your squad, sharpen your strategies, and prepare to dominate the competition in this thrilling, bracket-style event. The tournament will be conducted in multiple stages, with teams progressing through elimination rounds to claim the top spot. All games will be streamed live, and the excitement will build as only one team will emerge victorious. Who has what it takes to be crowned the Valorant Champions?",
            "team_size": 5, 
            "price": "250", 
            icon : <SiValorant />,
            rules: [
                "5 member team.",
                "Team selection is determined by a coin toss.",
                "The tournament features a knockout format for matches.",
                "Teams must adhere to their allotted time slots; failure to do so may result in the opposing team advancing.",
                "Toxicity is strictly not entertained and will result in elimination of the team."
            ],
            prizes: ["Cash Prize for the Winners"],
            max_reg : 100
        },
        "BGMI": { 
            "desc": "Join us for an epic gaming clash filled with breathtaking moments and ruthless competition. Our bracket-style tournament will test the limits of your strategic gameplay and determine who will be crowned the BGMI champion", 
            "team_size": 4, 
            "price": "150", 
            icon : <SiPubg />, 
            rules: [ 
                "ANY GAME MODIFYING TOOLS EXCEPT 'GFX TOOL' ARE NOT ALLOWED.",
                "PLAYERS CAN PLAY ON ANDROID/IOS TABLETS/PHONES ONLY.",
                "ONLY IN-GAME VOICE CHAT SHOULD BE USED AFTER THE GAME IS STARTED TILL ITS COMPLETION.",
                "ANY USE OF UNFAIR MEANS SUCH AS AIMBOT, TRIGGER BOT, ESP WILL BE DISQUALIFIED.",
                "WE WILL GIVE 15 MINUTES TIME TO JOIN THE ROOM BEFORE THE MATCH STARTS."], 
            prizes: ["Cash Prize for the Winners"],
            max_reg : 25
        },
    },
    "Playground Events": {
        "Box Cricket": { 
            "desc": "Box cricket is a modified indoor version of traditional cricket played in a smaller, enclosed area with fewer players, typically featuring simplified rules to suit the confined space.", 
            "team_size": 6, 
            "price": "300", 
            icon:<MdSportsCricket />, 
            rules: [
                "5 main players + 1 sub",
                "4 overs",
                "Umpires call final",
                "Direct catch out",
                "No LBW",
                "One player can register in one team",
                "Match tie super over is held",
                "Medium speed",
                "Each player must bowl one over only",
                "Extras are included (wide, no ball)",
                "Only one bouncer per over",
                "Team not ready or available after 3 calls will be disqualified",
                "Violence and misbehavior leads to disqualification"], 
            prizes: ["1000", "500"], max_reg : 24 },
        "Futsal": { 
            "desc": "Prepare to be on the edge of your seats! Join us for an electrifying evening of Futsal action that’s bound to leave you breathless. Get ready to witness thrilling matches, jaw-dropping footwork, and an intense competition as teams battle it out on the court. The atmosphere will be charged with the spirit of competition and the thunderous roar of the crowd. Don’t miss out on the excitement – mark your calendars, bring your cheers, and come kick it with us! It’s a night that promises goals, glory, and an electrifying experience you won’t soon forget.", 
            "team_size": 7, 
            "price": "300", 
            icon: <GiGoalKeeper />,
            rules: [
                "Max of 7 players per team (4 main players + 1 goalkeeper + 2 substitutes).",
                "8 minutes per game (each half 4 minutes) + 1 minute break. Semis & Finals – 14 minutes per game (each half 7 minutes).",
                "One step penalty.",
                "Rolling substitutes are allowed.",
                "Referee's decision is final.",
                "1-minute ban for yellow card.",
                "Player cannot continue the match in case of a red card.",
                "Matches will happen in a time slot basis and latecomers will not be encouraged.",
                "No offensive language or violent conduct.",
                "Goalkeeper throw only up to half court."
            ],
            prizes: [
                "1000",
                "750"
            ],
            max_reg : 16
        },

    }
};


function getEventData(eventName) {
    for (let category in eventData) {
        if (eventData[category].hasOwnProperty(eventName)) {
            return eventData[category][eventName];
        }
    }
    console.log("Data does not exist for event: " + eventName);
    return undefined;
}

export { eventData, getEventData };