const motivation = [
  {
    q: "Surround yourself only with people who are going to take you higher.",
    a: "Oprah Winfrey",
    c: "68",
    h: "<blockquote>&ldquo;Surround yourself only with people who are going to take you higher.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>",
  },
  {
    q: "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    a: "Roy T. Bennett",
    c: "92",
    h: "<blockquote>&ldquo;Instead of worrying about what you cannot control, shift your energy to what you can create.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream.",
    a: "Arnold Schwarzenegger",
    c: "104",
    h: "<blockquote>&ldquo;If you want to turn a vision into reality, you have to give 100% and never stop believing in your dream.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>",
  },
  {
    q: "Forget safety. Live where you fear to live.",
    a: "Rumi",
    c: "43",
    h: "<blockquote>&ldquo;Forget safety. Live where you fear to live.&rdquo; &mdash; <footer>Rumi</footer></blockquote>",
  },
  {
    q: "You are what you do, not what you say you'll do.",
    a: "Carl Jung",
    c: "48",
    h: "<blockquote>&ldquo;You are what you do, not what you say you'll do.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>",
  },
  {
    q: "Success is about creating value.",
    a: "Candice Carpenter",
    c: "32",
    h: "<blockquote>&ldquo;Success is about creating value.&rdquo; &mdash; <footer>Candice Carpenter</footer></blockquote>",
  },
  {
    q: "There is only the one reality, neither to be realized nor attained.",
    a: "Huang Po",
    c: "67",
    h: "<blockquote>&ldquo;There is only the one reality, neither to be realized nor attained.&rdquo; &mdash; <footer>Huang Po</footer></blockquote>",
  },
  {
    q: "Man's character is his fate.",
    a: "Heraclitus",
    c: "28",
    h: "<blockquote>&ldquo;Man's character is his fate.&rdquo; &mdash; <footer>Heraclitus</footer></blockquote>",
  },
  {
    q: "Talent is luck. The important thing in life is courage.",
    a: "Woody Allen",
    c: "55",
    h: "<blockquote>&ldquo;Talent is luck. The important thing in life is courage.&rdquo; &mdash; <footer>Woody Allen</footer></blockquote>",
  },
  {
    q: "Never give up work. Work gives you meaning and purpose and life is empty without it.",
    a: "Stephen Hawking",
    c: "84",
    h: "<blockquote>&ldquo;Never give up work. Work gives you meaning and purpose and life is empty without it.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>",
  },
  {
    q: "If you want to be successful, you have to jump, there's no way around it.",
    a: "Steve Harvey",
    c: "73",
    h: "<blockquote>&ldquo;If you want to be successful, you have to jump, there's no way around it.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>",
  },
  {
    q: "Blessed is he who expects nothing, for he shall never be disappointed.",
    a: "Alexander Pope",
    c: "70",
    h: "<blockquote>&ldquo;Blessed is he who expects nothing, for he shall never be disappointed.&rdquo; &mdash; <footer>Alexander Pope</footer></blockquote>",
  },
  {
    q: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    a: "Carl Jung",
    c: "93",
    h: "<blockquote>&ldquo;Until you make the unconscious conscious, it will direct your life and you will call it fate.&rdquo; &mdash; <footer>Carl Jung</footer></blockquote>",
  },
  {
    q: "Judge your success by what you had to give up in order to get it.",
    a: "Dalai Lama",
    c: "65",
    h: "<blockquote>&ldquo;Judge your success by what you had to give up in order to get it.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "Someone who points out your flaws to you is not necessarily your enemy. Someone who speaks of your virtues is not necessarily your friend.",
    a: "Zen Proverb",
    c: "138",
    h: "<blockquote>&ldquo;Someone who points out your flaws to you is not necessarily your enemy. Someone who speaks of your virtues is not necessarily your friend.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
  },
  {
    q: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    a: "Norman Vincent Peale",
    c: "147",
    h: "<blockquote>&ldquo;Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>",
  },
  {
    q: "Failure is a great teacher. If you're open to it every mistake has a lesson to offer.",
    a: "Oprah Winfrey",
    c: "85",
    h: "<blockquote>&ldquo;Failure is a great teacher. If you're open to it every mistake has a lesson to offer.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>",
  },
  {
    q: "For the things we have to learn before we can do them, we learn by doing them.",
    a: "Aristotle",
    c: "78",
    h: "<blockquote>&ldquo;For the things we have to learn before we can do them, we learn by doing them.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
  },
  {
    q: "Life is too short to waste your time on people who don't respect, appreciate, and value you.",
    a: "Roy T. Bennett",
    c: "92",
    h: "<blockquote>&ldquo;Life is too short to waste your time on people who don't respect, appreciate, and value you.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "Don't wish it were easier, wish you were better.",
    a: "Jim Rohn",
    c: "48",
    h: "<blockquote>&ldquo;Don't wish it were easier, wish you were better.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Worry is a waste of emotional reserve.",
    a: "Ayn Rand",
    c: "38",
    h: "<blockquote>&ldquo;Worry is a waste of emotional reserve.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>",
  },
  {
    q: "One of the advantages of being disorganized is that one is always having surprising discoveries.",
    a: "A.A. Milne",
    c: "96",
    h: "<blockquote>&ldquo;One of the advantages of being disorganized is that one is always having surprising discoveries.&rdquo; &mdash; <footer>A.A. Milne</footer></blockquote>",
  },
  {
    q: "Rather than love, than money, than fame, give me truth.",
    a: "Henry David Thoreau",
    c: "55",
    h: "<blockquote>&ldquo;Rather than love, than money, than fame, give me truth.&rdquo; &mdash; <footer>Henry David Thoreau</footer></blockquote>",
  },
  {
    q: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
    a: "Steve Jobs",
    c: "118",
    h: "<blockquote>&ldquo;Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.&rdquo; &mdash; <footer>Steve Jobs</footer></blockquote>",
  },
  {
    q: "To perceive is to suffer.",
    a: "Aristotle",
    c: "25",
    h: "<blockquote>&ldquo;To perceive is to suffer.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
  },
  {
    q: "If you look for perfection, you'll never be content.",
    a: "Leo Tolstoy",
    c: "52",
    h: "<blockquote>&ldquo;If you look for perfection, you'll never be content.&rdquo; &mdash; <footer>Leo Tolstoy</footer></blockquote>",
  },
  {
    q: "What keeps life fascinating is the constant creativity of the soul.",
    a: "Deepak Chopra",
    c: "67",
    h: "<blockquote>&ldquo;What keeps life fascinating is the constant creativity of the soul.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
  },
  {
    q: "To arrive at the simplest truth requires years of contemplation.",
    a: "Isaac Newton",
    c: "64",
    h: "<blockquote>&ldquo;To arrive at the simplest truth requires years of contemplation.&rdquo; &mdash; <footer>Isaac Newton</footer></blockquote>",
  },
  {
    q: "Surround yourself with people who take their work seriously, but not themselves, those who work hard and play hard.",
    a: "Colin Powell",
    c: "115",
    h: "<blockquote>&ldquo;Surround yourself with people who take their work seriously, but not themselves, those who work hard and play hard.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "Failure means you've now learned another valuable lesson that pushes you one step closer to success.",
    a: "Steve Harvey",
    c: "100",
    h: "<blockquote>&ldquo;Failure means you've now learned another valuable lesson that pushes you one step closer to success.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>",
  },
  {
    q: "Learn from the rejection and turn it into an opportunity!",
    a: "Mary Engelbreit",
    c: "57",
    h: "<blockquote>&ldquo;Learn from the rejection and turn it into an opportunity!&rdquo; &mdash; <footer>Mary Engelbreit</footer></blockquote>",
  },
  {
    q: "Falling down is not failure. Failure comes when you stay where you have fallen.",
    a: "Socrates",
    c: "79",
    h: "<blockquote>&ldquo;Falling down is not failure. Failure comes when you stay where you have fallen.&rdquo; &mdash; <footer>Socrates</footer></blockquote>",
  },
  {
    q: "It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart.",
    a: "Roy T. Bennett",
    c: "112",
    h: "<blockquote>&ldquo;It's your life; you don't need someone's permission to live the life you want. Be brave to live from your heart.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>",
  },
  {
    q: "Giving is living. If you stop wanting to give, there's nothing more to live for.",
    a: "Audrey Hepburn",
    c: "80",
    h: "<blockquote>&ldquo;Giving is living. If you stop wanting to give, there's nothing more to live for.&rdquo; &mdash; <footer>Audrey Hepburn</footer></blockquote>",
  },
  {
    q: "Life needs to be more than just solving problems every day. You need to wake up and be excited about the future.",
    a: "Elon Musk",
    c: "112",
    h: "<blockquote>&ldquo;Life needs to be more than just solving problems every day. You need to wake up and be excited about the future.&rdquo; &mdash; <footer>Elon Musk</footer></blockquote>",
  },
  {
    q: "Smell the cheese often so you know when it is getting old.",
    a: "Spencer Johnson",
    c: "58",
    h: "<blockquote>&ldquo;Smell the cheese often so you know when it is getting old.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>",
  },
  {
    q: "No matter how tall the mountain is, it cannot block the sun.",
    a: "Chinese Proverb",
    c: "60",
    h: "<blockquote>&ldquo;No matter how tall the mountain is, it cannot block the sun.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
  },
  {
    q: "The less you try to impress, the more peaceful you can be.",
    a: "Maxime Lagace",
    c: "58",
    h: "<blockquote>&ldquo;The less you try to impress, the more peaceful you can be.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>",
  },
  {
    q: "The first man gets the oyster, the second man gets the shell.",
    a: "Andrew Carnegie",
    c: "61",
    h: "<blockquote>&ldquo;The first man gets the oyster, the second man gets the shell.&rdquo; &mdash; <footer>Andrew Carnegie</footer></blockquote>",
  },
  {
    q: "The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.",
    a: "Dan Millman",
    c: "109",
    h: "<blockquote>&ldquo;The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>",
  },
  {
    q: "Always show more kindness than seems necessary because the person receiving it needs it more than you will ever know.",
    a: "Colin Powell",
    c: "117",
    h: "<blockquote>&ldquo;Always show more kindness than seems necessary because the person receiving it needs it more than you will ever know.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "You are not stuck where you are unless you decide to be.  ",
    a: "Wayne Dyer",
    c: "58",
    h: "<blockquote>&ldquo;You are not stuck where you are unless you decide to be.  &rdquo; &mdash; <footer>Wayne Dyer</footer></blockquote>",
  },
  {
    q: "Appear weak when you are strong, and strong when you are weak.",
    a: "Sun Tzu",
    c: "62",
    h: "<blockquote>&ldquo;Appear weak when you are strong, and strong when you are weak.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
  },
  {
    q: "There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.",
    a: "Epictetus",
    c: "117",
    h: "<blockquote>&ldquo;There is only one way to happiness and that is to cease worrying about things which are beyond the power or our will.&rdquo; &mdash; <footer>Epictetus</footer></blockquote>",
  },
  {
    q: "The only thing worse than being blind is having sight but no vision.",
    a: "Helen Keller",
    c: "68",
    h: "<blockquote>&ldquo;The only thing worse than being blind is having sight but no vision.&rdquo; &mdash; <footer>Helen Keller</footer></blockquote>",
  },
  {
    q: "When you stop questioning, you stop learning.",
    a: "Lolly Daskal",
    c: "45",
    h: "<blockquote>&ldquo;When you stop questioning, you stop learning.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>",
  },
  {
    q: "Definiteness of purpose is the starting point of all achievement. ",
    a: "W. Clement Stone",
    c: "66",
    h: "<blockquote>&ldquo;Definiteness of purpose is the starting point of all achievement. &rdquo; &mdash; <footer>W. Clement Stone</footer></blockquote>",
  },
  {
    q: "Most people dabble their way through life, never deciding to master anything in particular.",
    a: "Tony Robbins",
    c: "91",
    h: "<blockquote>&ldquo;Most people dabble their way through life, never deciding to master anything in particular.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "Wheels of justice grind slow but grind fine.",
    a: "Sun Tzu",
    c: "44",
    h: "<blockquote>&ldquo;Wheels of justice grind slow but grind fine.&rdquo; &mdash; <footer>Sun Tzu</footer></blockquote>",
  },
  {
    q: "Values are like fingerprints. Nobody's are the same, but you leave 'em all over everything you do.",
    a: "Elvis Presley",
    c: "98",
    h: "<blockquote>&ldquo;Values are like fingerprints. Nobody's are the same, but you leave 'em all over everything you do.&rdquo; &mdash; <footer>Elvis Presley</footer></blockquote>",
  },
];
export default motivation;
