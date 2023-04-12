#!/bin/bash
git status
echo "This is Your status:"
git add .
echo "Please Enter Your Message:"
read message
git commit -m "$message"
echo "Now Push to the main branch"
git status

