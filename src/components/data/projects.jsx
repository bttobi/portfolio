import CatDispScene from "../scenes/CatDispScene";
import QuestionBlockScene from "../scenes/QuestionBlockScene";

export const data = [
  {
    id: "project-1",
    name: "Cat Page",
    scene: <CatDispScene />,
    desc: "Page made for cat lovers. You can create an account, search for cat breeds and funny gifs as well as add them to favourites!",
    demo_url: "https://bttobi.github.io/cat_page/",
    github_url: "https://github.com/bttobi/cat_page",
    tech: [
      "React",
      "Firebase",
      "React Query",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
    ],
  },
  {
    id: "project-2",
    name: "More Coming Soon",
    scene: <QuestionBlockScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github",
    tech: [],
  },
  {
    id: "project-3",
    name: "More Coming Soon",
    scene: <QuestionBlockScene />,
    desc: "Coming Soon",
    demo_url: "#demo",
    github_url: "#github",
    tech: [],
  },
];
