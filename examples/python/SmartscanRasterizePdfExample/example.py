from vml_proto.ssn.pdfservice.v1.pdfservice_pb2_grpc import PdfServiceStub
from vml_proto.ssn.pdfservice.v1.pdfservice_pb2 import RasterizePdfRequest

import grpc


def rasterize_pdf():
    scc = grpc.ssl_channel_credentials()
    token = grpc.access_token_call_credentials("demo")
    credentials = grpc.composite_channel_credentials(scc, token)
    channel = grpc.secure_channel("api.stag.ssn.visma.ai:443", credentials)
    client = PdfServiceStub(channel)

    with open('example.pdf', "rb") as file:
        f = file.read()
        document = bytes(f)

    rqst = RasterizePdfRequest(
        data=document,
        dpi=300,
        format=RasterizePdfRequest.PNG,
        color=RasterizePdfRequest.COLOR,
        pages=RasterizePdfRequest.ALL
    )

    responses = client.RasterizePdf(rqst)
    for response in responses:
        print(response)


if __name__ == "__main__":
    rasterize_pdf()
