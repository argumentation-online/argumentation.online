local inferencerule = [[\vspace{-2\parskip}\hspace{14pt}\rule{0.3\linewidth}{0.5pt}\vspace{-\parskip}]]

function HorizontalRule(el)
    return pandoc.RawBlock('tex', inferencerule)
end