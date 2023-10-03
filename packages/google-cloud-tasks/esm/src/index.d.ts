import * as v2 from './v2/index.js';
import * as v2beta2 from './v2beta2/index.js';
import * as v2beta3 from './v2beta3/index.js';
declare const CloudTasksClient: typeof v2.CloudTasksClient;
type CloudTasksClient = v2.CloudTasksClient;
export { v2, v2beta2, v2beta3, CloudTasksClient };
declare const _default: {
    v2: typeof v2;
    v2beta2: typeof v2beta2;
    v2beta3: typeof v2beta3;
    CloudTasksClient: typeof v2.CloudTasksClient;
};
export default _default;
import * as protos from '../../protos/protos.js';
export { protos };
