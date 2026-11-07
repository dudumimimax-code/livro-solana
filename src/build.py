"""Concatena src/parts/*.html na ordem do livro e gera ../index.html.
Para editar o livro, altere o arquivo da parte (ex.: parts/30-cap2.html) e rode ./build.sh."""
import re, pathlib
here = pathlib.Path(__file__).parent
order = ["00-head","04-hook","05-front","06-engine","10-cap0","20-cap1","30-cap2","40-cap3",
         "50-cap4","60-cap5","70-cap6","72-cap7","74-cap8","80-conclusao","90-back","99-script"]
s = "".join((here/"parts"/f"{p}.html").read_text(encoding="utf8") for p in order)
tpl = (here/"envelope.html").read_text(encoding="utf8")
i = s.index("</style>") + len("</style>")
head, body = s[:i], s[i:]
head = head.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "")
meta = tpl.split("<!--BODY-->")[0].split("<!--HEAD-->")[1]
head = head.replace("<title>", meta + "<title>", 1)
(here.parent/"index.html").write_text("<!doctype html>\n<html lang=\"pt-BR\">\n<head>\n"+head+"\n</head>\n<body>\n"+body+"\n</body>\n</html>\n", encoding="utf8")
print("index.html gerado:", (here.parent/"index.html").stat().st_size, "bytes")
