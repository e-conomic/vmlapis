using Asgt.V2;
using Asgt.V2.Type;
using Google.Protobuf;
using Google.Protobuf.WellKnownTypes;
using Google.Type;
using Grpc.Core;
using Grpc.Net.Client;
using Ssn.Annotator.V1;
using Ssn.Dataservice.V1;
using Ssn.Type;
using AsgtDataservice = Asgt.Dataservice.V1.DataService;
using Document = Ssn.Annotator.V1.Document;

namespace ConsoleApp1;

internal static class Autosuggest
{
    private static Metadata _metadata;
    private static DatasetService.DatasetServiceClient _datasetServiceClient;
    private static SuggesterService.SuggesterServiceClient _suggesterServiceClient;
    private static string _datasetName;

    public static void Main(string[] args)
    {
        var asgtChannel = GrpcChannel.ForAddress("https://api.stag.asgt.visma.ai:443");
        _datasetServiceClient = new DatasetService.DatasetServiceClient(asgtChannel); //v2 autosuggest client
        _suggesterServiceClient = new SuggesterService.SuggesterServiceClient(asgtChannel);
        _metadata = new Metadata { { "authorization", "Bearer demo" } };

        _datasetName = "autosuggest-demo-1";
        
        createDataset();

        getDataset();
        
        batchCreateExamples();
        
        getTrainings();
        
        suggest();
        
        deleteDataset();
    }

    private static void createDataset()
    {
        var request = new CreateDatasetRequest
        {
            DatasetName = _datasetName
        };

        _datasetServiceClient.CreateDataset(request, _metadata);
    }

    private static void getDataset()
    {
        var request = new GetDatasetRequest
        {
            DatasetName = _datasetName
        };

        var respt =_datasetServiceClient.GetDataset(request, _metadata);
        
        Console.WriteLine(respt);
    }
    
    private static void batchCreateExamples()
    {
        var requst = new BatchCreateExampleRequest
        {
            DatasetName = _datasetName,
            Examples =
            {
                new Example
                {
                    Data = new Data
                    {
                        InvoiceLine = new InvoiceLine
                        {
                            Amount = 240f,
                            Text = "Bottled water",
                            Supplier = new Supplier
                            {
                                GlobalId = "DK30402499",
                                Id = "0001",
                                Name = "Acme Inc"
                            },
                            CustomerRef = "Wild Company",
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
            },

        };

        _datasetServiceClient.BatchCreateExample(requst, _metadata);
    }
    
    private static void getTrainings()
    {
        var request = new GetDatasetTrainingsRequest
        {
            DatasetName = _datasetName
        };

        var resp = _datasetServiceClient.GetDatasetTrainings(request, _metadata);
        Console.WriteLine(PrettyPrint(resp.ToString()));
    }

    private static void suggest()
    {
        var request = new SuggestRequest
        {
            DatasetName = _datasetName,
            Input = new Data
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
            }
        };

        var resp = _suggesterServiceClient.Suggest(request, _metadata);
        Console.WriteLine(PrettyPrint(resp.ToString()));
    }

    private static void deleteDataset()
    {
        var request = new DeleteDatasetRequest
        {
            DatasetName = _datasetName
        };

        _datasetServiceClient.DeleteDataset(request, _metadata);
    }
    
    static string PrettyPrint(string json)
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