"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestEntityOtherMultiLinkApi = void 0;
/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TestEntityOtherMultiLink_1 = require("./TestEntityOtherMultiLink");
const TestEntityOtherMultiLinkRequestBuilder_1 = require("./TestEntityOtherMultiLinkRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class TestEntityOtherMultiLinkApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = TestEntityOtherMultiLink_1.TestEntityOtherMultiLink;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new TestEntityOtherMultiLinkApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new TestEntityOtherMultiLinkRequestBuilder_1.TestEntityOtherMultiLinkRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(TestEntityOtherMultiLink_1.TestEntityOtherMultiLink, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link keyProperty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                KEY_PROPERTY: fieldBuilder.buildEdmTypeField('KeyProperty', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', TestEntityOtherMultiLink_1.TestEntityOtherMultiLink)
            };
        }
        return this._schema;
    }
}
exports.TestEntityOtherMultiLinkApi = TestEntityOtherMultiLinkApi;
//# sourceMappingURL=TestEntityOtherMultiLinkApi.js.map