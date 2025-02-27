package main

import (
	"context"
	"fmt"

	"github.com/e-conomic/vmlapis/gen/go/asgt/data/v1"
	asgttype "github.com/e-conomic/vmlapis/gen/go/asgt/type"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
)

func main() {
	CreateDataset("test_001", "bank")
}

func CreateDataset(datasetName, datasetType string) {
	// create connection
	conn, err := grpc.NewClient("api.stag.asgt.visma.ai:443", grpc.WithTransportCredentials(credentials.NewTLS(nil)))
	if err != nil {
		fmt.Println(err)
		return
	}

	// create client
	client := data.NewDataServiceClient(conn)

	// create Request object
	request := &data.CreateRequest{
		Name:    datasetName,
		Type:    datasetType,
		Targets: []string{"loremipsum"},
		Samples: []*asgttype.Sample{
			{
				Data: &asgttype.Data{
					Invoice: &asgttype.Invoice{
						Currency:    "EUR",
						CustomerRef: "custom_reference",
						IssueDate:   nil,
						Supplier: &asgttype.Supplier{
							GlobalId: "DK30402499",
							Id:       "0001",
							Name:     "Acme Inc",
						},
						Text:  "Four have Information Operations",
						Total: 2948.3949676931375,
					},
					InvoiceLine: &asgttype.InvoiceLine{
						ItemId: "0000001",
						Text:   "Occupy ecological in 1897 near Blacksburg.",
					},
					Transaction: &asgttype.Transaction{
						Amount: 2948.3949676931375,
						Text:   "Are simply this, along with some larger stones or cobbles, leaving a desert",
					},
				},
				TargetValues: []*asgttype.TargetValue{
					{Name: "IstItPricy", Value: "No"},
				},
			},
		},
	}

	// add token metadata
	ctx := metadata.AppendToOutgoingContext(context.Background(), "authorization", "Bearer "+"demo")
	response, err := client.CreateDataset(ctx, request)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(response)
}
