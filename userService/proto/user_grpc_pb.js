// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_test_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user_test.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_test_LoginRequest(arg) {
  if (!(arg instanceof user_pb.LoginRequest)) {
    throw new Error('Expected argument of type user_test.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_LoginRequest(buffer_arg) {
  return user_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_test_RegisterRequest(arg) {
  if (!(arg instanceof user_pb.RegisterRequest)) {
    throw new Error('Expected argument of type user_test.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_RegisterRequest(buffer_arg) {
  return user_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_test_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type user_test.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_test_VerifyRequest(arg) {
  if (!(arg instanceof user_pb.VerifyRequest)) {
    throw new Error('Expected argument of type user_test.VerifyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_VerifyRequest(buffer_arg) {
  return user_pb.VerifyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_test_VerifyResponse(arg) {
  if (!(arg instanceof user_pb.VerifyResponse)) {
    throw new Error('Expected argument of type user_test.VerifyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_test_VerifyResponse(buffer_arg) {
  return user_pb.VerifyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserSvcService = exports.UserSvcService = {
  register: {
    path: '/user_test.UserSvc/register',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.RegisterRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_test_RegisterRequest,
    requestDeserialize: deserialize_user_test_RegisterRequest,
    responseSerialize: serialize_user_test_UserResponse,
    responseDeserialize: deserialize_user_test_UserResponse,
  },
  login: {
    path: '/user_test.UserSvc/login',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.LoginRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_user_test_LoginRequest,
    requestDeserialize: deserialize_user_test_LoginRequest,
    responseSerialize: serialize_user_test_UserResponse,
    responseDeserialize: deserialize_user_test_UserResponse,
  },
  verify: {
    path: '/user_test.UserSvc/verify',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.VerifyRequest,
    responseType: user_pb.VerifyResponse,
    requestSerialize: serialize_user_test_VerifyRequest,
    requestDeserialize: deserialize_user_test_VerifyRequest,
    responseSerialize: serialize_user_test_VerifyResponse,
    responseDeserialize: deserialize_user_test_VerifyResponse,
  },
  getUser: {
    path: '/user_test.UserSvc/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.VerifyResponse,
    requestSerialize: serialize_user_test_GetUserRequest,
    requestDeserialize: deserialize_user_test_GetUserRequest,
    responseSerialize: serialize_user_test_VerifyResponse,
    responseDeserialize: deserialize_user_test_VerifyResponse,
  },
};

exports.UserSvcClient = grpc.makeGenericClientConstructor(UserSvcService);
