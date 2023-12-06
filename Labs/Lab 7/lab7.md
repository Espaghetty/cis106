# Lab 7 - Handling files Submission

## Question 1 cat, tac, head, tail
1. Display the content of the ```/etc/passwd``` file.
    ![Question 1 Solution](screenShot/Q1a.png "Question 1" )
2. Display the content of the ```/etc/passwd``` file in reverse order.
    ![Question 1 Solution](screenShot/Q1b.png "Question 2" )
3. Display the content of the ```/etc/passwd``` file with line numbers and the $ to   indicate the end of every line.
    ![Question 1 Solution](screenShot/Q1c.png "Question 3" )
4. Display the first 5 lines of a the ```/etc/passwd``` file.
    ![Question 1 Solution](screenShot/Q1d.png "Question 4" )

## Question 2 cut
1. Display the first field of the ```/etc/passwd``` file.
    ![Question 2 Solution](screenShot/Q2a.png "Question 1")
2. Display the first and last field of the ```/etc/passwd``` file
    ![Question 2 Solution](screenShot/Q2b.png "Question 2")
3. Display the first and last field of the ```/etc/passwd``` file with the ```=``` as the output delimiter.
    ![Question 2 Solution](screenShot/Q2c.png "Question 3")
4. Display all the fields of the ```/etc/passwd``` file except the 3rd field.
    ![Question 2 Solution](screenShot/Q2d.png "Question 4")

## Question 3
1. Download these files using curl. Use the command: ```curl -s URL-here -o name-of-file``` where the name of the file is the one given in the URL. After Downloading the files, paste the files
~~htps://cis106.com/assets/shopping.txt~~
~~htps://cis106.com/assets/tasks.txt~~
2. How many lines does the book dracula book have?
3. How many words does the book “Pride and Prejudice” have?
Sort the file ```/etc/passwd```
![Question 3 Solution](screenShot/Q3.png "Question 1 - 4")

## Question 4 tr, grep
1. Replace the ```;``` for a ```,``` in the ```cereal.csv``` file
   ![Question 4 Solution](screenShot/Q4a.png "Answer") 
2. Display every line that contain the word love in the book *“Pride and 
Prejudice”*
   ![Question 4 Solution](screenShot/Q4b.png "Answer") 
3. Display every line that contains exactly the word love or hate in the book *“Pride and Prejudice”* with line numbers 
4. Display every line that starts exactly with the word **“love”** in the book Dracula. Display every line that starts with an upper case letter or a number in the book Dracula.
   ![Question 4 Solution](screenShot/Q4c.png "Answer") 
   ![Question 4 Solution](screenShot/Q4d.png "Question 4 - 5")


## Question 5 awk and sed
1. Print the first and last field of the ```cars.csv``` file
    ![Question 5 Solution](screenShot/Q5a.png "Solution")
2. Print the first and last field of the ```cars.csv``` file with the string ```" made in "```as a delimiter
    ![Question 5 Solution](screenShot/Q5b.png "Solution")
3. Print the ```cars.csv``` file in such a way that the output looks like this for every line:
```
The Chevy S-10 has 4 cylinders and is made in US
```
![Question 5 Solution](screenShot/Q5c.png "Solution")
4. Print the ```cars.csv``` file excluding the first 2 records (lines).
    ![Question 5 Solution](screenShot/Q5d.png "Solution")
5. Print all the car names in upper case.
    ![Question 5 Solution](screenShot/Q5e.png "Solution")
6. Replace all the instances of the word ```Dracula``` for the word ```Alucard``` in the book dracula.
    ![Question 5 Solution](screenShot/Q5f.png "Solution")
7. Insert a blank line after each line in the ```/etc/passwd``` file
    ![Question 5 Solution](screenShot/Q5g.png "Solution")
8. Replace all the repeated blank lines for a single blank line in the book “Pride and Prejudice” 
    ![Question 5 Solution](screenShot/Q5h.png "Solution")

## Question 6 I/O Redirection
1. How many users can login with the  ```/bin/bash``` shell?
![Question 6 Solution](screenShot/Q6a.png "Solution")
2. How many users have the ```/sbin/nologin``` shell assigned?
![Question 6 Solution](screenShot/Q6b.png "Solution")
3. How many ford vehicles are there in the ```cars.csv``` file
![Question 6 Solution](screenShot/Q6c.png "Solution")
![Question 6 Solution](screenShot/Q6c3.png "Solution")
4. How many 4 letter words are there in the bible?
![Question 6 Solution](screenShot/Q6d.png "Solution")

## !!!!Challenge Question!!!!
1. Display only the names of the cereals in the ```cereal.csv``` file. (Tip: use cut, awk and the pipe)
![Challenge Question](screenShot/ChallengeQuestion1.png "Challenge Solution")
2. Sort the output of the previous command and save it to a file called ```cereal-sorted.csv```. *(Beware that the first 2 lines need to be removed)*
![Challenge Question](screenShot/ChallengeQuestion2.png "Challenge Solution")
3. Display the names of the cereals and the amount of calories they have per serving.
![Challenge Question](screenShot/ChallengeQuestion3.png "Challenge Solution")
4. Repeat the previous command but replace the ```;``` with a ```,```
![Challenge Question](screenShot/ChallengeQuestion4.png "Challenge Solution")

&copy; Bryant F. Polanco *CIS106*-**2023**