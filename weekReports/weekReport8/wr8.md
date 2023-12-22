---
Name: Bryant F. Polanco
Date: 12/21/23
Course: CIS 106 Fall 2023
---
# Week Report 8 Completed
#### Bryant F. Polanco 

## What is VIM?
It is designed for efficient text editing and is especially popular among programmers and system administrators.
## What is nano?
Nano is a simple and user-friendly text editor for Unix-like operating systems.

## Describe in your own words how to:
### Start and quit vim
***Start Vim***
type ```Vim``` into the text editor. 
***Quit Vim***
Inside of **vim** type ```qa!```
### What are the different vim modes:
1. Insert mode (press 'i') 
2. Normal mode (Default mode when you start VIM)
3. Command mode 
4. Visual mode 
5. Select mode
6. Ex-mode
### Insert text in vim
Press the letter ```i``` to go into **insert mode** from there start inputting text as normal. 
### Save a file in vim
***Save*** vim file
```
:w - save file 
:w whatever.txt - save as given file name and extension
:wq - save and quit 
:wqa! - save file and quit ALL files in the buffer 
```
### Search for a word inside vim
Use ```/``` and the word you are looking for to search
Search for hello using vim
```
/hello
```
### Delete text in vim
***Deleting*** text in Vim
```
dw - Deletes current word 
u - undo 
dd - deletes line under cursor
d + /word deletes the word given
```