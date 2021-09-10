#!/bin/bash

ID="AUTOR1-AUTOR2_ArgOnl-JAHR-NUMMER"

pandoc posts/$ID.md \
  -o pdfs/$ID.pdf \
  --metadata-file=pdf-styles/meta_aao-latex.yaml \
  --template=pdf-styles/argonl_latex.template \
  --pdf-engine=xelatex \
  --lua-filter=pdf-styles/inferenceline.lua