dictionary = {}
with open("dictionary.txt", encoding="utf8") as f:
    for line in f.readlines():
        line = line.strip().split(": ")
        dictionary[line[0].lower()] = line[1].split(", ")


def translate_speech(speech: str):
    speech = speech.strip()
    speechClear = "".join(filter(lambda x: x.isalnum() or x == " " or x == "-", list(speech)))
    res = []
    for word in speechClear.split():
        if (word.lower() in dictionary):
            res.append((word, dictionary[word.lower()]))
    return res