---
Name: Bryant F. Polanco
Date: 11-01-23
Course: CIS-106
Purpose: Complete the week 5 report and answer all questions listed. 
---
# Week 5 report submission
## Answers to the following questions:
### What are Command Options?
* Command options are settings built into commands that alter what the command does. i.e "ls -l" if the "-l" option was not added we would not be given a list of files in the chosen directory. 
### What are Command Arguments?
Arguments is the actual directory that will be affected by the command and option. 

### Which command is used for creating directories? Provide at least 3 examples.
The command used to create directory is **mkdir**.
  * ***Three Example of the command above is:***

    ##### Example 1
    ###### Create "LabFile5" in **YOUR** home directory. 
    ```
    mkdir ~/LabFile5 
    ```
    
    ##### Example 2
    ###### Creating multiple directory in one line
    ```
    mkdir file1 file2 file3
    ```
    
    ##### Example 3
    ###### Creating a directory with a space in the name
    ```
    mkdir ~/'citi bank' 
    ```
    ###### Without quotation
    ```
    mkdir ~/Downloads\ Junk Mail
    ```

### What does the touch command do? Provide at least 3 examples.
Touch creates a file. 
*   ***Three examples on using the command touch***
    ##### Example 1 - touch
    ###### Create a file in **YOUR** home directory with a file     extension. 
    ```
    touch dontTouchmeImScared.txt
    ```

    ##### Example 2 - touch
    ###### Create multiple files in **YOUR** home directory 
    ```
    touch website.html script StudentsName.csv
    ```

    ##### Example 3 - touch
    ###### Create a file in **YOUR** home directory with    spacing in the name. 
    ```
    touch "List of games"
    ```

### How do you remove a file? Provide an example.
* Removing a file using the terminal is with the command **rm**.
  * ***Examples of using the rm command for a directory***
    ##### Example - removing a file
    ###### remove an **file** named "SavedSecret" in **YOUR**   home directory. 
    ```
    rm ~/Downloads/SavedSecrets 
    ```

    ### How do you remove a directory and can you remove    non-empty directories in Linux? Provide an example

    ##### Example - removing *non-empty* directory
    ###### remove a **non-empty Directory** in **YOUR** home    directory. 
    ```
    rm -r ~/Downloads 
    ```
    ##### Example - removing ***empty*** directories
    ###### remove an **empty Directory** named "SavedSecret" in     **YOUR** home directory. 
    ```
    rmdir ~/Downloads/SavedSecrets 
    ```
    
### Explain the mv and cp command. Provide at least 2   examples of each
* MV - moves files or rename files 
  * Example - using **mv** to move files and rename files
    ######  Move file from the directory Downloads to Development located inside Documents.
    ```
    mv Downloads/code ~/Documents/Development
    ```
    ###### Rename file inside of Downloads from Lab-5 to LAB-6
    ```
    mv Downloads/Lab-5 Lab-6
    ```
* CP - copies over files from one directory to another.

  * Example - Using cp to copy files.
    ###### Copies over file from one directory to another
    ```
    cp Downloads/movie Documents/hobbies
    ```
     ###### Copying multiple files
    ```
    cp -r script.html school.pptx assignment /Documents/    Copiedfiles/
    ```
## Practice Solution

### Practice 1 
![Practice 1](ScreenShot/Practice%201.png "Practice 1")
### Practice 2
![Practice 1](ScreenShot/Practice%202.png "Practice 2")
### Practice 3
![Practice 1](ScreenShot/Practice%203.png "Practice 3")
### Practice 4 
![Practice 1](ScreenShot/Practice%204.png "Practice 4")

## Bryant F. Polanco