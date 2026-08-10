#!/bin/bash

echo "---------------------------------------"
echo "-------------Backup Script-------------"
echo "---------------------------------------" 

USERNAME=$(whoami)
PWD=$(pwd)

# Define backup source and destination
SOURCE="$PWD"
DESTINATION="/home/$USERNAME/backup"

# Create backup directory if it doesn't exist
if [ ! -d "$DESTINATION" ]; then
    echo "Creating backup directory at $DESTINATION"
    mkdir -p "$DESTINATION"
fi 

# Create a timestamped backup
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="backup_$TIMESTAMP.tar.gz"
BACKUP_PATH="$DESTINATION/$BACKUP_NAME"

echo "Creating backup: $BACKUP_PATH"
tar -czf "$BACKUP_PATH" -C "$SOURCE" . 

if [ $? -eq 0 ]; then
    echo "Backup created successfully: $BACKUP_PATH"
else
    echo "Error creating backup"
fi
echo "---------------------------------------"