// Copy is verbatim from the original psychictiger.com (typos intentionally kept).
export default function About() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="rule-b" style={{ padding: 'clamp(48px,7vw,104px) var(--pad-x) clamp(32px,4vw,56px)' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>About</div>
        <h1 className="display h-page" style={{ maxWidth: 1200 }}>My name is Jordan Burns.</h1>
      </div>
      <div className="auto-grid" style={{ '--col-min': '400px', gap: 'clamp(32px,5vw,80px)', padding: 'clamp(40px,6vw,88px) var(--pad-x)' }}>
        <div>
          <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <img src="/images/jordan-105.png" alt="Jordan Burns with battle ropes" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, letterSpacing: '0.04em', textTransform: 'uppercase' }}>NASM Certified Personal Trainer since 2012</p>
          </div>
        </div>
        <div className="prose" style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 640, fontSize: 18, lineHeight: 1.65 }}>
        <p className="lead">The same year Michael Jordan took home the league’s MVP trophy, I was born.</p>
        <p>I grew up with my older brother, Dylan. We were absolute daredevils together. Anything he could do, I could do, if not better. I’m pretty sure this enthralled my parents. There is a large hill in front of our NW Portland farm house, and it was a daily race track for bikes, roller blades, hockey matches, garbage can rolling, and any RC car stunt imaginable. To say the least, I was a tomboy.</p>
        <p>When I was about 5 years old, I remember my father taking us to a park nearby, and watching him teach Dylan to shoot and dribble a basketball. BAM, just like that, my love for sports began. From that day on, I had a basketball in my hand, and a dream in my heart. I was going to be the next Michael Jordan.</p>
        <h3 className="display" style={{ lineHeight: 1, margin: '24px 0 0', fontSize: 'clamp(28px,3vw,40px)' }}>My life didn’t exactly go as I had planned at age 5.</h3>
        <p>At 17, in the midst of being offered scholarships and deciding which college team I wanted to play for, I blew out my ACL. In that instant, my trajectory changed.</p>
        <p>Feeling completely disenchanted, I graduated high school by the skin of my teeth. I worked depressing jobs. I got arrested for running into a cop car and received a DUI. I had my own apartment. Then most devastatingly, I lost my older brother in a tragic death surrounding addiction. All before I was 21 years old. I found myself adrift, grief stricken, and completely dissatisfied with life.</p>
        <p>Losing a loved one is the most surreal and painful experiences in my life. In that grief, I rekindled my passion for movement and fitness. I began running. One day it was a mile. Soon after it was 3 miles. Not long after I began running, I joined Matt Dishman Community Center, where some of the old school bodybuilders worked out, and the old school boxers trained. I was completely in awe of what these dudes we’re doing in the gym. Throwing around massive weights, ripped muscles, loud music, so much energy and sweat being exchanged, something inside me knew this was the place to be. I felt right at home. About a year later, I began private training with IFBB Pro Neal Blassingame Jr, and things quickly took off from there.</p>
        <p>In 2012, I became a Certified Personal Trainer through the National Academy of Sports Medicine. I began building my clientele and furthering my skill set at Matt Dishman Community Center. Thanks to Chuck Amato’s guidance, I read every page of Arnold Schwarzenegger’s, The New Encyclopedia of Modern Bodybuilding. Six months later I began a mentorship with Jocelyn Streng (owner of PDXstrength).</p>
        <p>I’ve studied CrossFit, Strength Training, Bodybuilding, SAQ, Powerlifting, Circuit Training and books by mobility master Kelly Starrett, gymnastics WOD founder Carl Paoli, and parkour genius Ben Musholt. More recently, I began training with and studying the techniques of master trainer Cesar Martinez, and getting the best of the best from master trainer Dakota Ushigome. The person who has influenced me most, through her guidance and expert knowledge of the body, heart and mind, has been my Mother- A modern dancer/teacher, yoga instructor, and Children’s movement specialist for over thirty years. She often told me, “you’ll thank me later for harassing you to stand up straight”, it’s true. Thanks Mom. My life has been forever changed with immense gratitude to these people.</p>
        <p>Jojo’s Gym is a welcoming space where everyone easily feels the passion behind my peace. Mi Casa Su Casa. Movement therapy is just that, therapeutic. So don’t be surprised if you end up spilling your life story to me or woes from the week, you’ll be met with a kind ear.</p>
        <p>I am active in the recovery community, and I do not shy away when sharing my own journey to how I get here. When I’m not training or teaching, you can find me walking my dog, playing guitar at home, doing yard work, and having the most fun possible.</p>
        <p className="lead">My goal as a HUMAN is to spread my enthusiasm and make a positive impact on others lives. Life is too damn short to go about it quietly.</p>
        <p className="display" style={{ fontSize: 22, letterSpacing: '0.02em', color: 'var(--color-neutral-700)' }}>Jordan Burns</p>
        </div>
      </div>
    </section>
  );
}
