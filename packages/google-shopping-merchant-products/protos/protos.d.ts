// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace shopping. */
    namespace shopping {

        /** Namespace merchant. */
        namespace merchant {

            /** Namespace products. */
            namespace products {

                /** Namespace v1beta. */
                namespace v1beta {

                    /** Represents a ProductInputsService */
                    class ProductInputsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ProductInputsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ProductInputsService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProductInputsService;

                        /**
                         * Calls InsertProductInput.
                         * @param request InsertProductInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ProductInput
                         */
                        public insertProductInput(request: google.shopping.merchant.products.v1beta.IInsertProductInputRequest, callback: google.shopping.merchant.products.v1beta.ProductInputsService.InsertProductInputCallback): void;

                        /**
                         * Calls InsertProductInput.
                         * @param request InsertProductInputRequest message or plain object
                         * @returns Promise
                         */
                        public insertProductInput(request: google.shopping.merchant.products.v1beta.IInsertProductInputRequest): Promise<google.shopping.merchant.products.v1beta.ProductInput>;

                        /**
                         * Calls DeleteProductInput.
                         * @param request DeleteProductInputRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteProductInput(request: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest, callback: google.shopping.merchant.products.v1beta.ProductInputsService.DeleteProductInputCallback): void;

                        /**
                         * Calls DeleteProductInput.
                         * @param request DeleteProductInputRequest message or plain object
                         * @returns Promise
                         */
                        public deleteProductInput(request: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace ProductInputsService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.products.v1beta.ProductInputsService|insertProductInput}.
                         * @param error Error, if any
                         * @param [response] ProductInput
                         */
                        type InsertProductInputCallback = (error: (Error|null), response?: google.shopping.merchant.products.v1beta.ProductInput) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.products.v1beta.ProductInputsService|deleteProductInput}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteProductInputCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a ProductInput. */
                    interface IProductInput {

                        /** ProductInput name */
                        name?: (string|null);

                        /** ProductInput product */
                        product?: (string|null);

                        /** ProductInput channel */
                        channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductInput offerId */
                        offerId?: (string|null);

                        /** ProductInput contentLanguage */
                        contentLanguage?: (string|null);

                        /** ProductInput feedLabel */
                        feedLabel?: (string|null);

                        /** ProductInput versionNumber */
                        versionNumber?: (number|Long|string|null);

                        /** ProductInput attributes */
                        attributes?: (google.shopping.merchant.products.v1beta.IAttributes|null);

                        /** ProductInput customAttributes */
                        customAttributes?: (google.shopping.type.ICustomAttribute[]|null);
                    }

                    /** Represents a ProductInput. */
                    class ProductInput implements IProductInput {

                        /**
                         * Constructs a new ProductInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductInput);

                        /** ProductInput name. */
                        public name: string;

                        /** ProductInput product. */
                        public product: string;

                        /** ProductInput channel. */
                        public channel: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum);

                        /** ProductInput offerId. */
                        public offerId: string;

                        /** ProductInput contentLanguage. */
                        public contentLanguage: string;

                        /** ProductInput feedLabel. */
                        public feedLabel: string;

                        /** ProductInput versionNumber. */
                        public versionNumber?: (number|Long|string|null);

                        /** ProductInput attributes. */
                        public attributes?: (google.shopping.merchant.products.v1beta.IAttributes|null);

                        /** ProductInput customAttributes. */
                        public customAttributes: google.shopping.type.ICustomAttribute[];

                        /** ProductInput _versionNumber. */
                        public _versionNumber?: "versionNumber";

                        /**
                         * Creates a new ProductInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductInput instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductInput): google.shopping.merchant.products.v1beta.ProductInput;

                        /**
                         * Encodes the specified ProductInput message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductInput.verify|verify} messages.
                         * @param message ProductInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductInput message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductInput.verify|verify} messages.
                         * @param message ProductInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductInput;

                        /**
                         * Decodes a ProductInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductInput;

                        /**
                         * Verifies a ProductInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductInput
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductInput;

                        /**
                         * Creates a plain object from a ProductInput message. Also converts values to other types if specified.
                         * @param message ProductInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductInput
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InsertProductInputRequest. */
                    interface IInsertProductInputRequest {

                        /** InsertProductInputRequest parent */
                        parent?: (string|null);

                        /** InsertProductInputRequest productInput */
                        productInput?: (google.shopping.merchant.products.v1beta.IProductInput|null);

                        /** InsertProductInputRequest dataSource */
                        dataSource?: (string|null);
                    }

                    /** Represents an InsertProductInputRequest. */
                    class InsertProductInputRequest implements IInsertProductInputRequest {

                        /**
                         * Constructs a new InsertProductInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IInsertProductInputRequest);

                        /** InsertProductInputRequest parent. */
                        public parent: string;

                        /** InsertProductInputRequest productInput. */
                        public productInput?: (google.shopping.merchant.products.v1beta.IProductInput|null);

                        /** InsertProductInputRequest dataSource. */
                        public dataSource: string;

                        /**
                         * Creates a new InsertProductInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InsertProductInputRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IInsertProductInputRequest): google.shopping.merchant.products.v1beta.InsertProductInputRequest;

                        /**
                         * Encodes the specified InsertProductInputRequest message. Does not implicitly {@link google.shopping.merchant.products.v1beta.InsertProductInputRequest.verify|verify} messages.
                         * @param message InsertProductInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IInsertProductInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InsertProductInputRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.InsertProductInputRequest.verify|verify} messages.
                         * @param message InsertProductInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IInsertProductInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InsertProductInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InsertProductInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.InsertProductInputRequest;

                        /**
                         * Decodes an InsertProductInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InsertProductInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.InsertProductInputRequest;

                        /**
                         * Verifies an InsertProductInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InsertProductInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InsertProductInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.InsertProductInputRequest;

                        /**
                         * Creates a plain object from an InsertProductInputRequest message. Also converts values to other types if specified.
                         * @param message InsertProductInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.InsertProductInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InsertProductInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InsertProductInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteProductInputRequest. */
                    interface IDeleteProductInputRequest {

                        /** DeleteProductInputRequest name */
                        name?: (string|null);

                        /** DeleteProductInputRequest dataSource */
                        dataSource?: (string|null);
                    }

                    /** Represents a DeleteProductInputRequest. */
                    class DeleteProductInputRequest implements IDeleteProductInputRequest {

                        /**
                         * Constructs a new DeleteProductInputRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest);

                        /** DeleteProductInputRequest name. */
                        public name: string;

                        /** DeleteProductInputRequest dataSource. */
                        public dataSource: string;

                        /**
                         * Creates a new DeleteProductInputRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteProductInputRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest): google.shopping.merchant.products.v1beta.DeleteProductInputRequest;

                        /**
                         * Encodes the specified DeleteProductInputRequest message. Does not implicitly {@link google.shopping.merchant.products.v1beta.DeleteProductInputRequest.verify|verify} messages.
                         * @param message DeleteProductInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteProductInputRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.DeleteProductInputRequest.verify|verify} messages.
                         * @param message DeleteProductInputRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IDeleteProductInputRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteProductInputRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteProductInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.DeleteProductInputRequest;

                        /**
                         * Decodes a DeleteProductInputRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteProductInputRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.DeleteProductInputRequest;

                        /**
                         * Verifies a DeleteProductInputRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteProductInputRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteProductInputRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.DeleteProductInputRequest;

                        /**
                         * Creates a plain object from a DeleteProductInputRequest message. Also converts values to other types if specified.
                         * @param message DeleteProductInputRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.DeleteProductInputRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteProductInputRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteProductInputRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** SubscriptionPeriod enum. */
                    enum SubscriptionPeriod {
                        SUBSCRIPTION_PERIOD_UNSPECIFIED = 0,
                        MONTH = 1,
                        YEAR = 2
                    }

                    /** Properties of an Attributes. */
                    interface IAttributes {

                        /** Attributes identifierExists */
                        identifierExists?: (boolean|null);

                        /** Attributes isBundle */
                        isBundle?: (boolean|null);

                        /** Attributes title */
                        title?: (string|null);

                        /** Attributes description */
                        description?: (string|null);

                        /** Attributes link */
                        link?: (string|null);

                        /** Attributes mobileLink */
                        mobileLink?: (string|null);

                        /** Attributes canonicalLink */
                        canonicalLink?: (string|null);

                        /** Attributes imageLink */
                        imageLink?: (string|null);

                        /** Attributes additionalImageLinks */
                        additionalImageLinks?: (string[]|null);

                        /** Attributes expirationDate */
                        expirationDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes disclosureDate */
                        disclosureDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes adult */
                        adult?: (boolean|null);

                        /** Attributes ageGroup */
                        ageGroup?: (string|null);

                        /** Attributes availability */
                        availability?: (string|null);

                        /** Attributes availabilityDate */
                        availabilityDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes brand */
                        brand?: (string|null);

                        /** Attributes color */
                        color?: (string|null);

                        /** Attributes condition */
                        condition?: (string|null);

                        /** Attributes gender */
                        gender?: (string|null);

                        /** Attributes googleProductCategory */
                        googleProductCategory?: (string|null);

                        /** Attributes gtin */
                        gtin?: (string[]|null);

                        /** Attributes itemGroupId */
                        itemGroupId?: (string|null);

                        /** Attributes material */
                        material?: (string|null);

                        /** Attributes mpn */
                        mpn?: (string|null);

                        /** Attributes pattern */
                        pattern?: (string|null);

                        /** Attributes price */
                        price?: (google.shopping.type.IPrice|null);

                        /** Attributes installment */
                        installment?: (google.shopping.merchant.products.v1beta.IInstallment|null);

                        /** Attributes subscriptionCost */
                        subscriptionCost?: (google.shopping.merchant.products.v1beta.ISubscriptionCost|null);

                        /** Attributes loyaltyPoints */
                        loyaltyPoints?: (google.shopping.merchant.products.v1beta.ILoyaltyPoints|null);

                        /** Attributes loyaltyPrograms */
                        loyaltyPrograms?: (google.shopping.merchant.products.v1beta.ILoyaltyProgram[]|null);

                        /** Attributes productTypes */
                        productTypes?: (string[]|null);

                        /** Attributes salePrice */
                        salePrice?: (google.shopping.type.IPrice|null);

                        /** Attributes salePriceEffectiveDate */
                        salePriceEffectiveDate?: (google.type.IInterval|null);

                        /** Attributes sellOnGoogleQuantity */
                        sellOnGoogleQuantity?: (number|Long|string|null);

                        /** Attributes productHeight */
                        productHeight?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productLength */
                        productLength?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productWidth */
                        productWidth?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productWeight */
                        productWeight?: (google.shopping.merchant.products.v1beta.IProductWeight|null);

                        /** Attributes shipping */
                        shipping?: (google.shopping.merchant.products.v1beta.IShipping[]|null);

                        /** Attributes freeShippingThreshold */
                        freeShippingThreshold?: (google.shopping.merchant.products.v1beta.IFreeShippingThreshold[]|null);

                        /** Attributes shippingWeight */
                        shippingWeight?: (google.shopping.merchant.products.v1beta.IShippingWeight|null);

                        /** Attributes shippingLength */
                        shippingLength?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes shippingWidth */
                        shippingWidth?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes shippingHeight */
                        shippingHeight?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes maxHandlingTime */
                        maxHandlingTime?: (number|Long|string|null);

                        /** Attributes minHandlingTime */
                        minHandlingTime?: (number|Long|string|null);

                        /** Attributes shippingLabel */
                        shippingLabel?: (string|null);

                        /** Attributes transitTimeLabel */
                        transitTimeLabel?: (string|null);

                        /** Attributes size */
                        size?: (string|null);

                        /** Attributes sizeSystem */
                        sizeSystem?: (string|null);

                        /** Attributes sizeTypes */
                        sizeTypes?: (string[]|null);

                        /** Attributes taxes */
                        taxes?: (google.shopping.merchant.products.v1beta.ITax[]|null);

                        /** Attributes taxCategory */
                        taxCategory?: (string|null);

                        /** Attributes energyEfficiencyClass */
                        energyEfficiencyClass?: (string|null);

                        /** Attributes minEnergyEfficiencyClass */
                        minEnergyEfficiencyClass?: (string|null);

                        /** Attributes maxEnergyEfficiencyClass */
                        maxEnergyEfficiencyClass?: (string|null);

                        /** Attributes unitPricingMeasure */
                        unitPricingMeasure?: (google.shopping.merchant.products.v1beta.IUnitPricingMeasure|null);

                        /** Attributes unitPricingBaseMeasure */
                        unitPricingBaseMeasure?: (google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure|null);

                        /** Attributes multipack */
                        multipack?: (number|Long|string|null);

                        /** Attributes adsGrouping */
                        adsGrouping?: (string|null);

                        /** Attributes adsLabels */
                        adsLabels?: (string[]|null);

                        /** Attributes adsRedirect */
                        adsRedirect?: (string|null);

                        /** Attributes costOfGoodsSold */
                        costOfGoodsSold?: (google.shopping.type.IPrice|null);

                        /** Attributes productDetails */
                        productDetails?: (google.shopping.merchant.products.v1beta.IProductDetail[]|null);

                        /** Attributes productHighlights */
                        productHighlights?: (string[]|null);

                        /** Attributes displayAdsId */
                        displayAdsId?: (string|null);

                        /** Attributes displayAdsSimilarIds */
                        displayAdsSimilarIds?: (string[]|null);

                        /** Attributes displayAdsTitle */
                        displayAdsTitle?: (string|null);

                        /** Attributes displayAdsLink */
                        displayAdsLink?: (string|null);

                        /** Attributes displayAdsValue */
                        displayAdsValue?: (number|null);

                        /** Attributes promotionIds */
                        promotionIds?: (string[]|null);

                        /** Attributes pickupMethod */
                        pickupMethod?: (string|null);

                        /** Attributes pickupSla */
                        pickupSla?: (string|null);

                        /** Attributes linkTemplate */
                        linkTemplate?: (string|null);

                        /** Attributes mobileLinkTemplate */
                        mobileLinkTemplate?: (string|null);

                        /** Attributes customLabel_0 */
                        customLabel_0?: (string|null);

                        /** Attributes customLabel_1 */
                        customLabel_1?: (string|null);

                        /** Attributes customLabel_2 */
                        customLabel_2?: (string|null);

                        /** Attributes customLabel_3 */
                        customLabel_3?: (string|null);

                        /** Attributes customLabel_4 */
                        customLabel_4?: (string|null);

                        /** Attributes includedDestinations */
                        includedDestinations?: (string[]|null);

                        /** Attributes excludedDestinations */
                        excludedDestinations?: (string[]|null);

                        /** Attributes shoppingAdsExcludedCountries */
                        shoppingAdsExcludedCountries?: (string[]|null);

                        /** Attributes externalSellerId */
                        externalSellerId?: (string|null);

                        /** Attributes pause */
                        pause?: (string|null);

                        /** Attributes lifestyleImageLinks */
                        lifestyleImageLinks?: (string[]|null);

                        /** Attributes cloudExportAdditionalProperties */
                        cloudExportAdditionalProperties?: (google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties[]|null);

                        /** Attributes virtualModelLink */
                        virtualModelLink?: (string|null);

                        /** Attributes certifications */
                        certifications?: (google.shopping.merchant.products.v1beta.ICertification[]|null);

                        /** Attributes structuredTitle */
                        structuredTitle?: (google.shopping.merchant.products.v1beta.IProductStructuredTitle|null);

                        /** Attributes structuredDescription */
                        structuredDescription?: (google.shopping.merchant.products.v1beta.IProductStructuredDescription|null);

                        /** Attributes autoPricingMinPrice */
                        autoPricingMinPrice?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents an Attributes. */
                    class Attributes implements IAttributes {

                        /**
                         * Constructs a new Attributes.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IAttributes);

                        /** Attributes identifierExists. */
                        public identifierExists?: (boolean|null);

                        /** Attributes isBundle. */
                        public isBundle?: (boolean|null);

                        /** Attributes title. */
                        public title?: (string|null);

                        /** Attributes description. */
                        public description?: (string|null);

                        /** Attributes link. */
                        public link?: (string|null);

                        /** Attributes mobileLink. */
                        public mobileLink?: (string|null);

                        /** Attributes canonicalLink. */
                        public canonicalLink?: (string|null);

                        /** Attributes imageLink. */
                        public imageLink?: (string|null);

                        /** Attributes additionalImageLinks. */
                        public additionalImageLinks: string[];

                        /** Attributes expirationDate. */
                        public expirationDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes disclosureDate. */
                        public disclosureDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes adult. */
                        public adult?: (boolean|null);

                        /** Attributes ageGroup. */
                        public ageGroup?: (string|null);

                        /** Attributes availability. */
                        public availability?: (string|null);

                        /** Attributes availabilityDate. */
                        public availabilityDate?: (google.protobuf.ITimestamp|null);

                        /** Attributes brand. */
                        public brand?: (string|null);

                        /** Attributes color. */
                        public color?: (string|null);

                        /** Attributes condition. */
                        public condition?: (string|null);

                        /** Attributes gender. */
                        public gender?: (string|null);

                        /** Attributes googleProductCategory. */
                        public googleProductCategory?: (string|null);

                        /** Attributes gtin. */
                        public gtin: string[];

                        /** Attributes itemGroupId. */
                        public itemGroupId?: (string|null);

                        /** Attributes material. */
                        public material?: (string|null);

                        /** Attributes mpn. */
                        public mpn?: (string|null);

                        /** Attributes pattern. */
                        public pattern?: (string|null);

                        /** Attributes price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** Attributes installment. */
                        public installment?: (google.shopping.merchant.products.v1beta.IInstallment|null);

                        /** Attributes subscriptionCost. */
                        public subscriptionCost?: (google.shopping.merchant.products.v1beta.ISubscriptionCost|null);

                        /** Attributes loyaltyPoints. */
                        public loyaltyPoints?: (google.shopping.merchant.products.v1beta.ILoyaltyPoints|null);

                        /** Attributes loyaltyPrograms. */
                        public loyaltyPrograms: google.shopping.merchant.products.v1beta.ILoyaltyProgram[];

                        /** Attributes productTypes. */
                        public productTypes: string[];

                        /** Attributes salePrice. */
                        public salePrice?: (google.shopping.type.IPrice|null);

                        /** Attributes salePriceEffectiveDate. */
                        public salePriceEffectiveDate?: (google.type.IInterval|null);

                        /** Attributes sellOnGoogleQuantity. */
                        public sellOnGoogleQuantity?: (number|Long|string|null);

                        /** Attributes productHeight. */
                        public productHeight?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productLength. */
                        public productLength?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productWidth. */
                        public productWidth?: (google.shopping.merchant.products.v1beta.IProductDimension|null);

                        /** Attributes productWeight. */
                        public productWeight?: (google.shopping.merchant.products.v1beta.IProductWeight|null);

                        /** Attributes shipping. */
                        public shipping: google.shopping.merchant.products.v1beta.IShipping[];

                        /** Attributes freeShippingThreshold. */
                        public freeShippingThreshold: google.shopping.merchant.products.v1beta.IFreeShippingThreshold[];

                        /** Attributes shippingWeight. */
                        public shippingWeight?: (google.shopping.merchant.products.v1beta.IShippingWeight|null);

                        /** Attributes shippingLength. */
                        public shippingLength?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes shippingWidth. */
                        public shippingWidth?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes shippingHeight. */
                        public shippingHeight?: (google.shopping.merchant.products.v1beta.IShippingDimension|null);

                        /** Attributes maxHandlingTime. */
                        public maxHandlingTime?: (number|Long|string|null);

                        /** Attributes minHandlingTime. */
                        public minHandlingTime?: (number|Long|string|null);

                        /** Attributes shippingLabel. */
                        public shippingLabel?: (string|null);

                        /** Attributes transitTimeLabel. */
                        public transitTimeLabel?: (string|null);

                        /** Attributes size. */
                        public size?: (string|null);

                        /** Attributes sizeSystem. */
                        public sizeSystem?: (string|null);

                        /** Attributes sizeTypes. */
                        public sizeTypes: string[];

                        /** Attributes taxes. */
                        public taxes: google.shopping.merchant.products.v1beta.ITax[];

                        /** Attributes taxCategory. */
                        public taxCategory?: (string|null);

                        /** Attributes energyEfficiencyClass. */
                        public energyEfficiencyClass?: (string|null);

                        /** Attributes minEnergyEfficiencyClass. */
                        public minEnergyEfficiencyClass?: (string|null);

                        /** Attributes maxEnergyEfficiencyClass. */
                        public maxEnergyEfficiencyClass?: (string|null);

                        /** Attributes unitPricingMeasure. */
                        public unitPricingMeasure?: (google.shopping.merchant.products.v1beta.IUnitPricingMeasure|null);

                        /** Attributes unitPricingBaseMeasure. */
                        public unitPricingBaseMeasure?: (google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure|null);

                        /** Attributes multipack. */
                        public multipack?: (number|Long|string|null);

                        /** Attributes adsGrouping. */
                        public adsGrouping?: (string|null);

                        /** Attributes adsLabels. */
                        public adsLabels: string[];

                        /** Attributes adsRedirect. */
                        public adsRedirect?: (string|null);

                        /** Attributes costOfGoodsSold. */
                        public costOfGoodsSold?: (google.shopping.type.IPrice|null);

                        /** Attributes productDetails. */
                        public productDetails: google.shopping.merchant.products.v1beta.IProductDetail[];

                        /** Attributes productHighlights. */
                        public productHighlights: string[];

                        /** Attributes displayAdsId. */
                        public displayAdsId?: (string|null);

                        /** Attributes displayAdsSimilarIds. */
                        public displayAdsSimilarIds: string[];

                        /** Attributes displayAdsTitle. */
                        public displayAdsTitle?: (string|null);

                        /** Attributes displayAdsLink. */
                        public displayAdsLink?: (string|null);

                        /** Attributes displayAdsValue. */
                        public displayAdsValue?: (number|null);

                        /** Attributes promotionIds. */
                        public promotionIds: string[];

                        /** Attributes pickupMethod. */
                        public pickupMethod?: (string|null);

                        /** Attributes pickupSla. */
                        public pickupSla?: (string|null);

                        /** Attributes linkTemplate. */
                        public linkTemplate?: (string|null);

                        /** Attributes mobileLinkTemplate. */
                        public mobileLinkTemplate?: (string|null);

                        /** Attributes customLabel_0. */
                        public customLabel_0?: (string|null);

                        /** Attributes customLabel_1. */
                        public customLabel_1?: (string|null);

                        /** Attributes customLabel_2. */
                        public customLabel_2?: (string|null);

                        /** Attributes customLabel_3. */
                        public customLabel_3?: (string|null);

                        /** Attributes customLabel_4. */
                        public customLabel_4?: (string|null);

                        /** Attributes includedDestinations. */
                        public includedDestinations: string[];

                        /** Attributes excludedDestinations. */
                        public excludedDestinations: string[];

                        /** Attributes shoppingAdsExcludedCountries. */
                        public shoppingAdsExcludedCountries: string[];

                        /** Attributes externalSellerId. */
                        public externalSellerId?: (string|null);

                        /** Attributes pause. */
                        public pause?: (string|null);

                        /** Attributes lifestyleImageLinks. */
                        public lifestyleImageLinks: string[];

                        /** Attributes cloudExportAdditionalProperties. */
                        public cloudExportAdditionalProperties: google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties[];

                        /** Attributes virtualModelLink. */
                        public virtualModelLink?: (string|null);

                        /** Attributes certifications. */
                        public certifications: google.shopping.merchant.products.v1beta.ICertification[];

                        /** Attributes structuredTitle. */
                        public structuredTitle?: (google.shopping.merchant.products.v1beta.IProductStructuredTitle|null);

                        /** Attributes structuredDescription. */
                        public structuredDescription?: (google.shopping.merchant.products.v1beta.IProductStructuredDescription|null);

                        /** Attributes autoPricingMinPrice. */
                        public autoPricingMinPrice?: (google.shopping.type.IPrice|null);

                        /** Attributes _identifierExists. */
                        public _identifierExists?: "identifierExists";

                        /** Attributes _isBundle. */
                        public _isBundle?: "isBundle";

                        /** Attributes _title. */
                        public _title?: "title";

                        /** Attributes _description. */
                        public _description?: "description";

                        /** Attributes _link. */
                        public _link?: "link";

                        /** Attributes _mobileLink. */
                        public _mobileLink?: "mobileLink";

                        /** Attributes _canonicalLink. */
                        public _canonicalLink?: "canonicalLink";

                        /** Attributes _imageLink. */
                        public _imageLink?: "imageLink";

                        /** Attributes _adult. */
                        public _adult?: "adult";

                        /** Attributes _ageGroup. */
                        public _ageGroup?: "ageGroup";

                        /** Attributes _availability. */
                        public _availability?: "availability";

                        /** Attributes _brand. */
                        public _brand?: "brand";

                        /** Attributes _color. */
                        public _color?: "color";

                        /** Attributes _condition. */
                        public _condition?: "condition";

                        /** Attributes _gender. */
                        public _gender?: "gender";

                        /** Attributes _googleProductCategory. */
                        public _googleProductCategory?: "googleProductCategory";

                        /** Attributes _itemGroupId. */
                        public _itemGroupId?: "itemGroupId";

                        /** Attributes _material. */
                        public _material?: "material";

                        /** Attributes _mpn. */
                        public _mpn?: "mpn";

                        /** Attributes _pattern. */
                        public _pattern?: "pattern";

                        /** Attributes _sellOnGoogleQuantity. */
                        public _sellOnGoogleQuantity?: "sellOnGoogleQuantity";

                        /** Attributes _maxHandlingTime. */
                        public _maxHandlingTime?: "maxHandlingTime";

                        /** Attributes _minHandlingTime. */
                        public _minHandlingTime?: "minHandlingTime";

                        /** Attributes _shippingLabel. */
                        public _shippingLabel?: "shippingLabel";

                        /** Attributes _transitTimeLabel. */
                        public _transitTimeLabel?: "transitTimeLabel";

                        /** Attributes _size. */
                        public _size?: "size";

                        /** Attributes _sizeSystem. */
                        public _sizeSystem?: "sizeSystem";

                        /** Attributes _taxCategory. */
                        public _taxCategory?: "taxCategory";

                        /** Attributes _energyEfficiencyClass. */
                        public _energyEfficiencyClass?: "energyEfficiencyClass";

                        /** Attributes _minEnergyEfficiencyClass. */
                        public _minEnergyEfficiencyClass?: "minEnergyEfficiencyClass";

                        /** Attributes _maxEnergyEfficiencyClass. */
                        public _maxEnergyEfficiencyClass?: "maxEnergyEfficiencyClass";

                        /** Attributes _multipack. */
                        public _multipack?: "multipack";

                        /** Attributes _adsGrouping. */
                        public _adsGrouping?: "adsGrouping";

                        /** Attributes _adsRedirect. */
                        public _adsRedirect?: "adsRedirect";

                        /** Attributes _displayAdsId. */
                        public _displayAdsId?: "displayAdsId";

                        /** Attributes _displayAdsTitle. */
                        public _displayAdsTitle?: "displayAdsTitle";

                        /** Attributes _displayAdsLink. */
                        public _displayAdsLink?: "displayAdsLink";

                        /** Attributes _displayAdsValue. */
                        public _displayAdsValue?: "displayAdsValue";

                        /** Attributes _pickupMethod. */
                        public _pickupMethod?: "pickupMethod";

                        /** Attributes _pickupSla. */
                        public _pickupSla?: "pickupSla";

                        /** Attributes _linkTemplate. */
                        public _linkTemplate?: "linkTemplate";

                        /** Attributes _mobileLinkTemplate. */
                        public _mobileLinkTemplate?: "mobileLinkTemplate";

                        /** Attributes _customLabel_0. */
                        public _customLabel_0?: "customLabel_0";

                        /** Attributes _customLabel_1. */
                        public _customLabel_1?: "customLabel_1";

                        /** Attributes _customLabel_2. */
                        public _customLabel_2?: "customLabel_2";

                        /** Attributes _customLabel_3. */
                        public _customLabel_3?: "customLabel_3";

                        /** Attributes _customLabel_4. */
                        public _customLabel_4?: "customLabel_4";

                        /** Attributes _externalSellerId. */
                        public _externalSellerId?: "externalSellerId";

                        /** Attributes _pause. */
                        public _pause?: "pause";

                        /** Attributes _virtualModelLink. */
                        public _virtualModelLink?: "virtualModelLink";

                        /** Attributes _structuredTitle. */
                        public _structuredTitle?: "structuredTitle";

                        /** Attributes _structuredDescription. */
                        public _structuredDescription?: "structuredDescription";

                        /**
                         * Creates a new Attributes instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Attributes instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IAttributes): google.shopping.merchant.products.v1beta.Attributes;

                        /**
                         * Encodes the specified Attributes message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Attributes.verify|verify} messages.
                         * @param message Attributes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Attributes message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Attributes.verify|verify} messages.
                         * @param message Attributes message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Attributes message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Attributes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Attributes;

                        /**
                         * Decodes an Attributes message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Attributes
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Attributes;

                        /**
                         * Verifies an Attributes message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Attributes message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Attributes
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Attributes;

                        /**
                         * Creates a plain object from an Attributes message. Also converts values to other types if specified.
                         * @param message Attributes
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Attributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Attributes to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Attributes
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Tax. */
                    interface ITax {

                        /** Tax rate */
                        rate?: (number|null);

                        /** Tax country */
                        country?: (string|null);

                        /** Tax region */
                        region?: (string|null);

                        /** Tax taxShip */
                        taxShip?: (boolean|null);

                        /** Tax locationId */
                        locationId?: (number|Long|string|null);

                        /** Tax postalCode */
                        postalCode?: (string|null);
                    }

                    /** Represents a Tax. */
                    class Tax implements ITax {

                        /**
                         * Constructs a new Tax.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ITax);

                        /** Tax rate. */
                        public rate: number;

                        /** Tax country. */
                        public country: string;

                        /** Tax region. */
                        public region: string;

                        /** Tax taxShip. */
                        public taxShip: boolean;

                        /** Tax locationId. */
                        public locationId: (number|Long|string);

                        /** Tax postalCode. */
                        public postalCode: string;

                        /**
                         * Creates a new Tax instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Tax instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ITax): google.shopping.merchant.products.v1beta.Tax;

                        /**
                         * Encodes the specified Tax message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Tax.verify|verify} messages.
                         * @param message Tax message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ITax, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Tax message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Tax.verify|verify} messages.
                         * @param message Tax message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ITax, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Tax message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Tax
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Tax;

                        /**
                         * Decodes a Tax message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Tax
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Tax;

                        /**
                         * Verifies a Tax message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Tax message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Tax
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Tax;

                        /**
                         * Creates a plain object from a Tax message. Also converts values to other types if specified.
                         * @param message Tax
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Tax, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Tax to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Tax
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ShippingWeight. */
                    interface IShippingWeight {

                        /** ShippingWeight value */
                        value?: (number|null);

                        /** ShippingWeight unit */
                        unit?: (string|null);
                    }

                    /** Represents a ShippingWeight. */
                    class ShippingWeight implements IShippingWeight {

                        /**
                         * Constructs a new ShippingWeight.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IShippingWeight);

                        /** ShippingWeight value. */
                        public value: number;

                        /** ShippingWeight unit. */
                        public unit: string;

                        /**
                         * Creates a new ShippingWeight instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShippingWeight instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IShippingWeight): google.shopping.merchant.products.v1beta.ShippingWeight;

                        /**
                         * Encodes the specified ShippingWeight message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ShippingWeight.verify|verify} messages.
                         * @param message ShippingWeight message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IShippingWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShippingWeight message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ShippingWeight.verify|verify} messages.
                         * @param message ShippingWeight message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IShippingWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShippingWeight message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShippingWeight
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ShippingWeight;

                        /**
                         * Decodes a ShippingWeight message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShippingWeight
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ShippingWeight;

                        /**
                         * Verifies a ShippingWeight message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShippingWeight message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShippingWeight
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ShippingWeight;

                        /**
                         * Creates a plain object from a ShippingWeight message. Also converts values to other types if specified.
                         * @param message ShippingWeight
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ShippingWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShippingWeight to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ShippingWeight
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ShippingDimension. */
                    interface IShippingDimension {

                        /** ShippingDimension value */
                        value?: (number|null);

                        /** ShippingDimension unit */
                        unit?: (string|null);
                    }

                    /** Represents a ShippingDimension. */
                    class ShippingDimension implements IShippingDimension {

                        /**
                         * Constructs a new ShippingDimension.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IShippingDimension);

                        /** ShippingDimension value. */
                        public value: number;

                        /** ShippingDimension unit. */
                        public unit: string;

                        /**
                         * Creates a new ShippingDimension instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ShippingDimension instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IShippingDimension): google.shopping.merchant.products.v1beta.ShippingDimension;

                        /**
                         * Encodes the specified ShippingDimension message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ShippingDimension.verify|verify} messages.
                         * @param message ShippingDimension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IShippingDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ShippingDimension message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ShippingDimension.verify|verify} messages.
                         * @param message ShippingDimension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IShippingDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ShippingDimension message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ShippingDimension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ShippingDimension;

                        /**
                         * Decodes a ShippingDimension message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ShippingDimension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ShippingDimension;

                        /**
                         * Verifies a ShippingDimension message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ShippingDimension message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ShippingDimension
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ShippingDimension;

                        /**
                         * Creates a plain object from a ShippingDimension message. Also converts values to other types if specified.
                         * @param message ShippingDimension
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ShippingDimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ShippingDimension to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ShippingDimension
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UnitPricingBaseMeasure. */
                    interface IUnitPricingBaseMeasure {

                        /** UnitPricingBaseMeasure value */
                        value?: (number|Long|string|null);

                        /** UnitPricingBaseMeasure unit */
                        unit?: (string|null);
                    }

                    /** Represents an UnitPricingBaseMeasure. */
                    class UnitPricingBaseMeasure implements IUnitPricingBaseMeasure {

                        /**
                         * Constructs a new UnitPricingBaseMeasure.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure);

                        /** UnitPricingBaseMeasure value. */
                        public value: (number|Long|string);

                        /** UnitPricingBaseMeasure unit. */
                        public unit: string;

                        /**
                         * Creates a new UnitPricingBaseMeasure instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitPricingBaseMeasure instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure): google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure;

                        /**
                         * Encodes the specified UnitPricingBaseMeasure message. Does not implicitly {@link google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure.verify|verify} messages.
                         * @param message UnitPricingBaseMeasure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitPricingBaseMeasure message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure.verify|verify} messages.
                         * @param message UnitPricingBaseMeasure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IUnitPricingBaseMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitPricingBaseMeasure message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitPricingBaseMeasure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure;

                        /**
                         * Decodes an UnitPricingBaseMeasure message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitPricingBaseMeasure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure;

                        /**
                         * Verifies an UnitPricingBaseMeasure message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitPricingBaseMeasure message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitPricingBaseMeasure
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure;

                        /**
                         * Creates a plain object from an UnitPricingBaseMeasure message. Also converts values to other types if specified.
                         * @param message UnitPricingBaseMeasure
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.UnitPricingBaseMeasure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitPricingBaseMeasure to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitPricingBaseMeasure
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UnitPricingMeasure. */
                    interface IUnitPricingMeasure {

                        /** UnitPricingMeasure value */
                        value?: (number|null);

                        /** UnitPricingMeasure unit */
                        unit?: (string|null);
                    }

                    /** Represents an UnitPricingMeasure. */
                    class UnitPricingMeasure implements IUnitPricingMeasure {

                        /**
                         * Constructs a new UnitPricingMeasure.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IUnitPricingMeasure);

                        /** UnitPricingMeasure value. */
                        public value: number;

                        /** UnitPricingMeasure unit. */
                        public unit: string;

                        /**
                         * Creates a new UnitPricingMeasure instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UnitPricingMeasure instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IUnitPricingMeasure): google.shopping.merchant.products.v1beta.UnitPricingMeasure;

                        /**
                         * Encodes the specified UnitPricingMeasure message. Does not implicitly {@link google.shopping.merchant.products.v1beta.UnitPricingMeasure.verify|verify} messages.
                         * @param message UnitPricingMeasure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IUnitPricingMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UnitPricingMeasure message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.UnitPricingMeasure.verify|verify} messages.
                         * @param message UnitPricingMeasure message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IUnitPricingMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UnitPricingMeasure message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UnitPricingMeasure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.UnitPricingMeasure;

                        /**
                         * Decodes an UnitPricingMeasure message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UnitPricingMeasure
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.UnitPricingMeasure;

                        /**
                         * Verifies an UnitPricingMeasure message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UnitPricingMeasure message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UnitPricingMeasure
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.UnitPricingMeasure;

                        /**
                         * Creates a plain object from an UnitPricingMeasure message. Also converts values to other types if specified.
                         * @param message UnitPricingMeasure
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.UnitPricingMeasure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UnitPricingMeasure to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UnitPricingMeasure
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubscriptionCost. */
                    interface ISubscriptionCost {

                        /** SubscriptionCost period */
                        period?: (google.shopping.merchant.products.v1beta.SubscriptionPeriod|keyof typeof google.shopping.merchant.products.v1beta.SubscriptionPeriod|null);

                        /** SubscriptionCost periodLength */
                        periodLength?: (number|Long|string|null);

                        /** SubscriptionCost amount */
                        amount?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a SubscriptionCost. */
                    class SubscriptionCost implements ISubscriptionCost {

                        /**
                         * Constructs a new SubscriptionCost.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ISubscriptionCost);

                        /** SubscriptionCost period. */
                        public period: (google.shopping.merchant.products.v1beta.SubscriptionPeriod|keyof typeof google.shopping.merchant.products.v1beta.SubscriptionPeriod);

                        /** SubscriptionCost periodLength. */
                        public periodLength: (number|Long|string);

                        /** SubscriptionCost amount. */
                        public amount?: (google.shopping.type.IPrice|null);

                        /**
                         * Creates a new SubscriptionCost instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubscriptionCost instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ISubscriptionCost): google.shopping.merchant.products.v1beta.SubscriptionCost;

                        /**
                         * Encodes the specified SubscriptionCost message. Does not implicitly {@link google.shopping.merchant.products.v1beta.SubscriptionCost.verify|verify} messages.
                         * @param message SubscriptionCost message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ISubscriptionCost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubscriptionCost message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.SubscriptionCost.verify|verify} messages.
                         * @param message SubscriptionCost message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ISubscriptionCost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubscriptionCost message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubscriptionCost
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.SubscriptionCost;

                        /**
                         * Decodes a SubscriptionCost message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubscriptionCost
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.SubscriptionCost;

                        /**
                         * Verifies a SubscriptionCost message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubscriptionCost message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubscriptionCost
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.SubscriptionCost;

                        /**
                         * Creates a plain object from a SubscriptionCost message. Also converts values to other types if specified.
                         * @param message SubscriptionCost
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.SubscriptionCost, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubscriptionCost to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubscriptionCost
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Installment. */
                    interface IInstallment {

                        /** Installment months */
                        months?: (number|Long|string|null);

                        /** Installment amount */
                        amount?: (google.shopping.type.IPrice|null);

                        /** Installment downpayment */
                        downpayment?: (google.shopping.type.IPrice|null);

                        /** Installment creditType */
                        creditType?: (string|null);
                    }

                    /** Represents an Installment. */
                    class Installment implements IInstallment {

                        /**
                         * Constructs a new Installment.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IInstallment);

                        /** Installment months. */
                        public months: (number|Long|string);

                        /** Installment amount. */
                        public amount?: (google.shopping.type.IPrice|null);

                        /** Installment downpayment. */
                        public downpayment?: (google.shopping.type.IPrice|null);

                        /** Installment creditType. */
                        public creditType?: (string|null);

                        /** Installment _downpayment. */
                        public _downpayment?: "downpayment";

                        /** Installment _creditType. */
                        public _creditType?: "creditType";

                        /**
                         * Creates a new Installment instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Installment instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IInstallment): google.shopping.merchant.products.v1beta.Installment;

                        /**
                         * Encodes the specified Installment message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Installment.verify|verify} messages.
                         * @param message Installment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IInstallment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Installment message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Installment.verify|verify} messages.
                         * @param message Installment message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IInstallment, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Installment message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Installment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Installment;

                        /**
                         * Decodes an Installment message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Installment
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Installment;

                        /**
                         * Verifies an Installment message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Installment message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Installment
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Installment;

                        /**
                         * Creates a plain object from an Installment message. Also converts values to other types if specified.
                         * @param message Installment
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Installment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Installment to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Installment
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LoyaltyPoints. */
                    interface ILoyaltyPoints {

                        /** LoyaltyPoints name */
                        name?: (string|null);

                        /** LoyaltyPoints pointsValue */
                        pointsValue?: (number|Long|string|null);

                        /** LoyaltyPoints ratio */
                        ratio?: (number|null);
                    }

                    /** Represents a LoyaltyPoints. */
                    class LoyaltyPoints implements ILoyaltyPoints {

                        /**
                         * Constructs a new LoyaltyPoints.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ILoyaltyPoints);

                        /** LoyaltyPoints name. */
                        public name: string;

                        /** LoyaltyPoints pointsValue. */
                        public pointsValue: (number|Long|string);

                        /** LoyaltyPoints ratio. */
                        public ratio: number;

                        /**
                         * Creates a new LoyaltyPoints instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoyaltyPoints instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ILoyaltyPoints): google.shopping.merchant.products.v1beta.LoyaltyPoints;

                        /**
                         * Encodes the specified LoyaltyPoints message. Does not implicitly {@link google.shopping.merchant.products.v1beta.LoyaltyPoints.verify|verify} messages.
                         * @param message LoyaltyPoints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ILoyaltyPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoyaltyPoints message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.LoyaltyPoints.verify|verify} messages.
                         * @param message LoyaltyPoints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ILoyaltyPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoyaltyPoints message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoyaltyPoints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.LoyaltyPoints;

                        /**
                         * Decodes a LoyaltyPoints message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoyaltyPoints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.LoyaltyPoints;

                        /**
                         * Verifies a LoyaltyPoints message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoyaltyPoints message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoyaltyPoints
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.LoyaltyPoints;

                        /**
                         * Creates a plain object from a LoyaltyPoints message. Also converts values to other types if specified.
                         * @param message LoyaltyPoints
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.LoyaltyPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoyaltyPoints to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LoyaltyPoints
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LoyaltyProgram. */
                    interface ILoyaltyProgram {

                        /** LoyaltyProgram programLabel */
                        programLabel?: (string|null);

                        /** LoyaltyProgram tierLabel */
                        tierLabel?: (string|null);

                        /** LoyaltyProgram price */
                        price?: (google.shopping.type.IPrice|null);

                        /** LoyaltyProgram cashbackForFutureUse */
                        cashbackForFutureUse?: (google.shopping.type.IPrice|null);

                        /** LoyaltyProgram loyaltyPoints */
                        loyaltyPoints?: (number|Long|string|null);

                        /** LoyaltyProgram memberPriceEffectiveDate */
                        memberPriceEffectiveDate?: (google.type.IInterval|null);

                        /** LoyaltyProgram shippingLabel */
                        shippingLabel?: (string|null);
                    }

                    /** Represents a LoyaltyProgram. */
                    class LoyaltyProgram implements ILoyaltyProgram {

                        /**
                         * Constructs a new LoyaltyProgram.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ILoyaltyProgram);

                        /** LoyaltyProgram programLabel. */
                        public programLabel?: (string|null);

                        /** LoyaltyProgram tierLabel. */
                        public tierLabel?: (string|null);

                        /** LoyaltyProgram price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** LoyaltyProgram cashbackForFutureUse. */
                        public cashbackForFutureUse?: (google.shopping.type.IPrice|null);

                        /** LoyaltyProgram loyaltyPoints. */
                        public loyaltyPoints?: (number|Long|string|null);

                        /** LoyaltyProgram memberPriceEffectiveDate. */
                        public memberPriceEffectiveDate?: (google.type.IInterval|null);

                        /** LoyaltyProgram shippingLabel. */
                        public shippingLabel?: (string|null);

                        /** LoyaltyProgram _programLabel. */
                        public _programLabel?: "programLabel";

                        /** LoyaltyProgram _tierLabel. */
                        public _tierLabel?: "tierLabel";

                        /** LoyaltyProgram _price. */
                        public _price?: "price";

                        /** LoyaltyProgram _cashbackForFutureUse. */
                        public _cashbackForFutureUse?: "cashbackForFutureUse";

                        /** LoyaltyProgram _loyaltyPoints. */
                        public _loyaltyPoints?: "loyaltyPoints";

                        /** LoyaltyProgram _memberPriceEffectiveDate. */
                        public _memberPriceEffectiveDate?: "memberPriceEffectiveDate";

                        /** LoyaltyProgram _shippingLabel. */
                        public _shippingLabel?: "shippingLabel";

                        /**
                         * Creates a new LoyaltyProgram instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoyaltyProgram instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ILoyaltyProgram): google.shopping.merchant.products.v1beta.LoyaltyProgram;

                        /**
                         * Encodes the specified LoyaltyProgram message. Does not implicitly {@link google.shopping.merchant.products.v1beta.LoyaltyProgram.verify|verify} messages.
                         * @param message LoyaltyProgram message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ILoyaltyProgram, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoyaltyProgram message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.LoyaltyProgram.verify|verify} messages.
                         * @param message LoyaltyProgram message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ILoyaltyProgram, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoyaltyProgram message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoyaltyProgram
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.LoyaltyProgram;

                        /**
                         * Decodes a LoyaltyProgram message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoyaltyProgram
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.LoyaltyProgram;

                        /**
                         * Verifies a LoyaltyProgram message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoyaltyProgram message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoyaltyProgram
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.LoyaltyProgram;

                        /**
                         * Creates a plain object from a LoyaltyProgram message. Also converts values to other types if specified.
                         * @param message LoyaltyProgram
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.LoyaltyProgram, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoyaltyProgram to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LoyaltyProgram
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Shipping. */
                    interface IShipping {

                        /** Shipping price */
                        price?: (google.shopping.type.IPrice|null);

                        /** Shipping country */
                        country?: (string|null);

                        /** Shipping region */
                        region?: (string|null);

                        /** Shipping service */
                        service?: (string|null);

                        /** Shipping locationId */
                        locationId?: (number|Long|string|null);

                        /** Shipping locationGroupName */
                        locationGroupName?: (string|null);

                        /** Shipping postalCode */
                        postalCode?: (string|null);

                        /** Shipping minHandlingTime */
                        minHandlingTime?: (number|Long|string|null);

                        /** Shipping maxHandlingTime */
                        maxHandlingTime?: (number|Long|string|null);

                        /** Shipping minTransitTime */
                        minTransitTime?: (number|Long|string|null);

                        /** Shipping maxTransitTime */
                        maxTransitTime?: (number|Long|string|null);
                    }

                    /** Represents a Shipping. */
                    class Shipping implements IShipping {

                        /**
                         * Constructs a new Shipping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IShipping);

                        /** Shipping price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** Shipping country. */
                        public country: string;

                        /** Shipping region. */
                        public region: string;

                        /** Shipping service. */
                        public service: string;

                        /** Shipping locationId. */
                        public locationId: (number|Long|string);

                        /** Shipping locationGroupName. */
                        public locationGroupName: string;

                        /** Shipping postalCode. */
                        public postalCode: string;

                        /** Shipping minHandlingTime. */
                        public minHandlingTime?: (number|Long|string|null);

                        /** Shipping maxHandlingTime. */
                        public maxHandlingTime?: (number|Long|string|null);

                        /** Shipping minTransitTime. */
                        public minTransitTime?: (number|Long|string|null);

                        /** Shipping maxTransitTime. */
                        public maxTransitTime?: (number|Long|string|null);

                        /** Shipping _minHandlingTime. */
                        public _minHandlingTime?: "minHandlingTime";

                        /** Shipping _maxHandlingTime. */
                        public _maxHandlingTime?: "maxHandlingTime";

                        /** Shipping _minTransitTime. */
                        public _minTransitTime?: "minTransitTime";

                        /** Shipping _maxTransitTime. */
                        public _maxTransitTime?: "maxTransitTime";

                        /**
                         * Creates a new Shipping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Shipping instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IShipping): google.shopping.merchant.products.v1beta.Shipping;

                        /**
                         * Encodes the specified Shipping message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Shipping.verify|verify} messages.
                         * @param message Shipping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Shipping message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Shipping.verify|verify} messages.
                         * @param message Shipping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Shipping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Shipping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Shipping;

                        /**
                         * Decodes a Shipping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Shipping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Shipping;

                        /**
                         * Verifies a Shipping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Shipping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Shipping
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Shipping;

                        /**
                         * Creates a plain object from a Shipping message. Also converts values to other types if specified.
                         * @param message Shipping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Shipping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Shipping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Shipping
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FreeShippingThreshold. */
                    interface IFreeShippingThreshold {

                        /** FreeShippingThreshold country */
                        country?: (string|null);

                        /** FreeShippingThreshold priceThreshold */
                        priceThreshold?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a FreeShippingThreshold. */
                    class FreeShippingThreshold implements IFreeShippingThreshold {

                        /**
                         * Constructs a new FreeShippingThreshold.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IFreeShippingThreshold);

                        /** FreeShippingThreshold country. */
                        public country?: (string|null);

                        /** FreeShippingThreshold priceThreshold. */
                        public priceThreshold?: (google.shopping.type.IPrice|null);

                        /** FreeShippingThreshold _country. */
                        public _country?: "country";

                        /** FreeShippingThreshold _priceThreshold. */
                        public _priceThreshold?: "priceThreshold";

                        /**
                         * Creates a new FreeShippingThreshold instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FreeShippingThreshold instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IFreeShippingThreshold): google.shopping.merchant.products.v1beta.FreeShippingThreshold;

                        /**
                         * Encodes the specified FreeShippingThreshold message. Does not implicitly {@link google.shopping.merchant.products.v1beta.FreeShippingThreshold.verify|verify} messages.
                         * @param message FreeShippingThreshold message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IFreeShippingThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FreeShippingThreshold message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.FreeShippingThreshold.verify|verify} messages.
                         * @param message FreeShippingThreshold message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IFreeShippingThreshold, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FreeShippingThreshold message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FreeShippingThreshold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.FreeShippingThreshold;

                        /**
                         * Decodes a FreeShippingThreshold message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FreeShippingThreshold
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.FreeShippingThreshold;

                        /**
                         * Verifies a FreeShippingThreshold message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FreeShippingThreshold message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FreeShippingThreshold
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.FreeShippingThreshold;

                        /**
                         * Creates a plain object from a FreeShippingThreshold message. Also converts values to other types if specified.
                         * @param message FreeShippingThreshold
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.FreeShippingThreshold, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FreeShippingThreshold to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FreeShippingThreshold
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductDetail. */
                    interface IProductDetail {

                        /** ProductDetail sectionName */
                        sectionName?: (string|null);

                        /** ProductDetail attributeName */
                        attributeName?: (string|null);

                        /** ProductDetail attributeValue */
                        attributeValue?: (string|null);
                    }

                    /** Represents a ProductDetail. */
                    class ProductDetail implements IProductDetail {

                        /**
                         * Constructs a new ProductDetail.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductDetail);

                        /** ProductDetail sectionName. */
                        public sectionName: string;

                        /** ProductDetail attributeName. */
                        public attributeName: string;

                        /** ProductDetail attributeValue. */
                        public attributeValue: string;

                        /**
                         * Creates a new ProductDetail instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductDetail instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductDetail): google.shopping.merchant.products.v1beta.ProductDetail;

                        /**
                         * Encodes the specified ProductDetail message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductDetail.verify|verify} messages.
                         * @param message ProductDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductDetail message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductDetail.verify|verify} messages.
                         * @param message ProductDetail message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductDetail message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductDetail;

                        /**
                         * Decodes a ProductDetail message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductDetail
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductDetail;

                        /**
                         * Verifies a ProductDetail message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductDetail message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductDetail
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductDetail;

                        /**
                         * Creates a plain object from a ProductDetail message. Also converts values to other types if specified.
                         * @param message ProductDetail
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductDetail to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductDetail
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Certification. */
                    interface ICertification {

                        /** Certification certificationAuthority */
                        certificationAuthority?: (string|null);

                        /** Certification certificationName */
                        certificationName?: (string|null);

                        /** Certification certificationCode */
                        certificationCode?: (string|null);

                        /** Certification certificationValue */
                        certificationValue?: (string|null);
                    }

                    /** Represents a Certification. */
                    class Certification implements ICertification {

                        /**
                         * Constructs a new Certification.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ICertification);

                        /** Certification certificationAuthority. */
                        public certificationAuthority?: (string|null);

                        /** Certification certificationName. */
                        public certificationName?: (string|null);

                        /** Certification certificationCode. */
                        public certificationCode?: (string|null);

                        /** Certification certificationValue. */
                        public certificationValue?: (string|null);

                        /** Certification _certificationAuthority. */
                        public _certificationAuthority?: "certificationAuthority";

                        /** Certification _certificationName. */
                        public _certificationName?: "certificationName";

                        /** Certification _certificationCode. */
                        public _certificationCode?: "certificationCode";

                        /** Certification _certificationValue. */
                        public _certificationValue?: "certificationValue";

                        /**
                         * Creates a new Certification instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Certification instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ICertification): google.shopping.merchant.products.v1beta.Certification;

                        /**
                         * Encodes the specified Certification message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Certification.verify|verify} messages.
                         * @param message Certification message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ICertification, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Certification message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Certification.verify|verify} messages.
                         * @param message Certification message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ICertification, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Certification message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Certification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Certification;

                        /**
                         * Decodes a Certification message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Certification
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Certification;

                        /**
                         * Verifies a Certification message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Certification message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Certification
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Certification;

                        /**
                         * Creates a plain object from a Certification message. Also converts values to other types if specified.
                         * @param message Certification
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Certification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Certification to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Certification
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductStructuredTitle. */
                    interface IProductStructuredTitle {

                        /** ProductStructuredTitle digitalSourceType */
                        digitalSourceType?: (string|null);

                        /** ProductStructuredTitle content */
                        content?: (string|null);
                    }

                    /** Represents a ProductStructuredTitle. */
                    class ProductStructuredTitle implements IProductStructuredTitle {

                        /**
                         * Constructs a new ProductStructuredTitle.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductStructuredTitle);

                        /** ProductStructuredTitle digitalSourceType. */
                        public digitalSourceType?: (string|null);

                        /** ProductStructuredTitle content. */
                        public content?: (string|null);

                        /** ProductStructuredTitle _digitalSourceType. */
                        public _digitalSourceType?: "digitalSourceType";

                        /** ProductStructuredTitle _content. */
                        public _content?: "content";

                        /**
                         * Creates a new ProductStructuredTitle instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductStructuredTitle instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductStructuredTitle): google.shopping.merchant.products.v1beta.ProductStructuredTitle;

                        /**
                         * Encodes the specified ProductStructuredTitle message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStructuredTitle.verify|verify} messages.
                         * @param message ProductStructuredTitle message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductStructuredTitle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductStructuredTitle message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStructuredTitle.verify|verify} messages.
                         * @param message ProductStructuredTitle message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductStructuredTitle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductStructuredTitle message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductStructuredTitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductStructuredTitle;

                        /**
                         * Decodes a ProductStructuredTitle message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductStructuredTitle
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductStructuredTitle;

                        /**
                         * Verifies a ProductStructuredTitle message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductStructuredTitle message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductStructuredTitle
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductStructuredTitle;

                        /**
                         * Creates a plain object from a ProductStructuredTitle message. Also converts values to other types if specified.
                         * @param message ProductStructuredTitle
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductStructuredTitle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductStructuredTitle to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductStructuredTitle
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductStructuredDescription. */
                    interface IProductStructuredDescription {

                        /** ProductStructuredDescription digitalSourceType */
                        digitalSourceType?: (string|null);

                        /** ProductStructuredDescription content */
                        content?: (string|null);
                    }

                    /** Represents a ProductStructuredDescription. */
                    class ProductStructuredDescription implements IProductStructuredDescription {

                        /**
                         * Constructs a new ProductStructuredDescription.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductStructuredDescription);

                        /** ProductStructuredDescription digitalSourceType. */
                        public digitalSourceType?: (string|null);

                        /** ProductStructuredDescription content. */
                        public content?: (string|null);

                        /** ProductStructuredDescription _digitalSourceType. */
                        public _digitalSourceType?: "digitalSourceType";

                        /** ProductStructuredDescription _content. */
                        public _content?: "content";

                        /**
                         * Creates a new ProductStructuredDescription instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductStructuredDescription instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductStructuredDescription): google.shopping.merchant.products.v1beta.ProductStructuredDescription;

                        /**
                         * Encodes the specified ProductStructuredDescription message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStructuredDescription.verify|verify} messages.
                         * @param message ProductStructuredDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductStructuredDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductStructuredDescription message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStructuredDescription.verify|verify} messages.
                         * @param message ProductStructuredDescription message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductStructuredDescription, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductStructuredDescription message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductStructuredDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductStructuredDescription;

                        /**
                         * Decodes a ProductStructuredDescription message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductStructuredDescription
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductStructuredDescription;

                        /**
                         * Verifies a ProductStructuredDescription message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductStructuredDescription message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductStructuredDescription
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductStructuredDescription;

                        /**
                         * Creates a plain object from a ProductStructuredDescription message. Also converts values to other types if specified.
                         * @param message ProductStructuredDescription
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductStructuredDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductStructuredDescription to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductStructuredDescription
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductDimension. */
                    interface IProductDimension {

                        /** ProductDimension value */
                        value?: (number|null);

                        /** ProductDimension unit */
                        unit?: (string|null);
                    }

                    /** Represents a ProductDimension. */
                    class ProductDimension implements IProductDimension {

                        /**
                         * Constructs a new ProductDimension.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductDimension);

                        /** ProductDimension value. */
                        public value: number;

                        /** ProductDimension unit. */
                        public unit: string;

                        /**
                         * Creates a new ProductDimension instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductDimension instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductDimension): google.shopping.merchant.products.v1beta.ProductDimension;

                        /**
                         * Encodes the specified ProductDimension message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductDimension.verify|verify} messages.
                         * @param message ProductDimension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductDimension message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductDimension.verify|verify} messages.
                         * @param message ProductDimension message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductDimension message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductDimension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductDimension;

                        /**
                         * Decodes a ProductDimension message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductDimension
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductDimension;

                        /**
                         * Verifies a ProductDimension message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductDimension message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductDimension
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductDimension;

                        /**
                         * Creates a plain object from a ProductDimension message. Also converts values to other types if specified.
                         * @param message ProductDimension
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductDimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductDimension to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductDimension
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductWeight. */
                    interface IProductWeight {

                        /** ProductWeight value */
                        value?: (number|null);

                        /** ProductWeight unit */
                        unit?: (string|null);
                    }

                    /** Represents a ProductWeight. */
                    class ProductWeight implements IProductWeight {

                        /**
                         * Constructs a new ProductWeight.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductWeight);

                        /** ProductWeight value. */
                        public value: number;

                        /** ProductWeight unit. */
                        public unit: string;

                        /**
                         * Creates a new ProductWeight instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductWeight instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductWeight): google.shopping.merchant.products.v1beta.ProductWeight;

                        /**
                         * Encodes the specified ProductWeight message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductWeight.verify|verify} messages.
                         * @param message ProductWeight message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductWeight message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductWeight.verify|verify} messages.
                         * @param message ProductWeight message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductWeight message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductWeight
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductWeight;

                        /**
                         * Decodes a ProductWeight message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductWeight
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductWeight;

                        /**
                         * Verifies a ProductWeight message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductWeight message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductWeight
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductWeight;

                        /**
                         * Creates a plain object from a ProductWeight message. Also converts values to other types if specified.
                         * @param message ProductWeight
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductWeight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductWeight to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductWeight
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductStatus. */
                    interface IProductStatus {

                        /** ProductStatus destinationStatuses */
                        destinationStatuses?: (google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus[]|null);

                        /** ProductStatus itemLevelIssues */
                        itemLevelIssues?: (google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue[]|null);

                        /** ProductStatus creationDate */
                        creationDate?: (google.protobuf.ITimestamp|null);

                        /** ProductStatus lastUpdateDate */
                        lastUpdateDate?: (google.protobuf.ITimestamp|null);

                        /** ProductStatus googleExpirationDate */
                        googleExpirationDate?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a ProductStatus. */
                    class ProductStatus implements IProductStatus {

                        /**
                         * Constructs a new ProductStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProductStatus);

                        /** ProductStatus destinationStatuses. */
                        public destinationStatuses: google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus[];

                        /** ProductStatus itemLevelIssues. */
                        public itemLevelIssues: google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue[];

                        /** ProductStatus creationDate. */
                        public creationDate?: (google.protobuf.ITimestamp|null);

                        /** ProductStatus lastUpdateDate. */
                        public lastUpdateDate?: (google.protobuf.ITimestamp|null);

                        /** ProductStatus googleExpirationDate. */
                        public googleExpirationDate?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new ProductStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductStatus instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProductStatus): google.shopping.merchant.products.v1beta.ProductStatus;

                        /**
                         * Encodes the specified ProductStatus message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.verify|verify} messages.
                         * @param message ProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductStatus message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.verify|verify} messages.
                         * @param message ProductStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProductStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductStatus;

                        /**
                         * Decodes a ProductStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductStatus;

                        /**
                         * Verifies a ProductStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductStatus
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductStatus;

                        /**
                         * Creates a plain object from a ProductStatus message. Also converts values to other types if specified.
                         * @param message ProductStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ProductStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ProductStatus {

                        /** Properties of a DestinationStatus. */
                        interface IDestinationStatus {

                            /** DestinationStatus reportingContext */
                            reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                            /** DestinationStatus approvedCountries */
                            approvedCountries?: (string[]|null);

                            /** DestinationStatus pendingCountries */
                            pendingCountries?: (string[]|null);

                            /** DestinationStatus disapprovedCountries */
                            disapprovedCountries?: (string[]|null);
                        }

                        /** Represents a DestinationStatus. */
                        class DestinationStatus implements IDestinationStatus {

                            /**
                             * Constructs a new DestinationStatus.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus);

                            /** DestinationStatus reportingContext. */
                            public reportingContext: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum);

                            /** DestinationStatus approvedCountries. */
                            public approvedCountries: string[];

                            /** DestinationStatus pendingCountries. */
                            public pendingCountries: string[];

                            /** DestinationStatus disapprovedCountries. */
                            public disapprovedCountries: string[];

                            /**
                             * Creates a new DestinationStatus instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DestinationStatus instance
                             */
                            public static create(properties?: google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus): google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus;

                            /**
                             * Encodes the specified DestinationStatus message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus.verify|verify} messages.
                             * @param message DestinationStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DestinationStatus message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus.verify|verify} messages.
                             * @param message DestinationStatus message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ProductStatus.IDestinationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DestinationStatus message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DestinationStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus;

                            /**
                             * Decodes a DestinationStatus message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DestinationStatus
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus;

                            /**
                             * Verifies a DestinationStatus message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DestinationStatus message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DestinationStatus
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus;

                            /**
                             * Creates a plain object from a DestinationStatus message. Also converts values to other types if specified.
                             * @param message DestinationStatus
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.products.v1beta.ProductStatus.DestinationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DestinationStatus to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for DestinationStatus
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an ItemLevelIssue. */
                        interface IItemLevelIssue {

                            /** ItemLevelIssue code */
                            code?: (string|null);

                            /** ItemLevelIssue severity */
                            severity?: (google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.Severity|null);

                            /** ItemLevelIssue resolution */
                            resolution?: (string|null);

                            /** ItemLevelIssue attribute */
                            attribute?: (string|null);

                            /** ItemLevelIssue reportingContext */
                            reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                            /** ItemLevelIssue description */
                            description?: (string|null);

                            /** ItemLevelIssue detail */
                            detail?: (string|null);

                            /** ItemLevelIssue documentation */
                            documentation?: (string|null);

                            /** ItemLevelIssue applicableCountries */
                            applicableCountries?: (string[]|null);
                        }

                        /** Represents an ItemLevelIssue. */
                        class ItemLevelIssue implements IItemLevelIssue {

                            /**
                             * Constructs a new ItemLevelIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue);

                            /** ItemLevelIssue code. */
                            public code: string;

                            /** ItemLevelIssue severity. */
                            public severity: (google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.Severity|keyof typeof google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.Severity);

                            /** ItemLevelIssue resolution. */
                            public resolution: string;

                            /** ItemLevelIssue attribute. */
                            public attribute: string;

                            /** ItemLevelIssue reportingContext. */
                            public reportingContext: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum);

                            /** ItemLevelIssue description. */
                            public description: string;

                            /** ItemLevelIssue detail. */
                            public detail: string;

                            /** ItemLevelIssue documentation. */
                            public documentation: string;

                            /** ItemLevelIssue applicableCountries. */
                            public applicableCountries: string[];

                            /**
                             * Creates a new ItemLevelIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemLevelIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue): google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue;

                            /**
                             * Encodes the specified ItemLevelIssue message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemLevelIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue.verify|verify} messages.
                             * @param message ItemLevelIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ProductStatus.IItemLevelIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue;

                            /**
                             * Decodes an ItemLevelIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemLevelIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue;

                            /**
                             * Verifies an ItemLevelIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemLevelIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemLevelIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue;

                            /**
                             * Creates a plain object from an ItemLevelIssue message. Also converts values to other types if specified.
                             * @param message ItemLevelIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.products.v1beta.ProductStatus.ItemLevelIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemLevelIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemLevelIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemLevelIssue {

                            /** Severity enum. */
                            enum Severity {
                                SEVERITY_UNSPECIFIED = 0,
                                NOT_IMPACTED = 1,
                                DEMOTED = 2,
                                DISAPPROVED = 3
                            }
                        }
                    }

                    /** Properties of a CloudExportAdditionalProperties. */
                    interface ICloudExportAdditionalProperties {

                        /** CloudExportAdditionalProperties propertyName */
                        propertyName?: (string|null);

                        /** CloudExportAdditionalProperties textValue */
                        textValue?: (string[]|null);

                        /** CloudExportAdditionalProperties boolValue */
                        boolValue?: (boolean|null);

                        /** CloudExportAdditionalProperties intValue */
                        intValue?: ((number|Long|string)[]|null);

                        /** CloudExportAdditionalProperties floatValue */
                        floatValue?: (number[]|null);

                        /** CloudExportAdditionalProperties minValue */
                        minValue?: (number|null);

                        /** CloudExportAdditionalProperties maxValue */
                        maxValue?: (number|null);

                        /** CloudExportAdditionalProperties unitCode */
                        unitCode?: (string|null);
                    }

                    /** Represents a CloudExportAdditionalProperties. */
                    class CloudExportAdditionalProperties implements ICloudExportAdditionalProperties {

                        /**
                         * Constructs a new CloudExportAdditionalProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties);

                        /** CloudExportAdditionalProperties propertyName. */
                        public propertyName?: (string|null);

                        /** CloudExportAdditionalProperties textValue. */
                        public textValue: string[];

                        /** CloudExportAdditionalProperties boolValue. */
                        public boolValue?: (boolean|null);

                        /** CloudExportAdditionalProperties intValue. */
                        public intValue: (number|Long|string)[];

                        /** CloudExportAdditionalProperties floatValue. */
                        public floatValue: number[];

                        /** CloudExportAdditionalProperties minValue. */
                        public minValue?: (number|null);

                        /** CloudExportAdditionalProperties maxValue. */
                        public maxValue?: (number|null);

                        /** CloudExportAdditionalProperties unitCode. */
                        public unitCode?: (string|null);

                        /** CloudExportAdditionalProperties _propertyName. */
                        public _propertyName?: "propertyName";

                        /** CloudExportAdditionalProperties _boolValue. */
                        public _boolValue?: "boolValue";

                        /** CloudExportAdditionalProperties _minValue. */
                        public _minValue?: "minValue";

                        /** CloudExportAdditionalProperties _maxValue. */
                        public _maxValue?: "maxValue";

                        /** CloudExportAdditionalProperties _unitCode. */
                        public _unitCode?: "unitCode";

                        /**
                         * Creates a new CloudExportAdditionalProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CloudExportAdditionalProperties instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties): google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties;

                        /**
                         * Encodes the specified CloudExportAdditionalProperties message. Does not implicitly {@link google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties.verify|verify} messages.
                         * @param message CloudExportAdditionalProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CloudExportAdditionalProperties message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties.verify|verify} messages.
                         * @param message CloudExportAdditionalProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.ICloudExportAdditionalProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CloudExportAdditionalProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CloudExportAdditionalProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties;

                        /**
                         * Decodes a CloudExportAdditionalProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CloudExportAdditionalProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties;

                        /**
                         * Verifies a CloudExportAdditionalProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CloudExportAdditionalProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CloudExportAdditionalProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties;

                        /**
                         * Creates a plain object from a CloudExportAdditionalProperties message. Also converts values to other types if specified.
                         * @param message CloudExportAdditionalProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.CloudExportAdditionalProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CloudExportAdditionalProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CloudExportAdditionalProperties
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Represents a ProductsService */
                    class ProductsService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ProductsService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ProductsService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProductsService;

                        /**
                         * Calls GetProduct.
                         * @param request GetProductRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Product
                         */
                        public getProduct(request: google.shopping.merchant.products.v1beta.IGetProductRequest, callback: google.shopping.merchant.products.v1beta.ProductsService.GetProductCallback): void;

                        /**
                         * Calls GetProduct.
                         * @param request GetProductRequest message or plain object
                         * @returns Promise
                         */
                        public getProduct(request: google.shopping.merchant.products.v1beta.IGetProductRequest): Promise<google.shopping.merchant.products.v1beta.Product>;

                        /**
                         * Calls ListProducts.
                         * @param request ListProductsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListProductsResponse
                         */
                        public listProducts(request: google.shopping.merchant.products.v1beta.IListProductsRequest, callback: google.shopping.merchant.products.v1beta.ProductsService.ListProductsCallback): void;

                        /**
                         * Calls ListProducts.
                         * @param request ListProductsRequest message or plain object
                         * @returns Promise
                         */
                        public listProducts(request: google.shopping.merchant.products.v1beta.IListProductsRequest): Promise<google.shopping.merchant.products.v1beta.ListProductsResponse>;
                    }

                    namespace ProductsService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.products.v1beta.ProductsService|getProduct}.
                         * @param error Error, if any
                         * @param [response] Product
                         */
                        type GetProductCallback = (error: (Error|null), response?: google.shopping.merchant.products.v1beta.Product) => void;

                        /**
                         * Callback as used by {@link google.shopping.merchant.products.v1beta.ProductsService|listProducts}.
                         * @param error Error, if any
                         * @param [response] ListProductsResponse
                         */
                        type ListProductsCallback = (error: (Error|null), response?: google.shopping.merchant.products.v1beta.ListProductsResponse) => void;
                    }

                    /** Properties of a Product. */
                    interface IProduct {

                        /** Product name */
                        name?: (string|null);

                        /** Product channel */
                        channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** Product offerId */
                        offerId?: (string|null);

                        /** Product contentLanguage */
                        contentLanguage?: (string|null);

                        /** Product feedLabel */
                        feedLabel?: (string|null);

                        /** Product dataSource */
                        dataSource?: (string|null);

                        /** Product versionNumber */
                        versionNumber?: (number|Long|string|null);

                        /** Product attributes */
                        attributes?: (google.shopping.merchant.products.v1beta.IAttributes|null);

                        /** Product customAttributes */
                        customAttributes?: (google.shopping.type.ICustomAttribute[]|null);

                        /** Product productStatus */
                        productStatus?: (google.shopping.merchant.products.v1beta.IProductStatus|null);
                    }

                    /** Represents a Product. */
                    class Product implements IProduct {

                        /**
                         * Constructs a new Product.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IProduct);

                        /** Product name. */
                        public name: string;

                        /** Product channel. */
                        public channel: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum);

                        /** Product offerId. */
                        public offerId: string;

                        /** Product contentLanguage. */
                        public contentLanguage: string;

                        /** Product feedLabel. */
                        public feedLabel: string;

                        /** Product dataSource. */
                        public dataSource: string;

                        /** Product versionNumber. */
                        public versionNumber?: (number|Long|string|null);

                        /** Product attributes. */
                        public attributes?: (google.shopping.merchant.products.v1beta.IAttributes|null);

                        /** Product customAttributes. */
                        public customAttributes: google.shopping.type.ICustomAttribute[];

                        /** Product productStatus. */
                        public productStatus?: (google.shopping.merchant.products.v1beta.IProductStatus|null);

                        /** Product _versionNumber. */
                        public _versionNumber?: "versionNumber";

                        /**
                         * Creates a new Product instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Product instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IProduct): google.shopping.merchant.products.v1beta.Product;

                        /**
                         * Encodes the specified Product message. Does not implicitly {@link google.shopping.merchant.products.v1beta.Product.verify|verify} messages.
                         * @param message Product message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Product message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.Product.verify|verify} messages.
                         * @param message Product message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Product message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Product
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.Product;

                        /**
                         * Decodes a Product message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Product
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.Product;

                        /**
                         * Verifies a Product message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Product message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Product
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.Product;

                        /**
                         * Creates a plain object from a Product message. Also converts values to other types if specified.
                         * @param message Product
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Product to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Product
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetProductRequest. */
                    interface IGetProductRequest {

                        /** GetProductRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetProductRequest. */
                    class GetProductRequest implements IGetProductRequest {

                        /**
                         * Constructs a new GetProductRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IGetProductRequest);

                        /** GetProductRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetProductRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetProductRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IGetProductRequest): google.shopping.merchant.products.v1beta.GetProductRequest;

                        /**
                         * Encodes the specified GetProductRequest message. Does not implicitly {@link google.shopping.merchant.products.v1beta.GetProductRequest.verify|verify} messages.
                         * @param message GetProductRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IGetProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetProductRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.GetProductRequest.verify|verify} messages.
                         * @param message GetProductRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IGetProductRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetProductRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetProductRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.GetProductRequest;

                        /**
                         * Decodes a GetProductRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetProductRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.GetProductRequest;

                        /**
                         * Verifies a GetProductRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetProductRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetProductRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.GetProductRequest;

                        /**
                         * Creates a plain object from a GetProductRequest message. Also converts values to other types if specified.
                         * @param message GetProductRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.GetProductRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetProductRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetProductRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListProductsRequest. */
                    interface IListProductsRequest {

                        /** ListProductsRequest parent */
                        parent?: (string|null);

                        /** ListProductsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListProductsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListProductsRequest. */
                    class ListProductsRequest implements IListProductsRequest {

                        /**
                         * Constructs a new ListProductsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IListProductsRequest);

                        /** ListProductsRequest parent. */
                        public parent: string;

                        /** ListProductsRequest pageSize. */
                        public pageSize: number;

                        /** ListProductsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListProductsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListProductsRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IListProductsRequest): google.shopping.merchant.products.v1beta.ListProductsRequest;

                        /**
                         * Encodes the specified ListProductsRequest message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ListProductsRequest.verify|verify} messages.
                         * @param message ListProductsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListProductsRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ListProductsRequest.verify|verify} messages.
                         * @param message ListProductsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IListProductsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListProductsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListProductsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ListProductsRequest;

                        /**
                         * Decodes a ListProductsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListProductsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ListProductsRequest;

                        /**
                         * Verifies a ListProductsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListProductsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListProductsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ListProductsRequest;

                        /**
                         * Creates a plain object from a ListProductsRequest message. Also converts values to other types if specified.
                         * @param message ListProductsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ListProductsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListProductsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListProductsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListProductsResponse. */
                    interface IListProductsResponse {

                        /** ListProductsResponse products */
                        products?: (google.shopping.merchant.products.v1beta.IProduct[]|null);

                        /** ListProductsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListProductsResponse. */
                    class ListProductsResponse implements IListProductsResponse {

                        /**
                         * Constructs a new ListProductsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.products.v1beta.IListProductsResponse);

                        /** ListProductsResponse products. */
                        public products: google.shopping.merchant.products.v1beta.IProduct[];

                        /** ListProductsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListProductsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListProductsResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.products.v1beta.IListProductsResponse): google.shopping.merchant.products.v1beta.ListProductsResponse;

                        /**
                         * Encodes the specified ListProductsResponse message. Does not implicitly {@link google.shopping.merchant.products.v1beta.ListProductsResponse.verify|verify} messages.
                         * @param message ListProductsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.products.v1beta.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListProductsResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.products.v1beta.ListProductsResponse.verify|verify} messages.
                         * @param message ListProductsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.products.v1beta.IListProductsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListProductsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListProductsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.products.v1beta.ListProductsResponse;

                        /**
                         * Decodes a ListProductsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListProductsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.products.v1beta.ListProductsResponse;

                        /**
                         * Verifies a ListProductsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListProductsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListProductsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.products.v1beta.ListProductsResponse;

                        /**
                         * Creates a plain object from a ListProductsResponse message. Also converts values to other types if specified.
                         * @param message ListProductsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.products.v1beta.ListProductsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListProductsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListProductsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Namespace type. */
        namespace type {

            /** Properties of a Weight. */
            interface IWeight {

                /** Weight amountMicros */
                amountMicros?: (number|Long|string|null);

                /** Weight unit */
                unit?: (google.shopping.type.Weight.WeightUnit|keyof typeof google.shopping.type.Weight.WeightUnit|null);
            }

            /** Represents a Weight. */
            class Weight implements IWeight {

                /**
                 * Constructs a new Weight.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IWeight);

                /** Weight amountMicros. */
                public amountMicros?: (number|Long|string|null);

                /** Weight unit. */
                public unit: (google.shopping.type.Weight.WeightUnit|keyof typeof google.shopping.type.Weight.WeightUnit);

                /** Weight _amountMicros. */
                public _amountMicros?: "amountMicros";

                /**
                 * Creates a new Weight instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Weight instance
                 */
                public static create(properties?: google.shopping.type.IWeight): google.shopping.type.Weight;

                /**
                 * Encodes the specified Weight message. Does not implicitly {@link google.shopping.type.Weight.verify|verify} messages.
                 * @param message Weight message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Weight message, length delimited. Does not implicitly {@link google.shopping.type.Weight.verify|verify} messages.
                 * @param message Weight message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IWeight, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Weight message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Weight
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Weight;

                /**
                 * Decodes a Weight message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Weight
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Weight;

                /**
                 * Verifies a Weight message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Weight message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Weight
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Weight;

                /**
                 * Creates a plain object from a Weight message. Also converts values to other types if specified.
                 * @param message Weight
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Weight, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Weight to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Weight
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Weight {

                /** WeightUnit enum. */
                enum WeightUnit {
                    WEIGHT_UNIT_UNSPECIFIED = 0,
                    POUND = 1,
                    KILOGRAM = 2
                }
            }

            /** Properties of a Price. */
            interface IPrice {

                /** Price amountMicros */
                amountMicros?: (number|Long|string|null);

                /** Price currencyCode */
                currencyCode?: (string|null);
            }

            /** Represents a Price. */
            class Price implements IPrice {

                /**
                 * Constructs a new Price.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IPrice);

                /** Price amountMicros. */
                public amountMicros?: (number|Long|string|null);

                /** Price currencyCode. */
                public currencyCode?: (string|null);

                /** Price _amountMicros. */
                public _amountMicros?: "amountMicros";

                /** Price _currencyCode. */
                public _currencyCode?: "currencyCode";

                /**
                 * Creates a new Price instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Price instance
                 */
                public static create(properties?: google.shopping.type.IPrice): google.shopping.type.Price;

                /**
                 * Encodes the specified Price message. Does not implicitly {@link google.shopping.type.Price.verify|verify} messages.
                 * @param message Price message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Price message, length delimited. Does not implicitly {@link google.shopping.type.Price.verify|verify} messages.
                 * @param message Price message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Price message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Price
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Price;

                /**
                 * Decodes a Price message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Price
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Price;

                /**
                 * Verifies a Price message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Price message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Price
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Price;

                /**
                 * Creates a plain object from a Price message. Also converts values to other types if specified.
                 * @param message Price
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Price to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Price
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a CustomAttribute. */
            interface ICustomAttribute {

                /** CustomAttribute name */
                name?: (string|null);

                /** CustomAttribute value */
                value?: (string|null);

                /** CustomAttribute groupValues */
                groupValues?: (google.shopping.type.ICustomAttribute[]|null);
            }

            /** Represents a CustomAttribute. */
            class CustomAttribute implements ICustomAttribute {

                /**
                 * Constructs a new CustomAttribute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.ICustomAttribute);

                /** CustomAttribute name. */
                public name?: (string|null);

                /** CustomAttribute value. */
                public value?: (string|null);

                /** CustomAttribute groupValues. */
                public groupValues: google.shopping.type.ICustomAttribute[];

                /** CustomAttribute _name. */
                public _name?: "name";

                /** CustomAttribute _value. */
                public _value?: "value";

                /**
                 * Creates a new CustomAttribute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CustomAttribute instance
                 */
                public static create(properties?: google.shopping.type.ICustomAttribute): google.shopping.type.CustomAttribute;

                /**
                 * Encodes the specified CustomAttribute message. Does not implicitly {@link google.shopping.type.CustomAttribute.verify|verify} messages.
                 * @param message CustomAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CustomAttribute message, length delimited. Does not implicitly {@link google.shopping.type.CustomAttribute.verify|verify} messages.
                 * @param message CustomAttribute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.ICustomAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CustomAttribute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CustomAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.CustomAttribute;

                /**
                 * Decodes a CustomAttribute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CustomAttribute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.CustomAttribute;

                /**
                 * Verifies a CustomAttribute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CustomAttribute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CustomAttribute
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.CustomAttribute;

                /**
                 * Creates a plain object from a CustomAttribute message. Also converts values to other types if specified.
                 * @param message CustomAttribute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.CustomAttribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CustomAttribute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CustomAttribute
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Destination. */
            interface IDestination {
            }

            /** Represents a Destination. */
            class Destination implements IDestination {

                /**
                 * Constructs a new Destination.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IDestination);

                /**
                 * Creates a new Destination instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Destination instance
                 */
                public static create(properties?: google.shopping.type.IDestination): google.shopping.type.Destination;

                /**
                 * Encodes the specified Destination message. Does not implicitly {@link google.shopping.type.Destination.verify|verify} messages.
                 * @param message Destination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Destination message, length delimited. Does not implicitly {@link google.shopping.type.Destination.verify|verify} messages.
                 * @param message Destination message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Destination message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Destination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Destination;

                /**
                 * Decodes a Destination message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Destination
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Destination;

                /**
                 * Verifies a Destination message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Destination message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Destination
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Destination;

                /**
                 * Creates a plain object from a Destination message. Also converts values to other types if specified.
                 * @param message Destination
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Destination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Destination to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Destination
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Destination {

                /** DestinationEnum enum. */
                enum DestinationEnum {
                    DESTINATION_ENUM_UNSPECIFIED = 0,
                    SHOPPING_ADS = 1,
                    DISPLAY_ADS = 2,
                    LOCAL_INVENTORY_ADS = 3,
                    FREE_LISTINGS = 4,
                    FREE_LOCAL_LISTINGS = 5,
                    YOUTUBE_SHOPPING = 6
                }
            }

            /** Properties of a ReportingContext. */
            interface IReportingContext {
            }

            /** Represents a ReportingContext. */
            class ReportingContext implements IReportingContext {

                /**
                 * Constructs a new ReportingContext.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IReportingContext);

                /**
                 * Creates a new ReportingContext instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReportingContext instance
                 */
                public static create(properties?: google.shopping.type.IReportingContext): google.shopping.type.ReportingContext;

                /**
                 * Encodes the specified ReportingContext message. Does not implicitly {@link google.shopping.type.ReportingContext.verify|verify} messages.
                 * @param message ReportingContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReportingContext message, length delimited. Does not implicitly {@link google.shopping.type.ReportingContext.verify|verify} messages.
                 * @param message ReportingContext message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReportingContext message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReportingContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.ReportingContext;

                /**
                 * Decodes a ReportingContext message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReportingContext
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.ReportingContext;

                /**
                 * Verifies a ReportingContext message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReportingContext message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReportingContext
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.ReportingContext;

                /**
                 * Creates a plain object from a ReportingContext message. Also converts values to other types if specified.
                 * @param message ReportingContext
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.ReportingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReportingContext to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReportingContext
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ReportingContext {

                /** ReportingContextEnum enum. */
                enum ReportingContextEnum {
                    REPORTING_CONTEXT_ENUM_UNSPECIFIED = 0,
                    SHOPPING_ADS = 1,
                    DISCOVERY_ADS = 2,
                    DEMAND_GEN_ADS = 13,
                    DEMAND_GEN_ADS_DISCOVER_SURFACE = 14,
                    VIDEO_ADS = 3,
                    DISPLAY_ADS = 4,
                    LOCAL_INVENTORY_ADS = 5,
                    VEHICLE_INVENTORY_ADS = 6,
                    FREE_LISTINGS = 7,
                    FREE_LOCAL_LISTINGS = 8,
                    FREE_LOCAL_VEHICLE_LISTINGS = 9,
                    YOUTUBE_SHOPPING = 10,
                    CLOUD_RETAIL = 11,
                    LOCAL_CLOUD_RETAIL = 12
                }
            }

            /** Properties of a Channel. */
            interface IChannel {
            }

            /** Represents a Channel. */
            class Channel implements IChannel {

                /**
                 * Constructs a new Channel.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.shopping.type.IChannel);

                /**
                 * Creates a new Channel instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Channel instance
                 */
                public static create(properties?: google.shopping.type.IChannel): google.shopping.type.Channel;

                /**
                 * Encodes the specified Channel message. Does not implicitly {@link google.shopping.type.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.shopping.type.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Channel message, length delimited. Does not implicitly {@link google.shopping.type.Channel.verify|verify} messages.
                 * @param message Channel message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.shopping.type.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Channel message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.type.Channel;

                /**
                 * Decodes a Channel message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Channel
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.type.Channel;

                /**
                 * Verifies a Channel message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Channel message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Channel
                 */
                public static fromObject(object: { [k: string]: any }): google.shopping.type.Channel;

                /**
                 * Creates a plain object from a Channel message. Also converts values to other types if specified.
                 * @param message Channel
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.shopping.type.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Channel to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Channel
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Channel {

                /** ChannelEnum enum. */
                enum ChannelEnum {
                    CHANNEL_ENUM_UNSPECIFIED = 0,
                    ONLINE = 1,
                    LOCAL = 2
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault features */
                features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault features. */
                public features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Interval. */
        interface IInterval {

            /** Interval startTime */
            startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime */
            endTime?: (google.protobuf.ITimestamp|null);
        }

        /** Represents an Interval. */
        class Interval implements IInterval {

            /**
             * Constructs a new Interval.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IInterval);

            /** Interval startTime. */
            public startTime?: (google.protobuf.ITimestamp|null);

            /** Interval endTime. */
            public endTime?: (google.protobuf.ITimestamp|null);

            /**
             * Creates a new Interval instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Interval instance
             */
            public static create(properties?: google.type.IInterval): google.type.Interval;

            /**
             * Encodes the specified Interval message. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Interval message, length delimited. Does not implicitly {@link google.type.Interval.verify|verify} messages.
             * @param message Interval message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Interval message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Interval;

            /**
             * Decodes an Interval message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Interval
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Interval;

            /**
             * Verifies an Interval message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Interval message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Interval
             */
            public static fromObject(object: { [k: string]: any }): google.type.Interval;

            /**
             * Creates a plain object from an Interval message. Also converts values to other types if specified.
             * @param message Interval
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Interval to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Interval
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
