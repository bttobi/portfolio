import CatDispScene from '../scenes/CatDispScene';
import BananyaScene from '../scenes/BananyaScene';
import QuestionBlockScene from '../scenes/QuestionBlockScene';

export const data = [
  {
    id: "project-1",
    title: "Coming Soon",
    scene: <QuestionBlockScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github"
  },
  {
    id: "project-2",
    title: "Cat Page",
    scene: <CatDispScene />,
    desc: "Page made for cat lovers. You can create an account, search for cat breeds and funny gifs as well as add them to favourites!",
    demo_url: "#demo",
    github_url: "#github"
  },
  {
    id: "project-3",
    title: "Coming Soon",
    scene: <BananyaScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github"
  }
];
