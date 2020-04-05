#!/bin/bash

pandoc posts/Zinke_ArgOnl-2020-02.md \
  -o pdfs/Zinke_ArgOnl-2020-02.pdf \
  --metadata-file=pdfs/styles/meta_aao-latex.yaml \
  --template=pdfs/styles/argonl_latex.template \
  --pdf-engine=xelatex \
  --lua-filter=inferenceline.lua