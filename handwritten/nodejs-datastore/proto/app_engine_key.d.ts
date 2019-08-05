import * as $protobuf from "protobufjs";
/** Properties of a Reference. */
export interface IReference {

    /** Reference app */
    app: string;

    /** Reference namespace */
    namespace?: (string|null);

    /** Reference path */
    path: IPath;

    /** Reference databaseId */
    databaseId?: (string|null);
}

/** Represents a Reference. */
export class Reference implements IReference {

    /**
     * Constructs a new Reference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReference);

    /** Reference app. */
    public app: string;

    /** Reference namespace. */
    public namespace: string;

    /** Reference path. */
    public path: IPath;

    /** Reference databaseId. */
    public databaseId: string;

    /**
     * Creates a new Reference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Reference instance
     */
    public static create(properties?: IReference): Reference;

    /**
     * Encodes the specified Reference message. Does not implicitly {@link Reference.verify|verify} messages.
     * @param message Reference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Reference message, length delimited. Does not implicitly {@link Reference.verify|verify} messages.
     * @param message Reference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Reference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Reference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Reference;

    /**
     * Decodes a Reference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Reference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Reference;

    /**
     * Verifies a Reference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Reference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Reference
     */
    public static fromObject(object: { [k: string]: any }): Reference;

    /**
     * Creates a plain object from a Reference message. Also converts values to other types if specified.
     * @param message Reference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Reference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Path. */
export interface IPath {

    /** Path element */
    element?: (Path.IElement[]|null);
}

/** Represents a Path. */
export class Path implements IPath {

    /**
     * Constructs a new Path.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPath);

    /** Path element. */
    public element: Path.IElement[];

    /**
     * Creates a new Path instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Path instance
     */
    public static create(properties?: IPath): Path;

    /**
     * Encodes the specified Path message. Does not implicitly {@link Path.verify|verify} messages.
     * @param message Path message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPath, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Path message, length delimited. Does not implicitly {@link Path.verify|verify} messages.
     * @param message Path message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPath, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Path message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Path
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Path;

    /**
     * Decodes a Path message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Path
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Path;

    /**
     * Verifies a Path message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Path message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Path
     */
    public static fromObject(object: { [k: string]: any }): Path;

    /**
     * Creates a plain object from a Path message. Also converts values to other types if specified.
     * @param message Path
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Path, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Path to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Path {

    /** Properties of an Element. */
    interface IElement {

        /** Element type */
        type: string;

        /** Element id */
        id?: (number|Long|null);

        /** Element name */
        name?: (string|null);
    }

    /** Represents an Element. */
    class Element implements IElement {

        /**
         * Constructs a new Element.
         * @param [properties] Properties to set
         */
        constructor(properties?: Path.IElement);

        /** Element type. */
        public type: string;

        /** Element id. */
        public id: (number|Long);

        /** Element name. */
        public name: string;

        /**
         * Creates a new Element instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Element instance
         */
        public static create(properties?: Path.IElement): Path.Element;

        /**
         * Encodes the specified Element message. Does not implicitly {@link Path.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Path.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Element message, length delimited. Does not implicitly {@link Path.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Path.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Element message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Path.Element;

        /**
         * Decodes an Element message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Path.Element;

        /**
         * Verifies an Element message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Element message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Element
         */
        public static fromObject(object: { [k: string]: any }): Path.Element;

        /**
         * Creates a plain object from an Element message. Also converts values to other types if specified.
         * @param message Element
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Path.Element, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Element to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
