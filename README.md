# Text Wizard
🧙‍♂️ Contextually generates paragraphs based on user input (experiment)

## Purpose
Writing repetitive sections of text are boring and a waste of time for workers. If one could contextually generate these sections based on limited user input, one would can user their time more productively.

## Vision
A user will input a paragraph of text into the wizard. The text will then be processed and made available for interaction. When a user selects a word from the paragraph, they can convert that into wizard field which corresponds to an input. When text is added to the input, it is contextualized and inserted into the paragraph.

Consider the following:

> Yesterday, Abraham Lincoln invited me to dinner. I told him, "That sounds great!"

I want to generate a similar text based on a few simple inputs. In order to do so, I need to create my wizard fields:

> **Yesterday**(Day), **Abraham Lincoln**(Name) invited me to **dinner**(Event). I told **him**(Gendered pronoun), "That sounds **great**(Positive adjective)!"

These wizard fields will have a corresponding input fields that will be used to generate a new text.

Input | Value
Day | Last Tuesday
Name | Eleanor Roosevelt
Event | a movie
Gender | Female
Positive Adjective | fun

The new output:

> Last Tuesday, Eleanor Roosevelt invited me to a movie. I told her, "That sounds fun!"