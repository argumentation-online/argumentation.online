#!/bin/bash

pandoc posts/Bruntel_ArgOnl-2018-3.md \
  -o pdfs/Bruntel_ArgOnl-2018-3.pdf \
  --metadata-file=pdfs/styles/meta_aao-latex.yaml \
  --template=pdfs/styles/argonl_latex.template \
  --pdf-engine=xelatex