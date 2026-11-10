// Bundled copy of the site's content. Used until Sanity responds, if Sanity can't be reached,
// and as the starting content uploaded to Sanity by studio/scripts/seed.js.
// Copy is verbatim from the old WordPress site (typos intentionally kept).
// Images: { src, pos, alt } where pos is a CSS object-position.

let k = 0;
const key = () => `d${++k}`;
const block = (style, text) => ({ _type: 'block', _key: key(), style, markDefs: [], children: [{ _type: 'span', _key: key(), text, marks: [] }] });

export const DEFAULT_CONTENT = {
  settings: {
    gymName: "Jojo’s Gym",
    addressLine1: "1500 NW 17th Ave quimby Suite 113",
    addressLine2: "Portland, OR 97209",
    mapsUrl: "https://www.google.com/maps/place/Psychic+Tiger+Fitness/@45.5335566,-122.6892564,19z/data=!3m1!4b1!4m6!3m5!1s0x549509dd6218af53:0xadcbaa60ebba61d5!8m2!3d45.5335566!4d-122.6886127!16s%2Fg%2F11ylddt6s1?entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
  },
  home: {
    heroSlides: [
      { _key: key(), src: "/images/jordan-4.jpg", pos: "50% 30%", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-overhead.jpg", pos: "40% center", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-stretch-color.jpg", pos: "62% center", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-36.jpg", pos: "72% center", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-39.jpg", pos: "45% center", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-117.jpg", pos: "68% 30%", alt: 'Jordan Burns training' },
      { _key: key(), src: "/images/jordan-11.jpg", pos: "75% center", alt: 'Jordan Burns training' },
    ],
    slideSeconds: 6,
    introHeading: "Life is too damn short to go about it quietly.",
    introParagraphs: [
      "My goal as a HUMAN is to spread my enthusiasm and make a positive impact on others lives.",
      "Movement therapy is just that, therapeutic. So don’t be surprised if you end up spilling your life story to me or woes from the week, you’ll be met with a kind ear.",
    ],
    gymEyebrow: "Jojo’s Gym",
    gymHeading: "Mi Casa Su Casa.",
    gymText: "Jojo’s Gym is a welcoming space where everyone easily feels the passion behind my peace.",
  },
  about: {
    heading: "My name is Jordan Burns.",
    photo: { src: '/images/jordan-105.png', pos: 'center', alt: 'Jordan Burns with battle ropes' },
    photoCaption: "NASM Certified Personal Trainer since 2012",
    story: [
      block("lead", "The same year Michael Jordan took home the league’s MVP trophy, I was born."),
      block("normal", "I grew up with my older brother, Dylan. We were absolute daredevils together. Anything he could do, I could do, if not better. I’m pretty sure this enthralled my parents. There is a large hill in front of our NW Portland farm house, and it was a daily race track for bikes, roller blades, hockey matches, garbage can rolling, and any RC car stunt imaginable. To say the least, I was a tomboy."),
      block("normal", "When I was about 5 years old, I remember my father taking us to a park nearby, and watching him teach Dylan to shoot and dribble a basketball. BAM, just like that, my love for sports began. From that day on, I had a basketball in my hand, and a dream in my heart. I was going to be the next Michael Jordan."),
      block("h3", "My life didn’t exactly go as I had planned at age 5."),
      block("normal", "At 17, in the midst of being offered scholarships and deciding which college team I wanted to play for, I blew out my ACL. In that instant, my trajectory changed."),
      block("normal", "Feeling completely disenchanted, I graduated high school by the skin of my teeth. I worked depressing jobs. I got arrested for running into a cop car and received a DUI. I had my own apartment. Then most devastatingly, I lost my older brother in a tragic death surrounding addiction. All before I was 21 years old. I found myself adrift, grief stricken, and completely dissatisfied with life."),
      block("normal", "Losing a loved one is the most surreal and painful experiences in my life. In that grief, I rekindled my passion for movement and fitness. I began running. One day it was a mile. Soon after it was 3 miles. Not long after I began running, I joined Matt Dishman Community Center, where some of the old school bodybuilders worked out, and the old school boxers trained. I was completely in awe of what these dudes we’re doing in the gym. Throwing around massive weights, ripped muscles, loud music, so much energy and sweat being exchanged, something inside me knew this was the place to be. I felt right at home. About a year later, I began private training with IFBB Pro Neal Blassingame Jr, and things quickly took off from there."),
      block("normal", "In 2012, I became a Certified Personal Trainer through the National Academy of Sports Medicine. I began building my clientele and furthering my skill set at Matt Dishman Community Center. Thanks to Chuck Amato’s guidance, I read every page of Arnold Schwarzenegger’s, The New Encyclopedia of Modern Bodybuilding. Six months later I began a mentorship with Jocelyn Streng (owner of PDXstrength)."),
      block("normal", "I’ve studied CrossFit, Strength Training, Bodybuilding, SAQ, Powerlifting, Circuit Training and books by mobility master Kelly Starrett, gymnastics WOD founder Carl Paoli, and parkour genius Ben Musholt. More recently, I began training with and studying the techniques of master trainer Cesar Martinez, and getting the best of the best from master trainer Dakota Ushigome. The person who has influenced me most, through her guidance and expert knowledge of the body, heart and mind, has been my Mother- A modern dancer/teacher, yoga instructor, and Children’s movement specialist for over thirty years. She often told me, “you’ll thank me later for harassing you to stand up straight”, it’s true. Thanks Mom. My life has been forever changed with immense gratitude to these people."),
      block("normal", "Jojo’s Gym is a welcoming space where everyone easily feels the passion behind my peace. Mi Casa Su Casa. Movement therapy is just that, therapeutic. So don’t be surprised if you end up spilling your life story to me or woes from the week, you’ll be met with a kind ear."),
      block("normal", "I am active in the recovery community, and I do not shy away when sharing my own journey to how I get here. When I’m not training or teaching, you can find me walking my dog, playing guitar at home, doing yard work, and having the most fun possible."),
      block("lead", "My goal as a HUMAN is to spread my enthusiasm and make a positive impact on others lives. Life is too damn short to go about it quietly."),
    ],
    signature: "Jordan Burns",
  },
  services: {
    eyebrow: "2024 Pricing",
    heading: 'Services',
    services: [
      {
        _key: key(),
        title: "Personal Training",
        image: { src: "/images/jordan-4.jpg", pos: "50% 35%", alt: "Jordan Burns with a barbell" },
        prices: [
          { _key: key(), label: "1×45 minute session", price: "$70" },
          { _key: key(), label: "5×45 minute session", price: "$325" },
          { _key: key(), label: "8×45 minute session", price: "$510" },
          { _key: key(), label: "Partners", price: "$85" },
        ],
        note: "Private group/parties available to organize upon request. Price determined by party size.",
        policyTitle: "Late cancellation policy",
        policyText: "sh*t happens, so you get one freebie for bailing without 24hr notice. otherwise you will be charged a session. if ongoing late cancellations occur, i will not SCHEDULe ANY FURTHER SESSIONS and re evaluate our terms.",
        homeSummary: "45 minute sessions at Jojo’s Gym, solo or with a partner. Private groups and parties on request.",
        homePrice: "From $70",
      },
      {
        _key: key(),
        title: "Nutrition Services",
        image: { src: "/images/jordan-20.jpg", pos: "60% center", alt: "Jordan Burns stretching" },
        prices: [
          { _key: key(), label: "Consult + analysis on current nutrition regimen", price: "$100" },
          { _key: key(), label: "1 month Meal Plan + scheduled support Coaching calls during", price: "$300" },
        ],
        homeSummary: "A consult and analysis of your current regimen, or a one month meal plan with scheduled coaching calls.",
        homePrice: "From $100",
      },
      {
        _key: key(),
        title: "Remote Workout Programming",
        image: { src: "/images/jordan-105.png", pos: "center 40%", alt: "Jordan Burns with battle ropes" },
        prices: [
          { _key: key(), label: "1 month program", price: "$245" },
        ],
        homeSummary: "A one month program to follow wherever you train.",
        homePrice: "$245 / month",
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let’s train.",
    photo: { src: '/images/jordan-11.jpg', pos: '45% center', alt: 'Jordan Burns training at the gym' },
    serviceChoices: ['Personal training', 'Nutrition', 'Remote programming', 'Group / party'],
    successHeading: "Message sent.",
    successText: "Thanks. Jordan will be in touch soon.",
  },
};
