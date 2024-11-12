import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
      <a href="">LOGO</a>
      <a href="#">home</a>
      <a href="#">about</a>
      <a href="#">contact</a>
      <button>signup</button>
     </nav>
<br></br>

  <div className='my_body'>
  <main>
            <section class="intro">
                <h2>Welcome to My Portfolio</h2>
                <p>I'm a passionate web developer who specializes in front-end and back-end development. Check out my work!</p>
            </section>

            <section class="stats">
                <div class="stat">
                    <h3>Projects</h3>
                    <p>25+</p>
                </div>
                <div class="stat">
                    <h3>Clients</h3>
                    <p>10+</p>
                </div>
                <div class="stat">
                    <h3>Skills</h3>
                    <p>HTML, CSS, JavaScript, Python, React</p>
                </div>
            </section>

            <section class="projects">
                <h2>Featured Projects</h2>
                <div class="project-list">
                    <div class="project-card">
                        <img src="ashim-d-silva-WeYamle9fDM-unsplash.jpg" alt="Project 1"></img>
                        <h4>Project 1</h4>
                        <p>A web application for managing tasks.</p>
                    </div>
                    <div class="project-card">
                        <img src="ashim-d-silva-WeYamle9fDM-unsplash.jpg" alt="Project 2"></img>
                        <h4>Project 2</h4>
                        <p>An e-commerce platform for online shopping.</p>
                    </div>
                    <div class="project-card">
                        <img src="ashim-d-silva-WeYamle9fDM-unsplash.jpg" alt="Project 3"></img>
                        <h4>Project 3</h4>
                        <p>A personal finance tracker app.</p>
                    </div>
                </div>
            </section>
        </main>



  </div>


    



    </div>
  );
}

export default App;
