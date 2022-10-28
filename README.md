# Deployement

To locally install this project, run the followings commands:
Clone the project from github

```
git clone https://github.com/Charles-Chrismann/portfolio-vercel-style.git
```
Enter project directory
```
cd portfolio-vercel-style.git/
```
Install projet dependencies
```
npm i
```
Run the project
```
npm run dev
```

Hosted project: [portfolio-vercel-style.vercel.app](https://portfolio-vercel-style.vercel.app).

Vercel provides a deployment interface that allows you to select the github directory directly from vercel, my project using external dependencies, it was necessary to indicate commands to launch before building the project as well as indicate an output directory. Checkly was also installed to detect any problem in our application.

Enfin, imgBot à été installé sur le répertoire github, il s'agit du action github qui permet de comprésser les images lors d'une poussé sur le répertoire, de même, CodeFactor à été installé afin de s'assurer de la bonne qualité du code.