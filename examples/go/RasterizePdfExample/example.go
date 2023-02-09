package main

import (
	"context"
	"fmt"
	"github.com/e-conomic/vmlapis/gen/go/ssn/pdfservice/v1"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"os"
)

func main() {
	// create connection
	conn, err := grpc.Dial("api.stag.ssn.visma.ai:443", grpc.WithTransportCredentials(credentials.NewTLS(nil)))
	if err != nil {
		fmt.Println(err)
		return
	}

	// create client
	client := pdfservice.NewPdfServiceClient(conn)

	// read file
	document, err := os.ReadFile("example.pdf")
	if err != nil {
		fmt.Println(err)
		return
	}

	// create Request object
	request := &pdfservice.RasterizePdfRequest{
		Data:   document,
		Dpi:    300,
		Format: pdfservice.RasterizePdfRequest_PNG,
		Color:  pdfservice.RasterizePdfRequest_COLOR,
		Pages:  pdfservice.RasterizePdfRequest_ALL,
	}

	// add token metadata
	ctx := metadata.AppendToOutgoingContext(context.Background(), "authorization", "Bearer "+"demo")

	// make async call
	call, err := client.RasterizePdf(ctx, request)
	response, err := call.Recv()
	if err != nil {
		return
	}
	fmt.Println(response)

}
