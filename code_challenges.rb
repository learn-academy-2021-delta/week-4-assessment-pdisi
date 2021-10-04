# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
#input = number
#output = even or odd

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#Take an input
#puts "enter a number"
input = Integer(gets.chomp)
#Conditionals using mod
if input % 2 == 0
    puts "even"
else
    puts "odd"
end

#Notes on process: This one was pretty simple. I really like using the terminal with Ruby and how "puts" works.

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
#input = string
#output = string with all vowels removed

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#Create a method
def takevowel(string)
#Set index to 0 for given variable
    i = 0
    album1 = []
#Go through index up to the length of the string
    while i < string.length
        dv_string.push(string[i])
#Check string for specific vowels at each index
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u")
            album1.delete(string[i])

        end
#Checking 1 index at a time
        i += 1

    end
#Join the string and print it in terminal
    puts album1.join

end

#Notes on process: I believe the logic is correct, but why does the terminal not print out the result of album1?


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.
#Input = String
#Output = String verified as palindrome or not


is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

#Create a method
#Create a conditional that checks to see if the word is equal in reverse
#return true or say it is not a palindrome

def palindrome('')
    if string == string.reverse
        return true
    else
        puts "String is not a palindrome"
    end
end
