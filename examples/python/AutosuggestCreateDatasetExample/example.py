import grpc
from vml_proto.asgt.data.v1.data_service_pb2 import CreateRequest
from vml_proto.asgt.data.v1.data_service_pb2_grpc import DataServiceStub
from vml_proto.asgt.type.data_pb2 import Data, Invoice, Supplier, InvoiceLine, Transaction
from vml_proto.asgt.type.sample_pb2 import Sample
from vml_proto.asgt.type.target_value_pb2 import TargetValue


def create_dataset(dataset_name, dataset_type):
    scc = grpc.ssl_channel_credentials()
    token = grpc.access_token_call_credentials("demo")
    credentials = grpc.composite_channel_credentials(scc, token)
    channel = grpc.secure_channel("api.stag.asgt.visma.ai:443", credentials)

    client = DataServiceStub(channel)

    rqst = CreateRequest(
        name=dataset_name,
        type=dataset_type,
        targets=["loremipsum"],
        samples=[Sample(
            data=Data(
                invoice=Invoice(
                    currency="EUR",
                    customer_ref="custom_reference",
                    issue_date=None,
                    supplier=Supplier(
                        global_id="DK30402499",
                        id="0001",
                        name="Acme Inc"
                    ),
                    text="Four have Information Operations",
                    total=2948.3949676931375
                ),
                invoice_line=InvoiceLine(
                    item_id="0000001",
                    text="Occupy ecological in 1897 near Blacksburg."
                ),
                transaction=Transaction(
                    amount=2948.3949676931375,
                    text="Are simply this, along with some larger stones or cobbles, leaving a desert"
                )
            ),
            target_values=[TargetValue(name="IsItPricy", value="No")]
        )]
    )

    response = client.CreateDataset(rqst)
    print(response)


if __name__ == "__main__":
    create_dataset("test_001", "bank")
