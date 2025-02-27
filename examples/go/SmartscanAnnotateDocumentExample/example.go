package main

import (
	"context"
	"fmt"
	"os"

	"github.com/e-conomic/vmlapis/gen/go/ssn/annotator/v1"
	ssntype "github.com/e-conomic/vmlapis/gen/go/ssn/type"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

func main() {
	AnnotateDocument()
}

func AnnotateDocument() {
	// create connection
	conn, err := grpc.NewClient("api.stag.ssn.visma.ai:443", grpc.WithTransportCredentials(credentials.NewTLS(nil)))
	if err != nil {
		fmt.Println(err)
		return
	}

	// create client
	client := annotator.NewDocumentAnnotatorClient(conn)

	// read file
	content, err := os.ReadFile("example.png")
	if err != nil {
		fmt.Println(err)
		return
	}

	// create Request object
	request := &annotator.DocumentAnnotatorRequest{
		Document: &annotator.Document{
			Content: content,
		},
		Features: []*annotator.Feature{
			{Type: annotator.Feature_DEFAULT},
			{Type: annotator.Feature_CURRENCY, MaxResults: 2, MinConfidence: ssntype.Confidence_VERY_LOW},
			{Type: annotator.Feature_TEXT},
		},
	}

	// add token metadata
	ctx := metadata.AppendToOutgoingContext(context.Background(), "authorization", "Bearer "+"demo")

	// read response
	response, _ := client.AnnotateDocument(ctx, request)
	fmt.Println(response)
}
