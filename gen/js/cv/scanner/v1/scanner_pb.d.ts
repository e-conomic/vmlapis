import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_http_pb from '../../../google/api/http_pb';
import * as ssn_type_candidate_pb from '../../../ssn/type/candidate_pb';


export class ScanCVRequest extends jspb.Message {
  getDocument(): Document | undefined;
  setDocument(value?: Document): ScanCVRequest;
  hasDocument(): boolean;
  clearDocument(): ScanCVRequest;

  getFeaturesList(): Array<Feature>;
  setFeaturesList(value: Array<Feature>): ScanCVRequest;
  clearFeaturesList(): ScanCVRequest;
  addFeatures(value?: Feature, index?: number): Feature;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): ScanCVRequest;
  clearTagsList(): ScanCVRequest;
  addTags(value: string, index?: number): ScanCVRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanCVRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScanCVRequest): ScanCVRequest.AsObject;
  static serializeBinaryToWriter(message: ScanCVRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanCVRequest;
  static deserializeBinaryFromReader(message: ScanCVRequest, reader: jspb.BinaryReader): ScanCVRequest;
}

export namespace ScanCVRequest {
  export type AsObject = {
    document?: Document.AsObject,
    featuresList: Array<Feature.AsObject>,
    tagsList: Array<string>,
  }
}

