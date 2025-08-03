
  const facts = {
    tech: [
      "AI can now generate full music tracks with lyrics.",
      "Quantum computing is being tested by Google and IBM.",
      "5G networks are reshaping IoT devices worldwide.",
      "NVIDIA became a trillion-dollar company thanks to AI.",
      "Elon Musk launched xAI to rival OpenAI."
    ],
    science: [
      "NASA's Artemis II will soon carry humans around the Moon.",
      "Scientists created living skin for robots using stem cells.",
      "Fusion energy had a net gain in recent US experiments.",
      "CRISPR is being tested to cure sickle cell anemia.",
      "James Webb Telescope spotted water on a distant planet."
    ],
    social: [
      "The global population crossed 8 billion in 2023.",
      "Digital payment usage in India is highest worldwide.",
      "Remote work has reshaped global employment.",
      "Mental health awareness is surging among Gen Z.",
      "Climate protests are pushing new green policies."
    ],
    random: [
      "A cloud can weigh over a million pounds.",
      "Bananas are technically berries, but strawberries aren't.",
      "Sharks existed before trees!",
      "A day on Venus is longer than its year.",
      "Oxford University is older than the Aztec Empire."
    ]
  };

  const domainKeys = ["tech", "science", "social", "random"];
  const counters = {
    tech: 0,
    science: 0,
    social: 0,
    random: 0
  };

  function flipCard(card) {
    const inner = card.querySelector('.flip-card-inner');
    const back = card.querySelector('.flip-card-back');

    const index = Array.from(document.querySelectorAll('.flip-card')).indexOf(card);
    const domain = domainKeys[index];

    // Cycle through facts
    const factList = facts[domain];
    counters[domain] = (counters[domain] + 1) % factList.length;
    back.innerHTML = `<p>${factList[counters[domain]]}</p>`;

    inner.classList.toggle('flipped')
  }
