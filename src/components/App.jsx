import LIKAVITOS from "./LIKAVITOS.jpg"

export const App = () => {
  return (
    <div className="doc">
      
      <aside className="sidebar">
        <img src={LIKAVITOS} alt="Anatolii Bazan - Koval" style={{width: "320px", height: "230px"}} />
        <h2>CONTACTS</h2>
          <ul className="list-zero">
            <li className="list-item">
              <a href="tel:+380681480342" className="contact-link">+38 068 148 03 42</a>
            </li>
            <li className="list-item">
              <a href="mailto: beatrice.ccq@gmail.com">Email</a>
            </li>
            <li className="list-item">
              <a href="https://github.com/AnatoliiBK" >GitHub</a>
            </li>
            <li className="list-item">
              <a href="https://www.linkedin.com/in/anatolii-bazan-koval-b61b00274/">LinkedIn</a>
            </li>
          </ul>
        
        
        
        

        

        <h2>TECH SKILLS</h2>
        <ul className="list">
            <li className="list-item">(Перелік технічних навичок)</li>
            <li className="list-item">(що ви володієте)</li>
            <li className="list-item">(у вашій сфері діяльності)</li>
        </ul>

        <h2>SOFT SKILLS</h2>
        <ul className="list">
            <li className="list-item">(Перелік навичок м'яких навичок)</li>
            <li className="list-item">(комунікаційні, лідерські, адаптаційні тощо)</li>
        </ul>

        

        <h2>LANGUAGES</h2>
        <ul className="list">
            <li className="list-item">English - Intermediate</li>
            <li className="list-item">Ukrainian - Native</li>
            <li className="list-item">Russian - Fluent</li>
        </ul>
        </aside>

    
    <div className="main-content">
      <h1>ANATOLII BAZAN - KOVAL</h1>
        <p>FRONT-END DEVELOPER</p>
        <h2>SUMMARY</h2>
        <p>(Тут ви можете коротко описати свій досвід, навички і цілі в кар'єрному зростанні)</p>
        <h2>WORK EXPERIENCE</h2>
        <ul className="list">
          <li className="list-item">
            <h3>Car service | Mechanic</h3>
            <p>2011 - 2023</p>
          </li>
        </ul>
        

        

        <h2>PROJECT EXPERIENCE</h2>
        <ul className="list">
          <li className="list-item">
          <h3>(Назва проекту 1)</h3>
        <p>(Деталі проекту та ваш внесок)</p>
          </li>
          <li className="list-item">
          <h3>(Назва проекту 2)</h3>
        <p>(Деталі проекту та ваш внесок)</p>
        {/* Додавайте додаткові проекти, якщо необхідно */}
          </li>
        </ul>
        

        
        <h2>EDUCATION</h2>
        <ul className="list">
          <li className="list-item">
            <h3>IT School GoIT</h3>
            <p>Fullstack Developer | 2022 – 2023</p>
          </li>
          <li className="list-item">
            <h3>Ternopil Instrument Engineering Institute</h3>
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
