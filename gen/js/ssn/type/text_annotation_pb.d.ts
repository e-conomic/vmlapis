import * as jspb from 'google-protobuf'

import * as ssn_type_geometry_pb from '../../ssn/type/geometry_pb';


export class TextAnnotation extends jspb.Message {
  getPagesList(): Array<Page>;
  setPagesList(value: Array<Page>): TextAnnotation;
  clearPagesList(): TextAnnotation;
  addPages(value?: Page, index?: number): Page;

  getText(): string;
  setText(value: string): TextAnnotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: TextAnnotation): TextAnnotation.AsObject;
  static serializeBinaryToWriter(message: TextAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAnnotation;
  static deserializeBinaryFromReader(message: TextAnnotation, reader: jspb.BinaryReader): TextAnnotation;
}

export namespace TextAnnotation {
  export type AsObject = {
    pagesList: Array<Page.AsObject>,
    text: string,
  }

  export class DetectedLanguage extends jspb.Message {
    getLanguageCode(): string;
    setLanguageCode(value: string): DetectedLanguage;

    getConfidence(): number;
    setConfidence(value: number): DetectedLanguage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectedLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: DetectedLanguage): DetectedLanguage.AsObject;
    static serializeBinaryToWriter(message: DetectedLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectedLanguage;
    static deserializeBinaryFromReader(message: DetectedLanguage, reader: jspb.BinaryReader): DetectedLanguage;
  }

  export namespace DetectedLanguage {
    export type AsObject = {
      languageCode: string,
      confidence: number,
    }
  }


  export class DetectedBreak extends jspb.Message {
    getType(): TextAnnotation.DetectedBreak.BreakType;
    setType(value: TextAnnotation.DetectedBreak.BreakType): DetectedBreak;

    getIsPrefix(): boolean;
    setIsPrefix(value: boolean): DetectedBreak;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectedBreak.AsObject;
    static toObject(includeInstance: boolean, msg: DetectedBreak): DetectedBreak.AsObject;
    static serializeBinaryToWriter(message: DetectedBreak, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectedBreak;
    static deserializeBinaryFromReader(message: DetectedBreak, reader: jspb.BinaryReader): DetectedBreak;
  }

  export namespace DetectedBreak {
    export type AsObject = {
      type: TextAnnotation.DetectedBreak.BreakType,
      isPrefix: boolean,
    }

    export enum BreakType { 
      UNKNOWN = 0,
      SPACE = 1,
      SURE_SPACE = 2,
      EOL_SURE_SPACE = 3,
      HYPHEN = 4,
      LINE_BREAK = 5,
    }
  }


  export class TextProperty extends jspb.Message {
    getDetectedLanguagesList(): Array<TextAnnotation.DetectedLanguage>;
    setDetectedLanguagesList(value: Array<TextAnnotation.DetectedLanguage>): TextProperty;
    clearDetectedLanguagesList(): TextProperty;
    addDetectedLanguages(value?: TextAnnotation.DetectedLanguage, index?: number): TextAnnotation.DetectedLanguage;

    getDetectedBreak(): TextAnnotation.DetectedBreak | undefined;
    setDetectedBreak(value?: TextAnnotation.DetectedBreak): TextProperty;
    hasDetectedBreak(): boolean;
    clearDetectedBreak(): TextProperty;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextProperty.AsObject;
    static toObject(includeInstance: boolean, msg: TextProperty): TextProperty.AsObject;
    static serializeBinaryToWriter(message: TextProperty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextProperty;
    static deserializeBinaryFromReader(message: TextProperty, reader: jspb.BinaryReader): TextProperty;
  }

  export namespace TextProperty {
    export type AsObject = {
      detectedLanguagesList: Array<TextAnnotation.DetectedLanguage.AsObject>,
      detectedBreak?: TextAnnotation.DetectedBreak.AsObject,
    }
  }

}

export class Page extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): Page;
  hasProperty(): boolean;
  clearProperty(): Page;

  getWidth(): number;
  setWidth(value: number): Page;

  getHeight(): number;
  setHeight(value: number): Page;

  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): Page;
  clearBlocksList(): Page;
  addBlocks(value?: Block, index?: number): Block;

  getConfidence(): number;
  setConfidence(value: number): Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    width: number,
    height: number,
    blocksList: Array<Block.AsObject>,
    confidence: number,
  }
}

export class Block extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): Block;
  hasProperty(): boolean;
  clearProperty(): Block;

  getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Block;
  hasBoundingBox(): boolean;
  clearBoundingBox(): Block;

  getParagraphsList(): Array<Paragraph>;
  setParagraphsList(value: Array<Paragraph>): Block;
  clearParagraphsList(): Block;
  addParagraphs(value?: Paragraph, index?: number): Paragraph;

  getBlockType(): Block.BlockType;
  setBlockType(value: Block.BlockType): Block;

  getConfidence(): number;
  setConfidence(value: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
    paragraphsList: Array<Paragraph.AsObject>,
    blockType: Block.BlockType,
    confidence: number,
  }

  export enum BlockType { 
    UNKNOWN = 0,
    TEXT = 1,
    TABLE = 2,
    PICTURE = 3,
    RULER = 4,
    BARCODE = 5,
  }
}

export class Paragraph extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): Paragraph;
  hasProperty(): boolean;
  clearProperty(): Paragraph;

  getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Paragraph;
  hasBoundingBox(): boolean;
  clearBoundingBox(): Paragraph;

  getWordsList(): Array<Word>;
  setWordsList(value: Array<Word>): Paragraph;
  clearWordsList(): Paragraph;
  addWords(value?: Word, index?: number): Word;

  getConfidence(): number;
  setConfidence(value: number): Paragraph;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paragraph.AsObject;
  static toObject(includeInstance: boolean, msg: Paragraph): Paragraph.AsObject;
  static serializeBinaryToWriter(message: Paragraph, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paragraph;
  static deserializeBinaryFromReader(message: Paragraph, reader: jspb.BinaryReader): Paragraph;
}

export namespace Paragraph {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
    wordsList: Array<Word.AsObject>,
    confidence: number,
  }
}

export class Word extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): Word;
  hasProperty(): boolean;
  clearProperty(): Word;

  getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Word;
  hasBoundingBox(): boolean;
  clearBoundingBox(): Word;

  getSymbolsList(): Array<Symbol>;
  setSymbolsList(value: Array<Symbol>): Word;
  clearSymbolsList(): Word;
  addSymbols(value?: Symbol, index?: number): Symbol;

  getConfidence(): number;
  setConfidence(value: number): Word;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Word.AsObject;
  static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
  static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Word;
  static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
    symbolsList: Array<Symbol.AsObject>,
    confidence: number,
  }
}

export class Symbol extends jspb.Message {
  getProperty(): TextAnnotation.TextProperty | undefined;
  setProperty(value?: TextAnnotation.TextProperty): Symbol;
  hasProperty(): boolean;
  clearProperty(): Symbol;

  getBoundingBox(): ssn_type_geometry_pb.BoundingPoly | undefined;
  setBoundingBox(value?: ssn_type_geometry_pb.BoundingPoly): Symbol;
  hasBoundingBox(): boolean;
  clearBoundingBox(): Symbol;

  getText(): string;
  setText(value: string): Symbol;

  getConfidence(): number;
  setConfidence(value: number): Symbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    property?: TextAnnotation.TextProperty.AsObject,
    boundingBox?: ssn_type_geometry_pb.BoundingPoly.AsObject,
    text: string,
    confidence: number,
  }
}

