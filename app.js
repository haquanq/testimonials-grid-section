const userData = [
    {
        userimage: "./images/image-daniel.jpg",
        username: "Daniel Clifford",
        verified: true,
        description: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
        content: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”'
    },
    {
        userimage: "./images/image-jonathan.jpg",
        username: "Jonathan Walters",
        verified: true,
        description: "The team was very supportive and kept me motivated",
        content: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”'
    },
    {
        userimage: "./images/image-jeanette.jpg",
        username: "Jeanette Harmon",
        verified: false,
        description: "An overall wonderful and rewarding experience",
        content: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'
    },
    {
        userimage: "./images/image-patrick.jpg",
        username: "Patrick Abrams",
        verified: true,
        description: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
        content: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”'
    },
    {
        userimage: "./images/image-kira.jpg",
        username: "Kira Whittle",
        verified: true,
        description: "Such a life-changing experience. Highly recommended!",
        content: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”'
    },
]

const userImg = document.querySelectorAll(".user_image");
const userName = document.querySelectorAll(".user_name");
const descrip = document.querySelectorAll(".description");
const content = document.querySelectorAll(".content");
const userStat = document.querySelectorAll(".user_status");

for (let i = 0; i < userName.length; i++) {
    userImg[i].src = userData[i].userimage     
    userName[i].textContent = userData[i].username     
    descrip[i].textContent = userData[i].description     
    content[i].textContent = userData[i].content
    if (userData[i].verified == true) {
        userStat[i].textContent = "Verified Graduate";
    } else userStat[i].textContent = "Non-Verified Graduate";
}
