using Asgt.V2;
using Asgt.V2.Type;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Ssn.Dataservice.V1;
using AsgtDataservice = Asgt.Dataservice.V1.DataService;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

internal static class Program
{
    private static Metadata _metadata;
    private static DatasetService.DatasetServiceClient _datasetServiceClient;
    private static DocumentAnnotator.DocumentAnnotatorClient _documentAnnotatorClient;
    private static DataService.DataServiceClient _dataServiceClient;
    private static string _name;
    private static SuggesterService.SuggesterServiceClient _suggesterServiceClient;

    public static void Main(string[] args)
    {
        var asgtChannel = GrpcChannel.ForAddress("https://api.stag.asgt.visma.ai:443");
        var ssnChannel = GrpcChannel.ForAddress("https://api.stag.ssn.visma.ai:443");
        _metadata = new Metadata();
        _metadata.Add("authorization", "Bearer demo");
        _datasetServiceClient = new DatasetService.DatasetServiceClient(asgtChannel);
        _documentAnnotatorClient = new DocumentAnnotator.DocumentAnnotatorClient(ssnChannel);
        _dataServiceClient = new DataService.DataServiceClient(ssnChannel);
        _suggesterServiceClient = new SuggesterService.SuggesterServiceClient(asgtChannel);
        _name = "present_test_001";

        // Asgt CreateDataset and check training status

        // createDataset();
        // Thread.Sleep(1000);
        // getDataset();
        // batchCreateExamples();
        // Thread.Sleep(1000);
        // getTrainings();

        
        // Ssn AnnotateDocument and sendFeedback
        
        // var feedback = annotateDocument();
        // Thread.Sleep(1000);
        // sendFeedback(feedback);

        
        // Asgt Suggest and DeleteDataset
        
        suggest();
        // deleteDataset();
    }

    private static void createDataset()
    {
        var request = new CreateDatasetRequest
        {
            DatasetName = _name
        };

        var response = _datasetServiceClient.CreateDataset(request, _metadata);
        Console.WriteLine(response);
    }

    private static void getDataset()
    {
        var request = new GetDatasetRequest
        {
            DatasetName = _name
        };
        
        var response = _datasetServiceClient.GetDataset(request, _metadata);
        Console.WriteLine(response);
    }
    
    private static void batchCreateExamples()
    {
        var request = new BatchCreateExampleRequest
        {
            DatasetName = _name,
            Examples =
            {
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "001",
                            Text = "Bottled Water",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 240f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                // few more examples
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "002",
                            Text = "Tea Bags",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 2500f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "003",
                            Text = "Coffee Pods",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 504f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                // 10 more examples
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "004",
                            Text = "Hot Chocolate Mix",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 72f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "005",
                            Text = "Assorted Chips",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 6f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "006",
                            Text = "Mixed Nuts",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 8f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "007",
                            Text = "Veggie Platter",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 18f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Catering"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "008",
                            Text = "Alien Bartenders",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 300f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Entertainment"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "009",
                            Text = "Holographic Dance Floor",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 500f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Entertainment"
                        }
                    }
                },
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            ItemId = "010",
                            Text = "Giant Inflatable Space Shuttle",
                            CustomerRef = "Wild Company",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            Amount = 1000f,
                            IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                        },
                    },
                    TargetValues =
                    {
                        new TargetValue
                        {
                            Name = "Account",
                            Value = "Entertainment"
                        }
                    }
                },
            }
        };
        _datasetServiceClient.BatchCreateExample(request, _metadata);
    }
    
    private static void getTrainings()
    {
        var request = new GetDatasetTrainingsRequest
        {
            DatasetName = _name,
        };

        var response = _datasetServiceClient.GetDatasetTrainings(request, _metadata);
        Console.WriteLine(FormatJson(response.ToString()));
    }

    private static void suggest()
    {
        var request = new SuggestRequest
        {
            DatasetName = _name,
            Input = new Data
            {
                InvoiceLine = new InvoiceLine
                {
                    ItemId = "003",
                    Text = "Coffee Pods",
                    CustomerRef = "Wild Company",
                    Supplier = new Supplier
                    {
                        GlobalId = "DK30402499",
                        Id = "0001",
                        Name = "Acme Inc"
                    },
                    Amount = 504f,
                    IssueDate = Timestamp.FromDateTime(DateTime.UtcNow),
                },
            },
        };

        var response = _suggesterServiceClient.Suggest(request, _metadata);
        Console.WriteLine(FormatJson(response.ToString()));
    }

    private static void sendFeedback(string feedbackID)
    {
        var request = new FeedbackRequest
        {
            Id = feedbackID,
            TrueValues = new TrueValues
            {
                DocumentType = "Invoice",
            }
        };

        var response = _dataServiceClient.Feedback(request, _metadata);
        Console.WriteLine(FormatJson(response.ToString()));
    }

    private static string annotateDocument()
    {
        var request = new DocumentAnnotatorRequest
        {
            Document = new Document
            {
                Content = ByteString.CopyFrom(File.ReadAllBytes("../../../example_invoice.pdf")),
            },
            Features =
            {
                new Feature
                {
                    Type = Feature.Types.Type.OrderDate
                },
                new Feature
                {
                    Type = Feature.Types.Type.Default
                }
            }
        };

        DocumentAnnotatorResponse response = _documentAnnotatorClient.AnnotateDocument(request, _metadata);
        Console.WriteLine(FormatJson(response.ToString()));

        return response.FeedbackId;
    }
    
    private static void deleteDataset()
    {
        var request = new DeleteDatasetRequest
        {
            DatasetName = _name
        };
        var response = _datasetServiceClient.DeleteDataset(request, _metadata);
        Console.WriteLine(FormatJson(response.ToString()));
    }
    
    static string FormatJson(string json)
    {
        const string INDENT_STRING = "    ";
        int indentation = 0;
        int quoteCount = 0;
        var result =
            from ch in json
            let quotes = ch == '"' ? quoteCount++ : quoteCount
            let lineBreak = ch == ',' && quotes % 2 == 0
                ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, indentation))
                : null
            let openChar = ch == '{' || ch == '['
                ? ch + Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, ++indentation))
                : ch.ToString()
            let closeChar = ch == '}' || ch == ']'
                ? Environment.NewLine + String.Concat(Enumerable.Repeat(INDENT_STRING, --indentation)) + ch
                : ch.ToString()
            select lineBreak == null
                ? openChar.Length > 1
                    ? openChar
                    : closeChar
                : lineBreak;

        return String.Concat(result);
    }
}