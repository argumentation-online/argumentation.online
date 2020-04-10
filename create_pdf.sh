#!/bin/bash

ID="AUTOR1-AUTOR2_ArgOnl-JAHR-NUMMER"

pandoc posts/$ID.md \
  -o pdfs/$ID.pdf \
  --metadata-file=pdfs/styles/meta_aao-latex.yaml \
  --template=pdfs/styles/argonl_latex.template \
  --pdf-engine=xelatex \
  --lua-filter=inferenceline.lua