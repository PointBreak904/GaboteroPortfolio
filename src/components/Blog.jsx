import '../style/blog.css';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import c3 from '../assets/c3.jpg';


const Blog = () => {
  return (
    <section className="blog">
      <h1 className="blog-title">Latest from the Blog</h1>
      <div className="blog-container">
        
        {/* Blog 1 */}
        <div className="blog-card">
          <div className="image-grid">
            <div className="image-box"><img src={b1} alt="Mobile Dev" /></div>
            <div className="image-box"><img src={b2} alt="OJT Project" /></div>
            <div className="image-box"><img src={b3} alt="Languages" /></div>
          </div>
          <div className="blog-text">
            <h2>💻 “Code Overload?” Nah, Just Another College Day</h2>
            <p style={{ color: 'gray' }}>05/05/2025</p>
            <p>
            Imagine working on a mobile app, handling your OJT project, and learning new programming languages all at once. Yep, that was me. It felt like doing backflips while riding a roller coaster... with my laptop on.
            <br /><br />
            It was honestly overwhelming at first. But looking back, I’m really glad I went through it. I didn’t just learn syntax or memorize commands. I picked up real programming techniques that made my code cleaner and my thinking sharper.
            <br /><br />
            Every bug turned into a lesson. Every challenge helped me grow. If pressure really does make diamonds, then hey—I might be starting to shine a little.
            </p>

          </div>
        </div>

        {/* Blog 2 */}
        <div className="blog-card">
          <div className="image-grid">
            <div className="image-box"><img src={c1} alt="Art" /></div>
            <div className="image-box"><img src={c2} alt="Programming" /></div>
            <div className="image-box"><img src={c3} alt="Saranggani" /></div>
          </div>
          <div className="blog-text">
            <h2>🎨 When Code Meets Canvas: The Art of Balance</h2>
            <p style={{ color: 'gray' }}>05/03/2025</p>
            <p>
              I used to think programming and art were miles apart—one logical, one emotional. But somehow, I found their connection in my own journey. Art taught me flow, patience, and rhythm. Programming gave me structure and logic.
              <br /><br />
              When the burnout hit hard, I picked up my pencil and let the stress melt onto the page. But my journey didn’t end in the four corners of my screen. Through my service in YFC, I got the chance to go to ICON in Saranggani. I even traded a tour just to attend and I don’t regret it one bit.
              <br /><br />
              That moment grounded me. It reminded me why I serve. The joy, the energy, the people I came back not just inspired, but transformed. It made me want to lead better, love harder, and live more purposefully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
