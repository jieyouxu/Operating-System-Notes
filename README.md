# Operating System Notes

LaTeX Build from (latex-documentation)[https://github.com/CharlieGreenman/latex-documentation].

## Building

### Install MacTex ###

Download MacTeX. MacTeX installs everything you need to compile tex files into
PDFs. This will take a while, so grab a coffee, a tea, or take a walk, or what
not.

### Install Skim (for previewing PDFs) ###

LatexTools makes use of Skim for previewing works-in-progress.
Download and install [Skim](http://skim-app.sourceforge.net/).
On OS X Yosemite, I installed version 1.4.17.

In addition, to make sure that pdf automatically refreshes when pdf is updated
once skim is installed, goto Skim -> Preferences -> Sync and check the box for
"Check for file Changes"

### Command line ###
```
npm install
pdftex main.tex
npm start
```

Anytime you come back to this project and want to start editing again, just run
`npm start`

That's it and enjoy your latex build!
