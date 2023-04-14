import CatDispScene from '../scenes/CatDispScene';
import BananyaScene from '../scenes/BananyaScene';
import QuestionBlockScene from '../scenes/QuestionBlockScene';

export const data = [
  {
    id: "project-1",
    name: "Coming Soon",
    scene: <QuestionBlockScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github",
    tech: []
  },
  {
    id: "project-2",
    name: "Cat Page",
    scene: <CatDispScene />,
    desc: "Page made for cat lovers. You can create an account, search for cat breeds and funny gifs as well as add them to favourites!",
    demo_url: "https://bttobi.github.io/cat_page/",
    github_url: "https://github.com/bttobi/cat_page",
    tech: ["React.js", "Firebase", "React Query", "Tailwind CSS", "daisyUI", "React Router"]
  },
  {
    id: "project-3",
    name: "Coming Soon",
    scene: <BananyaScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github",
    tech: []
  }
];
