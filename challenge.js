const challenges = [
  {
    title: "Tech Challenge",
    content: "Find the top 3 most discussed emerging technologies this week. Visit tech blogs or use Google Trends.",
  },
  {
    title: "Science Fact Check",
    content: "Debunk one common myth related to space or the human brain today.",
  },
  {
    title: "Social Impact",
    content: "Identify a trending social issue and write one paragraph about your views on it.",
  },
  {
    title: "Commercial Challenge",
    content: "Check the stock movement of any major tech company today and understand what affected it.",
  },
  {
    title: "Fact Frenzy",
    content: "Find one weird but true fact about an animal and share it with someone.",
  },
  {
    title: "Current Affairs",
    content: "Read news from 3 different domains today: science, business, and politics.",
  },
  {
    title: "Productivity",
    content: "Try staying off social media for 4 hours and reflect on how you feel.",
  },
  {
    title: "Creative Challenge",
    content: "Design a poster (digital or paper) on climate change awareness.",
  },
  {
    title: "Awareness Booster",
    content: "List 5 recent tech inventions that affect daily life and find out how they work.",
  },
  {
    title: "Self Reflection",
    content: "Note down 3 things you learned this week and 1 thing you want to improve next week.",
  }
];

const container = document.querySelector(".container");

challenges.forEach((item, index) => {
  const challengeBox = document.createElement("div");
  challengeBox.className = "challenge";
  challengeBox.innerHTML = `<strong>${index + 1}. ${item.title}:</strong> ${item.content}`;
  container.appendChild(challengeBox);
});
