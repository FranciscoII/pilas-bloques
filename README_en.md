# Pilas Bloques - A tool to learn computer programming

<p align="center">
  <img src="https://pilasbloques.program.ar/online/imagenes/main-logo.png"/>
</p>

## About

Pilas Bloques is an application to learn computer programming, specially developed for the classroom.
We offer challenges with different levels of complexity to introduce students into the universe of computer programming with blocks.

![](https://github.com/Program-AR/pilas-bloques/blob/master/screenshots/desafios.png)
![](https://github.com/Program-AR/pilas-bloques/blob/master/screenshots/editor.png)

### What does computer programming with blocks mean?

It means developing programs with actions and instructions introduced by combining blocks. The result of fitting blocks together is a program that (hopefully!) solves the problem or challenge offered.

### Why is this learning methodology positive?

- Because each abstract <b>concept</b> associated with programming has its <b>visual</b> representation.
- Because it avoids the <b>difficulties</b> produced by the formal syntax of a <b>written</b> language (and the frustration when we make a mistake in writing!). 
- The blocks are selected, dragged, fit together, and the task is ready.

### What makes Pilas Bloques different from the other tools?

The main difference is that this platform was created in <b>support of a didactic sequence</b> to learn programming at school.

###  What’s a didactic sequence?

It’s the plan by means of which teachers expect students to learn a topic. Pilas Bloques didactic sequence was created and tested by Argentine teachers and researchers. Nowadays, this proposal is being studied in depth and expanded. Learn more about the initiatives we are working on.

### Who can solve Pilas Bloques challenges?

These challenges can be solved by anyone. However, at present we offer two Teachers’ Books as supporting material, targeted at the <b> elementary school </b>, so that children between 5 and 8 years old can take advantage of the activities of the First Cycle, and children between 9 and 12 years old will be able to take advantage of the activities of the Second Cycle.

### And can anyone solve these challenges on their own?

This tool was thought as an <b>aid for the teacher and the student</b> along the teaching-learning process of computer programming at school. In these didactic sequences, the <b>inquiry-based</b> methodology is fundamental. However, our recommendation is that the teacher serves as the <b>guide</b> and assists during the student’s learning process.

## Contributing

You can find all the information you need to start contributing in Pilas Bloques in the [CONTRIBUTING](https://github.com/Program-AR/pilas-bloques/blob/guidelines/CONTRIBUTING_en.md) guidelines!

## Getting Started

In order to collaborate, first of all you will install [Git](https://git-scm.com/) and then you must clone the [Pilas Bloques](https://github.com/Program-AR/pilas-bloques) repository.

```
git clone https://github.com/Program-AR/pilas-bloques.git
```

### Prerequisites

* Node. The version required is indicated in `.nvmrc` file.

  Install it: 
  ```
  git clone https://github.com/nvm-sh/nvm.git ~/.nvm
  source ~/.nvm/nvm.sh
  source ~/.nvm/install.sh
  nvm install .
  ```

### Use Pilas Bloques NodeJS target version:
```
nvm use
```
  
### Install all project dependencies:
```
npm install
```

## Daily Development commands

### Run all tests:
```
npm test
```

### Start Pilas Bloques:
```
npm run start
```

### Build Pilas Bloques

```
npm run build
```

### About experiment groups:

Pilas Bloques can be compiled in different ways depending on the experiment group. This can be achieved by setting the environment variable `EXPERIMENT_GROUP` at build time:

```
EXPERIMENT_GROUP=treatment npm run start
```

The experiment groups are: `notAffected`, `control`, `treatment` and `autoassign`.

- `notAffected`: (default) it does not show any feedback on current solution, just challenge completion.
- `control`: after completing a challenge its expectations are shown, but with no information regarding whether they were fulfilled.
- `treatment`: this one has a training period. During this time expectations are shown for each challenge, alongside a progress bar that awards points for each passed expectation. Blocks in the workspace have their own feedback too. Once the training period is over, the app behavior changes to *control*.
- `autoassign`: randomly assigns an experiment group at run time (between `control` and `treatment`).

### Preparing backend (for users stuff):

If you want to test users stuff or save challenges it is necessary to fulfill some requirements: [Pilas Bloques API](https://github.com/Program-AR/pilas-bloques-api), [Pilas Bloques Analytics](https://github.com/Program-AR/pilas-bloques-analytics) and a data base [MongoDB](https://www.mongodb.com/).

### License

Copyright © 2021, [Program-AR](http://program.ar), All Rights Reserved.

Licensed under the terms of [GNU General Public License v3.0](https://github.com/Program-AR/pilas-bloques/blob/master/LICENSE) license.

### Changeslog
[here](notasDeVersion.md)
