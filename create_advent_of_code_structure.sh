#!/bin/bash

# Define the base folder for Advent of Code 2024
BASE_FOLDER="./src/2024"

# Create the main folder
if [ ! -d "$BASE_FOLDER" ]; then
    mkdir "$BASE_FOLDER"
    echo "Created main folder: $BASE_FOLDER"
else
    echo "Folder $BASE_FOLDER already exists."
fi

# Loop to create folders for each day
for day in {1..25}; do
    # Format day number to two digits (e.g., Day01, Day02, ...)
    DAY_FOLDER=$(printf "%s/Day%02d" "$BASE_FOLDER" "$day")

    # Create the day folder if it doesn't exist
    if [ ! -d "$DAY_FOLDER" ]; then
        mkdir "$DAY_FOLDER"
        echo "Created folder: $DAY_FOLDER"

        # Create solution.ts file with a template
        SOLUTION_FILE="$DAY_FOLDER/solution.ts"
        echo "// Solution for Day $(printf "%02d" "$day")" > "$SOLUTION_FILE"
        echo "// Advent of Code 2024" >> "$SOLUTION_FILE"
        echo "" >> "$SOLUTION_FILE"
        echo "export function solveDay$(printf "%02d" "$day")(inputData: string): void {" >> "$SOLUTION_FILE"
        echo "    // TODO: Implement solution" >> "$SOLUTION_FILE"
        echo "    console.log(inputData);" >> "$SOLUTION_FILE"
        echo "}" >> "$SOLUTION_FILE"
        echo "" >> "$SOLUTION_FILE"
        echo "Created file: $SOLUTION_FILE"

        # Create input.txt file
        INPUT_FILE="$DAY_FOLDER/input.txt"
        echo "# Paste your puzzle input here" > "$INPUT_FILE"
        echo "Created file: $INPUT_FILE"
    else
        echo "Folder $DAY_FOLDER already exists."
    fi
done
