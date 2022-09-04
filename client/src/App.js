import * as React from 'react';
import PageLayout from './components/page'
import MainPage from './components/main'
import Students from './components/students'
import { I18n } from 'react-polyglot';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [locale, setLocale] = React.useState('ua');

  const phrases = {
    ua: {
        menu: {
            main: 'Головна',
            students: 'Студенти',
            team: 'Команда',
            news: 'Новини'
        },
        mainTitle: 'Безкоштовна допомога з навчанням і пошуком роботи в ІТ',
        contributors: {
            title: 'Я хочу допомогти',
            ul_1: 'Якщо ви досвідчений IT спеціаліст, ви можете приєднатися до нас як ментор.',
            ul_2: "Поділіться своїми знаннями ІТ з нашими студентами – ми шукаємо людей, які можуть зробити 30-хвилинну презентацію на загальні теми пов'язані з IT або про Git, GitHub, Heroku, Python, NodeJs, JavaScript, React.",
            ul_3: 'Якщо ви дизайнер або програміст, ви можете допомогти з роботою над веб-сайтом.',
            ul_4: 'Ви також можете допомогти нам з документацією, соц. мережами і організацією зустрічей зі студентами.'
        },
        help: {
            title: 'Як ми допомогаємо:',
            text: {
                line_1: 'Консультація віч-на-віч з досвідченим IT фахівцем щодо ваших інтересів (робота в ІТ дуже різноманітна, є різні ролі та технології, з якими ви можете працювати).',
                line_2: 'Персоналізована програма онлайн-курсів і допомога при їх проходженні.',
                line_3: 'Допомога з резюме та профілем у LinkedIn.',
                line_4: 'Робота над спільними проєктами використовуючи сучасні інструменти для командної роботи.'
            }
        },
        joinButton: 'Долучитись як студент'
    },
    en: {
        menu: {
            main: 'Main',
            students: 'Students',
            team: 'Team',
            news: 'News'
        },
        mainTitle: 'Free help with studying and finding a job in IT',
        contributors: {
            title: 'Contribute',
            ul_1: 'In case you’re an experienced software engineer, you can join us as a mentor',
            ul_2: 'You can share your IT knowledge with our students - we’re looking for someone you can do a 30-minute presentation on general software engineering topics or usage of Git, GitHub, Heroku, Python, NodeJs, JavaScript, React specifically.',
            ul_3: 'If you are a designer or a software engineer you can help us build our website and other tools we need.',
            ul_4: 'You can also help us write documentation, manage social media accounts, and organise meetings.'
        },
        help: {
            title: 'How we help:',
            text: {
                line_1: 'Face-to-face consultation with an experienced IT professional about your interests (working in IT is very diverse, there are different roles and technologies you can work with).',
                line_2: 'Personalised program of online courses and assistance in passing them.',
                line_3: 'Help with resume and profile on LinkedIn.',
                line_4: 'Work on joint projects using modern tools for teamwork.'
            }
        },
        joinButton: 'Join as a student'
    }
  }

  return (
    <I18n locale={locale} messages={phrases[locale]}>
      <Router>
        <PageLayout setLocaleCallback={setLocale} >
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/students" element={<Students />}></Route>
          </Routes>
        </PageLayout>
      </Router>
    </I18n>
  )
}

export default App;
