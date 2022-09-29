// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var asgt_v2_dataset_service_pb = require('../../asgt/v2/dataset_service_pb.js');
var asgt_type_dataset_pb = require('../../asgt/type/dataset_pb.js');
var asgt_v2_type_example_pb = require('../../asgt/v2/type/example_pb.js');
var asgt_v2_type_training_pb = require('../../asgt/v2/type/training_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('../../protoc-gen-openapiv2/options/annotations_pb.js');
var validate_validate_pb = require('../../validate/validate_pb.js');

function serialize_asgt_type_Dataset(arg) {
  if (!(arg instanceof asgt_type_dataset_pb.Dataset)) {
    throw new Error('Expected argument of type asgt.type.Dataset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_type_Dataset(buffer_arg) {
  return asgt_type_dataset_pb.Dataset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_BatchCreateExampleRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.BatchCreateExampleRequest)) {
    throw new Error('Expected argument of type asgt.v2.BatchCreateExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_BatchCreateExampleRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.BatchCreateExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_CreateDatasetRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.CreateDatasetRequest)) {
    throw new Error('Expected argument of type asgt.v2.CreateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_CreateDatasetRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.CreateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_CreateExampleRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.CreateExampleRequest)) {
    throw new Error('Expected argument of type asgt.v2.CreateExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_CreateExampleRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.CreateExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_CreateOrUpdateDatasetRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest)) {
    throw new Error('Expected argument of type asgt.v2.CreateOrUpdateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_CreateOrUpdateDatasetRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_CreateOrUpdateExampleRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest)) {
    throw new Error('Expected argument of type asgt.v2.CreateOrUpdateExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_CreateOrUpdateExampleRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_DeleteDatasetRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.DeleteDatasetRequest)) {
    throw new Error('Expected argument of type asgt.v2.DeleteDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_DeleteDatasetRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.DeleteDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_DeleteTagRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.DeleteTagRequest)) {
    throw new Error('Expected argument of type asgt.v2.DeleteTagRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_DeleteTagRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.DeleteTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_GetDatasetRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.GetDatasetRequest)) {
    throw new Error('Expected argument of type asgt.v2.GetDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_GetDatasetRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.GetDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_GetDatasetTrainingsRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest)) {
    throw new Error('Expected argument of type asgt.v2.GetDatasetTrainingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_GetDatasetTrainingsRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_GetTrainingsRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.GetTrainingsRequest)) {
    throw new Error('Expected argument of type asgt.v2.GetTrainingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_GetTrainingsRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.GetTrainingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_TrainingsResponse(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.TrainingsResponse)) {
    throw new Error('Expected argument of type asgt.v2.TrainingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_TrainingsResponse(buffer_arg) {
  return asgt_v2_dataset_service_pb.TrainingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_asgt_v2_TruncateDatasetRequest(arg) {
  if (!(arg instanceof asgt_v2_dataset_service_pb.TruncateDatasetRequest)) {
    throw new Error('Expected argument of type asgt.v2.TruncateDatasetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_asgt_v2_TruncateDatasetRequest(buffer_arg) {
  return asgt_v2_dataset_service_pb.TruncateDatasetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var DatasetServiceService = exports.DatasetServiceService = {
  // Get the basic information about a dataset.
getDataset: {
    path: '/asgt.v2.DatasetService/GetDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.GetDatasetRequest,
    responseType: asgt_type_dataset_pb.Dataset,
    requestSerialize: serialize_asgt_v2_GetDatasetRequest,
    requestDeserialize: deserialize_asgt_v2_GetDatasetRequest,
    responseSerialize: serialize_asgt_type_Dataset,
    responseDeserialize: deserialize_asgt_type_Dataset,
  },
  // Create a new dataset. Since no examples are provided in this operation, the training won't be scheduled
// until CreateExample or BatchCreateExample is called after the creation of the dataset.
createDataset: {
    path: '/asgt.v2.DatasetService/CreateDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.CreateDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_CreateDatasetRequest,
    requestDeserialize: deserialize_asgt_v2_CreateDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Not implemented yet.
// Creates a new dataset. If a dataset with such name already exsits, it will be updated with the
// provided data.
createOrUpdateDataset: {
    path: '/asgt.v2.DatasetService/CreateOrUpdateDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.CreateOrUpdateDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_CreateOrUpdateDatasetRequest,
    requestDeserialize: deserialize_asgt_v2_CreateOrUpdateDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete a dataset with the specified name.
deleteDataset: {
    path: '/asgt.v2.DatasetService/DeleteDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.DeleteDatasetRequest,
    responseType: asgt_type_dataset_pb.Dataset,
    requestSerialize: serialize_asgt_v2_DeleteDatasetRequest,
    requestDeserialize: deserialize_asgt_v2_DeleteDatasetRequest,
    responseSerialize: serialize_asgt_type_Dataset,
    responseDeserialize: deserialize_asgt_type_Dataset,
  },
  // Delete all datasets (and their examples) containing the specified tag.
// The datasets' names are not considered in this request - only the tag names is.
deleteTag: {
    path: '/asgt.v2.DatasetService/DeleteTag',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.DeleteTagRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_DeleteTagRequest,
    requestDeserialize: deserialize_asgt_v2_DeleteTagRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Uploads a new single example.
createExample: {
    path: '/asgt.v2.DatasetService/CreateExample',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.CreateExampleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_CreateExampleRequest,
    requestDeserialize: deserialize_asgt_v2_CreateExampleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Not implemented yet.
// Uploads or updates a new single example.
// If the specified example already exists, the example
// is updated with the provided values according to provided ID.
createOrUpdateExample: {
    path: '/asgt.v2.DatasetService/CreateOrUpdateExample',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.CreateOrUpdateExampleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_CreateOrUpdateExampleRequest,
    requestDeserialize: deserialize_asgt_v2_CreateOrUpdateExampleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Upload multiple examples at once. This matches the behavior of the v1 API's append operation.
batchCreateExample: {
    path: '/asgt.v2.DatasetService/BatchCreateExample',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.BatchCreateExampleRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_BatchCreateExampleRequest,
    requestDeserialize: deserialize_asgt_v2_BatchCreateExampleRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Truncate a dataset. Use this operation to remove examples in a dataset used for future training without
// removing existing models.
truncateDataset: {
    path: '/asgt.v2.DatasetService/TruncateDataset',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.TruncateDatasetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_asgt_v2_TruncateDatasetRequest,
    requestDeserialize: deserialize_asgt_v2_TruncateDatasetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get the specified number of the most recent dataset's trainings.
// Number of requested trainings has to be larger than 0 but no larger than 100.
getDatasetTrainings: {
    path: '/asgt.v2.DatasetService/GetDatasetTrainings',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.GetDatasetTrainingsRequest,
    responseType: asgt_v2_dataset_service_pb.TrainingsResponse,
    requestSerialize: serialize_asgt_v2_GetDatasetTrainingsRequest,
    requestDeserialize: deserialize_asgt_v2_GetDatasetTrainingsRequest,
    responseSerialize: serialize_asgt_v2_TrainingsResponse,
    responseDeserialize: deserialize_asgt_v2_TrainingsResponse,
  },
  // Get the specified number of the most recent trainings accross all consumer's datasets.
// Number of requested trainings has to be larger than 0 but no larger than 100.
getTrainings: {
    path: '/asgt.v2.DatasetService/GetTrainings',
    requestStream: false,
    responseStream: false,
    requestType: asgt_v2_dataset_service_pb.GetTrainingsRequest,
    responseType: asgt_v2_dataset_service_pb.TrainingsResponse,
    requestSerialize: serialize_asgt_v2_GetTrainingsRequest,
    requestDeserialize: deserialize_asgt_v2_GetTrainingsRequest,
    responseSerialize: serialize_asgt_v2_TrainingsResponse,
    responseDeserialize: deserialize_asgt_v2_TrainingsResponse,
  },
};

exports.DatasetServiceClient = grpc.makeGenericClientConstructor(DatasetServiceService);
