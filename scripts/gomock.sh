#!/bin/bash
	

for FILE in $(find . -name "*.pb.go" | sed 's|^./||'); do
    FILENAME_WITH_EXT=$(basename -- "$FILE")
    DIRNAME=$(dirname -- "$FILE")
    EXTENSION="${FILENAME_WITH_EXT##*.}"
    FILENAME="${FILENAME_WITH_EXT%.pb.go}"
    mockgen -source "$FILE" -destination "$DIRNAME"/mock/mock_"$FILENAME".go
    # Fix pacakge name
    sed -i '' 's|"."|'"\"github.com/e-conomic/vmlapis/$DIRNAME\"|g" "$DIRNAME"/mock/mock_"$FILENAME".go
done

