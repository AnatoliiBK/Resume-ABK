import plus from "./plus.jpg";

export const App = () => {
  return (
    <div className="doc">
      
      <aside className="sidebar">
        <img src={plus} alt="Anatolii Bazan - Koval" className="img" />
        <h2 className="is-visible">ANATOLII BAZAN - KOVAL</h2>
        <p className="is-visible">FULL STACK DEVELOPER</p>
        <h2>CONTACTS</h2>
          <ul className="list-zero">
            <li className="list-contacts list-item">
              <a href="tel:+380681480342" className="contact-link">Phone</a>
            </li>
            <li className="list-contacts list-item">
              <a href="mailto: beatrice.ccq@gmail.com" className="contact-link">Email</a>
            </li>
            <li className="list-contacts list-item">
              <a href="https://github.com/AnatoliiBK"className="contact-link">GitHub</a>
            </li>
            <li className="list-contacts list-item">
              <a href="https://www.linkedin.com/in/anatolii-bazan-koval-b61b00274/"className="contact-link">LinkedIn</a>
            </li>
          </ul>
        
        
        
        

        

        <h2>TECH SKILLS</h2>
        <ul className="list">
            <li className="list-item">HTML, CSS, SCSS</li>
            <li className="list-item">JavaScript</li>
            <li className="list-item">React</li>
            <li className="list-item">Redux</li>
        </ul>

        <h2>SOFT SKILLS</h2>
        <ul className="list">
            <li className="list-item">Ability to listen</li>
            <li className="list-item">Attention to detail</li>
            <li className="list-item">Patience</li>
            <li className="list-item">Compliance</li>
        </ul>

        

        <h2>LANGUAGES</h2>
        <ul className="list">
            <li className="list-item">English - Intermediate</li>
            <li className="list-item">Ukrainian - Native</li>
            <li className="list-item">Russian - Fluent</li>
        </ul>
      </aside>

    
    <div className="main-content">
      <div className="is-hidden">
      <h1>ANATOLII BAZAN - KOVAL</h1>
        <p>FULL STACK DEVELOPER</p>
      </div>
      
        <h2>SUMMARY</h2>
        <p className="description">Technique is my hobby. In order to get an understanding of the principles of mechanical
           engineering, he studied at the university. Even then, I liked the design, which was 
           performed with the help of drawing tools. This also comes in handy for equipment repair work, 
           which I do now. What comes from your own efforts and is useful to someone else makes you needed. 
           Modernity has other ways of designing and implementing your own and someone's plans. Therefore, 
           the profession of Full Stack Developer is another way to realize yourself, including for someone's success.</p>
        <h2>WORK EXPERIENCE</h2>
        <ul className="list list-experience">
          <li className="list-item">
            <h3>Car service | Mechanic</h3>
            <p>2011 - 2023</p>
          </li>
        </ul>
        

        

        <h2>PROJECT EXPERIENCE</h2>
        <ul className="list">
          <li className="list-item">
          
            <a href="https://ritulina.github.io/parcel-project-template/" className="project-link">
              <h3>mimiно (Restaurant and hotel complex)</h3>
            </a>
            <a href="https://github.com/Ritulina/parcel-project-template" className="project-link">GitHub</a>
              <p className="description">Site with active content to get acquainted with the amenities of the complex and to book places in the hotel and restaurant.<br />Role: Development of the section "Contacts".</p>
          </li>
          <li className="list-item">
            <a href="https://badyanch.github.io/BOOKSHELF/" className="project-link">
              <h3>Bookshelf</h3>
            </a>
            <a href="https://github.com/badyanch/BOOKSHELF" className="project-link">GitHub</a>
          
              <p className="description">A site with modern functionality and an intuitive interface for searching books and ordering from several resources.<br />Role: Development of a theme change.</p>
        
          </li>
        </ul>
        

        
        <h2>EDUCATION</h2>
        <ul className="list">
          <li className="list-item">
            <a href="https://goit.global/ua/" className="education-link">
              <h3>IT School GoIT</h3>
            </a>
            
            <p>Fullstack Developer | 2022 – 2023</p>
          </li>
          <li className="list-item">
            <a href="https://tntu.edu.ua/?p=uk/main" className="education-link">
              <h3>Ternopil Instrument Engineering Institute</h3>
            </a>
            
            <p>Engineer | 1988 - 1993</p>
          </li>
        </ul>
        

        
    </div>
    </div>
  );
};




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
