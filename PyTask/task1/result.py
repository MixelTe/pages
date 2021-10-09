# ваша функция (и возможно что-нибудь ещё):
def translate_speech(speech):
    return []


# код использующий вашу функцию:

def start():
    speech1 = [
        "Ух, как дела?",
        "Прости, давно не звонила.",
        "Сегодня же у-ух открыли тот самый магазин шляпок.",
        "Я там провела уух утро, примеривая себе что-нибудь на Юу-юух.",
        "Кстати, может тебе тоже подарить?",
        "Давай завтра встретимся, присмотрим тебе что-нибудь.",
        "Уо, подожди, сейчас перезвоню."
    ]
    speech2 = [
        "Знаешь, ю-уху книгу прочитала, Пушкин вроде написал уу-у Чуковский...",
        "Ух, Чуковский.",
        "Давай тебе почитаю.",
        "Муха, Муха — Цокотуха,",
        "Позолоченное брюхо!",
        "Уху по полю пошла,",
        "Уху денежку нашла.",
        "Пошла Уху на базар",
        "И купила ууюх.",
        "Выключай! ююхух?! ю-Ух! Я щас."
    ]
    runCall(speech1)
    input("Продолжить (Enter)")
    for _ in range(5):
        print()
    runCall(speech2)

def runCall(speaches: list[str]):
    print("Звонит совушка...")
    input("Ответить (Enter)")
    for speech in speaches:
        exception = False
        translate = translate_speech(speech)
        for el in translate:
            try:
                i = speech.find(el[0]) + len(el[0])
                translatedWord = ", ".join(el[1])
                speech = speech[:i] + f"({translatedWord})" + speech[i:]
            except Exception:
                exception = True
        if (exception):
            speech += " (Ошибка в программе для перевода)"
        print(speech)
        input("Продолжить (Enter)")
        print()
    print()
    print("Конец звонка, спасибо, что пользуетесь SkypOwl")

start()
