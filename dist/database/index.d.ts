declare function connection(): Promise<import("typeorm").Connection | undefined>;
export default connection;
