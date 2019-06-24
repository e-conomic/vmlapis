#!/bin/bash

FILES=(
    "gen/go/ssn/ocrservice/v1/ocrservice.pb.go"
    "gen/go/ssn/mlservice/v2/mlservice.pb.go"
    "gen/go/ssn/pdfservice/v1/pdfservice.pb.go"
    "gen/go/ssn/annotator/v1/annotator.pb.go"
)
	

for FILE in ${FILES[@]}; do
    FILENAME_WITH_EXT=$(basename -- "$FILE")
    DIRNAME=$(dirname -- "$FILE")
    FILENAME="${FILENAME_WITH_EXT%.pb.go}"
    mockgen -source "$FILE" -destination "$DIRNAME"/mock/mock_"$FILENAME".go
    echo $FILE "->" "$DIRNAME"/mock/mock_"$FILENAME".go
done
