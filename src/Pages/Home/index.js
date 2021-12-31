import './styles.css';
import avatar from '../../Assets/profile.png';
import githubLogo from '../../Assets/github.png';
import linkedinLogo from '../../Assets/linkedin.png';
import HeaderNav from '../../Components/HeaderNav';

function Home() {
  return (
    <div className='Home'>
      <HeaderNav />
      <main className='main'>
        <img src={avatar} alt='' className='avatar' />
        <div className='texts'>
          <h2>Gabriel Carneiro</h2>
          <h3>Desenvolvedor Full Stack</h3>
          <span>JavaScript | Node | React </span>
          <div className='icons'>
            <a href='https://linkedin.com/in/gabriel-carneiro-7894b2201/' target='_blank' rel='noreferrer' className='unset'>
              <div className='icon'>
                <img src={linkedinLogo} alt='' />
                <span>Linkedin</span>
              </div>
            </a>
            <a href='https://github.com/GabrielCarneiroDEV' className='unset' target='_blank' rel='noreferrer'>
              <div className='icon'>
                <img src={githubLogo} alt='' />
                <span>Github</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <section className='section-aboutme'>
        <h1>Sobre mim</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          perferendis, voluptatem aspernatur culpa hic asperiores facilis
          expedita ad est possimus soluta impedit vel molestias quidem enim
          temporibus facere nam non? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ex quas quae aperiam ullam fuga mollitia illum non
          voluptate rerum. Harum id nisi quaerat ullam reprehenderit minima
          voluptas autem fugiat voluptate.
        </p>
      </section>
      <section className='cards'>
        <div className='card'>
          <h2>Front-end</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            harum ipsa officia laudantium deserunt et officiis modi praesentium
            similique vitae eaque, dolore blanditiis id itaque odit velit
            veritatis aspernatur debitis.
          </p>
        </div>
        <div className='card'>
          <h2>Outros</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            harum ipsa officia laudantium deserunt et officiis modi praesentium
            similique vitae eaque, dolore blanditiis id itaque odit velit
            veritatis aspernatur debitis.
          </p>
        </div>
        <div className='card'>
          <h2>Back-end</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            harum ipsa officia laudantium deserunt et officiis modi praesentium
            similique vitae eaque, dolore blanditiis id itaque odit velit
            veritatis aspernatur debitis.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
