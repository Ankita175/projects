def new_game():
    
    guesses = []
    correct_guesses = 0
    question_num = 1

    for key in questions:
        print(key)
        for i in options[question_num - 1]:
            print(i)
        guess = input("Enter (A, B, C or D): ")
        guess = guess.upper()
        guesses.append(guess)
        check_answer(questions.get(key).guess)
        question_num += 1

def check_answer(answer, guess):
    
    if answer == guess:
        print("CORRECT!")
        return 1
    else:
        print("WRONG!")
        return 0
    
def display_score(correct_guesses, guesses):
    print("RESULTS")
    print("Answers: ", end = " ")
    for i in questions:
        print(questions.get(i), end = " ")
    print("Guesses: ", end =" ")
    for i in guesses:
        print(i, end = " ")
    print()

    score = ((correct_guesses/len(questions)) * 100)
    print("Your score is: "+str(score)+"%")

def play_again():
    response = input("Do you want to play again? (yes/no): ")
    response = response.upper()

    if response == "YES": 
        return True
    else:
        return False

questions = {
    "Who created Python?: ": "A",
    "Which year was Python created?: ": "B",
    "Python is tributed to which comedy group?: ": "C",
    "Is Earth round?: ": "A"
}

options = [["A. Guido van Possum", "B. Elon Musk", "C. Bill Gates", "D. Mark Zuckerburg"],
           ["A. 1989", "B. 1991", "C. 2000", "D. 2016"],
           ["A. Lonely Island", "B. Smosh", "C. Monty Python", "D. SNL"],
           ["A. True", "B. False", "C. sometimes", "D. Whats Earth?"]]


while play_again():
    new_game()

print("Bye!")