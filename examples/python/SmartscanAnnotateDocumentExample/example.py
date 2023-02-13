from vml_proto.ssn.annotator.v1.annotator_pb2 import DocumentAnnotatorRequest, Document, Feature
from vml_proto.ssn.type.candidate_pb2 import Confidence
from vml_proto.ssn.annotator.v1.annotator_pb2_grpc import DocumentAnnotatorStub

import grpc


def annotate_document():
    scc = grpc.ssl_channel_credentials()
    token = grpc.access_token_call_credentials("demo")
    credentials = grpc.composite_channel_credentials(scc, token)
    channel = grpc.secure_channel("api.stag.ssn.visma.ai:443", credentials)
    client = DocumentAnnotatorStub(channel)

    with open('example.png', "rb") as image:
        f = image.read()
        content = bytes(f)

    rqst = DocumentAnnotatorRequest(
        document=Document(
            content=content
        ),
        features=([
            Feature(type=Feature.DEFAULT),
            Feature(type=Feature.CURRENCY, max_results=2, min_confidence=Confidence.VERY_LOW),
            Feature(type=Feature.TEXT)
        ])
    )

    response = client.AnnotateDocument(rqst)
    print(response)


if __name__ == "__main__":
    annotate_document()
