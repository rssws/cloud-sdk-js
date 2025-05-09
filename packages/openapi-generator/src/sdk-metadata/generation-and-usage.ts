import { apiSpecificCodeSample } from './code-sample';
import { getMainApi, getMainOperation } from './code-sample-util';
import type { MultiLineText } from '@sap-cloud-sdk/generator-common/internal';
import type { OpenApiDocument } from '../openapi-types';

/**
 * @internal
 */
export function getApiSpecificUsage(
  openApiDocument: OpenApiDocument
): MultiLineText {
  const apisWithOperations = openApiDocument.apis.filter(
    api => api.operations?.length > 0
  );

  if (apisWithOperations.length > 0) {
    const mainApi = getMainApi(openApiDocument.serviceName, apisWithOperations);
    const operation = getMainOperation(mainApi);

    const instructions = apiSpecificCodeSample(
      mainApi.name,
      operation,
      openApiDocument.serviceOptions.directoryName
    );
    return instructions;
  }
  return '';
}
