import { IEducation } from "./IEducation";

export const educations: IEducation[] = [
    {
        institution: "FH Technikum Wien",
        title: "Master in Sports Equipment Technology",
        image: "assets/images/institutions/technikum.jpg",
        finished: new Date(2019,6),
        link:"https://www.technikum-wien.at/studiengaenge/master-sports-technology/"
    },
    {
        institution: "Mid Sweden University",
        title: "Master in Sportstek",
        image: "assets/images/institutions/miun.jpg",
        finished: new Date(2019,6),
        link: "https://www.miun.se/en/Research/research-centers/sports-tech-research-centre/"
    },
    {
        institution: "HarvardX",
        title: "Introduction in Computer Science",
        image: "assets/images/institutions/harvard.jpg",
        finished: new Date(2023,1),
        link: "https://pll.harvard.edu/course/cs50-introduction-computer-science"
    },
    {
        institution: "HarvardX",
        title: "Web Programming with Python and JavaScript",
        image: "assets/images/institutions/harvard.jpg",
        finished: new Date(2023,3),
        link: "https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript/2023-05"
    },
    {
        institution: "CodeFactory",
        title: "Full Stack Web Developer",
        image: "assets/images/institutions/codeFactory.png",
        finished: new Date(2023,8),
        link: "https://codefactory.wien/de/full-stack-web-developer-de/"
    },

]