pandoc -V geometry:margin=0.5in -t html5 --standalone --self-contained --css=pandoc.css COVER.md -o COVER.pdf && open COVER.pdf
pandoc -V geometry:margin=0.5in -t html5 --standalone --self-contained --css=pandoc.css RESUME.md -o RESUME.pdf && open RESUME.pdf
# nodemon --watch RESUME.md --exec "pandoc -V geometry:margin=0.5in -t html5 --standalone --self-contained --css=pandoc.css RESUME.md -o RESUME.pdf && open RESUME.pdf"
rm html2pdf*
rm -rf tex2pdf.-*