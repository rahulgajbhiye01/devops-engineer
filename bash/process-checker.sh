#!/bin/bash

echo "-----------------------------------------------"
echo "-------------Process Check Script--------------"
echo "-----------------------------------------------"

# Check if the process is running
PROCESS_NAME="$1"

if [ -z "$PROCESS_NAME" ]; then
    read -p "Enter the name of the process to check: " PROCESS_NAME
fi

if pgrep -x "$PROCESS_NAME" > /dev/null
then
    echo "Process '$PROCESS_NAME' is running."
else    
    echo "Process '$PROCESS_NAME' is NOT running."
fi

echo "-----------------------------------------------"