export class ScanCVResponse extends jspb.Message {
  getFirstNameList(): Array<ssn_type_candidate_pb.Candidate>;
  setFirstNameList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearFirstNameList(): ScanCVResponse;
  addFirstName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getLastNameList(): Array<ssn_type_candidate_pb.Candidate>;
  setLastNameList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearLastNameList(): ScanCVResponse;
  addLastName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getDateOfBirthList(): Array<ssn_type_candidate_pb.Candidate>;
  setDateOfBirthList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearDateOfBirthList(): ScanCVResponse;
  addDateOfBirth(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getPhoneList(): Array<ssn_type_candidate_pb.Candidate>;
  setPhoneList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearPhoneList(): ScanCVResponse;
  addPhone(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getEmailList(): Array<ssn_type_candidate_pb.Candidate>;
  setEmailList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearEmailList(): ScanCVResponse;
  addEmail(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getCountryList(): Array<ssn_type_candidate_pb.Candidate>;
  setCountryList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearCountryList(): ScanCVResponse;
  addCountry(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getNationalityList(): Array<ssn_type_candidate_pb.Candidate>;
  setNationalityList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearNationalityList(): ScanCVResponse;
  addNationality(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getPostalCodeList(): Array<ssn_type_candidate_pb.Candidate>;
  setPostalCodeList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearPostalCodeList(): ScanCVResponse;
  addPostalCode(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getPostalAreaList(): Array<ssn_type_candidate_pb.Candidate>;
  setPostalAreaList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearPostalAreaList(): ScanCVResponse;
  addPostalArea(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getMunicipalityList(): Array<ssn_type_candidate_pb.Candidate>;
  setMunicipalityList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearMunicipalityList(): ScanCVResponse;
  addMunicipality(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getCountyList(): Array<ssn_type_candidate_pb.Candidate>;
  setCountyList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearCountyList(): ScanCVResponse;
  addCounty(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getAdressList(): Array<ssn_type_candidate_pb.Candidate>;
  setAdressList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearAdressList(): ScanCVResponse;
  addAdress(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getEmpoloyerNameList(): Array<ssn_type_candidate_pb.Candidate>;
  setEmpoloyerNameList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearEmpoloyerNameList(): ScanCVResponse;
  addEmpoloyerName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getPositionTitleList(): Array<ssn_type_candidate_pb.Candidate>;
  setPositionTitleList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearPositionTitleList(): ScanCVResponse;
  addPositionTitle(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getDateList(): Array<ssn_type_candidate_pb.Candidate>;
  setDateList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearDateList(): ScanCVResponse;
  addDate(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getInstitutionTypeList(): Array<ssn_type_candidate_pb.Candidate>;
  setInstitutionTypeList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearInstitutionTypeList(): ScanCVResponse;
  addInstitutionType(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getAreaOfEducationList(): Array<ssn_type_candidate_pb.Candidate>;
  setAreaOfEducationList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearAreaOfEducationList(): ScanCVResponse;
  addAreaOfEducation(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getDegreeList(): Array<ssn_type_candidate_pb.Candidate>;
  setDegreeList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearDegreeList(): ScanCVResponse;
  addDegree(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getAverageGradeList(): Array<ssn_type_candidate_pb.Candidate>;
  setAverageGradeList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearAverageGradeList(): ScanCVResponse;
  addAverageGrade(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getNameList(): Array<ssn_type_candidate_pb.Candidate>;
  setNameList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearNameList(): ScanCVResponse;
  addName(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  getLevelList(): Array<ssn_type_candidate_pb.Candidate>;
  setLevelList(value: Array<ssn_type_candidate_pb.Candidate>): ScanCVResponse;
  clearLevelList(): ScanCVResponse;
  addLevel(value?: ssn_type_candidate_pb.Candidate, index?: number): ssn_type_candidate_pb.Candidate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScanCVResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScanCVResponse): ScanCVResponse.AsObject;
  static serializeBinaryToWriter(message: ScanCVResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScanCVResponse;
  static deserializeBinaryFromReader(message: ScanCVResponse, reader: jspb.BinaryReader): ScanCVResponse;
}

export namespace ScanCVResponse {
  export type AsObject = {
    firstNameList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    lastNameList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    dateOfBirthList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    phoneList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    emailList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    countryList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    nationalityList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    postalCodeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    postalAreaList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    municipalityList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    countyList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    adressList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    empoloyerNameList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    positionTitleList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    dateList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    institutionTypeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    areaOfEducationList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    degreeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    averageGradeList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    nameList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
    levelList: Array<ssn_type_candidate_pb.Candidate.AsObject>,
  }
}

export class Feature extends jspb.Message {
  getType(): Feature.Type;
  setType(value: Feature.Type): Feature;

  getMaxResults(): number;
  setMaxResults(value: number): Feature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feature.AsObject;
  static toObject(includeInstance: boolean, msg: Feature): Feature.AsObject;
  static serializeBinaryToWriter(message: Feature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feature;
  static deserializeBinaryFromReader(message: Feature, reader: jspb.BinaryReader): Feature;
}

export namespace Feature {
  export type AsObject = {
    type: Feature.Type,
    maxResults: number,
  }

  export enum Type { 
    FIRST_NAME = 0,
    LAST_NAME = 1,
    DATE_OF_BIRTH = 2,
    PHONE = 3,
    EMAIL = 4,
    COUNTRY = 5,
    NATIONALITY = 6,
    POSTAL_CODE = 7,
    POSTAL_AREA = 8,
    MUNICIPALITY = 9,
    COUNTY = 10,
    ADDRESS = 11,
    EMPLOYER_NAME = 12,
    POSITION_TITLE = 13,
    DATE = 14,
    INSTITUTE_NAME = 15,
    INSTITUTE_TYPE = 16,
    AREA_OF_EDUCATION = 17,
    DEGREE = 18,
    AVERAGE_GRADE = 19,
    NAME = 20,
    LEVEL = 21,
  }
}

export class Document extends jspb.Message {
  getContent(): Uint8Array | string;
  getContent_asU8(): Uint8Array;
  getContent_asB64(): string;
  setContent(value: Uint8Array | string): Document;

  getSource(): DocumentSource | undefined;
  setSource(value?: DocumentSource): Document;
  hasSource(): boolean;
  clearSource(): Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    content: Uint8Array | string,
    source?: DocumentSource.AsObject,
  }
}

export class DocumentSource extends jspb.Message {
  getHttpUri(): string;
  setHttpUri(value: string): DocumentSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentSource.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentSource): DocumentSource.AsObject;
  static serializeBinaryToWriter(message: DocumentSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentSource;
  static deserializeBinaryFromReader(message: DocumentSource, reader: jspb.BinaryReader): DocumentSource;
}

export namespace DocumentSource {
  export type AsObject = {
    httpUri: string,
  }
}

